import React from 'react'
import Box from '@mui/material/Box'

import googleMap from "../assets/map.png"
import { Img } from './ImageComponent'
const EditMapDisplay = () => {
  return (
    <Box sx={{display:"flex", flexDirection:"column", width:"40%", height:"100vh", mt:5}}>
        <Box sx={{width: "459px", height:"459px"}}>
            <Img alt="google map" src={googleMap}/>
        </Box>
    </Box>
  )
}

export default EditMapDisplay
