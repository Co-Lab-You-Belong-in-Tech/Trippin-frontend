import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import TextField from '@mui/material/TextField';
import {IoLocationSharp} from 'react-icons/io5'
import {MdModeEdit} from 'react-icons/md';

// images nad icons
import {AiFillStar} from 'react-icons/ai';
import {BsThreeDotsVertical} from "react-icons/bs";
import {RiDeleteBin6Line} from "react-icons/ri";
import {MdExpandLess, MdExpandMore} from 'react-icons/md'

import City from '../assets/icons/city.png'
import { Img } from './ImageComponent';
type propsType = {
    numOfDays?: number,
    setEditing: React.Dispatch<React.SetStateAction<boolean>>,
    handleEditing: () => void
}
const EditIterenaryFormControl = ({handleEditing, setEditing}: propsType) => {
    const [openList, setOpenList] = React.useState("");
    const days = new Array(5).fill('');

    const handleViewList = (i:string) => {
       if(openList === i){
        setOpenList("")
       }else{
        setOpenList(i)
       }
      };
  return (
    <Box sx={{mt:4}}>
        {
            days.map((day,i) => {
                return <Box sx={{mt:2, mb:1}} key={i}>
                    <Box component="h3" sx={{color:"#141820", fontSize:"30px", lineHieght:"48.76px"}}>{`Day ${i + 1} - 10/${i + 3}`} <MdModeEdit size={18} color="#4A5568"/></Box>
                    <Box className='dynamicInputs' sx={{border:"1px solid #A0AEC0", width: {sm: "100%", lg: "87%"}, p: 1, height: "65px", mt: 1, mb: 1}} key={i}>
                        <input placeholder='Add location' onFocus={() => handleEditing() } onBlur={() => setEditing(false)} />  
                        <TextField id="startTime" label="Start Time" type="time" defaultValue="00:00"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputProps={{
                                step: 300, // 5 min
                            }}
                            sx={{ width: 250, mr:1, ml: 1, p:0 }}
                        />
                         <TextField id="endTime" label="End Time" type="time" defaultValue="00:00"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputProps={{
                                step: 300, // 5 min
                            }}
                            sx={{ width: 250, mr:1, ml: 1 }}
                        />
                        <IoLocationSharp size={35} color="#572297" id="locationEdit" />
                    </Box>
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
                                            <h3>Golden Gate Bridge, San Francisco, CA</h3>
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
                                <Box sx={{display: "flex", alignItems: "center", justifyContent: "center",  border: "1px solid #E2E8F0", borderRadius: "4px", boxSizing:"border-box",mt:0.5,  mb:1, p: 1, color:"#141820", fontSize: "12px", fontWeight: "400", lineHeight:"12px"}}>10:00am</Box>

                                <Box sx={{display: "flex", alignItems: "center", justifyContent: "center",  border: "1px solid #E2E8F0", borderRadius: "4px", boxSizing:"border-box", mt: 0.5, mb:1, p: 1, color:"#141820", fontSize: "12px", fontWeight: "400", lineHeight:"12px"}} >
                                10:30am
                                </Box>
                            </Box>
                                    </Box>
                                    <Box sx={{p:1, borderLeft: "4px solid #FBB348", width: {sm: "100%", lg: "100%"}, position: "relative"}}>
                            <Paper elevation={4} sx={{p: 1}}> 
                                <Box sx={{display:"flex", gap: 4}}>
                                    <Box><Img alt="city" src={City}/></Box>
                                    <Box sx={{display:"flex",flexDirection: "column", gap: 1, color:"#141820", fontSize:"14px", fontWeight:400}}>
                                        <Box sx={{display:"flex", flexDirection: "column",gap:1}}>
                                            <h3>Golden Gate Bridge, San Francisco, CA</h3>
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
                                <Box sx={{display: "flex", alignItems: "center", justifyContent: "center",  border: "1px solid #E2E8F0", borderRadius: "4px", boxSizing:"border-box",mt:0.5,  mb:1, p: 1, color:"#141820", fontSize: "12px", fontWeight: "400", lineHeight:"12px"}}>10:00am</Box>

                                <Box sx={{display: "flex", alignItems: "center", justifyContent: "center",  border: "1px solid #E2E8F0", borderRadius: "4px", boxSizing:"border-box", mt: 0.5, mb:1, p: 1, color:"#141820", fontSize: "12px", fontWeight: "400", lineHeight:"12px"}} >
                                10:30am
                                </Box>
                            </Box>
                                    </Box>
                                    <Box sx={{p:1, borderLeft: "4px solid #FBB348", width: {sm: "100%", lg: "100%"}, position: "relative"}}>
                            <Paper elevation={4} sx={{p: 1}}> 
                                <Box sx={{display:"flex", gap: 4}}>
                                    <Box><Img alt="city" src={City}/></Box>
                                    <Box sx={{display:"flex",flexDirection: "column", gap: 1, color:"#141820", fontSize:"14px", fontWeight:400}}>
                                        <Box sx={{display:"flex", flexDirection: "column",gap:1}}>
                                            <h3>Golden Gate Bridge, San Francisco, CA</h3>
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
                                <Box sx={{display: "flex", alignItems: "center", justifyContent: "center",  border: "1px solid #E2E8F0", borderRadius: "4px", boxSizing:"border-box",mt:0.5,  mb:1, p: 1, color:"#141820", fontSize: "12px", fontWeight: "400", lineHeight:"12px"}}>10:00am</Box>

                                <Box sx={{display: "flex", alignItems: "center", justifyContent: "center",  border: "1px solid #E2E8F0", borderRadius: "4px", boxSizing:"border-box", mt: 0.5, mb:1, p: 1, color:"#141820", fontSize: "12px", fontWeight: "400", lineHeight:"12px"}} >
                                10:30am
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
  )
}
export default EditIterenaryFormControl
