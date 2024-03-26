import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { app } from './firebase';

export const signIn = (email: string, password: string, router: AppRouterInstance) => {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            router.refresh();
        })
        .catch(error => {
            console.error(error);
        });
};

export const sendPasswordReset = (email: string, router: AppRouterInstance, inputRef: React.MutableRefObject<HTMLDivElement>) => {
    sendPasswordResetEmail(getAuth(app), email).then(() => {
        inputRef.current.closest('div')!.querySelector('input')!.value = '';
        router.refresh();
    });
};
