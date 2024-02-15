import { Card } from 'src/cards/entities/card.entity';
import { Customer } from 'src/customers/entities/customer.entity';
import { ReceiptFood } from 'src/receipt_foods/entities/receipt_food.entity';
import { Ticket } from 'src/tickets/entities/ticket.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Receipt {
  @PrimaryGeneratedColumn({ comment: 'รหัสใบเสร็จ' })
  receiptId: number;

  @Column({ comment: 'ราคารวม' })
  recTotalPrice: number;

  @Column({ comment: 'วิธีการชำระเงิน' })
  recPaymentMed: string;

  @Column({ comment: 'สถานะการจ่ายเงิน' })
  recPaymentStatus: boolean;

  @CreateDateColumn({ comment: 'วันที่สร้าง' })
  creatDate: Date;

  @DeleteDateColumn({ comment: 'วันที่ลบ' })
  deleteDate: Date;

  @UpdateDateColumn({ comment: 'วันที่อัพเดท' })
  updateDate: Date;

  @ManyToOne(() => Customer, (customer) => customer.receipts)
  @JoinColumn({ name: 'cusId' })
  customer: Customer;

  @OneToMany(() => Ticket, (ticket) => ticket.receipt)
  tickets: Ticket[];

  @ManyToOne(() => Card, (card) => card.receipts)
  @JoinColumn({ name: 'cardId' })
  card: Card;

  @OneToMany(() => ReceiptFood, (recfood) => recfood.receipt)
  recfoods: ReceiptFood[];
}
