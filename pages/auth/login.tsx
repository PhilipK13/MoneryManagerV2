import React, { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/dist/client/router';
import LoadingScreen from '@components/LoadingScreen';
import { getAuth, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from '@firebase/firestore';
import { Google } from '@components/Icons';

const providers = {
    google: {
        provider: new GoogleAuthProvider(),
        Icon: Google
    }
};

export default function Login() {

    const router = useRouter();
    const auth = getAuth();
    const db = getFirestore();
    const [user, userLoading] = useAuthState(auth);

    const checkAndSetUserDetails = async () => {
        if (!user) return;

        const snapshot = await getDoc(doc(db, "users", user.uid));

        // If user does not exist, create entry for them
        if (!snapshot.exists()) {
            await setDoc(doc(db, "users", user.uid), {
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                createdAt: new Date()
            });
        }

        router.push("/");
    }

    const signIn = async (provider: any) => {
        await signInWithRedirect(auth, provider);
    }

    useEffect(() => {
        // There exists a user. Create one in db.
        if (!userLoading && user) checkAndSetUserDetails();
    }, [user]);

    // User is loading or user exists
    if (userLoading || (!userLoading && user)) return <LoadingScreen />;

    return (
        <div className="flex items-center justify-center flex-1">
            <div className="w-full max-w-sm rounded-lg mx-2 bg-white shadow-center-md overflow-hidden">
                <div className="bg-blue-500 px-4 py-8">

                    <h3 className="text-center font-light text-4xl text-white">
                        Login
                    </h3>
                </div>
                <div className="px-4 py-8">
                    {Object.entries(providers).map(([providerName, {provider,Icon}]) =>
                        <div onClick={() => signIn(provider)} key={providerName} className="hover:bg-gray-100 py-3 px-4 transition cursor-pointer flex items-center gap-4 rounded-md">
                            {Icon && <Icon className="w-8 h-8" />}
                            <p className="capitalize text-xl">{providerName}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
