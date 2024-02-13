import React, { useState } from "react";
import { Box, FormControl, TextField, InputAdornment, Select, MenuItem, Button, Typography } from "@mui/material";
import { AccountCircle, Send, PermIdentity, CalendarMonth, Key, LockOpen, Transgender } from "@mui/icons-material"
import UpBar from '../Components/AppBar/AppBar'
import { Request as Controller, GetInfoUser as InfoUser } from './controllers/LoginController'
import { blue } from "@mui/material/colors";
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { doLogin, teste } from '../Redux/user/slice';
import { FindItemStorage } from '../services/SessionStorage'

import './css/Login.css'

/*
https://www.youtube.com/watch?v=Bm50j2CqCXg & https://www.youtube.com/watch?v=tKYezizR39I
https://www.youtube.com/watch?v=ZSBZ4QrfETM
*/


export default function Login() {

    const [showSignIn, setSignIn] = useState(true);
    const [showSignUp, setSignUp] = useState(false);
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [inputs, setInputs] = useState({});

    const [age, setAge] = React.useState('');

    const history = useNavigate();
    const dispatch = useDispatch();
    //const loginStatus = null;

    function show() {
        setSignIn(false)
        setSignUp(true)
    }

    function hide() {
        setSignIn(true)
        setSignUp(false)
    }

    const handleInputs = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))

    }

    function trylogin(event) {
        event.preventDefault();

        if (user === '' || password === '') return null;

        var data = {
            email: user,
            password: password
        };

        Controller(data).then(function (status) {

        
            UpdateUserDefinitions();
            if (FindItemStorage('Token')) {
                setTimeout(() => {
                    
                    history("/Home")
              
                }, 1000)
            }
        })
    }

    function newUser(event) {
        event.preventDefault();
        console.log(inputs)

    }

    function UpdateUserDefinitions() {
        InfoUser().then(function (data) {

            const state = [...data].shift();

            dispatch(doLogin({ avatarURL: state.avatarURL, email: state.email, id: state.id, name: state.name, userName: state.userName}));
            
        })
    }
    const LoginStatus = function () {
        return useSelector((state) => state.userReducer.isAuth)
    }

    return (
        <Box className='container-login'>

            <Box className='upbar-position'>
                <UpBar />
            </Box>

            <Box className='content'>


                {showSignIn === true &&

                    <FormControl component='form' onSubmit={trylogin} variant="standard" className='form'>

                        <Box className="welcome">
                            <Box component="img" className="presentation-logo" width="200px" height="200px" src="#" />
                            <Box className="welcome-mensage">
                                <Typography component="span">
                                    <Typography component="p" sx={{ fontWeight: 600 }}> Bem Vindo ao Socials Network </Typography>
                                    <Typography component="p" sx={{ fontWeight: 300 }}>
                                        Aqui você pode esperar encontrar pessoas para seguir, compartilhar e dar risadas
                                        com postagens e streaming de seus amigos e influenciadores.
                                    </Typography>
                                </Typography>
                            </Box>


                        </Box>

                        <Box className="email-field">
                            <TextField
                                label="Email"
                                onChange={(e) => setUser(e.target.value)}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircle sx={{ color: blue[800] }} />
                                        </InputAdornment>
                                    ),
                                }}
                                variant="standard"
                                type="email"
                                fullWidth={true}
                            />
                        </Box>

                        <Box className="pass-field">
                            <TextField
                                label="Password"
                                onChange={(e) => setPassword(e.target.value)}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Key sx={{ color: blue[800] }} />
                                        </InputAdornment>
                                    ),
                                }}
                                variant="standard"
                                type="password"
                                fullWidth={true}
                            />
                        </Box>

                        <Box className="send-button">
                            <Button
                                type="submit"
                                variant="contained" sx={{
                                    width: '50%'
                                }} endIcon={<Send />}>
                                Entrar
                            </Button>
                        </Box>

                        <Typography component="a" sx={{ cursor: 'pointer', color: '#5DADE2', mt: '20px', textAlign: 'center' }} onClick={show}>Cadastre-se</Typography>
                    </FormControl>

                }

                {showSignUp === true &&

                    <FormControl component='form' onSubmit={newUser} variant="standard" className='form-signup'>

                        <Box className="welcome">
                            <Box component="img" className="presentation-logo" width="120px" height="120px" src="#" />
                            <Box className="welcome-mensage">
                                <Typography component="span">
                                    <Typography component="p" sx={{ fontWeight: 600 }}>Bem Vindo ao Socials Network</Typography>
                                    <Typography component="p">Registre-se para ter acesso a diversos recursos da plataforma</Typography>
                                </Typography>
                            </Box>
                        </Box>

                        <Box className="fields-signUp">

                            <TextField
                                label="Nome"
                                name="name"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PermIdentity />
                                        </InputAdornment>
                                    ),
                                }}
                                variant="standard"
                                type="text"
                                className="user-field"
                                value={inputs.name || ''}
                                onChange={handleInputs}

                            />

                            <TextField
                                label="Sobrenome"
                                name="middlename"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PermIdentity />
                                        </InputAdornment>
                                    ),
                                }}
                                variant="standard"
                                type="text"
                                className="user-field"
                                value={inputs.middlename || ''}
                                onChange={handleInputs}
                            />

                        </Box>

                        <Box className="fields-signUp">
                            <TextField
                                label="data de nascimento"
                                name="dataNascimento"
                                sx={{
                                    /*  width: '220px' */
                                }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <CalendarMonth />
                                        </InputAdornment>
                                    ),
                                }}
                                variant="standard"
                                type="date"
                                className="user-field"
                                value={inputs.dataNascimento || ''}
                                onChange={handleInputs}
                            />

                            <TextField
                                label="Nome de usuario"
                                name="username"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            @
                                        </InputAdornment>
                                    ),
                                }}
                                variant="standard"
                                type="text"
                                className="user-field"
                                value={inputs.username || ''}
                                onChange={handleInputs}
                            />
                        </Box>

                        <Box className="fields-signUp">
                            <TextField
                                label="Email"
                                name="email"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircle />
                                        </InputAdornment>
                                    ),
                                }}
                                variant="standard"
                                type="email"
                                className="user-field"
                                value={inputs.email || ''}
                                onChange={handleInputs}
                            />

                            <TextField
                                label="Senha"
                                name="password"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Key />
                                        </InputAdornment>
                                    ),
                                }}
                                variant="standard"
                                type="password"
                                className="user-field"
                                value={inputs.password || ''}
                                onChange={handleInputs}
                            />
                        </Box>

                        <Box className="fields-signUp">
                            <TextField
                                label="Confirme a senha"
                                name="passConfirmation"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LockOpen />
                                        </InputAdornment>
                                    ),
                                }}
                                variant="standard"
                                type="password"
                                className="user-field"
                                value={inputs.passConfirmation || ''}
                                onChange={handleInputs}

                            />

                            <Select
                                /*  value={age} */
                                name="Genre"
                                /*  onChange={handleChange} */
                                label="Genero"
                                className=" user-field"
                                startAdornment={<InputAdornment position="start"><Transgender /></InputAdornment>}
                                value={inputs.Genre || 4}
                                onChange={handleInputs}
                            >
                                <MenuItem value={4}>
                                    <em>Não especificado</em>
                                </MenuItem>
                                <MenuItem value={0}>Homem</MenuItem>
                                <MenuItem value={1}>Mulher</MenuItem>
                                <MenuItem value={2}>Bissexual</MenuItem>
                                <MenuItem value={3}>Homosexual</MenuItem>


                            </Select>

                        </Box>

                        <Box className="send-button">
                            <Button variant="contained" sx={{
                                width: '50%'
                            }} endIcon={<Send />}
                                type="submit"
                            >
                                Cadastrar
                            </Button>
                        </Box>


                        <Typography component="a" sx={{ cursor: 'pointer', color: '#5DADE2', mt: '20px', textAlign: 'center' }} onClick={hide}>Já possui conta?</Typography>
                    </FormControl>
                }

            </Box>

        </Box>
    )
}