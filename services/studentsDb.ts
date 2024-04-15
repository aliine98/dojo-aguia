import { IStudent } from '@/model/Student';
import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { db, storage } from './firebase';
import { useRouter } from 'next/navigation';

export const addStudent = async (student: IStudent) => {
    const photoRef = ref(storage, `alunos/${student.photoName}`);
    uploadBytes(photoRef, student.photoFile).then(snapshot => {
        getDownloadURL(snapshot.ref).then((url: string) => {
            addDoc(collection(db, 'alunos'), {
                name: student.name,
                belt: student.belt,
                photoUrl: url,
                id: crypto.randomUUID(),
            }).then(() => {
                useRouter().refresh();
                // window.location.reload();
            });
        });
    });
};
