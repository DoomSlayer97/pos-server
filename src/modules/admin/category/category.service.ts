import { CreateCategoryDto, UpdateCategoryDto } from "@classes"
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Category } from "src/models/category.model";
import { Repository } from "typeorm";

@Injectable()
export class CategoryService {

  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>
  ) {}

  async create(dto: CreateCategoryDto) {

    const newCategory = new Category();

    newCategory.name = dto.name;

    return this.categoryRepository.save(newCategory);

  }

  async findAll() {
    
    const categories = await this.categoryRepository.find({
      where: {
        isDeleted: false
      }
    });
    
    if ( categories.length <= 0 )
      throw new HttpException("categories_not_found", HttpStatus.NOT_FOUND);

    return categories;

  }

  async findOne(id: number) {
    
    const category = await this.categoryRepository.findOne({
      where: { id, isDeleted: false }
    });

    if ( !category )
      throw new HttpException("category_not_found", HttpStatus.NOT_FOUND);

    return category;

  }

  async update(id: number, dto: UpdateCategoryDto) {

    const findedCategory = await this.categoryRepository.findOneBy({ id, isDeleted: false });

    if ( !findedCategory )
      throw new HttpException("category_not_found", HttpStatus.BAD_REQUEST);
    
    findedCategory.name = dto.name;

    return this.categoryRepository.save(findedCategory);

  }

  async delete(id: number) {

    const findedCategory = await this.categoryRepository.findOneBy({ id, isDeleted: false });

    if ( !findedCategory ) 
      throw new HttpException('category_not_found', HttpStatus.BAD_REQUEST);

    findedCategory.isDeleted = true;

    return this.categoryRepository.save(findedCategory);

  }

}