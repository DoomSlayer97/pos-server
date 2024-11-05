import { HttpException, HttpStatus, Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { CreateOrderProductDto } from "src/classes/dtos/order.dto"
import { Customer } from "src/models/customer.model"
import { Order } from "src/models/order.model"
import { OrderProduct } from "src/models/orderproduct.model"
import { Product } from "src/models/product.model"
import { DataSource, In, Repository } from "typeorm"

@Injectable()
export class OrderService {

  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(OrderProduct)
    private readonly orderProductRepository: Repository<OrderProduct>,
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
    private readonly dataSource: DataSource
  ) {}

  async create(dto: CreateOrderProductDto) { 
    const queryRunner = this.dataSource.createQueryRunner();

    try {
      await queryRunner.connect();
    } catch (error) {
      throw new HttpException("internal_error", HttpStatus.INTERNAL_SERVER_ERROR);
    }
   
    await queryRunner.startTransaction();

    try {
      const order = new Order();
  
      order.amount = dto.amount;
      order.total = dto.total;
      order.status = "progress";
  
      const customer = await this.customerRepository.findOne({
        where: {
          id: dto.customerId
        }
      });
  
      if ( !customer )
        throw new HttpException("customer_not_found", HttpStatus.NOT_FOUND);
  
      order.customer = customer;
  
      const createdOrder = await queryRunner.manager.save(order);
  
      const orderProducts: OrderProduct[] = [];

      const findedProducts = await this.productRepository.findBy({
        id: In(dto.productsId.map((product) => product.id))
      });

      let amountOrder: number = 0;

      dto.productsId.forEach((dtoItem) => {
        const tempOrderProduct = new OrderProduct();

        tempOrderProduct.order = createdOrder;
        tempOrderProduct.quantity = dtoItem.quantity;
      
        const findedProduct = findedProducts.find((product) => product.id === dtoItem.id);
        
        if ( !findedProduct )
          throw new HttpException("product_not_found", HttpStatus.NOT_FOUND);

        amountOrder += (findedProduct.price * dtoItem.quantity);

        tempOrderProduct.product = findedProduct;

        orderProducts.push(tempOrderProduct);
      });

      order.amount = amountOrder;

      await queryRunner.manager.save(order);
      await queryRunner.manager.save(orderProducts);

      await queryRunner.commitTransaction();

      return true;
    } catch (error) {

      console.log(error);

      await queryRunner.rollbackTransaction();

      throw new HttpException("error_server", HttpStatus.INTERNAL_SERVER_ERROR);
      
    } finally {
      await queryRunner.release();
    }
  }
 

}