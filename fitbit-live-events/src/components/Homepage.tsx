import React from 'react';
import Grid from '@material-ui/core/Grid';
import Image from 'material-ui-image'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Gallery from './GallerySlide';
import { Link } from 'react-router-dom';


export default function Homepage() {
    const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();
    console.log(new URLSearchParams(window.location.search).get('id'))
    console.log(window.location.href)

    return (
      <Container maxWidth='lg'>
        <div>
            <div>
                <Grid
                    container
                    spacing={2}
                    direction="column"
                    alignItems="center"
                    style={{ minHeight: '50vh', width: '25%', height: '50%',
                    position: 'absolute', background: 'white',
                    left: '20%', top: '40%', transform: 'translate(-50%, -50%)', borderRadius: '15px' }}
                >
                    <div style={{position:'absolute', left: '0%', top: '0%',
                        width: '100%', height: '60%', borderRadius: '15px' }}>
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
                            <Link to="/past_events"
                            style={{ color: '#03a9f4'}}> 
                            GO TO PAST EVENTS
                            </Link>
                        </Typography>
                    </div>
                </Grid>

                <Grid
                    container
                    spacing={2}
                    direction="column"
                    alignItems="center"
                    style={{ minHeight: '50vh', width: '25%', position: 'absolute', background: 'white',
                    left: '50%', top: '40%', transform: 'translate(-50%, -50%)', borderRadius: '15px' }}
                >
                    <div style={{position:'absolute', left: '0%', top: '0%',
                        width: '100%', height: '60%', borderRadius: '15px' }}>
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
                            <Link to="/current_events"
                            style={{ color: '#03a9f4'}}> 
                            GO TO CURRENT EVENTS
                            </Link>
                        </Typography>
                    </div>

                </Grid>


                <Grid
                    container
                    spacing={2}
                    direction="column"
                    alignItems="center"
                    style={{ minHeight: '50vh', width: '25%', position: 'absolute', background: 'white',
                    left: '80%', top: '40%', transform: 'translate(-50%, -50%)', borderRadius: '15px' }}
                >
                    <div style={{position:'absolute', left: '0%', top: '0%',
                        width: '100%', height: '60%', borderRadius: '15px' }}>
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
                        <Typography variant="body1" style={{
                        position: 'absolute', bottom: '10%', left: '5%'}}>
                            <Link to="/future_events"
                            style={{ color: '#03a9f4'}}> 
                            GO TO FUTURE EVENTS
                            </Link>
                        </Typography>
                    </div>
                </Grid>
            </div>

            <div style={{position: 'absolute', left: '0%', top: '75%'}}> 
                <Gallery/>
            </div>
        </div>
      </Container>
    );
};