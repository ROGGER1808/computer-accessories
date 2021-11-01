import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable, JoinColumn} from "typeorm";
import { Category } from "./Category";
import { Product } from './Product';

@Entity()
export class HardwareType{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true, nullable: false})
    name: string;

    @ManyToMany(() => Category)
    categories: Category[];

    @OneToMany(() => Product, product => product.hardwareType)
    products: Product[];
}
