import { Card } from 'src/cards/entities/card.entity';
import { Entrylog } from 'src/entrylogs/entities/entrylog.entity';
import { Receipt } from 'src/receipts/entities/receipt.entity';
import { Review } from 'src/reviews/entities/review.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  CusId: number;

  @Column()
  CusFirstname: string;

  @Column()
  cusLastname: string;

  @Column()
  cusEmail: string;

  @CreateDateColumn({ comment: 'วันที่สร้าง' })
  creatDate: Date;

  @DeleteDateColumn({ comment: 'วันที่ลบ' })
  deleteDate: Date;

  @UpdateDateColumn({ comment: 'วันที่อัพเดท' })
  updateDate: Date;

  @OneToMany(() => Review, (reviews) => reviews.customers)
  reviews: Review[];

  @OneToMany(() => Entrylog, (entrylogs) => entrylogs.customers)
  entrylogs: Entrylog[];

  @OneToMany(() => Card, (cards) => cards.customers)
  cards: Card[];

  @OneToMany(() => Receipt, (receipts) => receipts.customers)
  receipts: Receipt[];
}
