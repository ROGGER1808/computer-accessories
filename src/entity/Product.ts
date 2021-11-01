import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn} from "typeorm";
import {Min} from "class-validator";
import { HardwareType } from './HardwareType';
import { Category } from './Category';
import { Brand } from './Brand';
import { CartItem } from './CartItem';

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'name', nullable: false})
    name: string;

    @Column({name: 'number', nullable: false})
    @Min(0)
    price: number;

    @Column({name: 'quantity', nullable: false})
    @Min(0)
    quantity: number

    @Column({name: 'thumbnail'})
    thumbnail: string;

    @ManyToOne(() => HardwareType, hardwareType => hardwareType.products)
    @JoinColumn({ name: "hardware-type-id" })
    hardwareType: HardwareType;

    @ManyToOne(() => Category, category => category.products)
    @JoinColumn({ name: "member_id" })
    category: Category;

    @ManyToOne(() => Brand, brand => brand.products)
    @JoinColumn({ name: "brand_id" })
    brand: Brand;

    @OneToMany(() => CartItem, cartItem => cartItem.product)
    cartItems: CartItem[];
}