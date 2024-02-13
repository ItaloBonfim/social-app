import { Box } from '@mui/material';
import Navbar from '../Components/Gaming/Navbar';
import Feed from '../Components/Gaming/Feed';

import './css/Gaming.css'

//https://www.youtube.com/watch?v=4ykAepVkG5Y
//https://www.youtube.com/watch?v=FHTbsZEJspU --
export default function Gaming() {

    return (
        <Box>
            <Navbar />
            <Feed /> 
        </Box>
    )
}