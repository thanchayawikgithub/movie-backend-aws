import { Food } from 'src/foods/entities/food.entity';
import { Receipt } from 'src/receipts/entities/receipt.entity';
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
export class ReceiptFood {
  @PrimaryGeneratedColumn()
  recfoodId: number;

  @Column()
  recfoodQty: number;

  @Column()
  recfoodPrice: number;

  @CreateDateColumn({ comment: 'วันที่สร้าง' })
  creatDate: Date;

  @DeleteDateColumn({ comment: 'วันที่ลบ' })
  deleteDate: Date;

  @UpdateDateColumn({ comment: 'วันที่อัพเดท' })
  updateDate: Date;

  @ManyToOne(() => Food, (foods) => foods.recfoods)
  foods: Food[];

  @ManyToOne(() => Receipt, (receipts) => receipts.recfoods)
  receipts: Receipt[];
}
