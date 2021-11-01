import { Min } from "class-validator";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { HardwareType } from './HardwareType';
import { Product } from './Product';
import { Cart } from './Cart';

@Entity()
export class CartItem {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    @Min(1)
    quantity: number;

    @ManyToOne(() => Product, product => product.cartItems)
    @JoinColumn({ name: "product_id" })
    product: Product;

    @ManyToOne(() => Cart, cart => cart.cartItems)
    @JoinColumn({ name: "cart_id" })
    cart: Cart;
}