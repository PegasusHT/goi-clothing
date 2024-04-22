'use client';
import { ShoppingCart } from '@/lib/db/cart';
import React from 'react';
import { FiShoppingBag } from "react-icons/fi"; 
import Link from 'next/link';

interface ShoppingCartButtonProps {
    cart: ShoppingCart | null;
}

export default function ShoppingCartButton({ cart }: ShoppingCartButtonProps) {

    function closeDropdown() {
        const elem = document.activeElement as HTMLElement;
        if (elem) {
          elem.blur();
        }
    }

    return(
        <div className='dropdown dropdown-end'>
            <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator text-xl">
                    <FiShoppingBag />
                    {
                        cart?.size && 
                        <span className='badge badge-sm indicator-item'>{cart?.size}</span>
                    }
                </div>
            </label>

            <div className='card dropdown-content card-compact mt-3 w-52 bg-base-100 shadow z-30'>
                <div className='card-body'>
                    <span className='text-base text-black '>
                        {cart?.size} Items
                    </span>
                    <span className='text-info'>
                        Subtototal: ${cart?.subtotal || 0}
                    </span>
                    <div className='card-actions'>
                        <Link href='/cart'
                            className='btn btn-primary btn-block'
                            onClick={closeDropdown} 
                        >
                            View Cart
                        </Link>
                    </div>
                </div>
            </div>    
        </div>
    )
}

