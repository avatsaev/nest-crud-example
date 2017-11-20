import { Test } from '@nestjs/testing';
import { PhotosController } from './photos.controller';
import {PhotosService} from '../photos/photos.service';
import {Photo} from '../photos/photo.entity';



class PhotosServiceMock {

    async index() {
    }

    async show(id: number) {
    }


    async update(id: number, photoData: Partial<Photo>) {
    }

    async create(p: Photo) {
    }

    async destroy(id: number) {
    }

}

describe('PhotosController', () => {
    let photosController: PhotosController;
    let photosService: PhotosService;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            controllers: [PhotosController],
            components: [
                {
                    provide: PhotosService,
                    useClass: PhotosServiceMock
                }
            ],
        }).compile();

        photosService = module.get<PhotosService>(PhotosService);
        photosController = module.get<PhotosController>(PhotosController);
    });

    describe('index', () => {
        it('should return an array of photos', async () => {
            const result = [];
            jest.spyOn(photosService, 'index').mockImplementation(() => result);

            expect(await photosController.index()).toBe(result);
        });
    });
});