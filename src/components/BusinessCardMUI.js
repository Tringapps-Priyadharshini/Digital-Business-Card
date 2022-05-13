import * as React from 'react';
import { useState } from 'react';
import '../assets/mui.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import personlogo from '../assets/personlogo.png';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
export default function BusinessCardMUI(){
    const [details,setDetails] = useState(false)
    function handleExtraDetails(){
       setDetails(true);
    }

    function mouseOut(){
        setDetails(false);
    }
    console.log("details",details)



    return(
        <div className = "business">
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="400"
                image={personlogo}
                alt="profile"
            />
            <CardContent sx = {{backgroundColor:'black'}} >
                <Typography sx = {{color:'white',textAlign:'center'}} gutterBottom variant="h4" component="div">
                Laura Smith
                </Typography>
                <Typography sx = {{color:'brown',textAlign:'center'}} variant="h5" color="text.secondary">
                Frontend Developer
                </Typography>
                <Typography sx = {{color:'white',textAlign:'center'}} variant="h6" color="text.secondary">
                laura@gmail.com
                </Typography>
                <Typography sx={{textAlign:'center',padding:'10px'}} className='emailLinkedin' variant="h6" color="text.secondary">
                <Button sx={{backgroundColor:'white'}} variant="outlined" startIcon={<EmailIcon />}>
                Email
                </Button>&nbsp;&nbsp;&nbsp;&nbsp;
                <Button sx={{backgroundColor:'lightblue'}} variant="outlined" startIcon={<LinkedInIcon />}>
                LinkedIn
                </Button>
                </Typography>
                <Typography sx = {{color:'white',textAlign:'left'}} variant="h6" color="text.secondary">
                About
                </Typography>
                <Typography sx = {{color:'white',textAlign:'left'}} variant="body-2" color="text.secondary">Front-end developers create the user interface (UI) that determines what each part of a site or application does and how it will look.
                {console.log('not details',!details)}
               { !details && <button varient = 'text' onMouseOver={handleExtraDetails} onMouseOut = {mouseOut}>...</button> }
                {details && "If someone wanted to build a website, for example, they might hire a front-end developer to create the sites layout." }   
                </Typography>
                <Typography sx = {{color:'white',textAlign:'left'}} variant="h6" color="text.secondary">
                Interests
                </Typography>
                <Typography sx = {{color:'white',textAlign:'left'}} variant="body-2" color="text.secondary">It strong career prospects.You get to work on a variety of interesting things.Front end development work is seen by everyone who interacts with a brand.

                </Typography>

            </CardContent>
            <CardActions sx = {{backgroundColor:'gray',textAlign:'center',justifyContent:'center'}}>
            <TwitterIcon/> <FacebookIcon/> <InstagramIcon/> <GitHubIcon/>
            </CardActions>
            </Card>
        </div>
    )
}