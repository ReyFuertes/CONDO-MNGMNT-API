import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from '../base.service';
import { template } from './template.entity';
import { templateRepository } from './template.repository';

@Injectable()
export class templateService extends BaseService<template> {
  constructor(@InjectRepository(templateRepository) public repo: templateRepository) {
    super(repo);
  }

}
