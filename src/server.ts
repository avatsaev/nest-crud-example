import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app/app.module';
import {INestApplication} from '@nestjs/common/interfaces/nest-application.interface';
import {json} from 'body-parser';

async function bootstrap(){
    const app: INestApplication = await NestFactory.create(ApplicationModule);
    app.use(json());
    await app.listen(3000);
}

bootstrap();