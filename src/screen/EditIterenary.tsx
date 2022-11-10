import React, { useRef, useState, RefObject } from 'react'
import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';
import EditHeader from '../component/EditHeader';
import EditBannerComponent from '../component/EditBannerComponent';
import EditInputController from '../component/EditInputController';
import EditMapDisplay from '../component/EditMapDisplay';
import TransitionsModal from '../component/ModalCoponent';
import { BsNutFill } from 'react-icons/bs';


const EditIterenary = () => {
  const [open, setOpen] = React.useState(false);
  const [editing, setEditing] = React.useState(false);
  const show = true
  const createdTrip = JSON.parse(localStorage.getItem('newtrip') || "")
  const handleOpen = () => setOpen(true);
  const handleEditing = () => {
    setEditing(true)
    console.log('editing')
  }
  return (
    <Box sx={{}}>
      {
        open && <TransitionsModal open={open} setOpen={setOpen} />
      }
      <EditHeader open={open} setOpen={setOpen} handleOpen={handleOpen} editing={editing} show={show}/>
      <EditBannerComponent createdTrip={createdTrip}/>
      <Box>
        <Box sx={{display:"flex", alignItems:"center", width:'50%', textAlign:'left',ml:12, mb:4, mt:6}}>
            <Typography sx={{color:"#141820", fontSize:"24px", fontWeight: 600, lineHeight:"29.26px"}}>
                Start your itineray adding your daily activities below.
            </Typography>
        </Box>
        <Box sx={{display:"flex", flexDirection:"row"}}>
            <EditInputController setEditing={setEditing} handleEditing={handleEditing} />
            <EditMapDisplay />
        </Box>
      </Box>
    </Box>
  )
}

export default EditIterenary
