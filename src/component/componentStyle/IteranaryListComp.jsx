import React, {useEffect,useState} from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Img } from '../commonComponents/ImageComponent';
import { useDispatch, useSelector } from 'react-redux'


// image
import Menu from "../../assets/icons/menu.png"
import CardImg from "../../assets/cardImg.png"
import { tripProfileActions } from '../../store/Trip/TripProfile/action';
import Skeleton from '../commonComponents/Skeleton';
import { useNavigate } from 'react-router-dom';

const IteranaryListComp = () => {
    const [tripLists, setTripLists] = useState()
    const dispatch = useDispatch()
    const tripPlanRedSel = useSelector((state) => state.tripPlanRed)
    const {loading, error, allTrip} = tripPlanRedSel;

    const Item = styled(Card)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        border: "1px solid #92ACEF",
        borderRadius: "8px 8px 8px 8px"
      }));

     

      useEffect(() => {
        dispatch(tripProfileActions())
      },[dispatch])

      const navigate = useNavigate()
      
      const handleGetSingleTrip = (id) => {
            navigate(`/edit/${id}`)
      }
      
  return (
    <Box sx={{ width: '90%', mt:4, mb: 2, ml:"auto", mr:"auto" }}>
      <Box sx={{mt: 1, mb: 1, textAlign:"left", display:"flex", gap: 2, alignItems:"center"}}>
        <Typography sx={{fontSize: "24px", fontWeight:"600", color:"#141820", fontFamily:'Montserrat'}}>My Trip Itineraries</Typography>
        <Img alt="menu arrow left" src={Menu} style={{width:"20px", height:"22px"}}/>
      </Box>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3, }} sx={{mt:4, mb:2}}>
      {
        allTrip ? allTrip.data.map(trip => {
            return <Grid xs={12} sm={6} md={3} onClick={() => handleGetSingleTrip(trip.id)}>
            <Card sx={{width:"95%", borderRadius:"8px 8px 8px 8px", border:"1px solid #92ACEF" }}>
                <CardMedia
                    component="img"
                    height="250"
                    image={trip?.trip_background_image ? trip?.trip_background_image : CardImg}
                    alt="Iterenary background"
                />
                <CardContent sx={{height:"155px, paddingTop: 10px, paddingBottom: 10px"}}>
                    <Typography gutterBottom variant="h3" component="div" sx={{fontSize:"16px", fontWeight:"600", lineHeight:"20px", mt:1}}>
                        {trip?.trip_name}
                    </Typography>
                    <Typography gutterBottom variant="h3" component="div" sx={{fontSize:"16px", fontWeight:"600", lineHeight:"20px", mt:1}}>
                        {trip?.trip_destination}
                    </Typography>
                    <Typography gutterBottom variant="h3" component="div" sx={{fontSize:"16px", fontWeight:"600", lineHeight:"20px", mt:1}}>
                        {trip?.trip_start_date} / {trip?.trip_end_date}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div" sx={{fontSize:"14px", fontWeight:"400", lineHeight:"18px", mt:2}}>
                        Trip ID: {trip?.trip_code}
                    </Typography>
                </CardContent>
            </Card>
        </Grid> 
        }) : <Skeleton />
      }
        
      </Grid>
    </Box>
  )
}

export default IteranaryListComp
