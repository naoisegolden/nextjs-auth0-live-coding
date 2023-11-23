import Image from 'next/image'
import Head from "next/head";
import {getSession} from '@auth0/nextjs-auth0';

export default async function Home() {
    const session = await getSession();

    console.log(session);
    return (
        <>
            <Head>
                <title>Login Page</title>
            </Head>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="flex flex-col items-center px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-lg">
                    <div className="mb-4">
                        <Image src="/images/nextjs.png" alt="Login" width={100} height={100}
                        />
                    </div>
                    <h3 className="text-2xl font-bold text-center">Welcome back!</h3>
                    <div className="mt-4">
                        <a href="/api/auth/login"
                           className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
                            Login
                        </a>
                        <a href="/api/auth/logout"
                           className="w-full px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">Logout</a>
                    </div>
                </div>
            </div>
        </>
    )
}
