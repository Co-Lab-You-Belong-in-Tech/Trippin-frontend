import React from 'react';
import { useNavigate } from "react-router-dom";
import { Box, Paper } from '@mui/material';
import TripPlanningForm from '../component/TripPlanningForm'
import BackgroundImg from '../assets/backgroundImg.png'
import HeaderComponent from '../component/HeaderComponent';


interface itineraryItems {
  id: number,
  tripName: string,
  location: string,
  startDate: string,
  endDate: string,
  numOfDays: number,
  tripId: string,
  invites: string[]
}
const NewTrip = () => {
  return (
    <>
       <HeaderComponent />
        <Box maxWidth='xl' sx={{display: 'flex', flexDirection:"row",flexGrow: 1, height: '88vh'}}>
            <Box sx={{width:'60%',}}>
                <Box sx={{width:"600px", position: 'absolute', bottom: 20, left: 150}}>
                <Box component='h2' sx={{
                    fontWeight: 600,
                    fontSize:'60px',
                    lineHeight: '73px',
                    letterSpacing: '2px',
                    mb: 3,
                    ml:2
                }}>Plan a new trip</Box>
                  <TripPlanningForm routeTo={'/edit'}/>
                </Box>
            </Box>
            <Box sx={{width:'40%',backgroundImage:`url(${BackgroundImg})`, backgroundRepeat: "no-repeat",    backgroundPosition: "center center",
            backgroundSize: "100% 100%",
            height: "100%"}}>
            </Box>
      </Box>
    </>
  )
}
export default NewTrip
