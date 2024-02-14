import { Customer } from 'src/customers/entities/customer.entity';
import { Receipt } from 'src/receipts/entities/receipt.entity';
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
export class Card {
  @PrimaryGeneratedColumn({ comment: 'รหัสบัตร' })
  cardId: number;

  @Column({ comment: 'ชื่อผู้ถือบัตร' })
  cardHolderName: string;

  @Column({ comment: 'เลขบัตร' })
  cardNumber: string;

  @Column({ comment: 'วันหมดอายุบัตร' })
  cardExpiredDate: string;

  @Column({ comment: 'รหัสความปลอดภัยบัตร' })
  cardCvv: string;

  @CreateDateColumn({ comment: 'วันที่สร้าง' })
  creatDate: Date;

  @DeleteDateColumn({ comment: 'วันที่ลบ' })
  deleteDate: Date;

  @UpdateDateColumn({ comment: 'วันที่อัพเดท' })
  updateDate: Date;

  @ManyToOne(() => Customer, (customer) => customer.cards)
  @JoinColumn({ name: 'cusId' })
  customer: Customer;

  @OneToMany(() => Receipt, (receipts) => receipts.card)
  receipts: Receipt[];
}
