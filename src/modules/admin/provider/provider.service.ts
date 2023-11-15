import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateProviderDto, UpdateProviderDto } from "@classes"
import { InjectRepository } from "@nestjs/typeorm";
import { ProductProvider } from "src/models/productprovider.model";
import { Repository } from "typeorm";

@Injectable()
export class ProviderService {

  constructor(
    @InjectRepository(ProductProvider)
    private readonly providerRepository: Repository<ProductProvider>,
  ) {}

  async create(dto: CreateProviderDto) {

    const newProvider = new ProductProvider();

    newProvider.name = dto.name;
    newProvider.number = dto.number;
    newProvider.email = dto.email;

    return this.providerRepository.save(newProvider);

  }

  async findAll() {
    
    const providers = await this.providerRepository.find({
      where: { 
        isDeleted: false 
      }
    });

    if ( providers.length <= 0 )
      throw new HttpException("providers_not_found", HttpStatus.NOT_FOUND);

    return providers;

  }

  async findOne(id: number) {
    
    const provider = await this.providerRepository.findOne({
      where: { id, isDeleted: false },
    })

    if ( !provider ) 
      throw new HttpException("provider_not_found", HttpStatus.NOT_FOUND);
    
    return provider;

  }

  async update(id: number, dto: UpdateProviderDto) {

    const findedProvider = await this.providerRepository.findOneBy({ id, isDeleted: false });

    if ( !findedProvider )
      throw new HttpException("provider_not_found", HttpStatus.NOT_FOUND);

    findedProvider.name = dto.name;
    findedProvider.number = dto.number;
    findedProvider.email = dto.email;
 
    return this.providerRepository.save(findedProvider);

  }

  async delete(id: number) {

    const findedProvider = await this.providerRepository.findOneBy({ id, isDeleted: false });

    if ( !findedProvider )
      throw new HttpException("provider_not_found", HttpStatus.NOT_FOUND);

    findedProvider.isDeleted = true;

    return this.providerRepository.save(findedProvider);

  }

}