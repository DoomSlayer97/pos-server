import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, Post, Put, Res } from "@nestjs/common";
import { CreateCategoryDto, UpdateCategoryDto } from "@classes";
import { CategoryService } from "./category.service";
import { HelperService } from "src/helpers/helper.service";

@Controller()
export class CategoryController {

  constructor(
    private readonly categoryService: CategoryService,
    private readonly helperService: HelperService,
  ) {}

  @Post()
  @HttpCode(201)
  async create(
    @Body() dto: CreateCategoryDto
  ) {

    const storedCategory = await this.categoryService.create(dto);

    return this.helperService.setResponse({
      status: true,
      data: storedCategory,
      message: 'stored_category'
    });

  }

  @Get()
  @HttpCode(200)
  async findAll() {

    const findedCategory = await this.categoryService.findAll();

    return this.helperService.setResponse({
      status: true,
      data: findedCategory,
      message: 'finded_categories'
    })

  }

  @Get('/:id')
  @HttpCode(200)
  async findOne(
    @Param('id') id: number,
  ) {

    const findedCategory = await this.categoryService.findOne(id);

    return this.helperService.setResponse({
      status: true,
      data: findedCategory,
      message: 'finded_category'
    });

  }

  @Put('/:id')
  @HttpCode(200)
  async update(
    @Param('id') id: number,
    @Body() dto: UpdateCategoryDto,
  ) {

    const updatedCategory = await this.categoryService.update(id, dto);

    return this.helperService.setResponse({
      status: true,
      data: updatedCategory,
      message: 'updated_category'
    });

  }

  @Delete('/:id')
  @HttpCode(200)
  async delete(
    @Param('id') id: number,
  ) {

    const deletedCategory = await this.categoryService.delete(id);

    return this.helperService.setResponse({
      status: false,
      message: 'deleted_category'
    });
    
  }

}