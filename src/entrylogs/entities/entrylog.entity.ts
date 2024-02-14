import { Customer } from 'src/customers/entities/customer.entity';
import { Ticket } from 'src/tickets/entities/ticket.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Entrylog {
  @PrimaryGeneratedColumn()
  entlId: number;

  @Column()
  entlDate: Date;

  @CreateDateColumn({ comment: 'วันที่สร้าง' })
  creatDate: Date;

  @DeleteDateColumn({ comment: 'วันที่ลบ' })
  deleteDate: Date;

  @UpdateDateColumn({ comment: 'วันที่อัพเดท' })
  updateDate: Date;

  @ManyToOne(() => Customer, (customers) => customers.entrylogs)
  customers: Customer[];

  @ManyToOne(() => Ticket, (tickets) => tickets.entrylogs)
  tickets: Ticket[];
}
