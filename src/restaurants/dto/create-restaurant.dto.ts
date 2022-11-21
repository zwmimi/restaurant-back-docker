import { IsNotEmpty, IsString, IsUrl, MaxLength } from 'class-validator';

export class CreateRestaurantDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  name: string;

  @IsNotEmpty()
  @IsUrl()
  url: string;

  @IsString()
  @MaxLength(80)
  description: string;
}
