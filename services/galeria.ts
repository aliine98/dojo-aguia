import { list, ref, ListResult, StorageReference } from 'firebase/storage';
import { storage } from './firebase';

export const getNewestPhotos = async (): Promise<ListResult> => {
    const galleryRef: StorageReference = ref(storage, 'galeria');
    return await list(galleryRef, { maxResults: 3 });
};
