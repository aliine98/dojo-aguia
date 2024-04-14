import { list, ref, ListResult, StorageReference, getDownloadURL, uploadBytes, deleteObject } from 'firebase/storage';
import { storage } from './firebase';

export const getNewestPhotos = async (): Promise<ListResult> => {
    const galleryRef: StorageReference = ref(storage, 'galeria');
    return await list(galleryRef, { maxResults: 3 });
};

export const uploadPhoto = async (image: File | null, maxImageSize: number) => {
    if (image === null) return;
    if (image.size > maxImageSize) return;
    const imageRef = ref(storage, `galeria/${image?.name}`);
    uploadBytes(imageRef, image).then(() => {
        window.location.reload();
    });
};

export const deletePhoto = async (photo: string) => {
    const imageRef = ref(storage, photo);
    await deleteObject(imageRef);
};
