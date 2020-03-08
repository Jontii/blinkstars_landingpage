// @ts-ignore
import './App.css';

import { Box, Container, CssBaseline, Grid, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import Loader from 'react-loader-spinner';
import VisibilitySensor from 'react-visibility-sensor';

import AboutUs from './components/AbousUs/aboutus';
import Agencies from './components/Agencies/agencies';
import Influencers from './components/Influencers/influencers';
import Navbar from './components/Navbar/Navbar';
import Rocket from './components/Rocket/rocket';
import Signup from './components/Signup/signup';

const useStyles = makeStyles(theme => ({
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
  }
}));

function App() {
  const classes = useStyles();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const Content = (
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
            <CountUp delay={1} end={85} suffix="%" duration={6} redraw={false}>
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
        <Rocket />
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
  );

  return (
    <div className="App">
      {isLoading ? (
        <Container>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh"
          >
            <Loader type="ThreeDots" color="#3f51b5" height={100} width={100} />
          </Box>
        </Container>
      ) : (
        <>
          <CssBaseline />
          <Navbar content={Content} />
        </>
      )}
    </div>
  );
}

export default App;
