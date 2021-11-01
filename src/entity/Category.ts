import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { HardwareType } from './HardwareType';
import { Product } from "./Product";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true, nullable: false})
    name: string;

    @ManyToMany(() => HardwareType)
    @JoinTable()
    hardwareTypes: Promise<HardwareType[]>;

    @OneToMany(() => Product, product => product.category)
    products: Promise<Product[]>;
}