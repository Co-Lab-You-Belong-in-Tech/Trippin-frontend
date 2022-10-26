import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button';
import { TextInputField } from 'evergreen-ui'
import { useNavigate } from 'react-router-dom';

// icons

// import {IoLocationSharp} from 'react-icons/io5'

type tripPlanType = {
  routeTo : string,
}

const TripPlanningForm = ({routeTo}: tripPlanType) => {
  let navigate = useNavigate();
  const handeRoute = () => {
    navigate(routeTo)
  }
  return (
    <Box component="form" sx={{display: 'flex', flexDirection:'column', justifyContent:'center', alignItems: 'space-between', pl:2,pr:2}}>
           <Box >
                <TextInputField
                id="tripname"
                label="Name your trip"
                inputHeight={40}
                required
                // description="This is a description."
                placeholder="e.g. Trip to San Francisco"
              />
           </Box>
           <Box>
                <TextInputField
                  id="location"
                  label="Where to?"
                  inputHeight={40}
                  required
                  // description="This is a description."
                  placeholder="Add location"
                />
                {/* <IoLocationSharp  size={24}/> */}
           </Box>
           <Box sx={{display: 'flex', flexDirection:'row', justifyContent:'space-between'}}>
            <Box >
                <TextInputField
                  id="start"
                  label="Start date"
                  type='date'
                  width="270px"
                  inputHeight={40}
                  required
                  // description="This is a description."
                  placeholder="MM/DD/YY"
                />
            </Box>
            <Box>
                <TextInputField
                  id="end"
                  label="End date"
                  type='date'
                  required
                  width="270px"
                  inputHeight={40}
                  // description="This is a description."
                  placeholder="MM/DD/YY"
                />
           </Box>
           </Box>
           <Box>
                <TextInputField
                id="invite"
                label="Invite your travel buddies"
                inputHeight={40}
                description="To invite more than one person please separete email accounts using a ;"
                placeholder="johndoe@gmail.com; janedoe@gmail.com"
              />
           </Box>
           <Box sx={{ '& button': { ml: 20 } }}>
            <Button variant="contained" size="large" onClick={handeRoute}>
              Create New Itinerary
            </Button>
           </Box>
    </Box>
  )
}

export default TripPlanningForm
