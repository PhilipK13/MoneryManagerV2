import firebase from '@config/firebase';
import { collection, deleteDoc, doc, getDoc, getFirestore, getDocs, query, setDoc, where, documentId } from '@firebase/firestore';
import { getAuth } from 'firebase/auth';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData, useDocumentData } from 'react-firebase-hooks/firestore';
import { Button, Modal } from './beluga';
import { Trash } from './Icons';

export default function Entry({ entry }) {
    const { description, purchaser, recipient, amount, createdAt, id } = entry;
    const db = getFirestore();
    const auth = getAuth();
    const [user, userLoading] = useAuthState(auth)
    const [uploading, setUploading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [empty, setEmpty] = useState(false)
    const router = useRouter();

    const getDate = () => {
        var date = createdAt.toDate();
        
        return (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
    }

    var date = createdAt.toDate();

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            if (userLoading) return;
            const transactionsRef = collection(db, "transactions");
            const q = query(transactionsRef, where(documentId(), '==', id));
            const querySnapshot = await getDocs(q);
            deleteDoc(querySnapshot.docs[0].ref);
            setUploading(false);
            setSuccess(true);

            setTimeout(() => {
                router.push("/money/money");
            }, 1000);

        } catch (e) {

        }
    }

    return (
        <div className="flex flex-row content-evenly justify-content items-center">
            {user && (user.displayName == "philip kennedy" )&& <form onSubmit={handleSubmit}>
                <Button type="submit" className="" buttonClass={undefined}>
                    <Trash type="submit" className="text-lg" />
                </Button>
            </form>}
            <p className='mx-2'><b>Date:</b> {getDate()}</p>
            <p className='mx-2'><b>Description:</b> {description}</p>
            <p className='mx-2'><b>Purchaser:</b> {purchaser}</p>
            <p className='mx-2'><b>Recipient:</b> {recipient}</p>
            <p className='mx-2'><b>Amount:</b> ${amount}</p>
        </div>
    )
}
