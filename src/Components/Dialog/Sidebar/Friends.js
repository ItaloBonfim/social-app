import React, { useState, useEffect } from 'react';

import { blue } from '@mui/material/colors'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';
import { getFriendships, getAllUsers, getInvites, getFollows, getFollowers, getFollowwFiltered } from '../../../pages/controllers/FriendshipController'
import { useDispatch, useSelector } from 'react-redux'
import {
    updateCurrentDialog,
    Friendships,
    MeetingFriendships,
    InvitesFriendships,
    FollowsUsers,
    FollowingUsers,
    CloseDialog
} from '../../../Redux/dialog/slice'

import {
    Box,
    IconButton,
    Button,
    Dialog,
    DialogActions,
    DialogTitle,
    Paper,
    Grid,
    styled,
    Avatar,
    Input,
    InputLabel,
    InputAdornment,
    Typography,
    Stack,
    MenuItem,
    Select,
    FormControl,


} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';
//import { useDispatch, useSelector } from 'react-redux';
import {
    People,
    Add,
    Remove,
    PersonSearch,
    LocationOn,
    Cake,
    MoreVert,
    CalendarMonth,
    Autorenew,

} from '@mui/icons-material';

import '../Friends.css';

const selectList = [
    { describe: 'Recebidos', value: '1' },
    { describe: 'Enviados & Aguardando', value: '2' }
]

/* const MyTeste = [
    { nome: 'x', email: 'y' },
    { nome: 'x', email: 'y' },
    { nome: 'x', email: 'y' },
    { nome: 'x', email: 'y' },
]
const MyTeste2 = [
    { nome: 'x', email: 'y' },
    { nome: 'x', email: 'y' },

] */

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }} className="MaisUmaBox">
                    <Box className="EuSouATab">{children}</Box>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

