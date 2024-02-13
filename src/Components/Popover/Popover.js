import * as React from 'react';
import Popover from '@mui/material/Popover';
import { IconButton, Stack, Typography } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { Laugh, Star } from '@emotion-icons/boxicons-solid'
import { LaughSquint, SadTear, Surprise, Angry } from 'emotion-icons/fa-regular';
import { Heart } from '@emotion-icons/fa-solid'
//@emotion-icons/boxicons-solid/Star
import { red, green, yellow, blue, purple  } from "@mui/material/colors";

export default function BasicPopover (props) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const sendReaction = (type) => {
        if (type === 1)
            console.log("Gargalhada");
        if (type === 2)
            console.log("Triste");
        if (type === 3)
            console.log("Interessante");
        if (type === 4)
            console.log("surpreso(a)");
        if (type === 5)
            console.log("Amei");
        if (type === 6)
            console.log("odiei");

        if (type === 7)
            console.log("Gostei")



        handleClose();
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>

            {/*             <IconButton onClick={handleClick}>
                <SendIcon fontSize="small" />
            </IconButton> */}

            <IconButton onClick={handleClick}>
                <ThumbUpIcon fontSize="small" />
                <Typography component="span">{props.qtdReactions}</Typography>
            </IconButton>


            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={1}>

                    <IconButton onClick={() => sendReaction(1)}>
                        <Laugh width='1.0em' height='1.0em' color={blue[500]} />
                        <Typography sx={{ marginLeft: '4px' }} component="span">Risada</Typography>
                    </IconButton>

                    <IconButton onClick={() => sendReaction(2)}>
                        <SadTear width='1.0em' height='1.0em' color={purple[500]}/>
                        <Typography sx={{ marginLeft: '4px' }} component="span">Triste</Typography>
                    </IconButton>

                    <IconButton onClick={() => sendReaction(3)}>
                        <Star width='1.0em' height='1.0em'color={green[500]} />
                        <Typography sx={{ marginLeft: '4px' }} component="span">Interessante</Typography>
                    </IconButton>

                    <IconButton onClick={() => sendReaction(4)}>
                        <Surprise width='1.0em' height='1.0em' color={yellow[500]} />
                        <Typography sx={{ marginLeft: '4px' }} component="span">Supreso(a)</Typography>
                    </IconButton>

                    <IconButton onClick={() => sendReaction(5)}>
                        <Heart width='1.0em' height='1.0em' color={red[500]}/>
                        <Typography sx={{ marginLeft: '4px' }} component="span">Amei</Typography>
                    </IconButton>

                    <IconButton onClick={() => sendReaction(6)}>
                        <Angry width='1.0em' height='1.0em' color={red[500]}/>
                        <Typography sx={{ marginLeft: '4px' }} component="span">Odiei</Typography>
                    </IconButton>



                </Stack>

            </Popover>
        </div>
    );
}
