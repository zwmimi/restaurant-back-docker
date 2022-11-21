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
  async showAll(): Promise<Restaurant[]> {
    return await this.restaurantsService.showAll();
  }

  @Get(':id')
  async showById(@Param('id', ParseUUIDPipe) id: string): Promise<Restaurant> {
    return await this.restaurantsService.showById(id);
  }

  @Post()
  async create(
    @Body() createRestaurantDto: CreateRestaurantDto,
  ): Promise<Restaurant> {
    return await this.restaurantsService.create(createRestaurantDto);
  }

  @Delete(':id')
  async delete(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    await this.restaurantsService.delete(id);
  }
}
