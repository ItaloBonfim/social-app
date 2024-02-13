import React, { useState, useEffect } from "react";
import AppBar from "../Components/AppBar/AppBar";
import SidebarV2 from '../Components/SideBar/SideBar';
import {
    Box, Stack, Button, TextField, IconButton, Avatar, Typography, Tooltip, Menu, MenuItem, FormControl
} from "@mui/material";

import {
    LocationOn as LocationOnIcon,
    ArrowDropDown as ArrowDropDownIcon,
    VideoChat as VideoChatIcon,
    PhotoSizeSelectActual as PhotoSizeSelectActualIcon,
    AddReaction as AddReactionIcon,
    MoreVert as MoreVertIcon,
    Send as SendIcon
} from '@mui/icons-material'

import ImagePost from '../static/Ibagens/Rabuda37.PNG';
import ImageAds from '../static/Ibagens/SweetNina54.PNG';
import Image1 from '../static/Ibagens/Rabuda08.PNG';
import Image2 from '../static/Ibagens/SweetNina39.PNG';
import Image3 from '../static/Ibagens/SweetNina44.PNG';
import Image4 from '../static/Ibagens/SweetNina01.PNG';

import './css/Home.css'
import { red, green, yellow, blue } from "@mui/material/colors";

import Dialog from '../Components/Dialog/Publication/Dialog'
import Popover from '../Components/Popover/Popover'

import { useSelector, useDispatch } from 'react-redux'
import { contentsPublications } from '../Redux/publication/slice'
import { searchRecentlyPublication, NewPost } from './controllers/PublicationController';



//https://www.youtube.com/watch?v=NljIHlZRTTE

//precisa que a propriedade stick funcione ele pode estar ligada a propriedade top

const visibilityes = ["Pública", "Amigos Proximos", "Família", "Privado"];
const actionsPost = ["Salvar Foto", "Propriedades", "Denunciar"];
// const reactions = null; // Criar um metodo para preencher os dados

