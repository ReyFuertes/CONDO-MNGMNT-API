import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { DocumentRepository } from './document.repository';
import { documentsController } from './document.controller';
import { DocumentService } from './document.service';

@Module({
  imports: [TypeOrmModule.forFeature([DocumentRepository])],
  controllers: [documentsController],
  providers: [DocumentService]
})
export class DocumentModule { }
