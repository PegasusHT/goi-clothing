import React from 'react';
import Nav from './Nav';
import Image from 'next/image'; 
import ProfileBar from './ProfileBar';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className='navbar text-white relative' >
           
            <Nav/>
            <div className="navbar-center">
                <a className="btn btn-ghost text-xl">
                    <Link href="/">
                        <Image src='https://goi.com/cdn/shop/files/GOI_LOGO_BIKINIS_blanco2.png?v=1701771105&width=115' alt='GOI.com' width={120} height={100} />
                    </Link>
                </a>
            </div>
            
            <ProfileBar/>
        </header>
    );
};

export default Header;