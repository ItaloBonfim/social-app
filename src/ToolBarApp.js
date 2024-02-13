import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import GroupIcon from '@mui/icons-material/Group';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AvatarComponent from './Components/Avatar/Avatar';
import Stack from '@mui/material/Stack';
import Dialog from './Components/Dialog/Publication/Dialog'
import Image from './wallpaperProject.jpg';


const drawerWidth = 240;

export default function ClippedDrawer() {
    return (
        <Box className='nav-Bar' sx={{ display: 'flex', height: '100%' }}>
            <CssBaseline />

            <AppBar className='header-bar' position="fixed" sx={{
                zIndex: (theme) => theme.zIndex.drawer + 1,
                backgroundColor: '#3498DB',
                // height: '10%'
                height: 'auto'
            }}>
                <Toolbar>
                    <Box className='named-logo' sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        alignContent: 'center',
                        width: '10% auto',
                        height: '100%'
                    }}>

                        <Typography variant="h6" noWrap component="div">
                            Social Network
                        </Typography>

                    </Box>

                    <Box className='search' sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        alignContent: 'center',
                        width: '60%',
                        height: '100%',
                        marginLeft: '10%'

                    }}>

                        <TextField
                            className='search-field'
                            placeholder='Pesquise...'
                            variant='outlined'
                            fullWidth={true}
                            size='medium'
                        />

                    </Box>

                    <Box
                        className='nav-bar-buttons'
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            alignContent: 'center',
                            width: '10% auto',
                            height: '100%',
                            marginLeft: '10%',
                            paddingLeft: '5'
                        }}>

                        <Stack direction="row" spacing={1}>

                            <IconButton aria-label=''>
                                <GroupIcon />
                            </IconButton>

                            <IconButton aria-label=''>
                                <ChatIcon />
                            </IconButton>

                            <IconButton aria-label=''>
                                <NotificationsActiveIcon />
                            </IconButton>

                            <AvatarComponent 
                                direction='row'
                                spacing={4}
                                alt='userLogged'
                                src=''
                            />

                        </Stack>

                    </Box>

                </Toolbar>
            </AppBar>

            <Drawer
                variant="permanent"
                className='side-nav-list'
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />

                <Box
                    className='nav-list'
                    sx={{
                        overflow: 'auto',
                        height: '100%'
                    }}>
                    <List>
                        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>

                    <Divider />

                    <List>
                        {['All mail', 'Trash', 'Spam'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>

                </Box>
            </Drawer>


            <Box
                component="main"
                className='container-publications'
                sx={{
                    flexGrow: 1,
                    p: 3,
                    backgroundImage: `url(${Image})`,
                    height: '100%'
                }}
            >

                <Toolbar />


                <Box className='box-publication'
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '80%',
                        height: '60%',

                    }}>

                    <Box
                        className='publication-content'
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '80%',
                            height: '100%',

                        }}>

                        <Typography paragraph>Conteudo da publicação</Typography>

                    </Box>

                    <Box
                        className='publication-actions'
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '30%',
                            height: '100%',
                            //backgroundColor: 'purple',
                        }}>

                        <Dialog
                            fullWidth={true}
                            maximumWidth='xl'
                            dialogTitle='titulo dialog'
                            dialogText='text descritivo'
                            type = {1}
                            data = {'props'} />

                    </Box>


                </Box>
                <Typography paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                    enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                    imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                    Convallis convallis tellus id interdum velit laoreet id donec ultrices.
                    Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                    adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
                    nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
                    leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
                    feugiat vivamus at augue. At augue eget arcu dictum varius duis at
                    consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                    sapien faucibus et molestie ac.
                </Typography>


            </Box>
        </Box>
    );
}
