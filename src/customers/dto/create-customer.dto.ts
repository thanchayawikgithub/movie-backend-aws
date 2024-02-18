import { IsNotEmpty } from 'class-validator';

export class CreateCustomerDto {
  @IsNotEmpty()
  cusFirstname: string;

  @IsNotEmpty()
  cusLastname: string;

  @IsNotEmpty()
  cusEmail: string;

  @IsNotEmpty()
  cusPassword: string;
}
