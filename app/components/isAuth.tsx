'use client';
import React, { useEffect } from 'react';
import { redirect } from 'next/navigation';
import { getAuth } from 'firebase/auth';
import { app } from '@/services/firebase';

export default function isAuth(Component: React.FC) {
    return function IsAuth(props: React.ComponentProps<any>) {
        const auth = getAuth(app).currentUser;

        useEffect(() => {
            if (!auth) {
                return redirect('/');
            }
        }, []);

        if (!auth) {
            return null;
        }

        return <Component {...props} />;
    };
}
