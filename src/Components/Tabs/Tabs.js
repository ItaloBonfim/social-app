import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Popover from '../../Components/Popover/Popover'

import { Box, Tabs, Tab, Typography, Avatar, Button, Stack } from '@mui/material'

import PersonPinIcon from '@mui/icons-material/PersonPin';
import FloatingButton from '../Button/FloatingButton';

import { useSelector, useDispatch } from 'react-redux';
import { resumePerfil } from '../../Redux/publication/slice';


import './StyleTabs.css';

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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [showAll, setShow] = useState(false);
  const commentsState = useSelector((state) => state.publicationReducer.publications.comment);
  const reaction = useSelector((state) => state.publicationReducer.publications.reaction);

   const dispatch = useDispatch();

/*
  useEffect(() => {

    searchRecentlyComments().then((data) => {
       
        dispatch(contentComments(data))

    });
}, []); */


  function handleShowOn() {
    setShow(true);
  }

  function handleShowOff() {
    setShow(false);
  }

  function ValidContentText(text) {
    if (text.length > 70 && showAll === false)
      return text.slice(0, 70)

    return text
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <Box
      className='General-tabs'
      sx={{ width: '100%' }}>

      <Box className='teste'
        sx={{

        }}>

        <FloatingButton
          disabled={false}
          color={'primary'}
          size={'medium'}
          onClickEvent={() => dispatch(resumePerfil({activate: false}))}
        />

      </Box>

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant='fullWidth'
          aria-label="basic tabs example">
          <Tab icon={<PersonPinIcon />} label="Comentarios" {...a11yProps(0)} />
          <Tab icon={<PersonPinIcon />} label="Reações" {...a11yProps(1)} />
        </Tabs>
      </Box>


      <TabPanel value={value} index={0}>

        {/*  {comments.map((index, value) => (       */}
        {commentsState.map((index, value) => (

          <Box className='commentRoot' key={value}>

            <Box className='slaman'>
              <Avatar alt={index.name} src="" size='small' />
              <Box component='span'>{index.name}</Box>
            </Box>



            <Box component='span' className='comment-user' >
              {ValidContentText(index.text)}

              {index.length > 70 &&

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
            </Box>

            <Box className='commentActions'>
              <Stack direction='row' spacing={2}>
              <Button variant="text" size='small'>Responder</Button>
              {/* <Button variant="text" size='small'>Expressar</Button> */}
              <Popover/>
              </Stack>
            </Box>


          </Box>

        ))
        }


      </TabPanel >


      <TabPanel value={value} index={1}>

      {reaction.map((index, value) => (
         
          <Box className='commentRoot' key={value}>

            <Box className='slaman'>
              <Avatar alt={index.rUserName} src="" size='small' />
              <Box component='span'>{index.rUserName}</Box>
            </Box>



            <Box component='span' className='comment-user' >
              {index.userExpression}

            </Box>
          </Box>

        ))
        }


      </TabPanel>

    </Box >
  );
}
