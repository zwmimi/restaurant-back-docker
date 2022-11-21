import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  ParseUUIDPipe,
} from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { Restaurant } from './restaurant.model';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';

@Controller('restaurants')
export class RestaurantsController {
  constructor(private readonly restaurantsService: RestaurantsService) {}
  @Get()
  showAll(): Restaurant[] {
    return this.restaurantsService.showAll();
  }
  @Get(':id')
  showById(@Param('id', ParseUUIDPipe) id: string): Restaurant {
    return this.restaurantsService.showById(id);
  }

  @Post()
  async create(
    @Body() createRestaurantDto: CreateRestaurantDto,
  ): Promise<Restaurant> {
    return await this.restaurantsService.create(createRestaurantDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseUUIDPipe) id: string) {
    this.restaurantsService.delete(id);
  }
}
