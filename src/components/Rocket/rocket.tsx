import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import rocket from './rocket.png';

const useStyles = makeStyles(theme => ({
  rocket: {
    backgroundImage: `url(${rocket})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.grey[900]
        : theme.palette.grey[50],
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    [theme.breakpoints.down('xs')]: {
      minHeight: 200,
      marginTop: 0
    },
    width: '100%',
    minHeight: 300,
    marginTop: theme.spacing(8)
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

const Rocket = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Box
        pb={{ xs: 3, md: 20 }}
        display="flex"
        width="100%"
        alignItems={{ xs: 'center', md: 'normal' }}
        flexDirection={{ xs: 'column', md: 'row' }}
      >
        <Grid item xs={false} sm={8} md={5}>
          <Box pr={3} pb={{ xs: 2 }}>
            <Box mb={2}>
              <Typography
                variant="h4"
                component="h1"
                className={classes.textClass}
                style={{
                  lineHeight: '130%',
                  fontWeight: 700,
                  color: '#403f52'
                }}
              >
                Prepare for takeoff
              </Typography>
            </Box>

            <Typography
              variant="body1"
              className={classes.textClass}
              style={{ color: '#9c9ab1' }}
            >
              Blinkstars is the opportunity you expected to increase your online
              awareness immediately, as it puts brands in contact with
              professional B2B influencers.
              <br />
              <br />
              By advertising on LinkedIn, brands can promote their content in an
              easy and fully automatic way, since it is the influencers who are
              responsible for doing so from blinkstars.com
              <br />
              <br />
              It is no longer necessary to search for influencers on LinkedIn
              who are willing to talk about your brand to promote it. Now,
              thanks to Blinkstars, you can choose the profile of the
              influencer, expert or a micro-influencer for your brand.
              <br />
              <br />
              To work with B2B influencers from the platform you just need to
              register as an advertiser and in less than 5 minutes you can
              create all the campaigns you want. All you need is to fill in the
              information of your campaign.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={8} md={7} className={classes.rocket}></Grid>
      </Box>
    </Grid>
  );
};

export default Rocket;
