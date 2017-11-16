import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {PhotoService} from '../photos/photos.service';
import {Photo} from '../photos/photo.entity';

@Controller('/photos')
export class PhotosController {
    constructor(private photos: PhotoService) {}

    @Get()
    async index() {
        return await this.photos.index();
    }


    @Get('/:id')
    async show(@Param('id') id: string) {
        return await this.photos.show(+id);
    }

    @Post()
    async create(@Body() photo: Photo){
        const createdPhoto = await this.photos.create(photo);
        return { photo: createdPhoto }
    }

    @Patch('/:id')
    async update(@Param('id') id: string, @Body() photo: Partial<Photo>) {
        return await this.photos.update(+id, photo);
    }


    @Delete('/:id')
    async destroy(@Param('id') id: string) {
        await this.photos.destroy(+id);
        return;
    }
}
