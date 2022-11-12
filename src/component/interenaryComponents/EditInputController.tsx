import React, { RefObject } from 'react'
import {Box, Typography } from '@mui/material';
import EditIterenaryFormControl from './EditIterenaryFormControl';

type editInpttype = {
  setEditing: React.Dispatch<React.SetStateAction<boolean>>,
  handleEditing: () => void,
  createdTrip: any
}
const EditInputController = ({handleEditing, setEditing, createdTrip}: editInpttype) => {
  return (
    
        <Box sx={{width:"60%",  ml:12, pb:2}}>
            <EditIterenaryFormControl handleEditing={handleEditing} setEditing={setEditing} createdTrip={createdTrip}/>
        </Box>
  )
}

export default EditInputController
