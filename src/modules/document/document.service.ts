import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/base.service';
import { Document } from './document.entity';
import { DocumentRepository } from './document.repository';

@Injectable()
export class DocumentService extends BaseService<Document> {
  constructor(@InjectRepository(DocumentRepository) public repo: DocumentRepository) {
    super(repo);
  }

}
