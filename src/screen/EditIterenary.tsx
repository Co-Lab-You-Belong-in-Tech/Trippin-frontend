import React, { useRef, useState, RefObject,useEffect } from 'react'
import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';
import EditHeader from '../component/interenaryComponents/EditHeader';
import EditBannerComponent from '../component/interenaryComponents/EditBannerComponent';
import EditInputController from '../component/interenaryComponents/EditInputController';
import EditMapDisplay from '../component/interenaryComponents/EditMapDisplay';
import TransitionsModal from '../component/commonComponents/ModalCoponent';
import { BsNutFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';


const EditIterenary = () => {
  const [open, setOpen] = React.useState(false);
  const [editing, setEditing] = React.useState(false);
  const show = true
  const createdTrip = JSON.parse(localStorage.getItem('newtrip') || "")
  const navigate = useNavigate()
  const handleOpen = () => {
    setOpen(true);
    const timer = setTimeout(() => {
      navigate('/tripprofile')
    }, 2000);
    return () => clearTimeout(timer);
  }
  const handleEditing = () => {
    setEditing(true)
  }
  // useEffect(() => {
    
  // }, []);
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
            <EditInputController setEditing={setEditing} handleEditing={handleEditing} createdTrip={createdTrip}/>
            <EditMapDisplay />
        </Box>
      </Box>
    </Box>
  )
}

export default EditIterenary
