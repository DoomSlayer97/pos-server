import { CreateProductDto, UpdateProductDto } from "@classes"
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Res } from "@nestjs/common"
import { Response } from 'express';
import { ProductService } from "./product.service"
import { HelperService } from "src/helpers/helper.service";

@Controller()
export class ProductController {

  constructor(
    private readonly productService: ProductService,
    private readonly helperService: HelperService,
  ) {}

  @Post()
  @HttpCode(201)
  async create(
    @Body() dto: CreateProductDto,
  ) {

    const storedProduct = await this.productService.create(dto); 

    return this.helperService.setResponse({
      status: true,
      data: storedProduct,
      message: 'stored_product'
    });

  }

  @Get()
  async findAll() {

    const findedProducts = await this.productService.findAll();

    return this.helperService.setResponse({
      status: true,
      data: findedProducts,
      message: 'finded_products'
    });

  }

  @Get('/:id')
  async findOne(
    @Param('id') id: number,
  ) {

    const findedProduct = await this.productService.findOne(id);

    return this.helperService.setResponse({
      status: true,
      data: findedProduct,
      message: 'finded_product'
    })

  }

  @Put('/:id')
  @HttpCode(200)
  async update(
    @Param('id') id: number,
    @Body() dto: UpdateProductDto,
  ) {

    const updatedProduct = await this.productService.update(id, dto);

    return this.helperService.setResponse({
      status: true,
      data: updatedProduct,
      message: 'updated_product'
    });

  }

  @Delete('/:id')
  async delete(
    @Param('id') id: number,
    @Res() res: Response
  ) {

    const deletedProduct = await this.productService.delete(id);
    
    if ( !deletedProduct ) return this.helperService.generateResponse(res, {
      code: 400,
      status: false,
      message: 'invalid_password'
    });

    return this.helperService.generateResponse(res, {
      code: 200,
      status: false,
      message: 'deleted_product'
    });
    
  }
 
}