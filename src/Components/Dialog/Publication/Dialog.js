import React, { useState } from 'react';
//import Box from '@mui/material/Box';
//import IconButton from '@mui/material/IconButton';

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
import Interactions from './Interactions';
import { useDispatch, useSelector } from 'react-redux';
import { resumePerfil, contentComments, contentReaction } from '../../../Redux/publication/slice';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ForumIcon from '@mui/icons-material/Forum';
import ShareIcon from '@mui/icons-material/Share';
import { searchRecentlyComments, searchReactions } from '../../../pages/controllers/PublicationController';

//import { Typography } from "@mui/material"

import '../StyleDialog.css'


/*
expected sizes
xs, sm, md, lg, xl
*/


export default function MaxWidthDialog(props) {

  const dispatch = useDispatch();
  const dialogProps = useSelector((state) => state.publicationReducer.dialogConfigs);


  const [open, setOpen] = useState(false);
  const [showAll, setShow] = useState(false);
  const data = { ...props }


  function handleClickOpen(props) {
    searchComments()
    searchReaction()
    setOpen(true);
  };

 
  function handleClose() {
    setOpen(false);
    handleShowOff()
    dispatch(resumePerfil({ activate: false }));
  };

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

  function searchComments() {
    searchRecentlyComments(data.publicationId).then((data) => {
      dispatch(contentComments(data))

    });
  }
  function searchReaction() {
    searchReactions(data.publicationId).then((data) => {
      dispatch(contentReaction(data))

    });
  }

  return (
    <React.Fragment>

         {(dialogProps.thumbsUp === true &&

        <IconButton onClick={handleClickOpen}>
          <ThumbUpIcon fontSize="small" />
          <Typography component="span">{props.qtdReactions}</Typography>
        </IconButton>

      )}  {(dialogProps.comments === true &&

        <IconButton onClick={handleClickOpen}>
          <ForumIcon fontSize="small" />
          <Typography component="span">{props.qtdComments}</Typography>
        </IconButton>

      )}  {(dialogProps.share === true &&

        <IconButton onClick={handleClickOpen}>
          <ShareIcon fontSize="small" />
          <Typography component="span">120</Typography>
        </IconButton>

      )}

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

          <DialogTitle className='TitleDialog' sx={{ width: '95%' }}>{'Postagem de: '.concat(props.userPublisher)}</DialogTitle>

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

        {props.PublisherContent === true &&

          <DialogContent
            className='DialogContentClass'
            sx={{
              width: 'max-width',
              height: '100%',
              overflowY: 'auto'
            }}>

            <Box
              className='DialogContentClassMidia'>

              <Box
                className='image-content'
                component='img'
                alt='teste'
                src={props.contentIMG}
                sx={{

                  display: 'flex',
                  flexDirection: 'column',

                  alignContent: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',

                  objectFit: 'contain',

                }}
              />
            </Box>

            <Box
              className='DialogContentClassAbout'
            >
              <DialogContentText sx={{width: '100%', marginBottom: '10px', display: 'flex', flexDirection: 'column', borderRadius: '10px'}}
                className='DialogContentTextClass' >

                <Typography component='span'>
                  {ValidContentText(props.dialogText)}

                  {props.dialogText.length > 120 &&

                    <Typography component='span'>
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

              </DialogContentText>

              <Interactions
                dataPublication={data} />


            </Box>
          </DialogContent>
        }

      </Dialog>
    </React.Fragment>
  );
}