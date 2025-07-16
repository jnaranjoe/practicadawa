import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {
    Box,
    Paper,
    Typography,
    TextField,
    Grid,
    Button,
    Alert
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import { useNavigate } from 'react-router-dom';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';

const apiUrl = import.meta.env.VITE_API_URL;


export default function usuarios(){
    // Declarar useStates - Datos
    const [DataList, setDataList] = useState([])

    // Declarar useStates - Modals
    const [messageModal, setMessageModal] = useState('')

    // Declarar columnas de DataGrid
    const columns = [
        { field: 'user_id', headerName: 'id', width: 90 },
        {
            field: 'user_login',
            headerName: 'user login',
            width: 150,
            editable: false,
        },
        {
            field: 'user_password',
            headerName: 'password',
            width: 150,
            editable: false,
        },
        {
            field: 'user_name',
            headerName: 'Name',
            type: 'number',
            width: 110,
            editable: false,
        },
    ];

    // Obtener usuarios
    useEffect(()=>{
        try{
            const token = localStorage.getItem('token'); // Obtener el token de localStorage
    
            if (!token) {
                // Si no hay token, redirigir al login o mostrar un error
                setError('No autorizado: por favor, inicie sesión.');
                setLoading(false);
                navigate('/login'); // Redirigir al login
                return;
            }
    
            const getUsers = async() =>{
                const response = await axios.get(`${apiUrl}/user/list`, {
                    headers: {
                        Authorization: `Bearer ${token}`, // Añadir el token al encabezado Authorization
                    },
                });
                if (response.data.result){
                    console.log(response.data)
                    setDataList(response.data.data)
                }else{
                    setMessageModal(response.data.message)
                }
            }
        }catch(err){
            console.error('Error al obtener usuarios:', err.response ? err.response.data : err);
            if (err.response && err.response.status === 401) {
                setError('Sesión expirada o no autorizada. Por favor, inicie sesión de nuevo.');
                localStorage.removeItem('token'); // Eliminar token inválido
                setAlertModal(true);
                navigate('/login');
            }
        }
        getUsers();
    },[])

    return(
        <Box sx={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            minHeight:'100vh',
        }}>
            <Paper elevation={3} sx={{padding:5,width:'60%'}}>
                <Box>
                    <DataGrid
                        getRowId={(row) => row.user_id}
                        rows={DataList}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: {
                                pageSize: 5,
                                },
                            },
                        }}
                        pageSizeOptions={[5]}
                        checkboxSelection
                        disableRowSelectionOnClick
                    />
                </Box>
            </Paper>
        </Box>
    )
}