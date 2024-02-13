import React from 'react'
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreIcon from '@mui/icons-material/More';
import SpokeIcon from '@mui/icons-material/Spoke';
import BasicTabs from '../../Tabs/Tabs';


import { useDispatch, useSelector } from 'react-redux';
import { resumePerfil } from '../../../Redux/publication/slice'; 


export default function TypeImageContent(props) {
    const data = {...props}
    const dispatch = useDispatch();
    //const perfilStatus = useSelector(state => state?.perfil)
    const resume = useSelector((state) => state.publicationReducer.activate);

    console.log(data)
    
    
    return (

        <Box className='render-Image'
            sx={{
                display: 'flex',
                flexDirection: 'row',

                alignItems: resume.activate ? 'center' : 'start', // centralizador do conteudo

                height: '100%',
                width: '100%',

                mt:'20px'

            }}>

            <Box
                className='action-options'
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexWrap: 'nowrap',

                    height: '100%',
                   // width: '90%',
                   width: '100%',

                    ml: '1%',

                }}>

                <Box
                    className='content-options'
                    sx={{
                        display: resume.activate ? "none" : "flex",
                        flexDirection: 'column',
                        flexWrap: 'nowrap',
                        alignContent: 'center',
                        justifyContent: 'center',
                        alignItems: 'center',

                        height: '100%',
                        width: '100%',

                        ml: '1%',

                        border: '1px',
                        borderStyle: 'solid',
                        borderRadius: '2%',
                    }}>

                    <Box
                        component='picture'
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignContent: 'center',
                            alignItems: 'center',
                            mt: '2%',

                            height: '100%',
                            width: '100%',
                        }}>


                        <Stack
                            direction="column"
                            spacing={2}
                            sx={{
                                display: 'flex',
                                alignContent: 'center',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                            }}
                        >
                            <Avatar
                                alt={data.dataPublication.userPublisher}
                                src="/static/images/avatar/1.jpg"
                                sx={{ width: 120, height: 120 }}
                            />

                        </Stack>

                        <Stack component='title'
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',

                                alignContent: 'center',
                                justifyContent: 'center',
                                alignItems: 'center',

                                height: '100%',
                                width: '100%',

                                mt: '4%'
                            }}>

                            <Typography>{data.dataPublication.userPublisher}</Typography>

                        </Stack>
                    </Box>

                    <Stack
                        className='action-space'
                        spacing={4}
                        direction="row"
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',

                            alignContent: 'center',
                            justifyContent: 'center',
                            alignItems: 'center',

                            color: 'action.active',
                            mt: '4%',

                            height: '100%',
                            width: '100%',

                        }}>

                        <Button
                            onClick={() => dispatch(resumePerfil({activate:true}))}>
                            <Badge
                                color="secondary"
                                badgeContent={data.dataPublication.qtdComments}>
                                <ChatIcon
                                    sx={{
                                        width: 50, height: 50
                                    }} />
                            </Badge>
                        </Button>

                        <Button
                            onClick={() => dispatch(resumePerfil({activate: true}))}>
                            <Badge
                                color="secondary"
                                badgeContent={data.dataPublication.qtdReactions}>
                                <SpokeIcon
                                    sx={{
                                        width: 50, height: 50
                                    }} />
                            </Badge>
                        </Button>

                        <Button>
                            <Badge
                                color="secondary"
                                badgeContent={1000} max={999}>
                                <MoreIcon
                                    sx={{
                                        width: 50, height: 50
                                    }} />
                            </Badge>
                        </Button>

                    </Stack>
                </Box>

                <Box
                    className='content-tabs-teste'
                    sx={{
                        display: resume.activate ? "flex" : "none",
                        flexDirection: 'column',
                        flexWrap: 'nowrap',

                        height: '100%',
                        width: '100%',

                        ml: '1%',

                        border: '1px',
                        borderStyle: 'solid',
                        borderRadius: '2%',
                    }}>

                    <BasicTabs />

                </Box>

            </Box>
        </Box>
    )
}