import React from 'react'
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Img } from './ImageComponent';
import Logo from '../assets/final.png';
import Avatar from '../assets/icons/Shape.png'

const EditHeader = () => {
  return (
    <Paper elevation={0} sx={{position:"static",
    zIndex: 10}}>
         <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: "center",
        minHeight: 90,
    }}>
            <Container maxWidth="xl" sx={{display: 'flex', alignItmes:'center', justifyContent:'space-between'}}>
                    <Img alt={'triping'} src={Logo}/>
                    <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'200px'}}>
                        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent:'space-between', width:'65px'}}>
                            <Box sx={{width:'6px', height:'6px', backgroundColor:' #52BD94', borderRadius:10}}></Box>
                            <Box component="span" sx={{fontSize:'16px', fontWeight:400}}>Editing</Box>
                        </Box>
                        <Button variant="contained" sx={{display:'flex',alignItems:'center', backgroundColor:'#572297', borderRadius:1, color: "#fff", textTransform:'capitalize', fontFamily:'Montserrat', fontWeight:600, fontStyle:'normal', fontSize:'16px'}}>Save</Button>
                        <Box sx={{width:'44px', height:'44px', backgroundColor:'#CAD5F3', borderRadius:5, display:'flex', alignItems:'center', justifyContent:'center'}}>
                            <Img alt='avatar' src={Avatar}/>
                        </Box>
                    </Box>
            </Container>
        </Box>
   </Paper>
  )
}

export default EditHeader
