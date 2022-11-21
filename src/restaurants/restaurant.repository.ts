import { EntityRepository, Repository } from 'typeorm';
import { Restaurant } from '../entities/restaurant.entity';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';

@EntityRepository(Restaurant)
export class RestaurantRepository extends Repository<Restaurant> {
  async createRestaurant(createRestaurantDto: CreateRestaurantDto) {
    const { name, url, description } = createRestaurantDto;
    const restaurant = this.create({
      name,
      url,
      description,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    await this.save(restaurant);
    return restaurant;
  }
}
