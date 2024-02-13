import React from "react";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';



export default function AvatarComponent(props) {
    return (

        <Box className="AvatarComponent"
            sx={{
                display: 'flex',
            }}>

            <Stack direction={props.direction} spacing={props.spacing}>
                <Avatar
                 alt={props.alt} 
                 src={props.src}
                 sx={
                  props.sxStyle  
                 } />
            </Stack>

        </Box>

    )
}