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


export default function Homepage() {

    return (
        <div>
        <Grid
            container
            spacing={2}
            direction="column"
            alignItems="center"
            style={{ minHeight: '50vh', width: '25%', height: '50%',
            position: 'absolute', background: 'white',
            left: '20%', top: '50%', transform: 'translate(-50%, -50%)' }}
        >
            <div style={{position:'absolute', left: '0%', top: '0%',
                width: '100%', height: '60%' }}>
                <Image imageStyle={{ width: '100%' , height: '60%', position: 'absolute'}}
                    src="past.jpg"
                />
            </div>

            <div style={{position:'absolute', left: '0%', bottom: '0%',
                width: '100%', height: '40%', border: '1'}}>
                <Typography variant="h4" component="h4" style={{ color: 'black',
                position: 'absolute', left: '5%'}}>
                    Past events
                </Typography>
                <Typography variant="body1" style={{ color: '#03a9f4',
                 position: 'absolute', bottom: '10%', left: '5%'}}>
                    GO TO PAST EVENTS
                </Typography>
            </div>
        </Grid>

        <Grid
            container
            spacing={2}
            direction="column"
            alignItems="center"
            style={{ minHeight: '50vh', width: '25%', position: 'absolute', background: 'white',
            left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
        >
            <div style={{position:'absolute', left: '0%', top: '0%',
                width: '100%', height: '60%' }}>
                <Image imageStyle={{ width: '100%' , height: '60%', position: 'absolute'}}
                    src="current.jpg"
                />
            </div>

            <div style={{position:'absolute', left: '0%', bottom: '0%',
                width: '100%', height: '40%', border: '1'}}>
                <Typography variant="h4" component="h4" style={{ color: 'black',
                position: 'absolute', left: '5%'}}>
                    Current events
                </Typography>
                <Typography variant="body1" style={{ color: '#03a9f4',
                 position: 'absolute', bottom: '10%', left: '5%'}}>
                    GO TO CURRENT EVENTS
                </Typography>
            </div>

        </Grid>


        <Grid
            container
            spacing={2}
            direction="column"
            alignItems="center"
            style={{ minHeight: '50vh', width: '25%', position: 'absolute', background: 'white',
            left: '80%', top: '50%', transform: 'translate(-50%, -50%)' }}
        >
            <div style={{position:'absolute', left: '0%', top: '0%',
                width: '100%', height: '60%' }}>
                <Image imageStyle={{ width: '100%' , height: '60%', position: 'absolute'}}
                    src="future.jpeg"
                />
            </div>

            <div style={{position:'absolute', left: '0%', bottom: '0%',
                width: '100%', height: '40%', border: '1'}}>
                <Typography variant="h4" component="h4" style={{ color: 'black',
                position: 'absolute', left: '5%'}}>
                    Future events
                </Typography>
                <Typography variant="body1" style={{ color: '#03a9f4',
                 position: 'absolute', bottom: '10%', left: '5%'}}>
                    GO TO  EVENTS
                </Typography>
            </div>
        </Grid>
        </div>
    );
}