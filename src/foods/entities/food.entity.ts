import { FoodCategory } from 'src/food_categories/entities/food_category.entity';
import { ReceiptFood } from 'src/receipt_foods/entities/receipt_food.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Food {
  @PrimaryGeneratedColumn()
  foodId: number;

  @Column()
  foodName: string;

  @Column()
  foodImage: string;

  @Column()
  foodPrice: number;

  @CreateDateColumn({ comment: 'วันที่สร้าง' })
  creatDate: Date;

  @DeleteDateColumn({ comment: 'วันที่ลบ' })
  deleteDate: Date;

  @UpdateDateColumn({ comment: 'วันที่อัพเดท' })
  updateDate: Date;

  @ManyToOne(() => FoodCategory, (foodcats) => foodcats.foods)
  foodcats: FoodCategory[];

  @OneToMany(() => ReceiptFood, (recfoods) => recfoods.foods)
  recfoods: ReceiptFood[];
}
