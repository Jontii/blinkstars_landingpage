import './App.css';

import { Box, Container, CssBaseline, Grid, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

import AboutUs from './components/AbousUs/aboutus';
import Agencies from './components/Agencies/agencies';
import Influencers from './components/Influencers/influencers';
import Signup from './components/Signup/signup';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh'
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random?business,people)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.grey[900]
        : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: 10
  },
  image2: {
    backgroundImage: 'url(https://source.unsplash.com/random?business)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.grey[900]
        : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: 10,
    [theme.breakpoints.down('xs')]: {
      width: '90%',
      minHeight: 200
    },
    width: '100%',
    minHeight: 300
  },
  image3: {
    backgroundImage: 'url(https://source.unsplash.com/random?socialmedia)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.grey[900]
        : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: 10,
    [theme.breakpoints.down('xs')]: {
      width: '90%',
      minHeight: 200
    },
    width: '100%',
    minHeight: 300
  },
  image4: {
    backgroundImage: 'url(https://source.unsplash.com/random?b2b)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.grey[900]
        : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    [theme.breakpoints.down('xs')]: {
      minHeight: 200
    },
    width: '100%',
    minHeight: 300,
    marginBottom: theme.spacing(15)
  },
  avatar: {
    backgroundColor: '#3f51b5',
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
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  marginBottom: {
    marginBottom: theme.spacing(1)
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

function App() {
  const classes = useStyles();

  // const Market = () => (
  //   <Grid container spacing={2}>
  //     <Box
  //       pb={{ xs: 4, md: 20 }}
  //       pt={{ xs: 4 }}
  //       display="flex"
  //       width="100%"
  //       alignItems={{ xs: 'center', md: 'normal' }}
  //       flexDirection={{ xs: 'column-reverse', md: 'row' }}
  //     >
  //       <Grid item xs={false} sm={8} md={7} className={classes.image3}></Grid>
  //       <Grid item xs={12} sm={8} md={5}>
  //         <Box px={3} pb={{ xs: 2 }} mb={{ xs: 2 }}>
  //           <Box mb={2}>
  //             <Typography
  //               variant="h3"
  //               className={classes.textClass}
  //               style={{
  //                 lineHeight: '130%',
  //                 fontWeight: 700,
  //                 color: '#403f52'
  //               }}
  //             >
  //               Brands & Agencies!
  //             </Typography>
  //           </Box>

  //           <Typography
  //             variant="h6"
  //             className={classes.textClass}
  //             style={{ color: '#9c9ab1' }}
  //           >
  //             85% of the people we've asked has seen a need for a B2B platform
  //             and would be interested. Something something the dark side...
  //           </Typography>
  //         </Box>
  //       </Grid>
  //     </Box>
  //   </Grid>
  // );

  return (
    <div className="App">
      <CssBaseline />
      <Grid container>
        <Signup />
        <Container>
          <Influencers />
        </Container>
        <Grid container className={classes.image4}>
          <Grid item xs={12}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              height="100%"
            >
              <CountUp
                delay={1}
                end={85}
                suffix="%"
                duration={6}
                redraw={false}
              >
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <Typography
                      variant="h2"
                      ref={countUpRef}
                      style={{ color: '#FFF' }}
                    ></Typography>
                  </VisibilitySensor>
                )}
              </CountUp>
              <div
                style={{
                  border: 0,
                  borderBottom: '3px',
                  borderColor: '#3f51b5',
                  borderStyle: 'solid',
                  margin: '0 auto',
                  width: '3rem'
                }}
              ></div>
              <Typography variant="h3" style={{ color: '#FFF' }}>
                Asked Wants B2B
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Container>
          <AboutUs />
          <Agencies />
          <footer style={{ backgroundColor: '#f7f7f7' }}>
            <Grid container>
              <Grid item xs={12}>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  py={3}
                >
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    align="center"
                  >
                    {'Copyright © '}
                    <Link color="inherit" href="https://blinkstars.com/">
                      Blinkstars.com
                    </Link>{' '}
                    {new Date().getFullYear()}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </footer>
        </Container>
      </Grid>
    </div>
  );
}

export default App;
