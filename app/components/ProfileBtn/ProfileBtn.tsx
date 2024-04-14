'use client';
import React from 'react';
import { useSession } from 'next-auth/react';
import SignInOutBtn from '../ProfileBtn/login-btn';
import Link from 'next/link';

const ProfileBtn: React.FC = () => {

    const { data: session } = useSession()
    
    return (
        <div className="dropdown z-10">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 12a5 5 0 01-10 0 5 5 0 0110 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-2a4 4 0 014-4h10a4 4 0 014 4v2" /></svg>
            </div>
        
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-20 p-2 shadow rounded-box w-52 bg-gray-500">
                {session ? 
                    <div className=''>
                         <li className='z-30'>
                            <Link href="/profile">
                               Profile
                            </Link>
                        </li>
                        <li className='z-30'>
                            <Link href="/orders">
                                Orders
                            </Link>
                        </li>
                    </div>
                    : null  
                }
                <SignInOutBtn/>
            </ul>
        </div>
    );
}

export default ProfileBtn;