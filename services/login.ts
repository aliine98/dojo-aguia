import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export const signIn = (email: string, password: string, router: AppRouterInstance) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            router.refresh();
        })
        .catch(error => {
            console.error(error);
        });
};
