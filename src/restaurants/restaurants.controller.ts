import { Controller, Get } from '@nestjs/common';

@Controller('restaurants')
export class RestaurantsController {
  @Get()
  showAll() {
    return 'show all';
  }
}
