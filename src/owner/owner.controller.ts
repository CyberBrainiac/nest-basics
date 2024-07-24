import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OwnerService } from './owner.service';
import { Prisma } from '@prisma/client';

@Controller('owner')
export class OwnerController {
  constructor(private readonly ownerService: OwnerService) {}

  @Post()
  create(@Body() data: Prisma.OwnerCreateInput) {
    return this.ownerService.createOwner(data);
  }

  @Get()
  findAll() {
    return this.ownerService.owners({ orderBy: { name: 'asc' } });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ownerService.owner({ id: +id });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: Prisma.OwnerUpdateInput) {
    return this.ownerService.updateOwner({ where: { id: +id }, data });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ownerService.deleteOwner({ id: +id });
  }
}
