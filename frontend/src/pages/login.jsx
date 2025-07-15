import axios from 'axios'
import React, { useState } from 'react'
import {
    Box,
    Paper,
    Typography,
    TextField,
    Grid,
    Button,
    Alert
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';

const apiUrl = import.meta.env.VITE_API_URL;


export default function login(){
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [error, setError] = useState(''); //
    const [alertModal, setAlertModal] = useState(false); // Para mostrar errores de la API

    const navigate = useNavigate();

    const handleSubmit = async() => {
        // Aquí puedes ver los valores que se han guardado
        console.log('Usuario:', username);
        console.log('Contraseña:', password);
        const payload={
            'login_user': username,
            'login_password': password,
        }
        try{
            const response = await axios.post(`${apiUrl}/security/login`,payload);
            console.log('Respuesta de la API:', response);
            if (response.data) {
                const token = response.data.data; // Ajusta esto según la estructura real de tu respuesta de token
                localStorage.setItem('token', token);
                navigate('/dashboard'); // Redirige a una página protegida
            } else {
                setError(response.data.message || 'Error al iniciar sesión');
            }
        }catch(err){
            console.error('Error en el login:', err.response.data.message);
            // Manejo de errores de red o errores específicos del servidor
            if (err.response && err.response.data && err.response.data.message) {
                setError(err.response.data.message); // Error del servidor (ej. 401 Unauthorized)
            } else {
                setError('Ocurrió un error inesperado al intentar iniciar sesión.');
            }
            setAlertModal(true)
        }

    }

    return(
        <Box sx={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            minHeight:'100vh',
        }}>

            <Paper elevation={3} sx={{padding:5}}>
                {alertModal&&
                    <Alert icon={<PrivacyTipIcon fontSize="inherit" />} severity="warning" onClose={() => {setAlertModal(false)}}>
                    {error}
                    </Alert>
                }
                <Typography variant="h5" sx={{mb:2, mt:2}}>
                    Formulario Login
                </Typography>
                <Grid container spacing={3}>

                    <Grid size={12}>
                        <TextField fullWidth id="username" label="username" variant="filled" value={username} onChange={(e) => {setUsername(e.target.value)}}/>
                    </Grid>

                    <Grid size={12}>
                        <TextField fullWidth id="password" label="password" variant="filled" type='password' value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                    </Grid>

                    <Grid size={12} container direction="row" sx={{justifyContent:'center',alignItems:'center'}}>
                        <Button onClick={handleSubmit} sx={{width:'60%'}} variant="contained">Iniciar Sesion</Button>
                    </Grid>

                </Grid>
            </Paper>
        </Box>
    )
}