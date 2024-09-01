import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Tarea } from './schema/tarea-crud.schema';
import { Model } from 'mongoose';
import { CreateTareaDto } from './dto/create-tarea.dto';

@Injectable()
export class TareaCrudService {
constructor(
    @InjectModel(Tarea.name)
    private readonly tareaModel: Model<Tarea>
){}
async create(CreateTareaDto: CreateTareaDto)
{
    const tarea = new this.tareaModel({
        nombre: CreateTareaDto.nombre,
        tipo: CreateTareaDto.tipo,
        descripcion: CreateTareaDto.descripcion,
      })
  
      return await tarea.save()
    }



}

