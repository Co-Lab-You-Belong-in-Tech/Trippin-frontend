import React, {useState} from 'react'
import Box from "@mui/material/Box";
import { Paper } from '@mui/material';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";
import { Img } from './ImageComponent';
import Logo from '../../assets/final.png';

import '../componentStyle/headerStyle.css';
import {BsFillPersonFill} from "react-icons/bs";
import {GrFormClose} from "react-icons/gr";

type headerType = {
        showIcon?: boolean
}
const HeaderComponent = ({showIcon}: headerType) => {
        const [toggleProfile, setToggleProfile] = useState(false);
        const handleProfileToggle = () => {
                setToggleProfile(!toggleProfile)   
        }
        const handleClose = () => {
                setToggleProfile(false)  
        }
  return (
   <Paper elevation={4}>
         <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        position:"relative",
        minHeight: 90,
        pl:4,
        pr: 4,
    }} maxWidth="xl">
            <Box>
                    <Img alt={'triping'} src={Logo}/>
            </Box>
            {
               showIcon &&  <Box className="btn-cont">
                        <button className="profile-btn" onClick={handleProfileToggle}>  
                                <BsFillPersonFill size={24} color="#572297"/>
                        </button>
                </Box>
            }
        </Box>
        {
             toggleProfile && <Box sx={{boxSizing:"border-box",position:"absolute", width: "290px", height:"306px",right: 50, top:70,}}>
                        <Paper square sx={{border:"2px solid #92ACEF", height:"100%", pl:1, pr:1, borderRadius:"8px 0px 8px 8px"}}>
                                <Box sx={{ width:"100%", height:"20%", display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
                                        <Typography sx={{color:"#141820", fontSize:"24px", fontWeight:"600", fontFamily:'Montserrat'}}>My profile info</Typography>
                                        <button className="close-btn" onClick={handleClose}>
                                                <GrFormClose size={24} color="#572297"/>
                                        </button>
                                </Box>
                                <Box sx={{display: "flex", flexDirection:"column", justifyContent: "space-between"}}>
                                        <Box sx={{backgroundColor: "#D6E0FF", width:"32px", height: "32px", borderRadius: "32px", display:"flex", justifyContent: "center", alignItems: "center", color: "#2952CC", fontSize: "12px", fontWeight: "400", mt:1, mb:1}}>
                                                SS
                                        </Box>
                                        <Typography sx={{color:"#141820", fontSize:"16px", fontWeight:"600", fontFamily:'Montserrat', lineHeight:"20px", mt:1, mb:0.5}}>Account email</Typography>
                                        <Typography sx={{color:"#141820", fontSize:"18px", fontWeight:"400", fontFamily:'Montserrat', lineHeight:"20px", mt:0.5, mb:1}}>sarahsmith@gmail.com</Typography>
                                        <Typography sx={{color:"#141820", fontSize:"16px", fontWeight:"600", fontFamily:'Montserrat', lineHeight:"20px", mt:1, mb:0.5}}>Password</Typography>
                                        <Typography sx={{color:"#141820", fontSize:"18px", fontWeight:"400", fontFamily:'Montserrat', lineHeight:"20px", mt:0.5, mb:1}}>********</Typography>
                                        <Typography component="a" sx={{color:"#4A5568", fontSize:"16px", fontWeight:"600", fontFamily:'Montserrat', lineHeight:"20px", mt:1, mb:1, textDecoration:"none"}}>Change Password</Typography>
                                </Box>
                        </Paper>
                        
                </Box>
        }
   </Paper>
  )
}

export default HeaderComponent
