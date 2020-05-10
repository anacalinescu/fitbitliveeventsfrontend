import React from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import EventIcon from '@material-ui/icons/Event';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: 300,
    background: 'radial-gradient(circle, #00cdd7, #0092b7)',
  },
  menuButton: {
    padding: 15,
    borderRadius: 10,
    fontWeight: 800,
    fontSize: '11pt',
    color: 'white',
    textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    "text-transform": 'uppercase',

    '&:hover': {
      boxShadow: '0px 0px 6px #ffffff',
    }
  },
  avatar: {
    color: '#bdbdbd',
    backgroundColor: 'white',
    width: '150px',
    height: '150px',
  },
});

export default function AccountSideMenu() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Grid container style={{ height: '100%', width: '15%', position: 'absolute',
        background: 'radial-gradient(circle, #00cdd7, #0092b7)' }}>
        <Avatar alt="Remy Sharp" src="/broken-image.jpg" className={classes.avatar}
        style={{ position: 'absolute', top: '10%', transform: 'translate(-50%, 0%)', left: '50%'}}>
            <Typography variant="h1" component="h1" > 
                {window.localStorage.getItem('user').charAt(0).toUpperCase()}
            </Typography>
        </Avatar>
        <Typography variant="h6" component="h6" 
         style={{ position: 'absolute', top: '28%', transform: 'translate(-50%, 0%)', left: '50%',
         color: 'rgba(0, 0, 0, 0.54)'}}
         > @{window.localStorage.getItem('user')} </Typography>
        <MenuList style={{ position: 'absolute', top: '35%'}}>
            <Link to="/account" style={{ textDecoration: 'none' }}>
              <MenuItem className = {classes.menuButton}>
                <ListItemIcon>
                    <AccountCircleIcon fontSize="default" />
                </ListItemIcon>
                <Typography variant="inherit"> Profile </Typography>
              </MenuItem>
            </Link>
            <Link to="/my_past_events" style={{ textDecoration: 'none' }}>
              <MenuItem className = {classes.menuButton}>
                <ListItemIcon>
                    <EmojiEventsIcon fontSize="default" />
                </ListItemIcon>
                <Typography variant="inherit"> My past events </Typography>
              </MenuItem>
            </Link>
            <Link to="/account" style={{ textDecoration: 'none' }}>
              <MenuItem className = {classes.menuButton}>
                <ListItemIcon>
                    <CalendarTodayIcon fontSize="default" />
                </ListItemIcon>
                <Typography variant="inherit"> My current events </Typography>
              </MenuItem>
            </Link>
            <Link to="/my_future_events" style={{ textDecoration: 'none' }}>
              <MenuItem className = {classes.menuButton}>
                <ListItemIcon>
                    <EventIcon fontSize="default" />
                </ListItemIcon>
                <Typography variant="inherit" noWrap> My future events </Typography>
              </MenuItem>
            </Link>
            <Link to="/create_new_event" style={{ textDecoration: 'none' }}>
              <MenuItem className = {classes.menuButton}>
                <ListItemIcon>
                    <EventAvailableIcon fontSize="default" />
                </ListItemIcon>
                <Typography variant="inherit" noWrap> Create new event </Typography>
              </MenuItem>
            </Link>
            <Link to="/account" style={{ textDecoration: 'none' }}>
              <MenuItem className = {classes.menuButton}>
                <ListItemIcon>
                    <SettingsIcon fontSize="default" />
                </ListItemIcon>
                <Typography variant="inherit" noWrap> Settings </Typography>
              </MenuItem>
            </Link>
        </MenuList>
      </Grid>
    </Paper>
  );
}