import { Box, Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CloudIcon from '@material-ui/icons/Cloud';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import React from 'react';

import Icon from '../Icon/Icon';

const useStyles = makeStyles(theme => ({
  avatar: {
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(1)
    },
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(2)
    },
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(3)
    }
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  textClass: {
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center'
    },
    [theme.breakpoints.up('md')]: {
      textAlign: 'left'
    }
  }
}));

interface ITestProps {
  headtext: string;
  text: string;
  icon: JSX.Element;
}

const FeatureBox: React.FC<ITestProps> = ({ headtext, text, icon }) => {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems={{ xs: 'center', md: 'normal' }}
      mr={{ xs: 0, md: '20%' }}
      style={{ maxWidth: 225 }}
      mb={{ xs: 6, md: 10 }}
    >
      <div className={`${classes.avatar} hi-icon-effect-2 hi-icon-effect-2a`}>
        <div className="hi-icon">
          <Icon iconOfChoice={icon} />
        </div>
      </div>{' '}
      <Typography
        component="h1"
        variant="h5"
        className={classes.textClass}
        style={{ color: '#524e86' }}
      >
        {headtext}
      </Typography>
      <Typography
        component="h5"
        className={classes.textClass}
        style={{ color: '#9c9ab1' }}
      >
        {text}
      </Typography>
    </Box>
  );
};

const Agencies = () => {
  const classes = useStyles();

  return (
    <Grid container id="brandsagencies">
      <Box
        flexDirection={{ xs: 'column', md: 'row' }}
        pt={{ xs: 3, md: 0 }}
        pb={{ xs: 1, md: 0 }}
        display="flex"
        alignItems={{ xs: 'center', md: 'normal' }}
      >
        <Grid item xs={12} sm={12} md={8}>
          <Box display="flex" flexDirection="column" mt={{ xs: 5, sm: 0 }}>
            <Grid item xs={12} sm={12} md={12}>
              <Box
                display="flex"
                flexDirection={{ xs: 'column', sm: 'row' }}
                justifyContent={{ sm: 'space-evenly', md: 'flex-start' }}
                alignItems={{ xs: 'center' }}
              >
                <FeatureBox
                  icon={<EmojiObjectsIcon />}
                  headtext="Get bigger response"
                  text="Integrate B2B influencers into your digital marketing strategy."
                />
                <FeatureBox
                  icon={<CloudIcon />}
                  headtext="Optimize your reach"
                  text="Our smart tech platform sources the best influencers."
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Box
                display="flex"
                flexDirection={{ xs: 'column', sm: 'row' }}
                justifyContent={{ sm: 'space-evenly', md: 'flex-start' }}
                alignItems={{ xs: 'center' }}
              >
                {' '}
                <FeatureBox
                  icon={<TrendingUpIcon />}
                  headtext="Watch the results unfold"
                  text="Manage the process of your campaign and track results."
                />
                <FeatureBox
                  icon={<LinkedInIcon />}
                  headtext="Get the buzz going"
                  text="Blinkstars.com gets people talking about your company and influence your business"
                />
              </Box>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={false} sm={8} md={4}>
          <Typography
            variant="h5"
            component="h3"
            className={classes.textClass}
            style={{ color: '#6f7581', marginBottom: '1rem' }}
          >
            Brands & Agencies!
          </Typography>
          <Typography
            variant="h3"
            component="h1"
            className={classes.textClass}
            style={{ lineHeight: '130%', fontWeight: 700, color: '#403f52' }}
          >
            Use our B2B platform to navigate for the right people
          </Typography>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className={classes.submit}
            style={{ marginTop: 54 }}
            href="#apply"
          >
            Apply!
          </Button>
        </Grid>
      </Box>
    </Grid>
  );
};

export default Agencies;
