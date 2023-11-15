import { CreateProviderDto, UpdateProviderDto } from "@classes";
import { Body, Controller, Get, HttpCode, Param, Post, Put } from "@nestjs/common";
import { ProviderService } from "./provider.service";
import { HelperService } from "src/helpers/helper.service";

@Controller()
export class ProviderController {

  constructor(
    private readonly providerService: ProviderService,
    private readonly helperService: HelperService
  ) {}

  @Post()
  @HttpCode(201)
  async create(
    @Body() dto: CreateProviderDto
  ) {

    const storedProvider = await this.providerService.create(dto);

    return this.helperService.setResponse({
      status: true,
      data: storedProvider,
      message: 'stored_provider'
    });

  }

  @Get()
  @HttpCode(200)
  async findAll() {

    const findedProviders = await this.providerService.findAll();

    return this.helperService.setResponse({
      status: true,
      data: findedProviders,
      message: 'finded_providers'
    })

  }

  @Get('/:id')
  @HttpCode(200)
  async findOne(
    @Param('id') id: number
  ) {

    const findedProvider = await this.providerService.findOne(id);

    return this.helperService.setResponse({
      status: true,
      data: findedProvider,
      message: 'finded_provider'
    });

  }

  @Put('/:id')
  @HttpCode(200)
  async update(
    @Param('id') id: number,
    @Body() dto: UpdateProviderDto,
  ) {

    const updatedProvider = await this.providerService.update(id, dto);

    return this.helperService.setResponse({
      status: true,
      data: updatedProvider,
      message: 'updated_provider'
    })

  }

}
