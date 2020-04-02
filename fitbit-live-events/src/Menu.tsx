import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import blue from '@material-ui/core/colors/blue';
import cyan from '@material-ui/core/colors/cyan';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import {Popover} from "@material-ui/core";
import PropTypes from "prop-types";
import AddIcon from "@material-ui/icons/Add";
import Fade from '@material-ui/core/Fade';
import { positions } from '@material-ui/system';

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
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper
    },
    addButton: {
      color: "white"
    }
}));
  

const theme = createMuiTheme({
    palette: {
      primary: cyan,
      secondary: {
        main: '#fafafa',
        contrastText: '#424242',
      },
    },
});

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement | SVGSVGElement>(null);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
        <div className={classes.root}>
        <AppBar position="static">
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" color="primary">
                <Tab color= "secondary" label="Welcome" {...a11yProps(0)} />
                <Tab color= "secondary" label="Galery" {...a11yProps(1)} />
                <Tab color= "secondary" label="Login" {...a11yProps(2)} />
                <Tab color= "secondary" label="Register" {...a11yProps(3)} />
                <div>
                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}
                style={{maxWidth: '160px', maxHeight: '70px', minWidth: '160px', minHeight: '70px', color: '#424242'}}>
                    <AddIcon color="secondary" />
                        Events
                </Button>

                <Menu
                    id="fade-menu"
                    anchorEl={anchorEl}
                    getContentAnchorEl={null}
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                    transformOrigin={{ vertical: "top", horizontal: "center" }}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
                </div>
            </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
            Homepage
        </TabPanel>
        <TabPanel value={value} index={1}>
            Events coming soon...
        </TabPanel>
        <TabPanel value={value} index={2}>
            Photos coming soon...
        </TabPanel>
        </div>
    </ThemeProvider>
  );
}