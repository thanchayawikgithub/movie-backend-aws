import { Card } from 'src/cards/entities/card.entity';
import { Customer } from 'src/customers/entities/customer.entity';
import { ReceiptFood } from 'src/receipt_foods/entities/receipt_food.entity';
import { Ticket } from 'src/tickets/entities/ticket.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

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

  @CreateDateColumn({ comment: 'วันที่สร้าง' })
  creatDate: Date;

  @DeleteDateColumn({ comment: 'วันที่ลบ' })
  deleteDate: Date;

  @UpdateDateColumn({ comment: 'วันที่อัพเดท' })
  updateDate: Date;

  @ManyToOne(() => Customer, (customers) => customers.receipts)
  customers: Customer[];

  @OneToMany(() => Ticket, (tickets) => tickets.receipts)
  tickets: Ticket[];

  @ManyToOne(() => Card, (cards) => cards.receipts)
  cards: Card[];

  @OneToMany(() => ReceiptFood, (recfoods) => recfoods.receipts)
  recfoods: ReceiptFood[];
}
