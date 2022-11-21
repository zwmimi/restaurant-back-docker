import { Injectable } from '@nestjs/common';
import { Restaurant } from './restaurant.model';

@Injectable()
export class RestaurantsService {
  private restaurants = [];
  showAll(): Restaurant[] {
    return this.restaurants;
  }

  showById(id: string): Restaurant {
    return this.restaurants.find((restaurant) => restaurant.id === id);
  }

  create(
    id: string,
    name: string,
    url: string,
    description: string,
  ): Restaurant {
    const restaurant = { id, name, url, description };
    this.restaurants.push(restaurant);
    return restaurant;
  }

  delete(id: string): void {
    this.restaurants = this.restaurants.filter(
      (restaurant) => restaurant.id !== id,
    );
  }
}
