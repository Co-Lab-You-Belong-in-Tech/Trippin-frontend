import React from 'react'
import Box from '@mui/material/Box';
import {IoLocationSharp} from 'react-icons/io5'
import {MdModeEdit} from 'react-icons/md';
type propsType = {
    numOfDays: number,
}
const EditIterenaryFormControl = () => {

    const days = new Array(5).fill('')
  return (
    <Box sx={{mt:4}}>
        {
            days.map((day,i) => {
                return <Box sx={{mt:2, mb:1}}>
                    <Box component="h3" sx={{color:"#141820", fontSize:"40px", lineHieght:"48.76px"}}>{`Day ${i + 1} - 10/${i + 3}`} <MdModeEdit size={18} color="#4A5568"/></Box>
                    <Box className='dynamicInputs' sx={{border:"1px solid #A0AEC0", width:"450px"}} key={i}>
                        <input placeholder='Add location'/> <IoLocationSharp size={18} color="#572297" id="locationEdit"/>
                    </Box>
                </Box>
            })
        }
    </Box>
  )
}
export default EditIterenaryFormControl
