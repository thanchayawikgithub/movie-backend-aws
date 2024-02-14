import { Customer } from 'src/customers/entities/customer.entity';
import { Receipt } from 'src/receipts/entities/receipt.entity';
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
export class Card {
  @PrimaryGeneratedColumn()
  cardId: number;

  @Column()
  cardHolderName: string;

  @Column()
  cardNumber: string;

  @Column()
  cardExpiredDate: string;

  @Column()
  cardCvv: string;

  @CreateDateColumn({ comment: 'วันที่สร้าง' })
  creatDate: Date;

  @DeleteDateColumn({ comment: 'วันที่ลบ' })
  deleteDate: Date;

  @UpdateDateColumn({ comment: 'วันที่อัพเดท' })
  updateDate: Date;

  @ManyToOne(() => Customer, (customers) => customers.cards)
  customers: Customer[];

  @OneToMany(() => Receipt, (receipts) => receipts.cards)
  receipts: Receipt[];
}
