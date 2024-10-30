'use client';

import { signIn, signOut, useSession } from 'next-auth/react';

export default function Home() {
    const { data: session, status } = useSession();

    if (status === 'loading') return
    <div className='flex flex-col items-center justify-center h-screen'>
        <p>Loading...</p>
    </div>

    return (
        <div className="flex flex-col items-center justify-center space-y-4 h-screen bg-black">
            {!session ? (
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
            ) : (
                <>
                    <h1 className="text-3xl">Welcome, {session.user?.name}!</h1>
                    <p className="text-lg">Email: {session.user?.email}</p>
                    <img
                        className="rounded-full"
                        src={session.user?.image || ''}
                        alt="User Avatar"
                        width={50}
                        height={50}
                    />
                    <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={() => signOut()}
                    >
                        Logout
                    </button>
                </>
            )}
        </div>
    );
}

