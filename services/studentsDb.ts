import { IStudent } from '@/model/Student';
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { db, storage } from './firebase';

export const addStudent = async (student: IStudent) => {
    const photoRef = ref(storage, `alunos/${student.photoName}`);
    const snapshot = await uploadBytes(photoRef, student.photoFile);
    const url = await getDownloadURL(snapshot.ref);
    await addDoc(collection(db, 'alunos'), {
        name: student.name,
        belt: student.belt,
        photoUrl: url,
    });
};

export const getStudents = async () => {
    const querySnapshot = await getDocs(collection(db, 'alunos'));
    const students: IStudent[] = [];
    querySnapshot.forEach(doc => {
        students.push({ ...doc.data(), id: doc.id } as IStudent);
    });
    return students;
};

export const deleteStudent = async (id: string, photoUrl: string) => {
    await deleteDoc(doc(db, 'alunos', id));
    await deleteObject(ref(storage, photoUrl));
};

export const updateStudent = async (student: IStudent) => {
    const { id, name, belt, photoFile } = student;
    if (photoFile) {
        const photoRef = ref(storage, `alunos/${photoFile.name}`);
        const snapshot = await uploadBytes(photoRef, photoFile);
        const url = await getDownloadURL(snapshot.ref);
        await updateDoc(doc(db, 'alunos', id), {
            name,
            belt,
            photoUrl: url,
        });
    } else {
        await updateDoc(doc(db, 'alunos', id), {
            name,
            belt,
        });
    }
};
