import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Img } from '../ImageComponent';


// image
import Menu from "../../assets/icons/menu.png"
import CardImg from "../../assets/cardImg.png"

const IteranaryListComp = () => {

    const Item = styled(Card)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        border: "1px solid #92ACEF",
        borderRadius: "8px 8px 8px 8px"
      }));
  return (
    <Box sx={{ width: '90%', mt:4, mb: 2, ml:"auto", mr:"auto" }}>
      <Box sx={{mt: 1, mb: 1, textAlign:"left", display:"flex", gap: 2, alignItems:"center"}}>
        <Typography sx={{fontSize: "24px", fontWeight:"600", color:"#141820", fontFamily:'Montserrat'}}>My trip Itineraries</Typography>
        <Img alt="menu arrow left" src={Menu} style={{width:"20px", height:"22px"}}/>
      </Box>
      <Grid container rowSpacing={{xs: 1, sm: 2, md: 3}} columnSpacing={{ xs: 1, sm: 2, md: 3, }} sx={{mt:4, mb:2}}>
        <Grid xs={3}>
            <Card sx={{width:"95%", borderRadius:"8px 8px 8px 8px", border:"1px solid #92ACEF" }}>
                <CardMedia
                    component="img"
                    height="250"
                    image={CardImg}
                    alt="Iterenary iamge"
                />
                <CardContent sx={{height:"150px"}}>
                    <Typography gutterBottom variant="h3" component="div" sx={{fontSize:"16px", fontWeight:"600", lineHeight:"20px", mt:1}}>
                        Girls Weekend
                    </Typography>
                    <Typography gutterBottom variant="h3" component="div" sx={{fontSize:"16px", fontWeight:"600", lineHeight:"20px", mt:1}}>
                        San Francisco, CA
                    </Typography>
                    <Typography gutterBottom variant="h3" component="div" sx={{fontSize:"16px", fontWeight:"600", lineHeight:"20px", mt:1}}>
                        Oct 3 - Oct 6, 2022
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div" sx={{fontSize:"14px", fontWeight:"400", lineHeight:"18px", mt:2}}>
                        Trip ID: #ABC345
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
        <Grid xs={3}>
            <Card sx={{width:"95%", borderRadius:"8px 8px 8px 8px", border:"1px solid #92ACEF" }}>
                <CardMedia
                    component="img"
                    height="250"
                    image={CardImg}
                    alt="Iterenary iamge"
                />
                <CardContent sx={{height:"150px"}}>
                    <Typography gutterBottom variant="h3" component="div" sx={{fontSize:"16px", fontWeight:"600", lineHeight:"20px", mt:1}}>
                        Girls Weekend
                    </Typography>
                    <Typography gutterBottom variant="h3" component="div" sx={{fontSize:"16px", fontWeight:"600", lineHeight:"20px", mt:1}}>
                        San Francisco, CA
                    </Typography>
                    <Typography gutterBottom variant="h3" component="div" sx={{fontSize:"16px", fontWeight:"600", lineHeight:"20px", mt:1}}>
                        Oct 3 - Oct 6, 2022
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div" sx={{fontSize:"14px", fontWeight:"400", lineHeight:"18px", mt:2}}>
                        Trip ID: #ABC345
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
        <Grid xs={3}>
            <Card sx={{width:"95%", borderRadius:"8px 8px 8px 8px", border:"1px solid #92ACEF" }}>
                <CardMedia
                    component="img"
                    height="250"
                    image={CardImg}
                    alt="Iterenary iamge"
                />
                <CardContent sx={{height:"150px"}}>
                    <Typography gutterBottom variant="h3" component="div" sx={{fontSize:"16px", fontWeight:"600", lineHeight:"20px", mt:1}}>
                        Girls Weekend
                    </Typography>
                    <Typography gutterBottom variant="h3" component="div" sx={{fontSize:"16px", fontWeight:"600", lineHeight:"20px", mt:1}}>
                        San Francisco, CA
                    </Typography>
                    <Typography gutterBottom variant="h3" component="div" sx={{fontSize:"16px", fontWeight:"600", lineHeight:"20px", mt:1}}>
                        Oct 3 - Oct 6, 2022
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div" sx={{fontSize:"14px", fontWeight:"400", lineHeight:"18px", mt:2}}>
                        Trip ID: #ABC345
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
        <Grid xs={3}>
            <Card sx={{width:"95%", borderRadius:"8px 8px 8px 8px", border:"1px solid #92ACEF" }}>
                <CardMedia
                    component="img"
                    height="250"
                    image={CardImg}
                    alt="Iterenary iamge"
                />
                <CardContent sx={{height:"150px"}}>
                    <Typography gutterBottom variant="h3" component="div" sx={{fontSize:"16px", fontWeight:"600", lineHeight:"20px", mt:1}}>
                        Girls Weekend
                    </Typography>
                    <Typography gutterBottom variant="h3" component="div" sx={{fontSize:"16px", fontWeight:"600", lineHeight:"20px", mt:1}}>
                        San Francisco, CA
                    </Typography>
                    <Typography gutterBottom variant="h3" component="div" sx={{fontSize:"16px", fontWeight:"600", lineHeight:"20px", mt:1}}>
                        Oct 3 - Oct 6, 2022
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div" sx={{fontSize:"14px", fontWeight:"400", lineHeight:"18px", mt:2}}>
                        Trip ID: #ABC345
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
        <Grid xs={3}>
            <Card sx={{width:"95%", borderRadius:"8px 8px 8px 8px", border:"1px solid #92ACEF" }}>
                <CardMedia
                    component="img"
                    height="250"
                    image={CardImg}
                    alt="Iterenary iamge"
                />
                <CardContent sx={{height:"150px"}}>
                    <Typography gutterBottom variant="h3" component="div" sx={{fontSize:"16px", fontWeight:"600", lineHeight:"20px", mt:1}}>
                        Girls Weekend
                    </Typography>
                    <Typography gutterBottom variant="h3" component="div" sx={{fontSize:"16px", fontWeight:"600", lineHeight:"20px", mt:1}}>
                        San Francisco, CA
                    </Typography>
                    <Typography gutterBottom variant="h3" component="div" sx={{fontSize:"16px", fontWeight:"600", lineHeight:"20px", mt:1}}>
                        Oct 3 - Oct 6, 2022
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div" sx={{fontSize:"14px", fontWeight:"400", lineHeight:"18px", mt:2}}>
                        Trip ID: #ABC345
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
        <Grid xs={3}>
            <Card sx={{width:"95%", borderRadius:"8px 8px 8px 8px", border:"1px solid #92ACEF" }}>
                <CardMedia
                    component="img"
                    height="250"
                    image={CardImg}
                    alt="Iterenary iamge"
                />
                <CardContent sx={{height:"150px"}}>
                    <Typography gutterBottom variant="h3" component="div" sx={{fontSize:"16px", fontWeight:"600", lineHeight:"20px", mt:1}}>
                        Girls Weekend
                    </Typography>
                    <Typography gutterBottom variant="h3" component="div" sx={{fontSize:"16px", fontWeight:"600", lineHeight:"20px", mt:1}}>
                        San Francisco, CA
                    </Typography>
                    <Typography gutterBottom variant="h3" component="div" sx={{fontSize:"16px", fontWeight:"600", lineHeight:"20px", mt:1}}>
                        Oct 3 - Oct 6, 2022
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div" sx={{fontSize:"14px", fontWeight:"400", lineHeight:"18px", mt:2}}>
                        Trip ID: #ABC345
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default IteranaryListComp
