import { IsEmail, IsPhoneNumber } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Cart } from './Cart';

@Entity()
export class Customer{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'first-name', nullable: false})
    firstName: string;

    @Column({name: 'last-name', nullable: false})
    lastName: string;

    @Column({nullable: false})
    address: string;

    @Column({name: 'phone-number', nullable: false})
    @IsPhoneNumber()
    phoneNumber: string;

    @Column({unique: true, nullable: false})
    @IsEmail()
    email: string;

    @OneToMany(() => Cart, cart => cart.customer)
    carts: Cart[];
}