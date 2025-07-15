import axios from 'axios'
import React, { useState } from 'react'
import {
    Box,
    Paper,
    Typography,
    TextField,
    Grid,
    Button,
} from '@mui/material';


export default function login(){
    const [username,setusername] = useState('')
    const [password,setPassword] = useState('')

    return(
        <Box sx={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            minHeight:'100vh',
        }}>
            <Paper elevation={3} sx={{padding:5}}>
                <Typography variant="h5">
                    Formulario Login
                </Typography>
                <Grid container spacing={2}>

                    <Grid size={12}>
                        <TextField fullWidth id="username" label="username" variant="filled" />
                    </Grid>

                    <Grid size={12}>
                        <TextField fullWidth id="password" label="password" variant="filled" type='password' value={username} onChange={(e) => srt}/>
                    </Grid>

                    <Grid size={12} container direction="row" sx={{justifyContent:'center',alignItems:'center'}}>
                        <Button sx={{width:'60%'}} variant="contained">Iniciar Sesion</Button>
                    </Grid>

                </Grid>
            </Paper>
        </Box>
    )
}