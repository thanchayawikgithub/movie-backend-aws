import { MovieCategory } from 'src/movie_categories/entities/movie_category.entity';
import { Review } from 'src/reviews/entities/review.entity';
import { Showtime } from 'src/showtimes/entities/showtime.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn({ comment: 'รหัสหนัง' })
  movieId: number;

  @Column({ comment: 'ชื่อหนัง' })
  movieName: string;

  @Column({ comment: 'คำอธิบายหนัง' })
  movieDesc: string;

  @Column({ comment: 'ความยาวหนัง หน่วย นาที' })
  movieLength: number;

  @Column({ comment: 'รูปภาพ' })
  movieImage: string;

  @Column({ comment: 'ตัวอย่างหนัง' })
  movieTrailer: string;

  @CreateDateColumn({ comment: 'วันที่สร้าง' })
  creatDate: Date;

  @DeleteDateColumn({ comment: 'วันที่ลบ' })
  deleteDate: Date;

  @UpdateDateColumn({ comment: 'วันที่อัพเดท' })
  updateDate: Date;

  @OneToMany(() => Showtime, (showtime) => showtime.movie)
  showtimes: Showtime[];

  @ManyToMany(() => MovieCategory, (moviecategory) => moviecategory.movies)
  @JoinColumn({ name: 'moviecatId' })
  categories: MovieCategory[];

  @OneToMany(() => Review, (review) => review.movie)
  reviews: Review[];
}
