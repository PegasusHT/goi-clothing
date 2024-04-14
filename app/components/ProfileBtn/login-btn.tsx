import React from 'react';
import { useSession, signOut, signIn } from 'next-auth/react';

const SignInOutBtn: React.FC = () => {
    const { data: session } = useSession();
    
    const handleSignOut = () => {
        signOut();
    };

    const handleSignIn = () => {
        signIn();
    };

    return (
        <button className="cursor-pointer" onClick={session ? handleSignOut : handleSignIn}>
            <li><a>{session ? 'Sign out' : 'Sign in'}</a></li>             
        </button>
    );
};

export default SignInOutBtn;
