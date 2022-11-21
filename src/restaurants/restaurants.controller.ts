import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { Restaurant } from './restaurant.model';

@Controller('restaurants')
export class RestaurantsController {
  constructor(private readonly restaurantsService: RestaurantsService) {}
  @Get()
  showAll(): Restaurant[] {
    return this.restaurantsService.showAll();
  }
  @Get(':id')
  showById(@Param('id') id: string): Restaurant {
    return this.restaurantsService.showById(id);
  }

  @Post()
  create(
    @Body('id') id: string,
    @Body('name') name: string,
    @Body('url') url: string,
    @Body('description') description: string,
  ): Restaurant {
    return this.restaurantsService.create(id, name, url, description);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.restaurantsService.delete(id);
  }
}
