import { Module } from '@nestjs/common';
import { PhotoService } from './photos.service';
import {Connection} from 'typeorm';
import {Photo} from './photo.entity';

@Module({
  components: [
    {
        provide: 'PhotoRepositoryToken',
        useFactory: (connection: Connection) => connection.getRepository(Photo),
        inject: ['DbConnectionToken'],
    },
    PhotoService,
  ],
  exports: [
    PhotoService,
  ]
})
export class PhotosModule {}
