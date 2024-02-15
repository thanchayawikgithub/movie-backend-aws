import { IsNotEmpty } from 'class-validator';

export class CreateReviewDto {
  @IsNotEmpty()
  reviewRating: number;

  reviewComment: string;

  @IsNotEmpty()
  ticketId: number;

  @IsNotEmpty()
  cusId: number;
}
