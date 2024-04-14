'use client';
import { uploadPhoto } from '@/services/gallery';
import { CloudUpload } from '@mui/icons-material';
import { Box, Button } from '@mui/material';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';

export default function UploadPhotoButton() {
    const [image, setImage] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const maxImageSize = 2621440;

    const toggleLoading = () => {
        setLoading(prevLoading => !prevLoading);
    };

    return (
        <>
            <Box>
                <Button startIcon={<CloudUpload />} size='small' sx={{ position: 'relative', cursor: 'pointer' }}>
                    {image ? image?.name.slice(0, 25) + '...' : 'Selecionar Foto'}
                    <input
                        type='file'
                        accept='image/*'
                        style={{ position: 'absolute', opacity: 0, cursor: 'pointer' }}
                        required
                        onChange={e => {
                            if (e.target.files![0].size < maxImageSize) {
                                setImage((e.target as HTMLInputElement).files![0]);
                            } else {
                                alert('Imagem muito grande, escolha uma imagem menor que 2,5MB');
                            }
                        }}
                    />
                </Button>
                <Button
                    variant='contained'
                    size='small'
                    disabled={loading}
                    ref={buttonRef}
                    onClick={() => {
                        if (image) {
                            toggleLoading();
                            uploadPhoto(image, maxImageSize);
                        }
                    }}>
                    Adicionar
                </Button>
            </Box>
        </>
    );
}
