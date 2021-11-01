import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Product } from "./Product";

@Entity()
export class Brand{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true, nullable: false})
    name: string;

    @OneToMany(() => Product, product => product.brand)
    products: Product[];
}
