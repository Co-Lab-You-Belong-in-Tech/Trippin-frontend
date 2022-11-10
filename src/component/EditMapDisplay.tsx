import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button';
import { TextInputField } from 'evergreen-ui'
import ListItemsComp from './ListItemsComp'


// react icons import
// import {IoMdNavigate, IoNavigateCircleSharp} from 'react-icons/io'
import {BiNavigation} from "react-icons/bi"
import {IoReturnUpBackOutline} from 'react-icons/io5'

// react googlemap API imports
import {useJsApiLoader, GoogleMap, Marker, Autocomplete} from "@react-google-maps/api";
// import Geocode from "react-geocode"





// import { Skeleton } from '@mui/material';

import { travelGroup } from '../utils/travelgroup';
import Skeleton from './Skeleton';

// const center = {lat: 37.7749, lng: 122.4194}
const center = {lat:37.773972, lng:-122.431297}
// const center = "Lagos, Nigeria";
const EditMapDisplay = () => {
const [map, setMap] = useState< google.maps.Map | null>(null)
 

  const {isLoaded} = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_MAP_API_KEY as string,
    libraries: ['places']
  })
  // Geocode.setApikey(process.env.REACT_APP_MAP_API_KEY)
  
  return (
    <Box sx={{display:"flex", flexDirection:"column", width:"40%", height:"auto", mt:5, mb:5}}>
      {/* google map container */}
        <Box sx={{width: "459px", height:"459px", position:"relative"}}>
            {/* <Img alt="google map" src={googleMap}/> */}
            {!isLoaded ? 
            <Skeleton /> :
            <GoogleMap center={center}
             zoom={12} 
             mapContainerClassName="w-full h-full"
             onLoad={(map) => setMap(map)}
             >
                <Marker position={center}/>
            </GoogleMap> 
             }
             <Box sx={{position:"absolute", top:20, right:100, cursor:"pointer", borderRadius: "100%", backgroundColor:"#3C1769", padding:"5px"}}>
                <IoReturnUpBackOutline size={24} color="#fff" onClick={() => map?.panTo(center)}/>
             </Box>
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
