import {  Stack } from '@mui/material';

import { categories } from './constants'

const categoriaSelecionada = 'New';
export default function Sidebar() {

  return (
    <Stack
      className='sidebar-content'
      direction="row"
      sx={{
        overflowY: 'auto',
        height: { sx: 'auto', md: '95%' },
        flexDirection: { md: 'column' }
      }}
    >

      {categories.map((category) => (
        <button
          className='category-btn'
          style={{ background: category.name === categoriaSelecionada && 'rgb(49, 2, 124)', color: 'Black' }}
          key={category.name}
        >

          <span
            style={{ color: category.name === categoriaSelecionada ? 'white' : 'red', marginRight: '15px' }}
          >
            {category.icon}
          </span>

          <span style={{opacity: category.name === categoriaSelecionada ? '1': '0.8' }}>{category.name}</span>
          
        </button>
      ))};

    </Stack>
  )
}