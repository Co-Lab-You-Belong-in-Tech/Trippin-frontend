import React from 'react'
import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import {MdModeEdit} from 'react-icons/md';
import {BsInfo, BsFillCameraFill} from 'react-icons/bs';
import BannerImg from '../assets/editbanner.png'


const EditBannerComponent = () => {
  return (
        <Box sx={{height:'215px',backgroundImage:`url(${BannerImg})`, backgroundRepeat: "no-repeat",backgroundPosition: "center center",
            backgroundSize: "100% 100%"}}> 
                <Box sx={{backgroundColor:'rgba(20, 24, 32, 0.55)', height:'215px'}}>
                    <Box sx={{position:'absolute', top:140, left:100}}>
                        <Box sx={{display:'flex', alignItems:'center'}}><Typography sx={{color:'#fff', fontSize:'40px', fontWeight:600, letterSpacing:'1px', mr:1}}>Girls weekend</Typography> <MdModeEdit size={18} color="#fff"/></Box>
                        <Box sx={{display:'flex', alignItems:'center'}}><Typography sx={{color:'#fff', fontSize:'24px', fontWeight:400, letterSpacing:'1px', mr:1}}>San Francisco, CA</Typography> <MdModeEdit size={18} color="#fff"/></Box>
                        <Box sx={{display:'flex', alignItems:'center'}}><Typography sx={{color:'#fff', fontSize:'24px', fontWeight:400, letterSpacing:'1px', mr:1}}>10/03  -  10/06</Typography> <MdModeEdit size={18} color="#fff"/></Box>
                    </Box>
                    <Box sx={{display:'flex', flelxDirection: "row",gap:2, alignItems:'center', position:"absolute", right: 50, top: 240}}>
                            <Box sx={{display:'flex', gap:1, alignItems:'center'}}>
                                <Typography sx={{color:"#fff", fontSize:"24px", fontWeight:600}}>#ABC345</Typography>
                                <Box sx={{display:'flex', justifyContent:"center", alignItems:'center', width:'20px',    height:'20px', borderRadius:10, backgroundColor:"#fff"}}>
                                    <Tooltip title="Trip id" enterDelay={500} leaveDelay={200}>
                                        <BsInfo size={18} color="#000"/>  
                                    </Tooltip>
                                </Box>
                            </Box>
                            <Box sx={{display:"flex", alignItems:"center", justifyContent:"center", width:'30px', height:"30px", borderRadius:10, backgroundColor:"rgba(255, 255, 255, 0.6);"}}>
                                <BsFillCameraFill size={18} color="#572297"/>
                            </Box>
                           
                    </Box>
                </Box>
        </Box>
   
  )
}

export default EditBannerComponent
