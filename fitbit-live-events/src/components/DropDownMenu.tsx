import React from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { Grow, Paper, Popper, MenuItem, MenuList } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    paper: {
      marginRight: theme.spacing(2),
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
    menuList: {
      borderRadius: '5px',
      background: 'linear-gradient(#555b64, #40454e)',
    },
    menuItem: {
      fontWeight: 800,
      fontSize: '11pt',
      color: 'white',
      textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
      textTransform: 'uppercase',

      '&:hover': {
        background: 'radial-gradient(circle, #00cdd7, #0092b7)',
        boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.3)',
      }
    },
  }),
);

export default function DropDownMenu() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <div>
        <Link
          className={classes.menuButton}
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          Events
        </Link>
        <Popper style={{zIndex: 1}} open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper className={classes.menuList}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <Link to='/past_events' style={{color: 'white',
                      textDecoration: 'none'}}>
                      <MenuItem className={classes.menuItem} onClick={handleClose}>
                        Past Events
                      </MenuItem>
                    </Link>
                    <Link to='/current_events' style={{color: 'white',
                    textDecoration: 'none'}}>
                      <MenuItem className={classes.menuItem} onClick={handleClose}>
                        Current Events
                      </MenuItem>
                    </Link>
                    <Link to='/future_events' style={{color: 'white',
                    textDecoration: 'none'}}>
                      <MenuItem className={classes.menuItem} onClick={handleClose}>
                        Future Events
                      </MenuItem>
                    </Link>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}