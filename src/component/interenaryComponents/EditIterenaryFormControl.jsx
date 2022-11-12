import React, { RefObject, useState } from 'react'
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import TextField from '@mui/material/TextField';
import {IoLocationSharp} from 'react-icons/io5'
import {MdModeEdit} from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux'

import {useJsApiLoader, Autocomplete} from "@react-google-maps/api";

// images nad icons
import {AiFillStar} from 'react-icons/ai';
import {BsThreeDotsVertical} from "react-icons/bs";
import {RiDeleteBin6Line} from "react-icons/ri";
import {MdExpandLess, MdExpandMore, MdOutlineAddBox} from 'react-icons/md';

import City from '../../assets/icons/city.png'
import { Img } from '../commonComponents/ImageComponent';
import { LinearProgress } from '@mui/material';
import { addTripPlan } from '../../store/Trip/EditIterenary/action';
// type propsType = {
//     numOfDays?: number,
//     setEditing: React.Dispatch<React.SetStateAction<boolean>>,
//     handleEditing: () => void
// }
const EditIterenaryFormControl = ({handleEditing, setEditing, createdTrip}) => {
    const [addMore, setAddMore] = useState(1)
    const [openList, setOpenList] = useState("");
    const [tripLocation, setTripLocation] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const {data} = createdTrip;


    const getNewTrip =  JSON.parse(localStorage.getItem("newtrip") || "")
    let first = getNewTrip?.data.trip_start_date;
    let second =  getNewTrip?.data.trip_end_date;

    // let numOfDays = datediff(first,second)
    const days = new Array(addMore).fill('');

// google API code
    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_MAP_API_KEY,
        libraries: ['places']
      })

    //   connecting to API
      const addNewTripPlan = useSelector((state) => state?.addTripPlanRed);

      const {loading, tripPlan} = addNewTripPlan;

      const dispatch = useDispatch()
      
      const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTripPlan(tripLocation,startTime,endTime))
      }

      console.log('the new trip',addNewTripPlan);

    //   handles list toggle
    const handleViewList = (i) => {
       if(openList === i){
        setOpenList("")
       }else{
        setOpenList(i)
       }
      };
    const handleAddMore = () => {
        setAddMore(addMore + 1)
    }
  return (
    <>
     {
      loading && <LinearProgress sx={{height: "10px", borderRadius:"10px", marginBottom: "20px"}}/>
    }
    <Box sx={{mt:4}}>
        <div className='w-[78%] flex items-center justify-end pr-4 mb-2 mt-2 mr-auto ml-auto'>
                <div className='bg-[#572297] w-11 h-11 rounded-lg flex items-center justify-center cursor-pointer' onClick={handleAddMore}>
                    <MdOutlineAddBox size={30} color="#fff"/>
                </div>
        </div>
        {
            days.map((day,i) => {
                return <Box sx={{mt:2, mb:1}} key={i}>
                    <Box component="h3" sx={{color:"#141820", fontSize:"30px", lineHieght:"48.76px"}}>{`Day ${i + 1} / ${data?.trip_start_date}`} <MdModeEdit size={18} color="#4A5568"/></Box>
                    <Box  className='dynamicInputs' sx={{border:"1px solid #A0AEC0", width: {sm: "100%", lg: "87%"}, p: 1, height: "65px", mt: 1, mb: 1}} key={i} >
                    {/* onSubmit={(e) => handleSubmit(e)} */}
                    
                        {
                            isLoaded ? <Autocomplete>
                            <input placeholder='Add location' style={{outline:"none"}} value={ tripLocation} onInput={(e) => setTripLocation(e.target.value)}/> 
                        </Autocomplete> : <LinearProgress sx={{height: "10px", borderRadius:"10px", marginBottom: "20px"}}/>
                        } 
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <TextField id="startTime" label="Start Time" type="time" 
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputProps={{
                                step: 300, // 5 min
                            }}
                            
                            sx={{ width: 200, mr:1, ml: 10, p:0 }}
                            value={startTime}
                            onChange={(e) => setStartTime(e.target.value)}
                            
                        />
                         <TextField id="endTime" label="End Time" type="time" 
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputProps={{
                                step: 300, // 5 min
                            }}
                            sx={{ width: 200, mr:1, ml: 1 }}
                            value={endTime}
                            onChange={(e) => setEndTime(e.target.value)}
                        />
                       </LocalizationProvider>
                        <IoLocationSharp size={30} color="#572297" id="locationEdit" />
                    </Box>
                    <button className='border-none flex items-center justify-center pt-2 pb-2 pl-4 pr-4 bg-[#572297] rounded-lg text-[#fff]' onClick={(e) => handleSubmit(e)}>Add</button>
                    {/* trip plan card display */}
                    
                <List sx={{  width: {sm: "100%", lg: "88%"},  bgcolor: 'background.paper' , mt:2}}component="nav" aria-labelledby="nested-list-subheader">
        {/* <ListItemText primary="" /> */}
     
                        <ListItemButton onClick={() => handleViewList(`${i}`)} sx={{display:'flex', justifyContent:"space-between"}} >
                        <Box component="h2" sx={{fontWeight: 600,}}></Box>
                             {openList ? <MdExpandLess size={24} color="#572297"/> : <MdExpandMore size={24} color="#572297"/>}
                        </ListItemButton>
                        <Collapse in={i.toString() === openList} timeout="auto" unmountOnExit={true}>
                                <List component="div" disablePadding>
                                    <Box sx={{p:1, borderLeft: "4px solid #FBB348", width: {sm: "100%", lg: "100%"}, position: "relative"}}>
                            <Paper elevation={4} sx={{p: 1}}> 
                                <Box sx={{display:"flex", gap: 4}}>
                                    <Box><Img alt="city" src={City}/></Box>
                                    <Box sx={{display:"flex",flexDirection: "column", gap: 1, color:"#141820", fontSize:"14px", fontWeight:400}}>
                                        <Box sx={{display:"flex", flexDirection: "column",gap:1}}>
                                            <h3>{tripPlan?.data.location_name}</h3>
                                            <Box sx={{display:"flex", flexDirection: "row", alignItems:"center",gap:1}}>
                                            <span>4.8</span>
                                            <Box sx={{display:"flex", flexDirection: "row", alignItems:"center"}}> <AiFillStar color='#FBB348' size={18}/> <AiFillStar color='#FBB348' size={18}/> <AiFillStar color='#FBB348' size={18}/> <AiFillStar color='#FBB348' size={18}/> <AiFillStar color='#FBB348' size={18}/>
                                            </Box>
                                            <span>61,628 reviews</span>
                                        </Box>
                                        </Box>
                                        
                                        <Box>
                                            <span>Bridge</span>
                                        </Box>
                                    </Box>
                                    <Box sx={{ml: "auto", display: "flex", flexDirection:"column", justifyContent:"space-between", alignItems: "center"}}>
                                        <RiDeleteBin6Line color="#572297" size={24}/>
                                        <Box sx={{backgroundColor: "#D6E0FF", width:"32px", height: "32px", borderRadius: "32px", display:"flex", justifyContent: "center", alignItems: "center", color: "#2952CC", fontSize: "12px", fontWeight: "400"}}>
                                            SS
                                        </Box>
                                    </Box>
                                </Box>
                            </Paper>
                            <Box sx={{mt: 1, mb: 1, display: "flex", aligItems: "center", gap: 0}}>
                                <BsThreeDotsVertical color='#572297' size={30}/>
                                <span style={{paddingTop: "5px"}}>15 min walk</span>
                            </Box>
                            <Box sx={{display: "flex", flexDirection: "column", position: "absolute", top: "12%", right: "102%", height:"auto"}}>
                                <Box sx={{display: "flex", alignItems: "center", justifyContent: "center",  border: "1px solid #E2E8F0", borderRadius: "4px", boxSizing:"border-box",mt:0.5,  mb:1, p: 1, color:"#141820", fontSize: "12px", fontWeight: "400", lineHeight:"12px"}}>{tripPlan?.data.itinerary_start_time
}am</Box>

                                <Box sx={{display: "flex", alignItems: "center", justifyContent: "center",  border: "1px solid #E2E8F0", borderRadius: "4px", boxSizing:"border-box", mt: 0.5, mb:1, p: 1, color:"#141820", fontSize: "12px", fontWeight: "400", lineHeight:"12px"}} >
                                {tripPlan?.data.itinerary_end_time}pm
                                </Box>
                            </Box>
                            </Box>
                                </List>
                        </Collapse>
                    </List>
                </Box>
            })
        }
    </Box>
    </>
  )
}
export default EditIterenaryFormControl
// onFocus={() => handleEditing() } onBlur={() => setEditing(false)}