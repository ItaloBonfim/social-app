import React, { useState } from 'react';
//import Box from '@mui/material/Box';
//import IconButton from '@mui/material/IconButton';
import { grey } from '@mui/material/colors'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import {
    Box,
    IconButton,
    Button,
    Typography,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';
//import { useDispatch, useSelector } from 'react-redux';
import { PhotoSizeSelectActual } from '@mui/icons-material';

import '../StyleDialog.css'

export default function MaxWidthDialog(props) {

    const [open, setOpen] = useState(false);
    const [showAll, setShow] = useState(false);
    const [value, setValue] = React.useState(0);


    function handleClickOpen() {
        setOpen(true);
    };

    function handleClose() {
        setOpen(false);
        handleShowOff()
    };

    function handleShowOn() {
        setShow(true);
    }

    function handleShowOff() {
        setShow(false);
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };



    return (
        <React.Fragment>

            <Button
                className='btnSideBar'
                onClick={handleClickOpen}
                variant='text'
                startIcon={<PhotoSizeSelectActual sx={{ color: grey[800] }} />}>
                {"Fotos"}
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

                    <DialogTitle className='TitleDialog' sx={{ width: '95%' }}>{"Fotos"}</DialogTitle>

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


                <DialogContent
                    className='DialogContentClass'
                    sx={{
                        width: 'max-width',
                        height: '100%',
                        overflowY: 'auto'
                    }}>


                    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                        <Tabs value={value} onChange={handleChange} centered>
                            <Tab label="Item One" />
                            <Tab label="Item Two" />
                            <Tab label="Item Three" />
                        </Tabs>
                    </Box>



                </DialogContent>

            </Dialog>
        </React.Fragment>
    );
}