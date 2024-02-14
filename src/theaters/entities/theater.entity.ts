import { Seat } from 'src/seats/entities/seat.entity';
import { Showtime } from 'src/showtimes/entities/showtime.entity';
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
export class Theater {
  @PrimaryGeneratedColumn()
  theaterId: number;

  @Column()
  theaterName: string;

  @CreateDateColumn({ comment: 'วันที่สร้าง' })
  creatDate: Date;

  @DeleteDateColumn({ comment: 'วันที่ลบ' })
  deleteDate: Date;

  @UpdateDateColumn({ comment: 'วันที่อัพเดท' })
  updateDate: Date;

  @OneToMany(() => Showtime, (showtime) => showtime.theaters)
  showtime: Showtime[];

  @OneToMany(() => Seat, (seat) => seat.theaters)
  seat: Seat[];
}
