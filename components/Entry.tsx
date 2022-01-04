import { collection, deleteDoc, doc, getFirestore, query, setDoc, where } from '@firebase/firestore';
import React, { useState } from 'react';
import { useCollectionData, useDocumentData } from 'react-firebase-hooks/firestore';
import { Modal } from './beluga';
import { ArrowDown, ArrowUp } from './Icons';

export default function Entry({ entry }) {
    const { description, purchaser, recipient, amount, createdAt } = entry;
    const db = getFirestore();

    const getDate = () => {
        var date = createdAt.toDate();
        
        return (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
    }

    return (
        <div className="flex flex-row content-evenly">
            <p className='mx-2'>Date: {getDate()}</p>
            <p className='mx-2'>Description: {description}</p>
            <p className='mx-2'>Purchaser: {purchaser}</p>
            <p className='mx-2'>Recipient: {recipient}</p>
            <p className='mx-2'>Amount: {amount}</p>
        </div>
    )
}
