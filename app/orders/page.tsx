'use client';
import React from 'react';
import { useSession, signIn, signOut } from "next-auth/react"
import Header from '../components/Header/Header';


export function Orders() {
    const { data: session } = useSession();

    return (
        <div className=''>
            <Header pos={'orders'}/>
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