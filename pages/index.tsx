import { useCollectionData } from 'react-firebase-hooks/firestore';
import { query, getFirestore, collection } from "@firebase/firestore";
import { Loading } from "@components/Icons";
import { getAuth } from "@firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Entry from '@components/Entry';
import Link from "next/link";

export default function Page() {

  const auth = getAuth();
  const [user, userLoading] = useAuthState(auth);
  
  return (
    <div className='flex font-sans'>
      <div className='flex-1 flex flex-col items-center justify-cente uppercase relative top-1'>
        <div>
          <p className='text-2xl text-black font-light tracking-wide relative top-1'>Philip Kennedy</p>
        </div>
        <p className='text-4 text-black font-light tracking-wide relative -top-3'>Student - Developer - Father (of 2 cats)</p>
        {<Link href="/home/home">
          <div className="m-auto bg-indigo-500 px-2 py-2 rounded-xl cursor-pointer hover:bg-indigo-400 transition text-white">
              Personal Site
          </div>
        </Link>}
        {user && <Link href="/money/money">
          <div className="m-auto bg-indigo-500 px-2 py-2 rounded-xl cursor-pointer hover:bg-indigo-400 transition text-white">
              Money Manger
          </div>
        </Link>}
      </div>
    </div>

    
  )
}
