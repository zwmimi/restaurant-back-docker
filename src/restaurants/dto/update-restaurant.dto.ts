import { IsNotEmpty, IsString, IsUrl, MaxLength } from 'class-validator';

export class UpdateRestaurantDto {
  @IsString()
  @IsNotEmpty()
  id: string;

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
