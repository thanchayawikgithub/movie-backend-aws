import { Movie } from 'src/movies/entities/movie.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class MovieCategory {
  @PrimaryGeneratedColumn({ comment: 'รหัสหมวดหมู่หนัง' })
  movieCatId: number;

  @Column({ comment: 'ชื่อหมวดหมู่หนัง' })
  movieCatName: string;

  @CreateDateColumn({ comment: 'วันที่สร้าง' })
  creatDate: Date;

  @DeleteDateColumn({ comment: 'วันที่ลบ' })
  deleteDate: Date;

  @UpdateDateColumn({ comment: 'วันที่อัพเดท' })
  updateDate: Date;

  @ManyToMany(() => Movie, (movie) => movie.categories)
  @JoinTable({ name: 'movieId' })
  movies: Movie[];
}
