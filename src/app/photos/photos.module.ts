import { Module } from '@nestjs/common';
import { PhotosService } from './photos.service';
import {Connection} from 'typeorm';
import {Photo} from './photo.entity';

@Module({
  components: [
    {
        provide: 'PhotoRepositoryToken',
        useFactory: (connection: Connection) => connection.getRepository(Photo),
        inject: ['DbConnectionToken'],
    },
    PhotosService,
  ],
  exports: [
    PhotosService,
  ]
})
export class PhotosModule {}
