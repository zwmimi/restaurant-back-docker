import { Injectable } from '@nestjs/common';
import { Restaurant } from './restaurant.model';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';

@Injectable()
export class RestaurantsService {
  private restaurants = [];
  showAll(): Restaurant[] {
    return this.restaurants;
  }

  showById(id: string): Restaurant {
    return this.restaurants.find((restaurant) => restaurant.id === id);
  }

  create(createRestaurantDto: CreateRestaurantDto): Restaurant {
    const restaurant: Restaurant = { ...createRestaurantDto };
    this.restaurants.push(restaurant);
    return restaurant;
  }

  delete(id: string): void {
    this.restaurants = this.restaurants.filter(
      (restaurant) => restaurant.id !== id,
    );
  }
}
