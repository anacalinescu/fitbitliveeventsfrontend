import React, { useState } from 'react';
import SimpleMap from "./Map";
import LeaderBoard from "./LeaderBoard";
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import ScheduleIcon from '@material-ui/icons/Schedule';
import PlaceIcon from '@material-ui/icons/Place';
import MapIcon from '@material-ui/icons/Map';
import PersonIcon from '@material-ui/icons/Person';
import Image from 'material-ui-image'

export default function EventLayout(props) {
    console.log(props.location.event)

    if (props.location.event != null) {
        localStorage.setItem( 'EventDetails', JSON.stringify(props.location.event) );
    } else {
        props.location.event = JSON.parse(localStorage.getItem( 'EventDetails' ));
    }

    return (
        <Grid container>
            <div style={{width: '40%', height: '50%', left: '5%', top: '15%', position: 'absolute'}}>
                <div style={{position: 'relative', background: 'white',
                borderRadius: '5px', width: '100%', height: '100%'}}>
                    <div style={{ position: 'absolute', height: '10%',
                    background: '#eeeeee', width: '100%'}}>
                        <Typography variant="h5" component="h5"
                        style={{color: '#0092b7', position: 'absolute', left: '5%', top: '20%',
                        display: 'inline-block'}}>
                            <MapIcon fontSize="large"/>
                        </Typography>
                        <Typography variant="h6" component="h6"
                        style={{position: 'absolute', color: 'black', display: 'inline-block',
                        left: '11%', top: '30%'}}>
                            Google Maps
                        </Typography>
                    </div>
                    <Grid container style={{ position: 'absolute', top: '10%',
                        height: '400px', width: '725px'}}>
                        <Grid container style={{ position: 'absolute', margin: '2%',
                        height: '390px', width: '700px'}}>
                            <SimpleMap/>
                        </Grid>
                    </Grid>
                </div>
                <div style={{position: 'relative', top: '10%', background: '#0092b7',
                borderRadius: '5px'}}>
                    <Grid container style={{ position: 'relative',
                        height: '200px', width: '500px'}}>
                        <Image
                            src="location.png"
                            imageStyle={{width: "60%", height: "60%", position: "absolute", top: '-10%',
                        left: '100%'}}
                            style={{width: '100%', height: '100%', position: 'absolute',
                        background: 'transparent'}}
                        />
                        <Typography variant="h4" component="h4"
                        style={{ color: 'white', position: 'absolute', margin: '5%',fontWeight: 'bold'}}>
                            {props.location.event['Title']}
                        </Typography>
                        <Typography variant="h6" component="h6"
                        style={{ color: 'white', position: 'absolute',  left: '5%', top: '65%'}}>
                            <ScheduleIcon/> {props.location.event['StartTime']} - {props.location.event['EndTime']}
                        </Typography>
                        <Typography variant="h6" component="h6"
                        style={{ color: 'white', position: 'absolute',  left: '5%', top: '80%'}}>
                            <PlaceIcon/> {props.location.event['City']}
                        </Typography>
                    </Grid>
                </div>
            </div>

            <div style={{width: '45%', height: '100%', right: '5%', top: '15%', position: 'absolute'}}>
                <div style={{ position: 'absolute', height: '5%',
                        background: '#eeeeee', width: '100%'}}>
                        <Typography variant="h5" component="h5"
                        style={{color: '#0092b7', position: 'absolute', left: '5%', top: '20%',
                        display: 'inline-block'}}>
                            <PersonIcon fontSize="large"/>
                        </Typography>
                        <Typography variant="h6" component="h6"
                        style={{position: 'absolute', color: 'black', display: 'inline-block',
                        left: '11%', top: '30%'}}>
                            Leaderboard
                        </Typography>
                </div>
                <div style={{ position: 'absolute', top: '5%',
                        height: '100%', width: '100%',  background: '#282c34'}}>
                    <LeaderBoard/>
                </div>
            </div>
        </Grid>
    );
};