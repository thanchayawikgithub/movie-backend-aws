import { FoodCategory } from 'src/food_categories/entities/food_category.entity';
import { ReceiptFood } from 'src/receipt_foods/entities/receipt_food.entity';
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
export class Food {
  @PrimaryGeneratedColumn({ comment: 'รหัสอาหาร' })
  foodId: number;

  @Column({ comment: 'ชื่ออาหาร' })
  foodName: string;

  @Column({ comment: 'รูปอาหาร' })
  foodImage: string;

  @Column({ comment: 'ราคาอาหาร' })
  foodPrice: number;

  @CreateDateColumn({ comment: 'วันที่สร้าง' })
  creatDate: Date;

  @DeleteDateColumn({ comment: 'วันที่ลบ' })
  deleteDate: Date;

  @UpdateDateColumn({ comment: 'วันที่อัพเดท' })
  updateDate: Date;

  @ManyToOne(() => FoodCategory, (foodcat) => foodcat.foods)
  @JoinColumn({ name: 'foodcatId' })
  foodcat: FoodCategory;

  @OneToMany(() => ReceiptFood, (recfood) => recfood.food)
  recfoods: ReceiptFood[];
}
