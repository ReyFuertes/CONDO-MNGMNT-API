import { Repository, EntityRepository, getRepository, getCustomRepository } from 'typeorm';
import { template } from './template.entity';

@EntityRepository(template)
export class templateRepository extends Repository<template> {

}