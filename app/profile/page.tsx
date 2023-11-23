"use client"
import {NextPage} from 'next';
import {useUser} from '@auth0/nextjs-auth0/client';
import Head from 'next/head';
import React from 'react';

const ProfilePage: NextPage = () => {
    const {user, error, isLoading} = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;
    console.log(user)
    return (
        <>
            <Head>
                <title>User Profile</title>
            </Head>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="px-8 py-6 text-left bg-white shadow-lg rounded-lg">
                    <div className="flex flex-col items-center">
                        {user && (
                            <>
                                <img src={user.picture ?? undefined} alt={user.name ?? 'User'}
                                     className="w-24 h-24 rounded-full"/>
                                <h3 className="mt-4 text-2xl font-bold">{user.name}</h3>
                                <p className="text-lg text-gray-600">{user.email}</p>
                                {/* More user information can be listed here */}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfilePage;
