import React from 'react'
import Box from '@mui/material/Box';
import Typography  from '@mui/material/Typography';
import Button from '@mui/material/Button';

const NewTripUp = () => {
  return (
    <Box sx={{ width:"90%", ml:"auto", mr:"auto", mt:2, mb:4, height:"40vh"}}>
      <Box sx={{p:2}}>
        <Typography variant='h2' sx={{fontSize:"24px", fontWeight:"600", fontFamily:'Montserrat',lineHeight:"29px", mt:2, mb:2}}>New trip comming up?</Typography>
        <Typography variant='h3' sx={{fontSize:"18px", fontWeight:"400",fontFamily:'Montserrat', lineHeight:"22.63px", mt:2, mb:2}}>Start your planning now and enjoy later!</Typography>

        <Button variant="contained" size="large" sx={{backgroundColor:"#572297", color:"#fff", fontSize:"16px",fontWeight:"600", borderRadius:"4px", display:"flex", alignItems:"center", justifyContent:"center", mt:4, pt:2, pb:2}}>
            Start new itinerary
        </Button>
      </Box>
    </Box>
  )
}

export default NewTripUp
