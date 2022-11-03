import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button';
import { TextInputField } from 'evergreen-ui'

import googleMap from "../assets/map.png"
import { Img } from './ImageComponent'
import ListItemsComp from './ListItemsComp'
const EditMapDisplay = () => {
  const travelGroup = [{id:1, email:'sarahsmith@gmail.com', accept: true}, {id:2,email: 'jhonedoe@gmail.com', accept: true},{id:3, email:'sarahKonoh@gmail.com', accept: false},{id:4, email:'hanks@gmail.com', accept: true}, {id:5, email:'sarahKonoh@gmail.com', accept: false}, {id:6, email:'sarahKonoh@gmail.com', accept: false}]
  return (
    <Box sx={{display:"flex", flexDirection:"column", width:"40%", height:"auto", mt:5, mb:5}}>
        <Box sx={{width: "459px", height:"459px"}}>
            <Img alt="google map" src={googleMap}/>
        </Box>
        <ListItemsComp  emails={travelGroup} />
        <Box> 
            <Box sx={{width: "459px", mt:4, mb:4}} className="textField">
              <TextInputField
                  id="invite"
                  label="Invite your travel buddies"
                  inputHeight={40}
                  required
                  description="To invite more than one person please separete email accounts using a ;"
                  placeholder="johndoe@gmail.com; janedoe@gmail.com"
                />
            </Box>
           <Box sx={{ '& button': { ml: 20 , height:'50px'} }}>
              <Button className="customBtn"  size="small" sx={{backgroundColor:"#fff", color:"#572297", border: "1px solid #572297", fontSize: "16px", fontWeight:"600", fontFamily: "Montserrat"}}>
                Send Invite
              </Button>
          </Box>
        </Box>
    </Box>
  )
}

export default EditMapDisplay
