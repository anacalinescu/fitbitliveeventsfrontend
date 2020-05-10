import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Image from 'material-ui-image'
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { url } from 'inspector';
import Gallery from './GallerySlide';
import { Link } from 'react-router-dom';
import CssBaseline from "@material-ui/core/CssBaseline";
import {MuiThemeProvider} from "@material-ui/core";
import EventIcon from '@material-ui/icons/Event';
import ScheduleIcon from '@material-ui/icons/Schedule';
import PlaceIcon from '@material-ui/icons/Place';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import { fetchEvents } from '../actions/postsActions'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

const eventPicture = (event) => {
    if (event.Type == "Marathon") {
        return <Image aspectRatio={1.5} src="current.jpg"/>
    } else {
        return <Image aspectRatio={1.5} src="past.jpg"/>
    }
};

export const Event = ({ post }) => (
        <Grid
            container
            style={{ width: '400px', background: 'white',
                borderRadius: '15px', display: 'inline-block', marginInlineStart: '5%', marginTop: '5%' }}
        >

            <div style={{position:"relative"}}>
                {eventPicture(post)}

                <div style={{position:'absolute', left: '-5%', top: '10%',
                    width: '80%', height: '30%', border: '1', background: 'white', opacity: '0.7'}}>
                    <Typography  variant="h3" component="h3" style={{ color: 'black', display: 'inline',
                margin: '2.5%'}}>
                        {post.Date.substring(8,10)}
                    </Typography>
                    <Typography variant="h5" component="h5" style={{ color: 'black', display: 'inline',
                margin: '2.5%'}}>
                        {monthNames[new Date(post.Date.substring(0,10)).getMonth()]}
                    </Typography>
                    <Typography variant="h5" component="h5" style={{ color: 'black', display: 'inline',
                margin: '2.5%'}}>
                            {post.Date.substring(0,4)}
                    </Typography>
                    <Typography variant="h6" component="h6" style={{ color: 'black', position: 'absolute',
                padding: '5%'}}>
                        <ScheduleIcon/> {post.StartTime}
                    </Typography>
                </div>

                <Typography variant="h5" component="h5" style={{ color: 'black', 
                position: 'relative', margin: '5%'}}>
                    {post.Title}
                </Typography>

                <Typography variant="h6" component="h6" style={{ color: '#616161',
                display: 'inline-block', position: 'relative', margin: '5%'}}>
                    <PlaceIcon/> {post.City}
                </Typography>

                <Link
                to={{pathname: '/event',event: post}} style={{ color: '#e91e63',margin: '5%', display: 'inline-block',
                float: 'right', textDecoration: 'none'}}>
                    <Button variant="outlined" size="large" color="secondary">
                    View
                    </Button>
                </Link>
            </div>
        </Grid>
);