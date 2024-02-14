import { Food } from 'src/foods/entities/food.entity';
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
export class FoodCategory {
  @PrimaryGeneratedColumn({ comment: 'รหัสหมวดหมู่อาหาร' })
  foodCatId: number;

  @Column({ comment: 'ชื่อหมวดหมู่อาหาร' })
  foodCatName: string;

  @CreateDateColumn({ comment: 'วันที่สร้าง' })
  creatDate: Date;

  @DeleteDateColumn({ comment: 'วันที่ลบ' })
  deleteDate: Date;

  @UpdateDateColumn({ comment: 'วันที่อัพเดท' })
  updateDate: Date;

  @OneToMany(() => Food, (food) => food.foodcat)
  foods: Food[];
}
