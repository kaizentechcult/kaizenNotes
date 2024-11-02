'use client';

import Loader from '@/components/Loader/Loader';
import { signIn } from 'next-auth/react';
// const {isAuthenticated} = useContext(AuthContext);

export default function Home() {

    // if (status === 'loading') return
    // <div className='flex flex-col items-center justify-center h-screen'>
    //   <Loader/>
    // </div>

    return (
        <div className="flex flex-col items-center justify-center space-y-4 h-screen bg-black">
            <div className='flex flex-col items-center justify-center space-y-4'>
                <p className="text-center text-lg">You are not logged in.</p>
                <button
                    className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={() => signIn('github')}
                >
                    Login with GitHub
                </button>
                <button
                    className="bg-gray-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    // onClick={() => signIn('google')}
                    disabled
                >
                    Login with Google
                </button>
            </div>
        </div>
    );
}

