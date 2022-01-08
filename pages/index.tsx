import { useCollectionData } from 'react-firebase-hooks/firestore';
import { query, getFirestore, collection } from "@firebase/firestore";
import { Home, Loading, Login, Logout, Menu } from "@components/Icons";
import { getAuth } from "@firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Entry from '@components/Entry';
import Link from "next/link";
import { useState } from 'react';
import { Drawer } from '@components/beluga';
import Navigation from '@components/Navigation';

export default function Page() {

  const auth = getAuth();
  const [user, userLoading] = useAuthState(auth);
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
      <div className='bg-customWhite h-screen'>
        <Navigation/>
        <div className='md:hidden'>
            <div className='flex flex-col items-center my-20'>
                <div className='text-customBlue'>
                    <h1>Philip Kennedy</h1>
                </div>
                <div className='text-customBlue'>
                    <h4>Student - Developer - Father (of 2 cats)</h4>
                </div>
            </div>
            <div className=''>
                Personal Site
            </div>
            
                
            
        </div>
      </div>
    // <div className='flex font-sans'>
    //   <div className='flex-1 flex flex-col items-center justify-cente uppercase relative top-1'>
    //   {!user && <Link href="/auth/login">
    //     <div className="big-screen-nav-button">
    //         <p>
    //             Login
    //         </p>
    //     </div>
    //   </Link>}
    //   {user && <Link href="/auth/logout">
    //     <div className="flex items-center gap-4 cursor-pointer hover:bg-gray-100 transition py-3 px-6">
    //         <Logout className="w-6 h-6" />
    //         <p>Logout</p>
    //     </div>
    //   </Link>}
    //     <div>
    //       <p className='text-2xl text-black font-light tracking-wide relative top-1'>Philip Kennedy</p>
    //     </div>
    //     <p className='text-4 text-black font-light tracking-wide relative -top-3'>Student - Developer - Father (of 2 cats)</p>
    //     {<Link href="/home/home">
    //       <div className="m-auto bg-indigo-500 px-2 py-2 rounded-xl cursor-pointer hover:bg-indigo-400 transition text-white">
    //           Personal Site
    //       </div>
    //     </Link>}
    //     {user && <Link href="/money/money">
    //       <div className="m-auto bg-indigo-500 px-2 py-2 rounded-xl cursor-pointer hover:bg-indigo-400 transition text-white">
    //           Money Manger
    //       </div>
    //     </Link>}
    //   </div>
    // </div>

    
  )
}
