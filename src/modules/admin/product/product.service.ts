import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common"
import { CreateProductDto, UpdateProductDto } from "@classes"
import { InjectRepository } from "@nestjs/typeorm"
import { Product } from "src/models/product.model"
import { Repository } from "typeorm";
import { Category } from "src/models/category.model";
import { ProductProvider } from "src/models/productprovider.model";

@Injectable()
export class ProductService {
  
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
    @InjectRepository(ProductProvider)
    private readonly providerRepository: Repository<ProductProvider>,
  ) {}

  async create(dto: CreateProductDto) {

    const newProduct = new Product();

    newProduct.name = dto.name;
    newProduct.sku = dto.sku;
    newProduct.price = dto.price;
    newProduct.stock = dto.stock;
    newProduct.status = dto.status;

    await this.productRepository.query("select products.fn_create_product($1, $2, $3, $4, $5, $6)", [
      newProduct.name,
      newProduct.price,
      newProduct.stock,
      newProduct.status,
      dto.category,
      dto.provider
    ]);

  }

  async findAll() {
    return this.productRepository.find({
      where: {
        isDeleted: false
      },
    })
  }

  async findOne(id: number) {
    return this.productRepository.findOne({
      where: { id, isDeleted: false },
      loadRelationIds: true
    });
  }

  async update(id: number, dto: UpdateProductDto) {

    const findedProduct = await this.productRepository.findOneBy({ id, isDeleted: false });

    if ( !findedProduct ) return false;

    findedProduct.name = dto.name;
    findedProduct.sku = dto.sku;
    findedProduct.price = dto.price;
    findedProduct.stock = dto.stock;
    findedProduct.status = dto.status;

    const findedCategory = await this.categoryRepository.findOneBy({ id: dto.categoryId });

    if ( !findedCategory )
      throw new HttpException("category_not_found", HttpStatus.NOT_FOUND);
    
    findedProduct.category = findedCategory;

    const findedProvider = await this.providerRepository.findOneBy({ id: dto.providerId });

    if ( !findedProvider )
      throw new HttpException("provider_not_found", HttpStatus.NOT_FOUND);
    
    findedProduct.provider = findedProvider;
    
    return this.productRepository.save(findedProduct);

  }

  async delete(id: number) {
    
    const findedProduct = await this.productRepository.findOneBy({ id, isDeleted: false });

    if ( !findedProduct ) return false;

    findedProduct.isDeleted = true;

    return this.productRepository.save(findedProduct);

  }

}