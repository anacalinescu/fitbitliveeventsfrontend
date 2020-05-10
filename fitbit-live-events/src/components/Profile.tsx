import React from 'react';
import Grid from '@material-ui/core/Grid';
import Chart from './Chart'
import DisplayAccountInfo from './DisplayAccountInfo';

// Generate Sales Data
function createData(month, amount) {
    return { month, amount };
}
  
const attended_data = [
    createData('Jan', 0),
    createData('Feb', 0),
    createData('Mar', 1),
    createData('Apr', 3),
    createData('May', 5),
    createData('Jun', 5),
    createData('Jul', 6),
    createData('Aug', 4),
    createData('Sep', 2),
    createData('Oct', 1),
    createData('Nov', 0),
    createData('Dec', 0),
];

const organized_data = [
    createData('Jan', 0),
    createData('Feb', 0),
    createData('Mar', 0),
    createData('Apr', 0),
    createData('May', 1),
    createData('Jun', 0),
    createData('Jul', 0),
    createData('Aug', 0),
    createData('Sep', 0),
    createData('Oct', 1),
    createData('Nov', 0),
    createData('Dec', 0),
];

export default function Profile() {
    return (
        <Grid container>
            <Grid container style={{ height: '65%', width: '85%', position: 'absolute',
            left: '15%'}}>
                <Grid container style={{ height: '400px', width: '620px', position: 'relative',
                display: 'inline-block',
                marginInlineStart: '5%', marginTop: '7%', borderRadius: '5px',
                marginInlineEnd: '5%',
                background: 'white' }}>
                    <Chart name={'Attended events'} data={attended_data}/>
                </Grid>
                <Grid container style={{ height: '400px', width: '620px', position: 'relative',
                display: 'inline-block',
                marginInlineStart: '5%', marginTop: '7%', borderRadius: '5px',
                background: 'white' }}>
                    <Chart name={'Organized events'} data={organized_data}/>
                </Grid>
            </Grid>
            <DisplayAccountInfo />
        </Grid>
    );
}