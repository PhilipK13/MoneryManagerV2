import React, { useEffect } from 'react'
import LoadingScreen from '@components/LoadingScreen';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from "next/router";
import { getAuth, signOut } from '@firebase/auth';

export default function Logout() {
    const router = useRouter();
    const auth = getAuth();
    const [user, loading] = useAuthState(auth);

    useEffect(() => {
        (async () => {
            await signOut(auth);
        })();
    }, []);

    useEffect(() => {
        // If there is no login
        if (!user && !loading) router.push("/");
    }, [user]);

    return <LoadingScreen />
}
