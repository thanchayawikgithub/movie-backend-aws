import { Customer } from 'src/customers/entities/customer.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Receipt {
  @PrimaryGeneratedColumn()
  receiptId: number;

  @Column()
  recDate: Date;

  @Column()
  recTotalPrice: number;

  @Column()
  recPaymentMed: string;

  @Column()
  recPaymentStatus: boolean;

  @ManyToOne(() => Customer, (customers) => customers.receipts)
  customers: Customer[];
}
