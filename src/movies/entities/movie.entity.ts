import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('movies')
export class Movie {
  @PrimaryGeneratedColumn({ comment: 'รหัสหนัง' })
  movieId: number;

  @Column({ comment: 'ชื่อหนัง' })
  movieName: string;

  @Column({ comment: 'คำอธิบายหนัง' })
  movieDiscription: string;

  @Column({ comment: 'ความยาวหนัง หน่วย นาที' })
  movieLength: number;

  @Column({ comment: 'รูปภาพ' })
  movieImg: string;

  @Column({ comment: 'ตัวอย่างหนัง' })
  movieTrailer: string;

  @CreateDateColumn({ comment: 'วันที่สร้าง' })
  creatDate: Date;

  @DeleteDateColumn({ comment: 'วันที่ลบ' })
  deleteDate: Date;

  @UpdateDateColumn({ comment: 'วันที่อัพเดท' })
  updateDate: Date;
}
