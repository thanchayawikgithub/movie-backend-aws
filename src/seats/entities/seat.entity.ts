import { Theater } from 'src/theaters/entities/theater.entity';
import { Ticket } from 'src/tickets/entities/ticket.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Seat {
  @PrimaryGeneratedColumn()
  seatId: number;

  @Column()
  seatNumber: string; //หมายเลขที่นั่ง

  @Column()
  seatType: string;

  @Column()
  seatPrice: string;

  @CreateDateColumn({ comment: 'วันที่สร้าง' })
  creatDate: Date;

  @DeleteDateColumn({ comment: 'วันที่ลบ' })
  deleteDate: Date;

  @UpdateDateColumn({ comment: 'วันที่อัพเดท' })
  updateDate: Date;

  @OneToOne(() => Ticket, (tickets) => tickets.seat)
  tickets: Ticket[];

  @ManyToOne(() => Theater, (theaters) => theaters.seat)
  theaters: Theater[];
}
