import { Button, Input, Select, TextArea } from '@components/beluga';
import React, { useState } from 'react'
import { getStorage, ref, uploadBytes, getDownloadURL } from "@firebase/storage";
import { getAuth } from "@firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';
import RequireAuth from '@components/RequireAuth';
import { useRouter } from 'next/router';
import { Loading } from '@components/Icons';
import { addDoc, collection, getFirestore, updateDoc } from '@firebase/firestore';
import Navigation from '@components/Navigation';

export default function Page() {
    const storage = getStorage();
    const auth = getAuth();
    const db = getFirestore();
    const [user, userLoading] = useAuthState(auth)
    const [form, setForm] = useState({
        description: "",
        amount: "",
        purchaser: "",
        recipient: "",
    });
    const [uploading, setUploading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [empty, setEmpty] = useState(false)
    const router = useRouter();

    


    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {

            if (userLoading) return;
            if(form.purchaser == "" || form.recipient == ""){
                setEmpty(true);
                return;
            }
            setUploading(true);

            const collectionRef = collection(db, "transactions/");
            const doc = await addDoc(collectionRef, { amount: form.amount, description: form.description, purchaser: form.purchaser,  recipient: form.recipient, owner: user.uid, createdAt: new Date() });

            setUploading(false);
            setSuccess(true);

            setTimeout(() => {
                router.push("/money/money");
            }, 1000);

        } catch (e) {

        }
    }

    const handleChange = (e: any) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
        
    }


    return (
        <div className='bg-cWhite h-screen pb-0'>
            <Navigation/>
            <div className="flex justify-center items-center p-2 h-full">
                <div className="rounded-xl p-8 bg-white shadow-center-md w-full max-w-lg">
                    {success &&
                        <div>
                            <h2 className="text-center font-normal">Upload Successful</h2>
                            <p className="text-center">You will be redirected momentarily</p>
                        </div>
                    }
                    {!success &&
                        <div>
                            <h3 className="text-center XL-text mb-8">New Entry</h3>
                            <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                                <div className='flex flex-row' >
                                    <h1 className='M-text w-40'>Description</h1>
                                    <Input className="flex-1" type="character" value={form.description} onChange={handleChange} name="description" placeholder="" />
                                </div>
                                <div className='flex flex-row' >
                                    <h1 className='M-text w-40'>Cost</h1>
                                    <Input className="flex-1" type="number" value={form.amount} onChange={handleChange} name="amount" placeholder="" />
                                </div>
                                <div className='flex flex-row w-full' >
                                    <h1 className='M-text w-40'>Purchaser</h1>
                                    <Select className='flex-1' required name="purchaser" onChange={handleChange}>
                                        <option>Select the purchaser</option>
                                        <option value="Phil">Phil</option>
                                        <option value="Milli">Milli</option>
                                    </Select>
                                </div>
                                <div className='flex flex-row' >
                                    <h1 className='M-text w-40'>Recepient</h1>
                                    <Select className='flex-1' required name="recipient" onChange={handleChange}>
                                        <option>Select the recipient</option>
                                        <option value="Phil">Phil</option>
                                        <option value="Milli">Milli</option>
                                        <option value="Both">Both</option>
                                    </Select>
                                </div>
                                <div className='flex items-center justify-center'>
                                    <div className='flex w-40' >
                                        <Button type="submit" className="flex-1 text-white L-text bg-cDarkBlue text-center rounded-md hover:bg-cBlue transitionx" buttonClass="py-2 w-full">
                                            Enter
                                        </Button>
                                    </div>
                                </div>
                                
                                
                            </form>
                            {empty && 
                            <div className="text-center">
                                <a>Please select an option for both purchaser and recipient</a>
                            </div>}
                        </div>
                    }
                    {uploading &&
                        <Loading className="animate-spin w-8 h-8 mx-auto mt-3" />
                    }
                </div>
            </div>
        </div>
    
    )
}
