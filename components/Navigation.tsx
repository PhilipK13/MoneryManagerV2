import React, { useState } from 'react'
import Link from "next/link";
import { Drawer } from "@components/beluga"
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from '@firebase/auth';
import { Home, Menu, Login, Logout } from "@components/Icons";

export default function Navigation() {

    const auth = getAuth();
    const [user] = useAuthState(auth);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>
            {menuOpen && <Drawer
                onClose={() => setMenuOpen(false)}
            >
                <div>
                    {user && <Link href="/auth/logout">
                        <div className="flex items-center gap-4 cursor-pointer hover:bg-gray-100 transition py-3 px-6">
                            <Logout className="w-6 h-6" />
                            <p>Logout</p>
                        </div>
                    </Link>}
                </div>
            </Drawer>}
            <div className="md:hidden">
                <div className="fixed bottom-0 left-0 right-0 shadow-center-md flex justify-evenly items-center">
                    <Link href="/">
                        <div className="small-screen-nav-button">
                            <Home className="small-screen-nav-button-icon" />
                        </div>
                    </Link>
                    {!user && <Link href="/auth/login">
                        <div className="small-screen-nav-button">
                            <Login className="small-screen-nav-button-icon" />
                        </div>
                    </Link>}
                    <div className="small-screen-nav-button">
                        <Menu className="small-screen-nav-button-icon" onClick={() => setMenuOpen(true)} />
                    </div>
                </div>
            </div>
            <div className="hidden md:flex relative z-30 justify-start bg-white  dark:bg-black w-full px-6 gap-6 items-center">
                <Menu className="w-6 h-6 cursor-pointer primary-hover" onClick={() => setMenuOpen(true)} />
                <Link href="/">
                    <div className="big-screen-nav-button">
                        <p>
                            Home
                        </p>
                    </div>
                </Link>
                {!user && <Link href="/auth/login">
                    <div className="big-screen-nav-button">
                        <p>
                            Login
                        </p>
                    </div>
                </Link>}
                {user &&
                    <div className="big-screen-nav-button">
                        <p>
                            {user.displayName} is logged in
                        </p>
                    </div>
                }
                {user && <Link href="/entry/new">
                    <div className="ml-auto bg-indigo-500 px-2 py-2 rounded-xl cursor-pointer hover:bg-indigo-400 transition text-white">
                        Add Entry
                    </div>
                </Link>}
                {user && (user.displayName == "philip kennedy" || user.displayName == "millicent ross") && <Link href="/clear/new">
                    <div className="ml-5 bg-red-500 px-2 py-2 rounded-xl cursor-pointer hover:bg-red-400 transition text-white">
                        Clear Entries
                    </div>
                </Link>}
            </div>
        </div >
    )
}