'use client';
import React from 'react';
import { useSession, signIn, signOut } from "next-auth/react"
import Header from '../components/Header/Header';

type Props = {
    orders: any
};

export const Orders: React.FC<Props> = ({  }) => {
    const { data: session } = useSession();

    return (
        <div className='bg-gray-500'>
            <Header />
            <div className='p-5 bg-white'>
                {session ?
                    (
                        <h1 className="text-2xl font-bold my-4">Orders</h1>
                    ) : (
                        <p className="text-lg text-black">Please sign in to view your orders</p>
                    )
                }
            </div>
        </div>
    )
}

export default Orders;