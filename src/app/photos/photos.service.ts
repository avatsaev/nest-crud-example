import { Component, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Photo } from './photo.entity';

@Component()
export class PhotoService {
  constructor(
    @Inject('PhotoRepositoryToken') private readonly photoRepository: Repository<Photo>
  ) {}

  async index() {
    try {
      return await this.photoRepository.find();
    } catch (err) {
      return {err}
    }
  }

  async show(id: number) {
    try{
      return await this.photoRepository.findOneById(id)
    } catch (err) {
      return {err};
    }
  }


  async update(id: number, photoData: Partial<Photo>) {
    try {
      await this.photoRepository.updateById(id, photoData);
      return this.photoRepository.findOneById(id);
    } catch (err) {
      return {err};
    }

  }

  async create(p: Photo) {
    try{
        return await this.photoRepository.save(p);
    } catch (err) {
      return {err};
    }

  }



  async destroy(id: number) {

    try {
      return await this.photoRepository.deleteById(id);
    } catch (err) {
      return {err};
    }


  }
}