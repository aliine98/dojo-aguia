import { theme } from '@/mui-theme.config';
import { app } from '@/services/firebase';
import { deleteStudent, updateStudent } from '@/services/studentsDb';
import { Card, IconButton, CardContent, Typography, Divider, Dialog, TextField, CardActions, Button, DialogContent, MenuItem } from '@mui/material';
import { getAuth } from 'firebase/auth';
import DeleteIcon from '@mui/icons-material/Delete';
import Image from 'next/image';
import EditIcon from '@mui/icons-material/Edit';
import { IStudent } from '@/model/Student';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function StudentCard({ student }: { student: IStudent }) {
    const { name, belt, photoUrl, id } = student;
    const user = getAuth(app).currentUser;
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [btnDisabled, setBtnDisabled] = useState(false);
    const [newStudentInfo, setNewStudentInfo] = useState({ id: id, name: name, belt: belt } as IStudent);

    return (
        <>
            <Card sx={{ width: '232px', cursor: 'pointer', position: 'relative', overflow: 'initial' }}>
                {Boolean(user) && (
                    <IconButton
                        sx={{
                            position: 'absolute',
                            top: '-16px',
                            right: '-12px',
                            backgroundColor: theme.palette.grey.A700,
                            ':hover': {
                                backgroundColor: theme.palette.error.main,
                            },
                        }}
                        onClick={async () => {
                            await deleteStudent(id, photoUrl);
                            router.refresh();
                        }}
                        aria-label='Excluir aluno'>
                        <DeleteIcon fontSize='inherit' />
                    </IconButton>
                )}
                <CardContent>
                    <Image src={photoUrl} title={'Foto de ' + name} alt={'Foto de ' + name} width={200} height={200} style={{ objectFit: 'cover' }} />
                    <Typography variant='body1' sx={{ mb: 1 }}>
                        Nome: {name}
                    </Typography>
                    <Divider />
                    <Typography variant='body1' sx={{ mt: 1 }}>
                        Faixa: {belt}
                    </Typography>
                    {Boolean(user) && (
                        <Button variant='contained' sx={{ mt: 2 }} onClick={() => setOpen(true)} startIcon={<EditIcon />}>
                            Editar
                        </Button>
                    )}
                </CardContent>
            </Card>
            {Boolean(user) && (
                <Dialog open={open} onClose={() => setOpen(false)}>
                    <DialogContent>
                        <form style={{ display: 'grid' }}>
                            <Typography variant='body1' sx={{ mb: 0 }}>
                                Nome:
                            </Typography>
                            <TextField defaultValue={name} onChange={e => setNewStudentInfo({ ...newStudentInfo, name: e.target.value })} />
                            <Typography variant='body1' sx={{ mt: 2, mb: 0 }}>
                                Faixa:
                            </Typography>
                            <TextField
                                defaultValue={belt}
                                value={newStudentInfo.belt}
                                select
                                onChange={e => setNewStudentInfo({ ...newStudentInfo, belt: e.target.value })}>
                                <MenuItem value=''>Selecione</MenuItem>
                                <MenuItem value='Branca'>Branca</MenuItem>
                                <MenuItem value='Laranja'>Laranja</MenuItem>
                                <MenuItem value='Azul'>Azul</MenuItem>
                                <MenuItem value='Amarela'>Amarela</MenuItem>
                                <MenuItem value='Verde'>Verde</MenuItem>
                                <MenuItem value='Marrom'>Marrom</MenuItem>
                                <MenuItem value='Preta'>Preta</MenuItem>
                            </TextField>
                            <Typography variant='body1' sx={{ mt: 2, mb: 0 }}>
                                Foto:
                            </Typography>
                            <TextField
                                type='file'
                                onChange={e => setNewStudentInfo({ ...newStudentInfo, photoFile: (e.target as HTMLInputElement).files![0] })}
                                sx={{
                                    'input[type="file"]': {
                                        pl: '142px',
                                    },
                                    'input[type="file"]::file-selector-button': {
                                        color: theme.palette.primary.contrastText,
                                        backgroundColor: theme.palette.primary.main,
                                        position: 'absolute',
                                        left: 0,
                                        top: 0,
                                        bottom: 0,
                                        border: 'none',
                                        borderRadius: '4px',
                                    },
                                }}
                            />
                            <Button
                                variant='contained'
                                disabled={btnDisabled}
                                sx={{ mt: 2 }}
                                onClick={async () => {
                                    setBtnDisabled(true);
                                    await updateStudent(newStudentInfo);
                                    window.location.reload();
                                }}>
                                Salvar
                            </Button>
                        </form>
                    </DialogContent>
                </Dialog>
            )}
        </>
    );
}
