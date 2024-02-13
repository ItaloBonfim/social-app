import { Box, Stack, Grid, Paper, Avatar, Typography } from '@mui/material';

import xereca from '../../static/Ibagens/xereca03.PNG'
import rabuda from '../../static/Ibagens/Rabuda37.PNG'
const arrayVideos = [1, 2, 3, 4];
export default function Video() {

  return (
    <Stack>

      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Paper component="img" src={xereca} alt="banner" className='gaming-banner' />
      </Stack>


      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        rowGap={{ xs: 1, sm: 2, md: 3 }}
        columnGap={{ xs: 1, sm: 2, md: 3 }}
        marginTop={2}
        width='100%'

      >
        {arrayVideos.map((index) => (
          <Paper className='border'
            sx={{ width: { sx: 'auto', md: '360px' }, height: { sx: 'auto', md: '10%' }, overflow: 'hidden' }}
          key={index}
          >
            <Paper elevation={0}>

              <Box component="img" src={rabuda} alt="" className='vid-thumbnail' />
            </Paper>

            <Box>

              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"
                sx={{ width: '60px', height: '60px' }}
              />

              <Stack
                direction="column"
                justifyContent="flex-start"
                /*alignItems="flex-start"*/
                spacing={0}
                sx={{}}
              >
                <Typography component="small" variant='body2'>Visualizações 34K</Typography>
                <Typography component="h3" variant='body1' textAlign='justify'>Create A Website Like YouTube Using HTML CSS JS | YouTube Clone Website Design Step By Step</Typography>

              </Stack>

            </Box>

            <Box>

              <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
                spacing={0}
                sx={{}}
              >
                <Typography paragraph>Nome do canal</Typography>
              </Stack>
            </Box>

          </Paper>

        ))}
      </Grid>

    </Stack>
  )
}