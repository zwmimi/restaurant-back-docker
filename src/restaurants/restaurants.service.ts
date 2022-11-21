import { Injectable, NotFoundException } from '@nestjs/common';
import { Restaurant } from './restaurant.model';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { RestaurantRepository } from './restaurant.repository';

@Injectable()
export class RestaurantsService {
  constructor(private readonly restaurantRepository: RestaurantRepository) {}
  private restaurants = [];
  showAll(): Restaurant[] {
    return this.restaurants;
  }

  showById(id: string): Restaurant {
    const found = this.restaurants.find((restaurant) => restaurant.id === id);
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

  delete(id: string): void {
    this.restaurants = this.restaurants.filter(
      (restaurant) => restaurant.id !== id,
    );
  }
}
