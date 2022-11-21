import { Injectable } from '@nestjs/common';
import { Restaurant } from './restaurant.model';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { v4 as uuid } from 'uuid';

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
    const restaurant: Restaurant = { id: uuid(), ...createRestaurantDto };
    this.restaurants.push(restaurant);
    return restaurant;
  }

  delete(id: string): void {
    this.restaurants = this.restaurants.filter(
      (restaurant) => restaurant.id !== id,
    );
  }
}
