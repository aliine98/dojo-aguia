import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { app } from './firebase';

export const signIn = async (email: string, password: string) => {
    const auth = getAuth(app);
    await signInWithEmailAndPassword(auth, email, password);
};

export const sendPasswordReset = (email: string, inputRef: React.RefObject<HTMLDivElement>) => {
    sendPasswordResetEmail(getAuth(app), email).then(() => {
        inputRef.current!.closest('div')!.querySelector('input')!.value = '';
    });
};
