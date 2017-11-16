import {Controller, Get} from '@nestjs/common';

@Controller('/')
export class MainController {
    constructor() {}

    @Get()
    index() {

        return {
            status: 'ok'
        };
    }
}
