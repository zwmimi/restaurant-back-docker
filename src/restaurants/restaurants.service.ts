import { Injectable } from '@nestjs/common';

@Injectable()
export class RestaurantsService {
  showAll() {
    return 'this is service';
  }
}
