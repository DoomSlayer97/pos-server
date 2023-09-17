import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Product } from "src/models/product.model"
import { Repository } from "typeorm";
import { CreateProductDto, UpdateProductDto } from "./dto/product.dto"
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

    const findedCategory = await this.categoryRepository.findOneBy({ id: dto.category });

    if ( findedCategory )
      throw new HttpException("category_not_found", HttpStatus.NOT_FOUND);

    newProduct.category = findedCategory;

    const findedProvider = await this.providerRepository.findOneBy({ id: dto.provider });

    if ( findedProvider )
      throw new HttpException("provider_not_found", HttpStatus.NOT_FOUND);

    newProduct.provider = findedProvider;

    return this.productRepository.save(newProduct);

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

    const findedCategory = await this.categoryRepository.findOneBy({ id: dto.category });

    if ( findedCategory )
      findedProduct.category = findedCategory;

    const findedProvider = await this.providerRepository.findOneBy({ id: dto.provider });

    if ( findedProvider )
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