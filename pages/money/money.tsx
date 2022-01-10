import React, { useEffect } from 'react'
import Navigation from '@components/Navigation';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { query, getFirestore, collection } from "@firebase/firestore";
import { Loading } from "@components/Icons";
import { getAuth } from "@firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Entry from '@components/Entry';
import Link from 'next/link';




export default function money() {

    const db = getFirestore();
    const auth = getAuth();
    const [entries, entriesLoading] = useCollectionData(query(collection(db, "transactions")), { idField: "id" });
    const [user, userLoading] = useAuthState(auth);

    //Check if Phil bought something for Milli
    function isPhil(entry) {
    if(entry.purchaser == "Phil" && entry.recipient == "Milli"){
        return true;
    }
    return false;
    }

    //Check if Milli bought something for Phil
    function isMilli(entry) {
    if(entry.purchaser == "Milli" && entry.recipient == "Phil"){
        return true;
    }
    return false;
    }

    //Amount that Phil owes to Milli
    const philToMilli = () => {
    var total = 0;
    if(entriesLoading) return;
    entries.filter(isMilli).forEach(entry => {
        total += +entry.amount;
    });
    return total;
    }

    //Amount that Milli owes to Phil
    const milliToPhil = () => {
    var total = 0;
    if(entriesLoading) return;
    entries.filter(isPhil).forEach(entry => {
        total += +entry.amount;
    });
    return total;
    }

    const finalTotal = () => {
    var total = 0;
    if(milliToPhil() > philToMilli())
    {
        total = milliToPhil() - philToMilli();
        return ("Milli owes Phil $" + total + ".");
    } else if (philToMilli() > milliToPhil())
    {
        total = philToMilli() - milliToPhil();
        return ("Phil owes Milli $" + total + ".");
    }else
    {
        return "Even steven."
    }

    }

    return (
        <div className='bg-cWhite h-screen'>
            <Navigation />
            <div className='md:hidden flex flex-col items-center'>
                <div className='flex flex-col items-center mt-40'>
                    <div className='text-cBlue XL-text'>
                        <h1>Money Manager</h1>
                    </div>
                    <div className='text-cBlue flex flex-col items-center L-text my-12 text-center'>
                        <h4>Current Entries</h4>
                        <div className='text-cBlue flex-none text-sm my-12 space-y-4 overflow-y-auto h-28 no-scrollbar mx-2'>
                            
                            {entries?.map(entry => (<Entry key={entry.id} entry={entry} />))} 
                        </div>
                    </div>
                    <div className='text-cBlue L-text my-4 text-center'>
                        <h4>Current Total</h4>
                        <div className='mt-6 M-text'>
                            {finalTotal()}
                        </div>
                    </div>
                </div>
                {user && (user.displayName == "philip kennedy" || user.displayName == "Milli Ross") && 
                <Link href="/entry/new">
                    <div className='mt-12 absoulte bg-cDarkBlue px-5 py-3 rounded-xl cursor-pointer hover:border-blue-500 hover:border-2 transition'>
                        <a className='M-text text-cWhite'>Add Entry</a>
                    </div>
                </Link>}
            </div>
        </div>

        
        
    )
}

{/*             
            <div className="flex flex-col">
                <Navigation />
                <div className="flex align-center justify-center my-10">
                    <h1>Money Manager</h1>
                </div>
                {(userLoading || entriesLoading) && <Loading className="w-16 h-16 animate-spin mx-auto mt-12" />}
                {(!userLoading) && 
                <div className="flex flex-col justify-center items-center">
                    <h2>Current Entries</h2>
                    <div className="flex flex-col pt-10 mb-8 content-evenly">
                    {entries?.map(entry => (<Entry key={entry.id} entry={entry} />))}           
                    </div>
                    <h2>Current Tab</h2>
                    <div className="flex flex-col pt-10">
                    <div className="flex flex-row">
                        {finalTotal()}
                    </div>
                    </div>
                </div>}
            </div> */}