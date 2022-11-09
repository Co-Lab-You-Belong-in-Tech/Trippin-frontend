import React, { RefObject } from 'react'
import {Box, Typography } from '@mui/material';
import EditIterenaryFormControl from './EditIterenaryFormControl';

type editInpttype = {
  setEditing: React.Dispatch<React.SetStateAction<boolean>>,
  handleEditing: () => void,
}
const EditInputController = ({handleEditing, setEditing}: editInpttype) => {
  return (
    
        <Box sx={{width:"60%",  ml:12, pb:2}}>
            <EditIterenaryFormControl handleEditing={handleEditing} setEditing={setEditing} />
        </Box>
  )
}

export default EditInputController
