import { Box, Stack, Typography } from '@mui/material';
import Sidebar from './Sidebar'
import Videos from './Video'

export default function Feed() {

  return (
    <Stack
      sx={{ flexDirection: { sx: 'column', md: "row" } }}
    >

      <Box
        sx={{ height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 } }}>
        <Sidebar />

        <Typography className='copyright'
          variant='body2'
          sx={{ mt: 1.5, color: '#000' }}>
          Copyright 2023 - Social Players
        </Typography>

      </Box>

      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant='h4' fontWeight="bold" mb={2}
          sx={{ color: 'red' }}>
          Novos <span style={{ color: 'rgb(49, 2, 124)' }}> Videos</span>
        </Typography>

        <Videos videos={[]}/>
      </Box>

    </Stack>
  )
}