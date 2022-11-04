import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import HeaderComponent from '../component/HeaderComponent';
import IteranaryListComp from '../component/componentStyle/IteranaryListComp';
import NewTripUp from '../component/NewTripUp';


// icons and images import


const TripProfileList = () => {
  return (
    <Box maxWidth="xl">
        <HeaderComponent showIcon={true}/>
        <Box sx={{ height: 'auto', pb:5 }} >
          <IteranaryListComp />
          <NewTripUp />
        </Box>
    </Box>
  )
}

export default TripProfileList
