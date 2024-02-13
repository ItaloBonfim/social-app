import React from 'react';
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';


import PersonPinIcon from '@mui/icons-material/PersonPin';
import PropTypes from 'prop-types'



const { string, bool, func } = PropTypes;


const FloatingButton = ({ onClickEvent, ariaLabel, disabled, color, size }) => (
    <Box sx={{
        //"& ::houver": {}
    }}>

        <Fab
            color={color ? color : "primary"}
            aria-label={ariaLabel}
            disabled={disabled}
            onClick={onClickEvent}
            size={size}
        >
            <PersonPinIcon />
        </Fab>

    </Box>
);


FloatingButton.propTypes = {
    label: string,
    placeholder: string,
    type: string,
    color: string,
    variant: string,
    disabled: bool,
    id: string,
    value: string,
    onclick: func,
    size: string,
    autoComplete: string,
    fullWidth: bool
};

export default FloatingButton