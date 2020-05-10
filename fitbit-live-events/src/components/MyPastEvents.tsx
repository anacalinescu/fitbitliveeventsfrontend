import React from 'react';
import AccountSideMenu from './AccountSideMenu'
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import DateRangeIcon from '@material-ui/icons/DateRange';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import MyAttendedPastEvents from './MyAttendedPastEvents'
import MyOrganizedPastEvents from './MyOrganizedPastEvents'

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

function a11yProps(index: any) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: '85%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    marginTop: '5%',
    marginLeft: '2.5%',
    marginRight: '2.5%', 
    borderRadius: '5px',
  },
}));


export default function MyPastEvents() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
      setValue(newValue);
    };

    return (
        <div>
            <AccountSideMenu />
            <Grid container
            style={{ height: '85%', width: '85%', position: 'absolute',
            left: '15%'}}>
                <div className={classes.root}>
                    <AppBar color="primary"
                    style={{ backgroundColor: 'white',
                    color: '#e91e63', borderRadius: '5px',
                    position: 'static' }}>
                        <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="on"
                        aria-label="scrollable force tabs example"
                        >
                            <Tab label="Attended events" icon={<EmojiEventsIcon />} {...a11yProps(0)} />
                            <Tab label="Organized events" icon={<DateRangeIcon />} {...a11yProps(1)} />
                        </Tabs>
                    </AppBar>
                    <TabPanel value={value} index={0}>
                        <MyAttendedPastEvents />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <MyOrganizedPastEvents />
                    </TabPanel>
                </div>
            </Grid>
        </div>
    );
}