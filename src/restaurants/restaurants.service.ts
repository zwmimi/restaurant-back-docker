import { Injectable, NotFoundException } from '@nestjs/common';
import { Restaurant } from './restaurant.model';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { RestaurantRepository } from './restaurant.repository';

@Injectable()
export class RestaurantsService {
  constructor(private readonly restaurantRepository: RestaurantRepository) {}
  private restaurants = [];

  async showAll(): Promise<Restaurant[]> {
    return await this.restaurantRepository.find();
  }

  async showById(id: string): Promise<Restaurant> {
    const found = await this.restaurantRepository.findOne({ id });
    if (!found) {
      throw new NotFoundException();
    }
    return found;
  }

  async create(createRestaurantDto: CreateRestaurantDto): Promise<Restaurant> {
    return await this.restaurantRepository.createRestaurant(
      createRestaurantDto,
    );
  }

  async update(updateRestaurantDto: UpdateRestaurantDto) {
    const restaurant = await this.showById(updateRestaurantDto.id);
    restaurant.name = updateRestaurantDto.name;
    restaurant.url = updateRestaurantDto.url;
    restaurant.description = updateRestaurantDto.description;
    await this.restaurantRepository.save(restaurant);
    return restaurant;
  }

  async delete(id: string): Promise<void> {
    await this.restaurantRepository.delete({ id });
  }
}