export default function Home() {
    const dispatch = useDispatch();
    const [visibility, setVisibility] = useState(null);
    const [postActions, setPostActions] = useState(null);
    const [post, newPost] = useState('');
    const [showAll, setShow] = useState(false);

    const currentUser = useSelector((state) => state.userReducer.currentUser);
    const publication = useSelector((state) => state.publicationReducer.publications.publication);

    useEffect(() => {

        searchRecentlyPublication().then((data) => {

            dispatch(contentsPublications(data))

        })

        // dispatch(checkCredencials());

        //  LoadingCurrentUser();
    }, []);



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

    function handleShowOn() {
        setShow(true);
    }

    function handleShowOff() {
        setShow(false);
    }

    function ValidContentText(text) {
        if (text.length > 120 && showAll === false)
            return text.slice(0, 120)

        return text
    }

    function sendNewPost(event) {
        event.preventDefault();

        if (!post.length > 0) alert('digite algo');

        var data = {
            imageURL: '',
            midiaURL: '',
            textValue: post
        }

        NewPost(data).then((response) => {
            alert('posted')
        })
    }


    return (

        <Box className="container">

            <Box className="top-bar">
                <AppBar />
            </Box>
            <Box className="complete-content">

                <Box className="left-saidbar">
                    <SidebarV2 />
                </Box>

                <Box className="main-content">
                    <Box className="galeria-story">

                        <Box className="story" onClick={() => console.log("clicou")}>
                            <Box component="span" className="usuario-avatar">
                                <Avatar alt="Gallard Galax" src="/static/images/avatar/1.jpg" />
                            </Box>

                            <Typography paragraph>Adicionar story</Typography>
                        </Box>

                        <Box className="story-user" sx={{
                            background: "linear-gradient(transparent, rgba(0,0,0, 0.5))",
                            backgroundImage: `url(${'RandomImageURL'})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}>
                            <Box component="span"
                                className="usuario-avatar">
                                <Avatar alt="Neymar Silva" src="/static/images/avatar/1.jpg" />
                            </Box>
                            <Typography paragraph>Neymar da Silva</Typography>
                        </Box>

                        <Box className="story-user" sx={{
                            background: "linear-gradient(transparent, rgba(0,0,0, 0.5))",
                            backgroundImage: `url(${'RandomImageURL'})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}>
                            <Box className="usuario-avatar">
                                <Avatar alt="Vinícius José Paixão" src="/static/images/avatar/1.jpg" />
                            </Box>
                            <Typography paragraph>Vinicius Jr.</Typography>
                        </Box>

                        <Box className="story-user" sx={{
                            background: "linear-gradient(transparent, rgba(0,0,0, 0.5))",
                            backgroundImage: `url(${'RandomImageURL'})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}>
                            <Box component="span" className="usuario-avatar">
                                <Avatar alt="De Bruyne" src="/static/images/avatar/1.jpg" />
                            </Box>
                            <Typography paragraph>Kevin De Bruyne</Typography>
                        </Box>

                        <Box className="story-user" sx={{
                            background: "linear-gradient(transparent, rgba(0,0,0, 0.5))",
                            backgroundImage: `url(${'RandomImageURL'})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}>
                            <Box component="span" className="usuario-avatar">
                                <Avatar alt="Haaland" src="/static/images/avatar/1.jpg" />
                            </Box>
                            <Typography paragraph>Erling Haaland </Typography>
                        </Box>
                    </Box>

                    <Box className="nova-postagem-container">

                        <Box className="perfil-usuario">
                            <Avatar alt="Gallard" src="/static/images/avatar/1.jpg" className="publicacao-ref-avatar" />
                            <Box component="span">
                                <Typography paragraph>{currentUser?.name || "Não carregado"}</Typography>

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
                            <FormControl component='form' onSubmit={sendNewPost}
                                sx={{ width: '100%' }}>

                                <TextField type="text"

                                    multiline
                                    variant="standard"
                                    rows={3}
                                    label="O que você está pensando..."
                                    placeholder="O que você está pensando, Gallard?"
                                    onChange={(e) => newPost(e.target.value)} />

                                <Stack
                                    direction="row"
                                >
                                    <Tooltip title="Enviar">
                                        <IconButton >
                                            <SendIcon fontSize="medium" sx={{ color: blue[500] }} />
                                        </IconButton>
                                    </Tooltip>

                                </Stack>

                            </FormControl>
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


                    {/* {props.content.publishers.map((index) => ( */}
                    {/*  {props.contentPublications.map((index) => ( */}
                    {publication?.map((index) => (

                        < Box className="postagens-container" key={index.publication} >

                            <Box className="postagem-linha">
                                <Box className="perfil-usuario">
                                    <Avatar alt={index.name} src="/static/images/avatar/1.jpg" className="publicacao-ref-avatar" />
                                    <Box component="span">
                                        <Typography paragraph>{index.name}</Typography>
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

                                {/*     Text aleatorio para testar inclusão de postagens com descrições feitas
                            pelo
                            <Typography component="span"> @usuario</Typography> ao realizar uma nova postagem.
                            <Typography component="a" href="#">#Este tem um link incluso</Typography>
                            <Typography component="a" href="#">#Alguma coisa do Youtube</Typography> */}

                                <Typography component='span'>
                                    {ValidContentText(index.content)}

                                    {index.content.length > 120 &&

                                        <Typography component='span' className="publisherText" >
                                            {
                                                showAll === false &&
                                                <Button color="primary" size='small' onClick={handleShowOn}>
                                                    ...Ver mais
                                                </Button>
                                            }

                                            {
                                                showAll === true &&
                                                <Button color="primary" size='small' onClick={handleShowOff}>
                                                    Ver Menos
                                                </Button>
                                            }
                                        </Typography>
                                    }

                                </Typography>

                            </Typography>

                            <Box component="img" className="postagem-img" src={'RandomImageURL'} title={index.imageURL} />

                            <Box className="postagem-linha">
                                <Box className="metricas-postagem-icones">

                                    <Popover qtdReactions={index.qtdReactions} />

                                    <Stack
                                        direction="row"
                                        justifyContent="center"
                                        alignItems="center"
                                        spacing={2}>

                                        <Dialog
                                            fullWidth={true}
                                            PublisherContent={true}
                                            maximumWidth='xl'
                                            userPublisher={index.name}
                                            publicationId={index.publication}
                                            dialogText={index.content}
                                            qtdComments={index.qtdComments}
                                            qtdReactions={index.qtdReactions}
                                            type={1}
                                            contentIMG={'RandomImageURL'}
                                        />
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
                    ))}


                    <Button type="button" variant="outlined"
                        sx={{
                            width: "40%",
                            margin: "auto",
                            mb: "20px"

                        }}>Postagens Anteriores</Button>

                    <Box component="footer" className="footer">
                        <Typography paragraph>Copyright 2023 - Social Gaming</Typography>
                    </Box>

                </Box>

                <Box className="right-sidebar">

                    <Box className="titulo-sidebar">
                        <h4>Eventos</h4>
                        <Typography component="a" href="#">Ver Todos</Typography>
                    </Box>

                    <Box className="evento">

                        <Box className="esquerda-evento">

                            <Typography component="h3">18</Typography>
                            <Typography component="span">Março</Typography>
                        </Box>

                        <Box className="direita-evento">
                            <Typography component="h4"> Midia Social</Typography>
                            <Typography paragraph marginBottom={0.5}>
                                <LocationOnIcon fontSize="small" />Willson Tech Park</Typography>
                            <Typography component="a" href="#">Mais Informações</Typography>

                        </Box>
                    </Box>
                    <Box className="evento" >

                        <Box className="esquerda-evento">

                            <Typography component="h3">18</Typography>
                            <Typography component="span">Março</Typography>
                        </Box>

                        <Box className="direita-evento">
                            <Typography component="h4">Midia Social</Typography>
                            <Typography paragraph marginBottom={0.5}>
                                <LocationOnIcon fontSize="small" />
                                Willson Tech Park</Typography>
                            <Typography component="a" href="#">Mais Informações</Typography>
                        </Box>
                    </Box>

                    <Box className="titulo-sidebar">
                        <Typography component="h4">Anúncio</Typography>
                        <Typography component="a" href="#">Fechar</Typography>
                    </Box>
                    {/* adicionar realmente uma image */}
                    <Typography component="img" className="esqueda-ads" src={'RandomImageURL'} />
                    {/* adicionar realmente uma image */}


                    <Box className="titulo-sidebar">
                        <h4>Conversas</h4>
                        <Typography component="a" href="#">Esconder chat</Typography>
                    </Box>

                    <Box className="lista-online">
                        <Box className="online">
                            <Stack direction="row" spacing={1.5}>
                                <Avatar alt="Neymar da Silva" src="/static/images/avatar/1.jpg" />
                                <Typography paragraph>Neymar da Silva Santos Júnior</Typography>
                            </Stack>
                        </Box>
                    </Box>

                    <Box className="lista-online">
                        <Box className="online">
                            <Stack direction="row" spacing={1.5}>
                                <Avatar alt="Vinícius José Paixão" src="/static/images/avatar/1.jpg" />
                                <Typography paragraph>Vinícius José Paixão de Oliveira Júnior</Typography>
                            </Stack>
                        </Box>
                    </Box>

                    <Box className="lista-online">
                        <Box className="online">
                            <Stack direction="row" spacing={1.5}>
                                <Avatar alt="Kevin De Bruyne" src="/static/images/avatar/1.jpg" />
                                <Typography paragraph>Kevin De Bruyne</Typography>
                            </Stack>
                        </Box>
                    </Box>

                </Box>
            </Box>
        </Box >
    )
}