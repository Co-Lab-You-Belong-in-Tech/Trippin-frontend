import React from 'react'
import Box from "@mui/material/Box";
import { Paper } from '@mui/material';
import Container from '@mui/material/Container';
import { Img } from './ImageComponent';
import Logo from '../assets/final.png'
const HeaderComponent = () => {
  return (
   <Paper elevation={4}>
         <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: "center",
        minHeight: 90,
    }} maxWidth="xl">
            <Container >
                    <Img alt={'triping'} src={Logo}/>
            </Container>
        </Box>
   </Paper>
  )
}

export default HeaderComponent
