import React from "react";
import { Box, Stack, Button, ButtonGroup, Badge, Avatar, } from "@mui/material";
import CommentIcon from '@mui/icons-material/Comment';
import InterestsIcon from '@mui/icons-material/Interests';
import TesteDeImagem from '../../TesteDeImagem.jpg'

import './Publicacao.css';

function Midia(type) {
    if (type.midiaVideoContent == true) {
        return <h3>Video Content</h3>
    }
}

export default function Publicacao() {
    return (
        <Box className="Publicacao-main">
           
        </Box >

    )
}