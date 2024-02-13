import React, { useState } from "react";
import {
    Box, Typography, Tooltip, Button, IconButton, Avatar,
    Stack, TextField, Menu, MenuItem, Divider,
    List, ListItem, ListItemIcon, ListItemText,
    Grid, Paper,
}
    from '@mui/material';
import Topbar from '../Components/AppBar/AppBar';
import { grey, red, green, yellow, blue } from "@mui/material/colors";

import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ForumIcon from '@mui/icons-material/Forum';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import VideoChatIcon from '@mui/icons-material/VideoChat';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SendIcon from '@mui/icons-material/Send';
import FavoriteIcon from '@mui/icons-material/Favorite';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import PublicIcon from '@mui/icons-material/Public';
import { useSelector } from "react-redux";



import './css/Perfil.css'

const visibilityes = ["Pública", "Amigos Proximos", "Família", "Privado"];
const actionsPost = ["Salvar Foto", "Propriedades", "Denunciar"];
const gridImages = [ImageGalery1, ImageGalery2, ImageGalery3, ImageGalery4, ImageGalery5, ImageBanner]


export default function Gaming() {

    const [visibility, setVisibility] = useState(null);
    const [postActions, setPostActions] = useState(null);
    const currentUser = useSelector((state) => state.userReducer.currentUser);


    const handleOpenVisibility = (event) => {
        setVisibility(event.currentTarget);
    }
    const handleCloseVisibility = () => {
        setVisibility(null);
    }


    const handleOpenActions = (event) => {
        setPostActions(event.currentTarget);
    }
    const handleCloseActions = () => {
        setPostActions(null);
    }



    return (
        <Box className="main-perfil-container">
            <Box className="app-topbar-container">
                <Topbar />
            </Box>


            <Box className="perfil-container">
                <Box component="img" src={'RandomImageURL'} className="cover-img" />

                <Box className="perfil-detalhes" >

                    <Box className="perfil-detalhe-esqurda">

                        <Box className="perfil-esquerda-row">

                            <Box component="img" src={'RandomImageURL'} className="perfil-esquerda-img" />

                            <Box>
                                <Typography component="h3">Sweet Nina - {currentUser?.name || 'Não Carregado'}</Typography>
                                <Typography paragraph>120 Amigos - 5 em Comum</Typography>

                                <Stack direction="row" spacing={0.5}>
                                    <Avatar sx={{ height: 24, width: 24 }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                    <Avatar sx={{ height: 24, width: 24 }} alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                                    <Avatar sx={{ height: 24, width: 24 }} alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                                    <Avatar sx={{ height: 24, width: 24 }} alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                                </Stack>

                            </Box>
                        </Box>

                    </Box>

                    <Box className="perfil-direita">

                        <Stack direction="row" spacing={1}>

                            <Button type="button" variant="contained"
                                startIcon={<PersonAddIcon sx={{ color: "black" }} />}
                                sx={{ color: grey[900], background: '#e4e6eb' }}>Amigo</Button>
                            <Button type="button" variant="contained" startIcon={<ForumIcon />} sx={{ color: '#fff' }}>Mensagens</Button>

                        </Stack>
                        <Stack direction='row' justifyContent="flex-end" mt={1}>

                            <IconButton >
                                <MoreHorizIcon sx={{ color: grey[900] }} />
                            </IconButton>
                        </Stack>

                    </Box>

                </Box>


                <Box className="info-perfil">

                    <Box className="info-coluna">

                        <Box className="perfil-introducao">
                            <Typography component="h3">Introdução</Typography>
                            <Typography paragraph className="texto-intruducao" marginTop={2}>
                                Bio da pagina de perfil do usuario
                                <FavoriteIcon size="small" sx={{ color: red[500] }} />
                            </Typography>
                            <Divider variant="middle" sx={{ margin: "25px 0" }} />

                            <List disablePadding>

                                <ListItem>
                                    <ListItemIcon>
                                        <WorkIcon size="medium" />
                                    </ListItemIcon>
                                    <ListItemText primary="Professional of Markting" />
                                </ListItem>

                                <ListItem>
                                    <ListItemIcon>
                                        <SchoolIcon size="small" />
                                    </ListItemIcon>
                                    <ListItemText primary="Theater " />
                                </ListItem>

                                <ListItem>
                                    <ListItemIcon>
                                        <PersonPinCircleIcon size="small" />
                                    </ListItemIcon>
                                    <ListItemText primary="Lives in LA" />
                                </ListItem>

                                <ListItem>
                                    <ListItemIcon>
                                        <PublicIcon size="small" />
                                    </ListItemIcon>
                                    <ListItemText primary="Went to EUA" />
                                </ListItem>


                                <ListItem>
                                    <ListItemIcon>
                                        <PublicIcon size="small" />
                                    </ListItemIcon>
                                    <ListItemText primary="From Caracas, Venezuela" />
                                </ListItem>

                            </List>

                        </Box>

                        <Box className="group-info-perfil">
                            <Box className="titulo-box">
                                <Typography component="h3">Fotos</Typography>
                                <Typography component="a" href="#">Todas as Fotos</Typography>
                            </Box>

                            <Box className="box-fotos-grid">

                                <Grid
                                    sx={{ flexGrow: 1, width: "100%", marginTop: '10px', marginBottom: '15px', padding: '0px 10px' }} container
                                    rowSpacing={1} columnSpacing={1}
                                    direction="row"
                                    justifyContent="space-evenly"
                                    alignItems="center"
                                    alignContent="center"
                                >
                                    {gridImages.map((value) => (
                                        <Grid key={value} item xs={4}>
                                            <Paper className="box-fotos"
                                                sx={{
                                                    height: 90,
                                                    width: 90,
                                                    backgroundColor: (theme) =>
                                                        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                                                }}
                                            >

                                                <Box component="img" src={'RandomImageURL'} className="box-fotos-img" /> </Paper>

                                        </Grid>
                                    ))}

                                </Grid>
                            </Box>
                        </Box>



                        <Box className="group-info-perfil">

                            <Box className="titulo-box">
                                <Typography component="h3">Amigos</Typography>
                                <Typography component="a" href="#">Todas os Amigos</Typography>

                            </Box>
                            <Box className="titulo-box">
                                <Typography paragraph marginBottom={0}>120 amigos (5) em comum</Typography>
                            </Box>


                            <Box className="box-fotos-grid">

                                <Grid
                                    sx={{ flexGrow: 1, width: "100%", marginTop: '10px', marginBottom: '15px', padding: '0px 10px' }} container
                                    rowSpacing={1} columnSpacing={1}
                                    direction="row"
                                    justifyContent="space-evenly"
                                    alignItems="center"
                                    alignContent="center"
                                >
                                    {gridImages.map((value) => (
                                        <Grid key={value} item xs={4} sx={{ width: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                            <Avatar alt={currentUser?.name || 'Não Carregado'} src="/static/images/avatar/1.jpg" className="info-amigos" sx={{ width: 50, height: 50 }} />
                                            <Typography paragraph sx={{ textAlign: 'center', fontSize: '14px', alignSelf: 'center' }}>{currentUser?.name || 'Não Carregado'}</Typography>
                                        </Grid>
                                    ))}

                                </Grid>
                            </Box>
                        </Box>

                    </Box>

                    <Box className="coluna-postagens">

                        <Box className="nova-postagem-container">

                            <Box className="perfil-usuario">
                                <Avatar alt={currentUser?.name || 'Não Carregado'} src="/static/images/avatar/1.jpg" className="publicacao-ref-avatar" />
                                <Box component="span">
                                    <Typography paragraph>{currentUser?.name || 'Não Carregado'}</Typography>

                                    <Stack direction="row">
                                        <Tooltip title="Visualização">
                                            <IconButton size="small" onClick={handleOpenVisibility}>
                                                <Typography component="small">Pública</Typography>
                                                <ArrowDropDownIcon fontSize="small" />
                                            </IconButton>
                                        </Tooltip>
                                    </Stack>

                                    <Menu
                                        sx={{ mt: '10px' }}
                                        anchorEl={visibility}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right'
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right'
                                        }}
                                        open={Boolean(visibility)}
                                        onClose={handleCloseVisibility}
                                    >
                                        {visibilityes.map((visibility) => (
                                            <MenuItem key={visibility} onClick={handleCloseVisibility}>
                                                <Typography textAlign="center">{visibility}</Typography>
                                            </MenuItem>
                                        ))}

                                    </Menu>

                                </Box>
                            </Box>

                            <Box className="campo-texto-container">
                                <TextField type="text"
                                    fullWidth
                                    multiline
                                    variant="standard"
                                    rows={3}
                                    label="O que você está pensando..."
                                    placeholder="O que você está pensando?" />

                                <Stack
                                    direction="row"
                                >
                                    <Tooltip title="Enviar">
                                        <IconButton >
                                            <SendIcon fontSize="medium" sx={{ color: blue[500] }} />
                                        </IconButton>
                                    </Tooltip>

                                </Stack>

                            </Box>

                            <Box className="add-links-post">
                                <Stack
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                    spacing={0.5}
                                    sx={{ ml: "60px" }}>

                                    <IconButton  >
                                        <VideoChatIcon fontSize="medium" sx={{ color: red[500] }} />
                                        <Typography component="span">Iniciar Live</Typography>
                                    </IconButton>

                                    <IconButton >
                                        <PhotoSizeSelectActualIcon fontSize="medium" sx={{ color: green[500] }} />
                                        <Typography component="span"> Foto/Video </Typography>
                                    </IconButton>

                                    <IconButton  >
                                        <AddReactionIcon fontSize="medium" sx={{ color: yellow[500] }} />
                                        <Typography component="span">Ação</Typography>
                                    </IconButton>

                                </Stack>
                            </Box>

                        </Box>

                        <Box className="postagens-container">

                            <Box className="postagem-linha">

                                <Box className="perfil-usuario">
                                    <Avatar alt="Nina" src="/static/images/avatar/1.jpg" className="publicacao-ref-avatar" />
                                    <Box component="span">
                                        <Typography paragraph>Nome de Usuario</Typography>
                                        <Typography component="span">24 Julho de 2023, 13:40 pm</Typography>
                                    </Box>
                                </Box>


                                <Stack direction="row" spacing={2}>
                                    <Tooltip title="Opções da postagem">
                                        <IconButton aria-label="Opções" onClick={handleOpenActions} >
                                            <MoreVertIcon />
                                        </IconButton>
                                    </Tooltip>
                                </Stack>

                                <Menu
                                    sx={{ mt: '10px' }}
                                    anchorEl={postActions}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right'
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right'
                                    }}
                                    open={Boolean(postActions)}
                                    onClose={handleCloseActions}
                                >
                                    {actionsPost.map((action) => (
                                        <MenuItem key={action} onClick={handleCloseActions}>
                                            <Typography textAlign="center">{action}</Typography>
                                        </MenuItem>
                                    ))}

                                </Menu>

                            </Box>

                            <Typography paragraph className="texto-postagem" sx={{ m: "15px 0" }}>
                                Text aleatorio para testar inclusão de postagens com descrições feitas
                                pelo
                                <Typography component="span"> @usuario</Typography> ao realizar uma nova postagem.
                                <Typography component="a" href="#">#Este tem um link incluso</Typography>
                                <Typography component="a" href="#">#Alguma coisa do Youtube</Typography>
                            </Typography>

                            <Box component="img" className="postagem-img" src={'RandomImageURL'} />
                            <Box className="postagem-linha">
                                <Box className="metricas-postagem-icones">

                                    <Stack
                                        direction="row"
                                        justifyContent="center"
                                        alignItems="center"
                                        spacing={2}>

                                        <IconButton  >
                                            <ThumbUpIcon fontSize="small" sx={{ color: blue[500] }} />
                                            <Typography component="span">120</Typography>
                                        </IconButton>

                                        <IconButton >
                                            <ForumIcon fontSize="small" />
                                            <Typography component="span">120</Typography>

                                        </IconButton>

                                        <IconButton  >
                                            <ShareIcon fontSize="small" />
                                            <Typography component="span">120</Typography>

                                        </IconButton>
                                    </Stack>

                                </Box>

                                <Box className="postagem-icone-perfil">
                                    <Avatar alt="Gallard Galax" src="/static/images/avatar/1.jpg" sx={{ width: "20px", height: "20px" }} className="postagem-main-avatar" />
                                    <Stack direction="row">
                                        <IconButton size="small" >
                                            <ArrowDropDownIcon fontSize="small" />
                                        </IconButton>
                                    </Stack>

                                </Box>
                            </Box>
                        </Box>

                        <Box className="postagens-container">

                            <Box className="postagem-linha">

                                <Box className="perfil-usuario">
                                    <Avatar alt="Nina" src="/static/images/avatar/1.jpg" className="publicacao-ref-avatar" />
                                    <Box component="span">
                                        <Typography paragraph>Nome de Usuario</Typography>
                                        <Typography component="span">24 Julho de 2023, 13:40 pm</Typography>
                                    </Box>
                                </Box>


                                <Stack direction="row" spacing={2}>
                                    <Tooltip title="Opções da postagem">
                                        <IconButton aria-label="Opções" onClick={handleOpenActions} >
                                            <MoreVertIcon />
                                        </IconButton>
                                    </Tooltip>
                                </Stack>


                                <Menu
                                    sx={{ mt: '10px' }}
                                    anchorEl={postActions}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right'
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right'
                                    }}
                                    open={Boolean(postActions)}
                                    onClose={handleCloseActions}
                                >
                                    {actionsPost.map((action) => (
                                        <MenuItem key={action} onClick={handleCloseActions}>
                                            <Typography textAlign="center">{action}</Typography>
                                        </MenuItem>
                                    ))}

                                </Menu>

                            </Box>

                            <Typography paragraph className="texto-postagem" sx={{ m: "15px 0" }}>
                                Text aleatorio para testar inclusão de postagens com descrições feitas
                                pelo
                                <Typography component="span"> @usuario</Typography> ao realizar uma nova postagem.
                                <Typography component="a" href="#">#Este tem um link incluso</Typography>
                                <Typography component="a" href="#">#Alguma coisa do Youtube</Typography>
                            </Typography>

                            <Box component="img" className="postagem-img" src={'RandomImageURL'} />
                            <Box className="postagem-linha">
                                <Box className="metricas-postagem-icones">

                                    <Stack
                                        direction="row"
                                        justifyContent="center"
                                        alignItems="center"
                                        spacing={2}>

                                        <IconButton  >
                                            <ThumbUpIcon fontSize="small" sx={{ color: blue[500] }} />
                                            <Typography component="span">120</Typography>
                                        </IconButton>

                                        <IconButton >
                                            <ForumIcon fontSize="small" />
                                            <Typography component="span">120</Typography>

                                        </IconButton>

                                        <IconButton  >
                                            <ShareIcon fontSize="small" />
                                            <Typography component="span">120</Typography>

                                        </IconButton>
                                    </Stack>

                                </Box>

                                <Box className="postagem-icone-perfil">
                                    <Avatar alt="Gallard Galax" src="/static/images/avatar/1.jpg" sx={{ width: "20px", height: "20px" }} className="postagem-main-avatar" />
                                    <Stack direction="row">
                                        <IconButton size="small" >
                                            <ArrowDropDownIcon fontSize="small" />
                                        </IconButton>
                                    </Stack>

                                </Box>
                            </Box>
                        </Box>

                        <Box className="postagens-container">

                            <Box className="postagem-linha">

                                <Box className="perfil-usuario">
                                    <Avatar alt="Nina" src="/static/images/avatar/1.jpg" className="publicacao-ref-avatar" />
                                    <Box component="span">
                                        <Typography paragraph>Nome de Usuario</Typography>
                                        <Typography component="span">24 Julho de 2023, 13:40 pm</Typography>
                                    </Box>
                                </Box>


                                <Stack direction="row" spacing={2}>
                                    <Tooltip title="Opções da postagem">
                                        <IconButton aria-label="Opções" onClick={handleOpenActions} >
                                            <MoreVertIcon />
                                        </IconButton>
                                    </Tooltip>
                                </Stack>


                                <Menu
                                    sx={{ mt: '10px' }}
                                    anchorEl={postActions}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right'
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right'
                                    }}
                                    open={Boolean(postActions)}
                                    onClose={handleCloseActions}
                                >
                                    {actionsPost.map((action) => (
                                        <MenuItem key={action} onClick={handleCloseActions}>
                                            <Typography textAlign="center">{action}</Typography>
                                        </MenuItem>
                                    ))}

                                </Menu>

                            </Box>

                            <Typography paragraph className="texto-postagem" sx={{ m: "15px 0" }}>
                                Text aleatorio para testar inclusão de postagens com descrições feitas
                                pelo
                                <Typography component="span"> @usuario</Typography> ao realizar uma nova postagem.
                                <Typography component="a" href="#">#Este tem um link incluso</Typography>
                                <Typography component="a" href="#">#Alguma coisa do Youtube</Typography>
                            </Typography>

                            <Box component="img" className="postagem-img" src={'RandomImageURL'} />
                            <Box className="postagem-linha">
                                <Box className="metricas-postagem-icones">

                                    <Stack
                                        direction="row"
                                        justifyContent="center"
                                        alignItems="center"
                                        spacing={2}>

                                        <IconButton  >
                                            <ThumbUpIcon fontSize="small" sx={{ color: blue[500] }} />
                                            <Typography component="span">120</Typography>
                                        </IconButton>

                                        <IconButton >
                                            <ForumIcon fontSize="small" />
                                            <Typography component="span">120</Typography>

                                        </IconButton>

                                        <IconButton  >
                                            <ShareIcon fontSize="small" />
                                            <Typography component="span">120</Typography>

                                        </IconButton>
                                    </Stack>

                                </Box>

                                <Box className="postagem-icone-perfil">
                                    <Avatar alt="Gallard Galax" src="/static/images/avatar/1.jpg" sx={{ width: "20px", height: "20px" }} className="postagem-main-avatar" />
                                    <Stack direction="row">
                                        <IconButton size="small" >
                                            <ArrowDropDownIcon fontSize="small" />
                                        </IconButton>
                                    </Stack>

                                </Box>
                            </Box>
                        </Box>

                        <Box className="postagens-container">

                            <Box className="postagem-linha">

                                <Box className="perfil-usuario">
                                    <Avatar alt="Nina" src="/static/images/avatar/1.jpg" className="publicacao-ref-avatar" />
                                    <Box component="span">
                                        <Typography paragraph>Nome de Usuario</Typography>
                                        <Typography component="span">24 Julho de 2023, 13:40 pm</Typography>
                                    </Box>
                                </Box>


                                <Stack direction="row" spacing={2}>
                                    <Tooltip title="Opções da postagem">
                                        <IconButton aria-label="Opções" onClick={handleOpenActions} >
                                            <MoreVertIcon />
                                        </IconButton>
                                    </Tooltip>
                                </Stack>


                                <Menu
                                    sx={{ mt: '10px' }}
                                    anchorEl={postActions}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right'
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right'
                                    }}
                                    open={Boolean(postActions)}
                                    onClose={handleCloseActions}
                                >
                                    {actionsPost.map((action) => (
                                        <MenuItem key={action} onClick={handleCloseActions}>
                                            <Typography textAlign="center">{action}</Typography>
                                        </MenuItem>
                                    ))}

                                </Menu>

                            </Box>

                            <Typography paragraph className="texto-postagem" sx={{ m: "15px 0" }}>
                                Text aleatorio para testar inclusão de postagens com descrições feitas
                                pelo
                                <Typography component="span"> @usuario</Typography> ao realizar uma nova postagem.
                                <Typography component="a" href="#">#Este tem um link incluso</Typography>
                                <Typography component="a" href="#">#Alguma coisa do Youtube</Typography>
                            </Typography>

                            <Box component="img" className="postagem-img" src={'RandomImageURL'} />
                            <Box className="postagem-linha">
                                <Box className="metricas-postagem-icones">

                                    <Stack
                                        direction="row"
                                        justifyContent="center"
                                        alignItems="center"
                                        spacing={2}>

                                        <IconButton  >
                                            <ThumbUpIcon fontSize="small" sx={{ color: blue[500] }} />
                                            <Typography component="span">120</Typography>
                                        </IconButton>

                                        <IconButton >
                                            <ForumIcon fontSize="small" />
                                            <Typography component="span">120</Typography>

                                        </IconButton>

                                        <IconButton  >
                                            <ShareIcon fontSize="small" />
                                            <Typography component="span">120</Typography>

                                        </IconButton>
                                    </Stack>

                                </Box>

                                <Box className="postagem-icone-perfil">
                                    <Avatar alt="Gallard Galax" src="/static/images/avatar/1.jpg" sx={{ width: "20px", height: "20px" }} className="postagem-main-avatar" />
                                    <Stack direction="row">
                                        <IconButton size="small" >
                                            <ArrowDropDownIcon fontSize="small" />
                                        </IconButton>
                                    </Stack>

                                </Box>
                            </Box>
                        </Box>

                        <Divider />

                        <Button type="button" variant="outlined"
                            sx={{
                                width: "40%",
                                margin: "auto",
                                mb: "20px",
                                mt: '10px'

                            }}>Postagens Anteriores</Button>

                        <Box component="footer" className="footer">
                            <Typography paragraph>Copyright 2023 - Social Gaming</Typography>
                        </Box>

                    </Box>
                </Box>

            </Box>

        </Box>
    )
}