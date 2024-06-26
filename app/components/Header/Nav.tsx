import React from 'react';

interface NavProps {

}

const Nav: React.FC<NavProps> = () => {
    return (
        <div className='navbar-start '>
            <div className="flex lg:hidden">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-20 p-2 shadow bg-gray-500 rounded-box w-52 text-xs">
                        <li><a>NEW IN</a></li>
                        <li><a>SHOP</a></li>
                        <li><a>CAMPAINS</a></li>
                        <li><a>ABOUT</a></li>
                    </ul>
                </div>
            </div>

            <div className=" hidden lg:flex">
                <ul tabIndex={0} className="menu menu-horizontal text-xs">
                    <li><a>NEW IN</a></li>
                    <li><a>SHOP</a></li>
                    <li><a>CAMPAINS</a></li>
                    <li><a>ABOUT</a></li>
                </ul>
            </div>
        </div>

    );
};

export default Nav;