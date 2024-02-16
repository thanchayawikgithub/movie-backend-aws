import { IsNotEmpty } from 'class-validator';

export class CreateCustomerDto {
  @IsNotEmpty()
  cusFirstName: string;

  @IsNotEmpty()
  cusLastname: string;

  @IsNotEmpty()
  cusEmail: string;

  @IsNotEmpty()
  cusPassword: string;
}
