import {Module} from '@nestjs/common';
import {MainController} from './controllers/main.controller';
import {PhotosModule} from './photos/photos.module';
import {PhotosController} from './controllers/photos.controller';
import {DatabaseModule} from './database/database.module';

@Module({
  controllers: [
    MainController,
    PhotosController
  ],
  modules: [
    DatabaseModule,
    PhotosModule
  ]
})
export class ApplicationModule {}