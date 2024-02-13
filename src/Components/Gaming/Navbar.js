import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import Searchbar from './Searchbar'
export default function Navbar() {

  return (
    <Stack
      direction="row"
      alignContent="center"
      p={2}
      sx={{ position: 'sticky', background: 'rgb(49, 2, 124);', top: 0, justifyContent: 'space-between' }}
    >
      <Link to="/"
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <img src="null" alt='logo' height={45} />
      </Link>

    <Searchbar />


    </Stack>
  )
}