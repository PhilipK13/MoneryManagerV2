import { Button, Input, Select, TextArea } from '@components/beluga';
import React, { useState } from 'react'
import { getStorage, ref, uploadBytes, getDownloadURL } from "@firebase/storage";
import { getAuth } from "@firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';
import RequireAuth from '@components/RequireAuth';
import { useRouter } from 'next/router';
import { Loading } from '@components/Icons';
import { addDoc, collection, getFirestore, updateDoc, deleteDoc } from '@firebase/firestore';
import { getDocs, query } from 'firebase/firestore';

export default function Page() {
    const storage = getStorage();
    const auth = getAuth();
    const db = getFirestore();
    const [user, userLoading] = useAuthState(auth)
    const [uploading, setUploading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [empty, setEmpty] = useState(false)
    const router = useRouter();

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {

            if (userLoading) return;
            const q = query(collection(db, "transactions"));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
            deleteDoc(doc.ref);
            });

            const collectionRef = collection(db, "transactions/");
            

            setUploading(false);
            setSuccess(true);

            setTimeout(() => {
                router.push("/");
            }, 1000);

        } catch (e) {

        }
    }

    const handleChange = (e: any) => {
        
        
    }


    return (
        <RequireAuth>
            <div className="flex justify-center items-center p-2 h-full">
                <div className="dark:bg-gray-900 rounded-xl p-3 sm:p-8 bg-white shadow-center-md w-full max-w-lg">
                    {success &&
                        <div>
                            <h2 className="text-center font-normal">Entries Cleared</h2>
                            <p className="text-center">You will be redirected momentarily</p>
                        </div>
                    }
                    {!success &&
                        <div>
                            <h2 className="mb-8 text-center font-light">Clear Entries</h2>
                            <form className="flex flex-col" onSubmit={handleSubmit}>
                                <Button type="submit" className="mx-auto">
                                    Enter
                                </Button>
                            </form>
                        </div>
                    }
                    {uploading &&
                        <Loading className="animate-spin w-8 h-8 mx-auto mt-3" />
                    }
                </div>
            </div>
        </RequireAuth>
    )
}
