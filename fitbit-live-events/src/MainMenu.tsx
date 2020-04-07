import React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar, Toolbar, Typography, List, ListItem,
  withStyles, Grid, Drawer, Container,
} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import DropDownMenu from "./DropDownMenu";
import { Link } from 'react-router-dom';

const styles = {
  list: {
    width: 200,
  },
  sidebarIcon: {
    padding: 0,
    color: 'white',
    cursor: 'pointer',
    transition: 'all 0.3s ease',

    '&:hover': {
      boxShadow: '0px 0px 6px #ffffff',
    }
  },
  appbar: {
    background: 'radial-gradient(circle, #00cdd7, #0092b7)',
  },
  title: {
    fontWeight: 900,
    fontSize: '18pt',
    textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
    color: 'white',
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
  drawer: {
    BackdropProps: {
      background: 'linear-gradient(to right, #555b64, #40454e)',
    }
  }
};

class MainMenu extends React.Component<any, any> {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {drawerActivate: false, drawer: false};
    this.createDrawer = this.createDrawer.bind(this);
    this.destroyDrawer = this.destroyDrawer.bind(this);
  }

  componentWillMount() {
    if (window.innerWidth <= 800) {
      this.setState({drawerActivate: true});
    }

    window.addEventListener('resize', ()=>{
      if (window.innerWidth <= 800) {
        this.setState({drawerActivate: true});
      } else {
        this.setState({drawerActivate: false});
      }
    });
  }

  // Small screens
  createDrawer() {
    return (
      <div>
        <AppBar className={this.props.classes.appbar}>
          <Toolbar>
            <Grid container direction='row' justify='space-between' alignItems='center'>
              <MenuIcon className={this.props.classes.sidebarIcon} onClick={()=>{this.setState({drawer: true})}} />
              <Typography className={this.props.classes.title}>FITBIT LIVE EVENTS</Typography>
              <Typography />
            </Grid>
          </Toolbar>
        </AppBar>

        <Drawer PaperProps={this.props.classes.drawer}
          open={this.state.drawer}
          onClose={()=>{this.setState({drawer:false})}}>

          <div
            tabIndex={0}
            role="button"
            onClick={()=>{this.setState({drawer:false})}}
            onKeyDown={()=>{this.setState({drawer:false})}}>

            <List className = {this.props.classes.list}>
              <ListItem key = {1} button divider> Option 1 </ListItem>
              <ListItem key = {2} button divider> Option 2 </ListItem>
              <ListItem key = {3} button divider> Option 3 </ListItem>
            </List>

          </div>
        </Drawer>

      </div>
    );
  }

  //Larger Screens
  destroyDrawer(){
    return (
      <AppBar className={this.props.classes.appbar}>
        <Container maxWidth='lg'>
          <Toolbar>
            <Typography style={{flexGrow:1}} className={this.props.classes.title}>FITBIT LIVE EVENTS</Typography>
            <Link to="/" className = {this.props.classes.menuButton}>Home</Link>
            <DropDownMenu />
            <Link className = {this.props.classes.menuButton}>Gallery</Link>
            <Link to="/login" className = {this.props.classes.menuButton}>Login</Link>
            <Link to="/register" className = {this.props.classes.menuButton}>Register</Link>
          </Toolbar>
        </Container>
      </AppBar>
    )
  }

  render(){
    return(
      <div>
        {this.state.drawerActivate ? this.createDrawer() : this.destroyDrawer()}
      </div>
    );
  }
}

export default withStyles(styles)(MainMenu);