export default function MaxWidthDialog(props) {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(0);
    const [searchFriends, setSearchFriends] = useState('');
    const [searchFollows, setSearchFollows] = useState('');
    const [searchFollowers, setSearchFollowers] = useState('');
    const [InviteSelected, setSelected] = useState('1');

    const FriendshipList = useSelector((state) => state.dialogReducer.dialogFriends.Friends);
    const UsersList = useSelector((state) => state.dialogReducer.dialogFriends.Meeting);
    const Invites = useSelector((state) => state.dialogReducer.dialogFriends.Invites);
    const follows = useSelector((state) => state.dialogReducer.dialogFriends.Follows);
    const followers = useSelector((state) => state.dialogReducer.dialogFriends.Followers);
    const Dispatch = useDispatch();
    const Title = "Amigos";


    useEffect(() => {
        getFriendships().then((data) => {
            Dispatch(Friendships(data))
        })
    }, [])


    function a11yProps(index) {

        return {
            id: `simple-tab-${index}`,
            'aria-controls': `full-width-tabpanel-${index}`,
        };
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleSearchFollow = (e) => {
        setSearchFollows(e.target.value)
    }

    const findInvites = () => {
        const params = {
            filter: InviteSelected
        }

        getInvites(params).then((data) => {

            if (data.length > 0) {
                Dispatch(InvitesFriendships(data));
            }
        })
    }

    const findFamiliar = () => {
        if (!UsersList.length > 0) {
            getAllUsers().then((data) => {
                Dispatch(MeetingFriendships(data))
            });
        }
    }

    const findFollows = (props) => {
        getFollows().then((data) => {
            Dispatch(FollowsUsers(data));
        })
    }
    const findFollowers = (props) => {
        getFollowers().then((data) => {
            Dispatch(FollowingUsers(data));
        })
    }

    const FilterFollows = (props) => {
        const params = {
            userId: null,
            filter: searchFollows
        }
    
/*         let result = [];
        if (props.index === 3) {
            

            follows.map((value, index) => {
                //console.log(value.name.toLowerCase());
               if(value.name.toLowerCase().localeCompare(searchFollows.toLowerCase())){
                console.log('teste')
               }
            })

            console.log(result)
        } else {

            console.log(result)
        } */
        if(searchFollows === '' && props.index === 3){
           return findFollows({ userId: '', filter: '' });
        } else if(searchFollowers === '' && props.index === 4){
            return findFollowers({ userId: '', filter: '' });
        }

        getFollowwFiltered(params).then((data) => {
            Dispatch(FollowsUsers(data));
        })

    }
    function handleClickOpen() {
        setOpen(true);
    };

    function handleClose() {
        Dispatch(CloseDialog());
        setOpen(false);
    };

    function DateFormat(dateProp) {
        return new Date(dateProp).toLocaleDateString('pt-BR', { timeZone: 'UTC' })
    }

    return (
        <React.Fragment>

            <Button
                className='btnSideBar'
                onClick={handleClickOpen}
                variant='text'
                startIcon={<People sx={{ color: blue[800] }} />}>
                {Title}
            </Button>

            <Dialog
                fullWidth={props.fullWidth}
                maxWidth={props.maximumWidth}
                open={open}
                onClose={handleClose}
                sx={{
                    width: 'max-width',
                    height: '100%',
                }}>

                <Box className='header-dialog'>

                    <DialogTitle className='TitleDialog' sx={{ width: '95%' }}>{"Amigos e Solicitações"}</DialogTitle>

                    <DialogActions>

                        <IconButton
                            aria-label='Comentarios'
                            onClick={handleClose}
                            size='small'
                        >
                            <CloseIcon />
                        </IconButton>

                    </DialogActions>
                </Box>


                <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    <Tabs value={value} onChange={handleChange} centered>
                        <Tab label="Amigos" {...a11yProps(0)} />
                        <Tab label="Solicitações" {...a11yProps(1)} onClick={() => findInvites()} />
                        <Tab label="Conhecidos" {...a11yProps(2)} onClick={() => findFamiliar()} />
                        <Tab label="Seguindo" {...a11yProps(3)} onClick={() => findFollows({ userId: '', filter: '' })} />
                        <Tab label="Seguidores" {...a11yProps(4)} onClick={() => findFollowers({ userId: '', filter: '' })} />
                    </Tabs>
                </Box>


                <TabPanel value={value} index={0}>
                    <Box sx={{ width: '100%' }}>

                        <InputLabel htmlFor="FieldSearchPerson">
                            Pesquise...
                        </InputLabel>

                        <Input
                            fullWidth={true}
                            id='FieldSearchPerson'
                            onChange={(e) => setSearchFriends(e.target.value)}
                            startAdornment={
                                <InputAdornment position="start">
                                    <PersonSearch sx={{ color: blue[800] }} />
                                </InputAdornment>
                            }
                        />

                    </Box>


                    <Box className='tabIndexZero'>
                        <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ padding: '1%' }}>

                            {FriendshipList.map((value, index) =>

                                <Grid item xs={2} sm={4} md={4} sx={{ mt: '10px', mb: '10px' }} key={index}>

                                    <Paper elevation={3}
                                        sx={{
                                            height: 140,
                                            width: 400,
                                            padding: '1%'
                                        }}>

                                        <Box className='userPaper'>
                                            <Avatar alt={value.name} src="" sx={{ width: 50, height: 50 }} />
                                            <Box component="span" className='FriendsNickname'>{value.name}</Box>
                                            <span>{index}</span>
                                            <IconButton aria-label="Opções" >
                                                <MoreVert sx={{ width: '20px', height: '20px' }} />
                                            </IconButton>
                                        </Box>

                                        <Box className='PersonInfo'>
                                            <Typography component='span' className='InfoUser' sx={{ fontSize: '0.700em', marginLeft: '6px' }}>
                                                <LocationOn sx={{ width: '18px', height: '18' }} />
                                                de Brasil, São Paulo - SP
                                            </Typography>
                                            <Typography component='span' className='InfoUser' sx={{ fontSize: '0.700em', marginLeft: '6px' }}>
                                                <CalendarMonth sx={{ width: '18px', height: '18' }} />
                                                {'  Amigos desde de: '.concat(DateFormat(value.createdOn))}

                                            </Typography>
                                            <Typography component='span' className='InfoUser' sx={{ fontSize: '0.700em', marginLeft: '6px' }}>
                                                <Cake sx={{ width: '18px', height: '18' }} />
                                                {'  Data de Aniversario: '.concat(DateFormat(value.dataAniversario)) + '/'}


                                            </Typography>
                                        </Box>

                                    </Paper>

                                </Grid>
                            )}

                        </Grid>
                    </Box>
                </TabPanel>

                <TabPanel value={value} index={1}>


                    <Box className='content-form'>
                        <FormControl
                            component='form'
                            variant='outlined'
                            fullWidth={true}
                            sx={{ display: 'flex', flexDirection: 'row' }}>
                            <InputLabel id="SelectedFieldInvite" >Selecione o Filtro</InputLabel>
                            <Select
                                labelId="SelectedFieldInvite"
                                id="demo-simple-select"
                                value={InviteSelected}
                                onChange={(e) => [
                                    Dispatch(updateCurrentDialog(e.target.value)),
                                    setSelected(e.target.value),
                                ]}
                                sx={{
                                    width: '25%'
                                }}
                            >

                                {selectList.map((value, index) => (
                                    <MenuItem value={value.value} key={index}>{value.describe}</MenuItem>
                                ))}
                            </Select>

                            <Stack direction="row" spacing={2}>
                                <IconButton aria-label="Filtre" onClick={findInvites}>
                                    <Autorenew />
                                </IconButton>
                            </Stack>

                        </FormControl>
                    </Box>

                    <Box className='tabIndexZero'>

                        <Box className='Content-id'>

                            {InviteSelected === '1' && Invites.MyReceived.length > 0 &&
                                <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ padding: '1%' }}>
                                    {Invites.MyReceived.map((value, index) =>

                                        <Grid item xs={2} sm={4} md={4} sx={{ mt: '10px', mb: '10px' }} key={index}>

                                            <Paper elevation={3}
                                                sx={{
                                                    height: 140,
                                                    width: 400,
                                                    padding: '1%'
                                                }}>

                                                <Box className='userPaper'>
                                                    <Avatar alt={'value.name'} src="" sx={{ width: 50, height: 50 }} />
                                                    <Box component="span" className='FriendsNickname'>{'value.name'}</Box>
                                                    <span>{index}</span>
                                                    <IconButton aria-label="Opções" >
                                                        <MoreVert sx={{ width: '20px', height: '20px' }} />
                                                    </IconButton>
                                                </Box>

                                                <Box className='PersonInfo'>
                                                    <Typography component='span' className='InfoUser' sx={{ fontSize: '0.700em', marginLeft: '6px' }}>
                                                        <LocationOn sx={{ width: '18px', height: '18' }} />
                                                        de Brasil, São Paulo - SP
                                                    </Typography>
                                                    <Typography component='span' className='InfoUser' sx={{ fontSize: '0.700em', marginLeft: '6px' }}>
                                                        <CalendarMonth sx={{ width: '18px', height: '18' }} />
                                                        {'  Amigos desde de: '}

                                                    </Typography>
                                                    <Typography component='span' className='InfoUser' sx={{ fontSize: '0.700em', marginLeft: '6px' }}>
                                                        <Cake sx={{ width: '18px', height: '18' }} />
                                                        {'  Data de Aniversario: ' + '/'}


                                                    </Typography>
                                                </Box>

                                            </Paper>


                                        </Grid>
                                    )}

                                </Grid>
                            } {Invites.MyReceived.length === 0 && InviteSelected === '1' &&
                                <Box component='span'>Não há solicitações de amizades...</Box>
                            }

                            {InviteSelected === '2' && Invites.awaiting.length > 0 &&
                                <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ padding: '1%' }}>

                                    {Invites.awaiting.map((value, index) =>

                                        <Grid item xs={2} sm={4} md={4} sx={{ mt: '10px', mb: '10px' }} key={index}>

                                            <Paper elevation={3}
                                                sx={{
                                                    height: 140,
                                                    width: 400,
                                                    padding: '1%'
                                                }}>

                                                <Box className='userPaper'>
                                                    <Avatar alt={value.name} src="" sx={{ width: 50, height: 50 }} />
                                                    <Box component="span" className='FriendsNickname'>{value.name}</Box>
                                                    <span>{index}</span>
                                                    <IconButton aria-label="Opções" >
                                                        <MoreVert sx={{ width: '20px', height: '20px' }} />
                                                    </IconButton>
                                                </Box>

                                                <Box className='PersonInfo'>
                                                    <Typography component='span' className='InfoUser' sx={{ fontSize: '0.700em', marginLeft: '6px' }}>
                                                        <LocationOn sx={{ width: '18px', height: '18' }} />
                                                        de Brasil, São Paulo - SP
                                                    </Typography>
                                                    <Typography component='span' className='InfoUser' sx={{ fontSize: '0.700em', marginLeft: '6px' }}>
                                                        <CalendarMonth sx={{ width: '18px', height: '18' }} />
                                                        {'  Amigos desde de: '}

                                                    </Typography>
                                                    <Typography component='span' className='InfoUser' sx={{ fontSize: '0.700em', marginLeft: '6px' }}>
                                                        <Cake sx={{ width: '18px', height: '18' }} />
                                                        {'  Data de Aniversario: ' + '/'}


                                                    </Typography>
                                                </Box>

                                            </Paper>

                                        </Grid>

                                    )}

                                </Grid>

                            }  {Invites.awaiting.length === 0 && InviteSelected === '2' &&
                                <Box component='span'>Não há solicitações de amizades Aguardando...</Box>
                            }

                        </Box>

                    </Box>

                </TabPanel>

                <TabPanel value={value} index={2}>
                    <Box className='tabIndexZero'>
                        <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ padding: '1%' }}>

                            {UsersList.map((value, index) =>

                                <Grid item xs={2} sm={4} md={4} sx={{ mt: '10px', mb: '10px' }} key={index}>

                                    <Paper elevation={3}
                                        sx={{
                                            height: 140,
                                            width: 400,
                                            padding: '1%'
                                        }}>

                                        <Box className='userPaper'>
                                            <Avatar alt={value.name} src="" sx={{ width: 50, height: 50 }} />
                                            <Box component="span" className='FriendsNickname'>{value.name}</Box>
                                            <span>{index}</span>
                                            <IconButton aria-label="Opções" >
                                                <MoreVert sx={{ width: '20px', height: '20px' }} />
                                            </IconButton>
                                        </Box>

                                        <Box className='PersonInfo'>
                                            <Typography component='span' className='InfoUser' sx={{ fontSize: '0.700em', marginLeft: '6px' }}>
                                                <LocationOn sx={{ width: '18px', height: '18' }} />
                                                de Brasil, São Paulo - SP
                                            </Typography>

                                            <Typography component='span' className='InfoUser' sx={{ fontSize: '0.700em', marginLeft: '6px' }}>
                                                <Cake sx={{ width: '18px', height: '18' }} />
                                                {'  Data de Aniversario: '}


                                            </Typography>

                                            <Typography component='span' className='actions' sx={{ fontSize: '0.700em', marginLeft: '6px' }}>

                                                <Stack direction="row" spacing={2}>
                                                    <IconButton aria-label="Add">
                                                        <Add />
                                                    </IconButton>
                                                    <IconButton aria-label="Remove">
                                                        <Remove />
                                                    </IconButton>
                                                </Stack>

                                            </Typography>
                                        </Box>

                                    </Paper>

                                </Grid>
                            )}

                        </Grid>
                    </Box>
                </TabPanel>

                <TabPanel value={value} index={3}>

                    <Box sx={{ width: '100%' }}>

                        <InputLabel htmlFor="FieldSearchPerson">
                            Pesquise...
                        </InputLabel>

                        <Input
                            fullWidth={true}
                            value = {searchFollows}
                            onChange={(e) => [
                                setSearchFollows(e.target.value),
                                FilterFollows({ follows, index: 3 })
                            ]}
                            id='FieldSearchPerson'
                            startAdornment={
                                <InputAdornment position="start">
                                    <PersonSearch sx={{ color: blue[800] }} />
                                </InputAdornment>
                            }
                        />

                    </Box>

                    <Box className='tabIndexZero'>
                        <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ padding: '1%' }}>

                            {follows.map((value, index) =>

                                <Grid item xs={2} sm={4} md={4} sx={{ mt: '10px', mb: '10px' }} key={index}>

                                    <Paper elevation={3}
                                        sx={{
                                            height: 140,
                                            width: 400,
                                            padding: '1%'
                                        }}>

                                        <Box className='userPaper'>
                                            <Avatar alt={value.name} src="" sx={{ width: 50, height: 50 }} />
                                            <Box component="span" className='FriendsNickname'>{value.name}</Box>
                                            <span>{index}</span>
                                            <IconButton aria-label="Opções" >
                                                <MoreVert sx={{ width: '20px', height: '20px' }} />
                                            </IconButton>
                                        </Box>

                                        <Box className='PersonInfo'>
                                            <Typography component='span' className='InfoUser' sx={{ fontSize: '0.700em', marginLeft: '6px' }}>
                                                <LocationOn sx={{ width: '18px', height: '18' }} />
                                                de Brasil, São Paulo - SP
                                            </Typography>
                                            <Typography component='span' className='InfoUser' sx={{ fontSize: '0.700em', marginLeft: '6px' }}>
                                                <CalendarMonth sx={{ width: '18px', height: '18' }} />
                                                {'  Amigos desde de: '.concat(DateFormat(value.createdOn))}

                                            </Typography>
                                            <Typography component='span' className='InfoUser' sx={{ fontSize: '0.700em', marginLeft: '6px' }}>
                                                <Cake sx={{ width: '18px', height: '18' }} />
                                                {'  Data de Aniversario: '.concat(DateFormat(value.dataAniversario)) + '/'}


                                            </Typography>
                                        </Box>

                                    </Paper>

                                </Grid>
                            )}

                        </Grid>
                    </Box>


                </TabPanel>

                <TabPanel value={value} index={4}>

                    <Box sx={{ width: '100%' }}>

                        <InputLabel htmlFor="FieldSearchPerson">
                            Pesquise...
                        </InputLabel>

                        <Input
                            fullWidth={true}
                            id='FieldSearchPerson'
                            onChange={(e) => [
                                setSearchFollowers(e.target.value),
                                FilterFollows({ followers, index: 4 })
                            ]}
                            startAdornment={
                                <InputAdornment position="start">
                                    <PersonSearch sx={{ color: blue[800] }} />
                                </InputAdornment>
                            }
                        />

                    </Box>

                    <Box className='tabIndexZero'>
                        <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ padding: '1%' }}>

                            {followers.map((value, index) =>

                                <Grid item xs={2} sm={4} md={4} sx={{ mt: '10px', mb: '10px' }} key={index}>

                                    <Paper elevation={3}
                                        sx={{
                                            height: 140,
                                            width: 400,
                                            padding: '1%'
                                        }}>

                                        <Box className='userPaper'>
                                            <Avatar alt={value.name} src="" sx={{ width: 50, height: 50 }} />
                                            <Box component="span" className='FriendsNickname'>{value.name}</Box>
                                            <span>{index}</span>
                                            <IconButton aria-label="Opções" >
                                                <MoreVert sx={{ width: '20px', height: '20px' }} />
                                            </IconButton>
                                        </Box>

                                        <Box className='PersonInfo'>
                                            <Typography component='span' className='InfoUser' sx={{ fontSize: '0.700em', marginLeft: '6px' }}>
                                                <LocationOn sx={{ width: '18px', height: '18' }} />
                                                de Brasil, São Paulo - SP
                                            </Typography>
                                            <Typography component='span' className='InfoUser' sx={{ fontSize: '0.700em', marginLeft: '6px' }}>
                                                <CalendarMonth sx={{ width: '18px', height: '18' }} />
                                                {'  Amigos desde de: '.concat(DateFormat(value.createdOn))}

                                            </Typography>
                                            <Typography component='span' className='InfoUser' sx={{ fontSize: '0.700em', marginLeft: '6px' }}>
                                                <Cake sx={{ width: '18px', height: '18' }} />
                                                {'  Data de Aniversario: '.concat(DateFormat(value.dataAniversario)) + '/'}


                                            </Typography>
                                        </Box>

                                    </Paper>

                                </Grid>
                            )}

                        </Grid>
                    </Box>

                </TabPanel>

            </Dialog>
        </React.Fragment >
    );
}