import { Card } from 'src/cards/entities/card.entity';
import { Entrylog } from 'src/entrylogs/entities/entrylog.entity';
import { Receipt } from 'src/receipts/entities/receipt.entity';
import { Review } from 'src/reviews/entities/review.entity';
import { Ticket } from 'src/tickets/entities/ticket.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn({ comment: 'รหัสลูกค้า' })
  cusId: number;

  @Column({ comment: 'ชื่อลูกค้า' })
  cusFirstname: string;

  @Column({ comment: 'นามสกุลลูกค้า' })
  cusLastname: string;

  @Column({ comment: 'อีเมลลูกค้า' })
  cusEmail: string;

  @CreateDateColumn({ comment: 'วันที่สร้าง' })
  creatDate: Date;

  @DeleteDateColumn({ comment: 'วันที่ลบ' })
  deleteDate: Date;

  @UpdateDateColumn({ comment: 'วันที่อัพเดท' })
  updateDate: Date;

  @OneToMany(() => Review, (review) => review.customer)
  reviews: Review[];

  @OneToMany(() => Entrylog, (entrylog) => entrylog.customer)
  entrylogs: Entrylog[];

  @OneToMany(() => Card, (card) => card.customer)
  cards: Card[];

  @OneToMany(() => Receipt, (receipt) => receipt.customer)
  receipts: Receipt[];

  @OneToOne(() => Ticket, (ticket) => ticket.customer)
  @JoinColumn({ name: 'ticketId' })
  ticket: Ticket;
}
