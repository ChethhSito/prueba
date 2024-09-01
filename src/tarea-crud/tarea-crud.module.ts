import { Module } from '@nestjs/common';
import { TareaCrudService } from './tarea-crud.service';
import { TareaCrudController } from './tarea-crud.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Tarea, TareaSchema } from './schema/tarea-crud.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Tarea.name, schema: TareaSchema }])], 
  providers: [TareaCrudService],
  controllers: [TareaCrudController]
})
export class TareaCrudModule {}
