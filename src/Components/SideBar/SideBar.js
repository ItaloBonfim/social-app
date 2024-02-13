import React from 'react';
import TesteDeImage from './TesteDeImagem.jpg'
import { Box, Button, Stack, Typography } from '@mui/material';
import { blue, red, grey } from '@mui/material/colors'
import './SideBar.css';
import { useSelector } from 'react-redux'
import DialogFriends from '../Dialog/Sidebar/Friends'
import DialogSms from '../Dialog/Sidebar/Chat'
import DialogPhotos from '../Dialog/Sidebar/Photos'
import {
    AddHomeSharp,
    PhotoSizeSelectActual,
    People,
    Sms,
    PlayCircle
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';


/*
*Criando uma Sidebar do zero com apenas HTML, CSS e JS: https://www.youtube.com/watch?v=RlaZjCgTw9M
*/
const pages = [
    { title: "Perfil", linkTo: "http://localhost:4200/perfil", Icon: AddHomeSharp, IconColor: blue[500], enable: false, type: 'goTo' },
  /*   { title: "Amigos", linkTo: "#", Icon: People, IconColor: blue[800], enable: false },
    { title: "Mensagens", linkTo: "#", Icon: Sms, IconColor: green[600], enable: false },
    { title: "Fotos", linkTo: "#", Icon: PhotoSizeSelectActual, IconColor: grey[800], enable: false }, */
    { title: "Watch", linkTo: "#", Icon: PlayCircle, IconColor: red[400], enable: false },
]
export default function SideBar() {
    const currentUser = useSelector((state) => state.userReducer.currentUser);
    const History = useNavigate();

    const redirectTo = (index) => {
        
        if(index === 0){
            History('/perfil')
        } else if(index === 1) {
            alert('não disponivel')
        }
    } 


    return (
        <Box component="aside" className='sidebar'>
            <Box component="header" className='sidebar-header'>
                <Box component="img" className='sidebar-logo-img' src={TesteDeImage} alt='Foto do usuario' />
            </Box>

            <Box component='span' sx={{
                width: '100%',
                display: 'flex',
                height: '40px',
                justifyContent: 'center',
                alignContent: 'center',
                color: grey[800],
                marginBottom: '16px'

            }}>
                <Typography component='a'
                    sx={{fontWeight: '600',}}
                >{currentUser?.name || 'Não carregado'}</Typography>

            </Box>

            <Box component="nav" className='sidebar-nav'>
                <Stack
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    spacing={2}
                >

                    {pages.map((page, index) => (


                        /*    page.type === "goTo" ?
                               <Button
                                   key={index}
                                   href={page.linkTo}
                                   variant='text'
                                   startIcon={<page.Icon sx={{ color: page.IconColor }} />} >
                                   {page.title}
                               </Button>
                               :  <Dialog
                               fullWidth={true}
                               PublisherContent={true}
                               maximumWidth='xl'
                       /> */


                        <Button
                            key={index}
                        //    href={page.linkTo} // esta propriedade deixa a coloração do texto do botão azul
                            variant='text'
                            startIcon={<page.Icon sx={{ color: page.IconColor }} />}
                            onClick={() => redirectTo(index)}
                            >
                            {page.title}
                        </Button>

                    ))}

                    <DialogFriends
                        fullWidth={true}
                        PublisherContent={true}
                        maximumWidth='xl'
                    />
                    <DialogSms
                        fullWidth={true}
                        PublisherContent={true}
                        maximumWidth='xl'
                    />
                    <DialogPhotos
                        fullWidth={true}
                        PublisherContent={true}
                        maximumWidth='xl'
                    />

                </Stack>

            </Box>

        </Box>

    )
}