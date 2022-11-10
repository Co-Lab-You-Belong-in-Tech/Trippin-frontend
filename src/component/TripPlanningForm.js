import React, {useEffect, useRef, useState} from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button';
import { TextInputField } from 'evergreen-ui'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {useJsApiLoader, Autocomplete} from "@react-google-maps/api";
import Skeleton from './Skeleton';
import { RootState } from '..';
import { newTripAction } from '../store/Trip/NewTrip/actions';
import Loader from './UtilCOmponents/Loader';

// icons

// import {IoLocationSharp} from 'react-icons/io5'

// type tripPlanType = {
//   routeTo : string,
// }

const TripPlanningForm = ({routeTo}) => {
  const [tripName, setTripName] = useState("");
  const[destination, setDestination] = useState("");
  const [startDate, setStartdate] = useState("");
  const [endDate, setEnddate] = useState("");


  const dispatch = useDispatch();
  
  // const {isLoaded} = useJsApiLoader({
  //   googleMapsApiKey: process.env.REACT_APP_MAP_API_KEY as string,
  //   libraries: ['places']
  // })
  const destinationRef = useRef()
  const {isLoaded} = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_MAP_API_KEY,
    libraries: ['places']
  })

  const newTripPlan = useSelector((state) => state?.createNewTripRed);

  const {loading, error, newTrip} = newTripPlan
 

  let navigate = useNavigate();

  // useEffect(()=>{
  //   setDestination(destinationRef.current.value)
  // },[destination])

  const handeCreateTrip = (e) => {
    e.preventDefault();
    dispatch(newTripAction(tripName, destination, startDate, endDate))
  }

  // console.log('my destination', destination);

  useEffect(() => {
    if(newTrip) {
      navigate(routeTo)
    }
  },[navigate, newTrip, routeTo])
  return (
    <>
        {
      loading && <Loader />
    }
    
    <Box component="form" sx={{display: 'flex', flexDirection:'column', justifyContent:'center', alignItems: 'space-between', pl:2,pr:2}}>
           <Box >
                <TextInputField
                id="tripname"
                label="Name your trip"
                inputHeight={40}
                required
                value={tripName}
                onChange={(e) => setTripName(e.target.value)}
                // description="This is a description."
                placeholder="e.g. Trip to San Francisco"
              />
           </Box>
           <Box>
                {
                  isLoaded ? <Autocomplete onPlaceChanged={(place) => console.log('the place',place)}>
                  
                  <TextInputField
                    id="location"
                    label="Where to?"
                    inputHeight={40}
                    required
                    value={destination}
                    // ref={destinationRef}
                    onInput={(e) => setDestination(e.target.value)}
                    // description="This is a description."
                    placeholder="Add location"
                  /> 

                </Autocomplete>
                : 
                <Skeleton />
                }
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
                  value={startDate}
                  onChange={(e) => setStartdate(e.target.value)}
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
                  value={endDate}
                  onChange={(e) => setEnddate(e.target.value)}
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
            <Button variant="contained" size="large" onClick={(e) => handeCreateTrip(e)}>
              Create New Itinerary
            </Button>
           </Box>
    </Box>
    </>
  )
}

export default TripPlanningForm
