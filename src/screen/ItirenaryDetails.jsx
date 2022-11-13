import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { singleTripDetailsAction } from '../store/Trip/SingleTripDetails/action'
import EditHeader from '../component/interenaryComponents/EditHeader'
import EditBannerComponent from '../component/interenaryComponents/EditBannerComponent'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import EditInputController from '../component/interenaryComponents/EditInputController'
import EditMapDisplay from '../component/interenaryComponents/EditMapDisplay'

const ItirenaryDetails = () => {
  const [open, setOpen] = React.useState(false);
  const [editing, setEditing] = React.useState(false);
  const show = false
    const params = useParams()
    const dispatch = useDispatch()
    const createdTrip = JSON.parse(localStorage.getItem('newtrip') || "")
    const tripDetailsInfo = useSelector((state) => state.tripDetailsRed);
    const {loading, error, tripDetsInfo} = tripDetailsInfo

    console.log('from the page', tripDetsInfo.data);

    const tripDetsId = params.id;
    
    useEffect(() => {
        dispatch(singleTripDetailsAction(tripDetsId))
    }, [tripDetsId])
    const handleEditing = () => {
      setEditing(true)
    }
  return (
    <>
      <EditHeader open={open} setOpen={setOpen}  editing={editing} show={show}/>
      <EditBannerComponent createdTrip={createdTrip}/>
      {
        tripDetsInfo && <Box>
        <Box sx={{display:"flex", alignItems:"center", width:'50%', textAlign:'left',ml:12, mb:4, mt:6}}>
            <Typography sx={{color:"#141820", fontSize:"24px", fontWeight: 600, lineHeight:"29.26px"}}>
            Enjoy your trip to {tripDetsInfo?.data[0].location_name}
            </Typography>
        </Box>
        <Box sx={{display:"flex", flexDirection:"row"}}>
            <EditInputController setEditing={setEditing} handleEditing={handleEditing} createdTrip={tripDetailsInfo?.tripDetsInfo}/>
            <EditMapDisplay />
        </Box>
      </Box>
      }
    </>
  )
}

export default ItirenaryDetails
