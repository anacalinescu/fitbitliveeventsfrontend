import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import EventIcon from '@material-ui/icons/Event';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

export const AccountInfo = ({ info }) => (
    <Grid container style={{ height: '300px', width: '85%', position: 'absolute',
            top: '60%', left: '15%', borderRadius: '5px' }}>
        <Grid
        container
        style={{ width: '400px', height: '150px', background: 'white',
            position: 'relative',
            borderRadius: '5px', display: 'inline-block', marginInlineStart: '5%', marginTop: '5%' }}
        >
            <Grid
            container
            style={{ width: '150px', height: '150px',
            position: 'absolute',
            background: 'radial-gradient(circle, #00cdd7, #0092b7)',
            borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px' }}
            >
                <EmojiEventsIcon style={{ color: 'white', width: '60%', height: '60%',
                position: 'absolute',
                top: '50%', left: '50%',  transform: 'translate(-50%, -50%)' }} />
            </Grid>
            <Grid
            container
            style={{ width: '250px', height: '150px',
            position: 'absolute',
            left: '150px',
            borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px' }}
            >
                <Typography variant="h2" component="h2" style={{ color: '#bdbdbd',
                position: 'relative', left: '15%', top: '20%' }}>
                    {info['ranked']}
                </Typography>
                <Typography variant="h6" component="h6" style={{ color: '#bdbdbd',
                position: 'relative', top: '70%' }}>
                    Top 10% ranked
                </Typography>
            </Grid>
        </Grid>
        <Grid
        container
        style={{ width: '400px', height: '150px', background: 'white',
            position: 'relative',
            borderRadius: '5px', display: 'inline-block', marginInlineStart: '6%', marginTop: '5%' }}
        >
            <Grid
            container
            style={{ width: '150px', height: '150px', background: 'radial-gradient(circle, #e91e63, #ad1457)',
            position: 'absolute', borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px' }}
            >
                <EventIcon style={{ color: 'white', width: '60%', height: '60%',
                position: 'absolute',
                top: '50%', left: '50%',  transform: 'translate(-50%, -50%)' }} />
            </Grid>
            <Grid
            container
            style={{ width: '250px', height: '150px',
            position: 'absolute',
            left: '150px',
            borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px' }}
            >
                <Typography variant="h2" component="h2" style={{ color: '#bdbdbd',
                position: 'relative', left: '15%', top: '20%' }}>
                    {info['attended']}
                </Typography>
                <Typography variant="h6" component="h6" style={{ color: '#bdbdbd',
                position: 'relative', top: '70%' }}>
                    Events attended
                </Typography>
            </Grid>
        </Grid>
        <Grid
        container
        style={{ width: '400px', height: '150px', background: 'white',
            position: 'relative',
            borderRadius: '5px', display: 'inline-block', marginInlineStart: '6%', marginTop: '5%' }}
        >
            <Grid
            container
            style={{ width: '150px', height: '150px', background: 'radial-gradient(circle, #64dd17, #009933)',
            position: 'absolute',
            borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px' }}
            >
                <CalendarTodayIcon style={{ color: 'white', width: '60%', height: '60%',
                position: 'absolute',
                top: '50%', left: '50%',  transform: 'translate(-50%, -50%)' }} />
            </Grid>
            <Grid
            container
            style={{ width: '250px', height: '150px',
            position: 'absolute',
            left: '150px',
            borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px' }}
            >
                <Typography variant="h2" component="h2" style={{ color: '#bdbdbd',
                position: 'relative', left: '15%', top: '20%' }}>
                    {info['organized']}
                </Typography>
                <Typography variant="h6" component="h6" style={{ color: '#bdbdbd',
                position: 'relative', top: '70%' }}>
                    Organized events
                </Typography>
            </Grid>
        </Grid>
    </Grid>
);