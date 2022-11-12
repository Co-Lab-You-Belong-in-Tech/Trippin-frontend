import React from 'react'
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Img } from '../commonComponents/ImageComponent';
// import Logo from '../../assets/final.png';
import Logo from '../../assets/final.png';
import Avatar from '../../assets/icons/Shape.png'

type porpsType = {
    open?: boolean,
    editing?: boolean,
    setOpen?: React.Dispatch<React.SetStateAction<boolean>>,
    handleOpen?: any,
    show?:boolean
}
const EditHeader = ({open, setOpen, handleOpen, editing, show}: porpsType) => {
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
                    {
                        show ? <Box sx={{display:'flex',  alignItems:'center', gap: 2, width:'250px', ml: "auto", }}>
                        {
                           editing &&  <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent:'space-between', gap:1, width:'85px'}}>
                            <Box sx={{width:'6px', height:'6px', backgroundColor:' #52BD94', borderRadius:10}}></Box>
                            
                            <Box component="span" sx={{fontSize:'16px', fontWeight:400}}>Editing...</Box>
                            
                        </Box>
                        }
                        <Box sx={{display:"flex",gap: 2,ml:"auto",}}>
                            <Button variant="contained" sx={{display:'flex',alignItems:'center', backgroundColor:'#572297', borderRadius:1, color: "#fff", textTransform:'capitalize', fontFamily:'Montserrat', fontWeight:600, fontStyle:'normal', fontSize:'16px'}} onClick={handleOpen}>Save</Button>
                            <Box sx={{width:'44px', height:'44px', backgroundColor:'#CAD5F3', borderRadius:5, display:'flex', alignItems:'center', justifyContent:'center'}}>
                                <Img alt='avatar' src={Avatar}/>
                            </Box>
                        </Box>
                    </Box>
                    :
                    null
                    }
            </Container>
        </Box>
   </Paper>
  )
}

export default EditHeader
