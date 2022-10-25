import React from 'react'
import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';
import EditHeader from '../component/EditHeader';
import EditBannerComponent from '../component/EditBannerComponent';
import EditInputController from '../component/EditInputController';
import EditMapDisplay from '../component/EditMapDisplay';

const EditIterenary = () => {
  return (
    <Box sx={{}}>
      <EditHeader />
      <EditBannerComponent />
      <Box>
        <Box sx={{display:"flex", alignItems:"center", width:'50%', textAlign:'left',ml:12, mb:4, mt:6}}>
            <Typography sx={{color:"#141820", fontSize:"24px", fontWeight: 600, lineHeight:"29.26px"}}>
                Start your itineray adding your daily activities below.
            </Typography>
        </Box>
        <Box sx={{display:"flex", flexDirection:"row"}}>
            <EditInputController />
            <EditMapDisplay />
        </Box>
      </Box>
    </Box>
  )
}

export default EditIterenary
