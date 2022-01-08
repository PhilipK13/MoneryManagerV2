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
            <div className="md:hidden">
                <div className="fixed bg-white bottom-0 left-0 right-0 shadow-center-md flex justify-evenly items-center">
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
                    {user && <Link href="/auth/logout">
                        <div className="small-screen-nav-button">
                            <Logout className="small-screen-nav-button-icon" />
                        </div>
                    </Link>}                
                </div>
            </div>
            <div className="hidden md:flex relative z-30 justify-start bg-white w-full px-6 gap-6 items-center">
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