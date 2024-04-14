import React from 'react';
import { FiShoppingBag } from "react-icons/fi";
import ProfileBtn from '../ProfileBtn/ProfileBtn';

const ProfileBar: React.FC = () => {

    return (
        <div className="navbar-end">
            <ProfileBtn />
            
            <button className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </button>

            <button className="btn btn-ghost btn-circle">
                <div className="indicator text-lg">
                    <FiShoppingBag />
                </div>
            </button>
        </div>
    );
}

export default ProfileBar;