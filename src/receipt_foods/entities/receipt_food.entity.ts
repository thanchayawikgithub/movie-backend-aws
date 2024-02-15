import { Food } from 'src/foods/entities/food.entity';
import { Receipt } from 'src/receipts/entities/receipt.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class ReceiptFood {
  @PrimaryGeneratedColumn({ comment: 'รหัสใบเสร็จอาหาร' })
  recFoodId: number;

  @Column({ comment: 'จำนวนอาหาในใบเสร็จ' })
  recFoodQty: number;

  @Column({ comment: 'ราคาอาหารในใบเสร็จ' })
  recFoodPrice: number;

  @CreateDateColumn({ comment: 'วันที่สร้าง' })
  creatDate: Date;

  @DeleteDateColumn({ comment: 'วันที่ลบ' })
  deleteDate: Date;

  @UpdateDateColumn({ comment: 'วันที่อัพเดท' })
  updateDate: Date;

  @ManyToOne(() => Food, (food) => food.recfoods)
  @JoinColumn({ name: 'foodId' })
  food: Food;

  @ManyToOne(() => Receipt, (receipt) => receipt.recfoods)
  @JoinColumn({ name: 'receiptId' })
  receipt: Receipt;
}
