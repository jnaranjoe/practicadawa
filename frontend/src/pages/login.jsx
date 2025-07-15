import axios from 'axios'
import React from 'react'
import {
    Box,
    Paper
} from '@mui/material';


export default function login(){
    return(
        <Box sx={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            alignContent:'center',
            // minWidth:'100hw',
            minHeight:'100hv',
            width:'100%'
        }}>
            <Paper elevation={3} sx={{padding:5}}>
                Iniciar Sesion
            </Paper>
        </Box>
    )
}