import React from 'react'

import {Stack} from '@mui/material'

import { categories } from '../utils/constants'
export default function sidebar() {
  return (

    <Stack
    direction="row"
    sx={{
      overflowY:'auto',
      height:{sx :'auto', md :'95%'},
      flexDirection: { md:'column' }


    }}

    >

      { categories.map( ( item) => 
      ( 

          <button>

            <span> {item.icon}</span>
            <span> {item.name}</span>
          </button>
      )
      )}

    </Stack>
    
  )
}
