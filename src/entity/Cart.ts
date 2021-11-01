import { Min } from "class-validator";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { HardwareType } from './HardwareType';
import { Product } from './Product';
import { Customer } from './Customer';
import { CartItem } from "./CartItem";

@Entity()
export class Cart{
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Customer, customer=> customer.carts)
    @JoinColumn({ name: "customer_id" })
    customer: Customer;

    @OneToMany(() => CartItem, cartItem => cartItem.cart)
    cartItems: CartItem[];
}