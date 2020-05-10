import React from 'react';
import { makeStyles, Theme, createStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import SettingsIcon from '@material-ui/icons/Settings';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { StepIconProps } from '@material-ui/core/StepIcon';
import { color } from '@material-ui/system';
import EventDetails from './EventDetails';
import ExploreIcon from '@material-ui/icons/Explore';
import { connect } from 'react-redux'
import { createEvent } from '../actions/postsActions'
import MyMapRoute from './MyMapRoute'

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  },
});

function ColorlibStepIcon(props: StepIconProps) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <SettingsIcon />,
    2: <ExploreIcon />,
    3: <GroupAddIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    button: {
      marginRight: theme.spacing(1),
      backgroundColor: '#00bcd4'
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }),
);

function getSteps() {
  return ['Complete event details', 'Choose route', 'Invite people'];
}

const new_event = { title: '', city: '', description: '', street: '', number: '', date: '',
start_time: '', end_time: '', ev_type: ''}
var path = []

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <EventDetails new_event={new_event}/>;
    case 1:
      return <MyMapRoute props={{path: path}}/>;
    case 2:
      return 'Invite People';
    default:
      return 'Unknown step';
  }
}

const Slider = ({ dispatch, loading, posts, hasErrors }) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    console.log(new_event)
    console.log(path[0])
    if (activeStep == 2) {
      dispatch(createEvent(new_event))
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    if (activeStep == 1) {
      path = []
    }
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    path = []
    setActiveStep(0);
  };

  return (
    <Grid container
    style={{ height: '85%', width: '75%', position: 'absolute',
    left: '20%', top: '15%', right: '5%', backgroundColor: 'white', borderRadius: '5px'}}>
        <div className={classes.root}>
        <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}
        style={{ backgroundColor: 'transparent' }}>
            {steps.map((label) => (
            <Step key={label}>
                <StepLabel StepIconComponent={ColorlibStepIcon}>
                    <div style={{ color: 'black' }}>
                        {label}
                    </div>
                </StepLabel>
            </Step>
            ))}
        </Stepper>
        <div>
            {activeStep === steps.length ? (
            <div>
                <Typography className={classes.instructions}>
                All steps completed - you&apos;re finished
                </Typography>
                <Button onClick={handleReset} className={classes.button}>
                Reset
                </Button>
            </div>
            ) : (
            <div>
                {getStepContent(activeStep)}
                <div style={{ position: 'absolute', right: '10%', bottom: '10%' }}>
                <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                    Back
                </Button>
                <Button
                    variant="contained"
                    onClick={handleNext}
                    className={classes.button}
                    style={{ color: 'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)' }}
                >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
                </div>
            </div>
            )}
        </div>
        </div>
    </Grid>
  );
}

const mapStateToProps = state => ({  
  loading: state.create_event.loading,  
  hasErrors: state.create_event.hasErrors,
})

export default connect(mapStateToProps)(Slider)
