import React from 'react'


import {Stack} from '@mui/material'

import { categories } from '../utils/constants'

const selectedItem='New'

export default function SdBar() {
  return (
    <Stack
    direction= "row"
    sx={{
        flexDirection: {md: 'column'},
        padding: '2px'

    }}


    >
        {
            categories.map((item)   =>
            
            (   

                <button 
                style={
                    {
                        background: item.name === selectedItem  && '#FC1503',
                        color: 'White'


                    }
                }
                className='category-btn'
                variant="fab"
                key= {item.name}
                >
<span style={{ color :  item.name === selectedItem ? 'white' : 'red' , marginRight: '15px' }}> {item.icon}</span>
<span style={{ opacity: item.name === selectedItem ? '1' : '0.8'}}> {item.name}</span>
</button>


             )
            )    

        }



    </Stack>
  )
}
