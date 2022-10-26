import * as React from 'react';
import Box from '@mui/material/Box';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';

import {MdExpandLess, MdExpandMore} from 'react-icons/md'
import {GrFormCheckmark} from 'react-icons/gr'

interface mailArray {
    id: number,
    email: string,
    accept: boolean
}
type listPropType = {
    // title: string,
    emails: mailArray[]
}
export default function ListItemsComp({emails}: listPropType) {
  const [openAccpt, setOpenAccept] = React.useState(true);
  const [openNon, setOpenNon] = React.useState(true);

  const handleClickAccpet = () => {
    setOpenAccept(!openAccpt);
  };
  const handleClickNonAccpet = () => {
    setOpenNon(!openNon);
  };
  return (
    <>
    {/* accepted invites */}
    <List
      sx={{ width: '100%', maxWidth: 480, bgcolor: 'background.paper' , mt:6}}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
        {/* <ListItemText primary="" /> */}
     
      <ListItemButton onClick={handleClickAccpet} sx={{display:'flex', justifyContent:"space-between"}} >
      <Box component="h2" sx={{fontWeight: 600,}}>Itinerary Travel Group</Box>
        {openAccpt ? <MdExpandLess size={24} color="#572297"/> : <MdExpandMore size={24} color="#572297"/>}
      </ListItemButton>
      <Collapse in={openAccpt} timeout="auto" unmountOnExit>
        {
            emails && emails.map(email => {
             return  (
                     <List component="div" disablePadding key={email.id}>
                           {
                              email.accept ?  <ListItemButton sx={{ pl: 4 ,mt:1, display: 'flex'}}>
                                <GrFormCheckmark size={24} color="#572297"/> <Box component="h4" sx={{ml:2, fontSize:'18px', fontWeight:400, color:"#141820"}}>{ email.email}</Box>
                                </ListItemButton> : null
                           } 
                    </List>
                )
            })
        }
      </Collapse>
    </List>
    {/* non accepted invites */}
    <List
      sx={{ width: '100%', maxWidth: 480, bgcolor: 'background.paper' , mt:6}}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
        {/* <ListItemText primary="" /> */}
     
      <ListItemButton onClick={handleClickNonAccpet} sx={{display:'flex', justifyContent:"space-between"}} >
      <Box component="h2" sx={{fontWeight: 400,color:"#4A5568"}}>Waiting invite confirmation</Box>
        {openNon ? <MdExpandLess size={24} color="#572297"/> : <MdExpandMore size={24} color="#572297"/>}
      </ListItemButton>
      <Collapse in={openNon} timeout="auto" unmountOnExit>
        {
            emails && emails.map(email => {
             return  (
                     <List component="div" disablePadding key={email.id}>
                           {
                              !email.accept ?  <ListItemButton sx={{ pl: 4 ,mt:1, display: 'flex'}}>
                                <GrFormCheckmark size={24} color="#4A5568"/> <Box component="h4" sx={{ml:2, fontSize:'18px', fontWeight:400, color:"#141820"}}>{ email.email}</Box>
                                </ListItemButton> : null
                           } 
                    </List>
                )
            })
        }
      </Collapse>
    </List>
    </>
  );
}
