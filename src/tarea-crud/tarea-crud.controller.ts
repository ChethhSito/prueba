import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { create } from 'domain';
import { CreateTareaDto } from './dto/create-tarea.dto';
import { TareaCrudService } from './tarea-crud.service';

@Controller('tarea-crud')
@ApiTags('Tarea')
export class TareaCrudController {
    constructor(private readonly TareaService: TareaCrudService){}

       
  @Post()
  create(@Body() createTareaDto: CreateTareaDto) {
    return this.TareaService.create(createTareaDto);
  

    }
}
