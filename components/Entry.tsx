import { collection, deleteDoc, doc, getFirestore, query, setDoc, where } from '@firebase/firestore';
import React, { useState } from 'react';
import { useCollectionData, useDocumentData } from 'react-firebase-hooks/firestore';
import { Modal } from './beluga';
import { ArrowDown, ArrowUp } from './Icons';

export default function Entry({ entry }) {
    const { description, purchaser, recipient, amount } = entry;
    const db = getFirestore();

    return (
        <div className="flex flex-row content-evenly">
            <a>Description: {description}</a>
            <a>Purchaser: {purchaser}</a>
            <a>Recipient: {recipient}</a>
            <a>Amount: {amount}</a>

        </div>
    )
}
