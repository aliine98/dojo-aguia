import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import 'dotenv/config';

const firebaseConfig = {
    apiKey: 'AIzaSyC5COehB_eWkhG_Er72Nr3FAlwQLwZWBLA',
    authDomain: 'dojo-aguia.firebaseapp.com',
    projectId: 'dojo-aguia',
    storageBucket: 'dojo-aguia.appspot.com',
    messagingSenderId: '613676028243',
    appId: '1:613676028243:web:5a4843003be12b63b151a6',
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
