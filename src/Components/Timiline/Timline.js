import Box from '@mui/material/Box';
import { Typography } from '@mui/material';



export default function Timeline(props) {

  // capturar os dados do props.timeline
  // realizar um looping passando por cada publicação do vetor
  // renderizar isso dinamicamente

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      width: "80%",
      height: 480,
      m: 'auto',
      marginTop: '2%',
      backgroundColor: '#F1F2F5'

    }}>

      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        width: 610,
        height: 460,
        margin: '1%',
        backgroundColor: 'magenta'
      }}>
        <Typography>content publication {props.a}</Typography>

      </Box>

      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        width: 200,
        height: '95%',
        margin: '1%',
        backgroundColor: 'gray'
      }}>

        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '70%',
          margin: '1%',
          backgroundColor: 'red'
        }}>

          <Typography>xxxxxx</Typography>

        </Box>

        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '30%',
          margin: '1%',
          backgroundColor: 'red'
        }}>


          <Typography>zzzzzzzzzzz</Typography>

        </Box>
      </Box>

    </Box>
  )
}