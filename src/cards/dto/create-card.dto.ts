import { IsNotEmpty } from 'class-validator';
import { CreateCustomerDto } from 'src/customers/dto/create-customer.dto';

export class CreateCardDto {
  @IsNotEmpty()
  cardHolderName: string;

  @IsNotEmpty()
  cardNumber: string;

  @IsNotEmpty()
  cardExpiredDate: string;

  @IsNotEmpty()
  cardCvv: string;

  @IsNotEmpty()
  cusId: number;

  @IsNotEmpty()
  customer: CreateCustomerDto;
}
