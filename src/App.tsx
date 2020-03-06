import './App.css';

import { Box, Container, CssBaseline, Grid, Link } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import ForumIcon from '@material-ui/icons/Forum';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import React from 'react';

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
    borderRadius: 10
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
    borderRadius: 10
  },
  avatar: {
    backgroundColor: '#3f51b5',
    marginBottom: theme.spacing(3)
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
  }
}));

interface ITestProps {
  headtext: string;
  text: string;
  icon: JSX.Element;
}

function App() {
  const classes = useStyles();

  const Test: React.FC<ITestProps> = ({ headtext, text, icon }) => {
    return (
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        style={{ marginLeft: '20%', maxWidth: 225 }}
        mb={10}
      >
        <Avatar className={classes.avatar}>{icon}</Avatar>
        <Typography
          component="h1"
          variant="h5"
          align="left"
          className={classes.marginBottom}
          style={{ color: '#524e86' }}
        >
          {headtext}
        </Typography>
        <Typography
          component="h5"
          align="left"
          className={classes.marginBottom}
          style={{ color: '#9c9ab1' }}
        >
          {text}
        </Typography>
      </Box>
    );
  };

  const InfoFeatureComp = () => (
    <Grid container className={classes.root}>
      <Box pt={20} pb={20} display="flex">
        <Grid item xs={false} sm={4} md={4}>
          <Typography
            variant="h5"
            component="h3"
            align="left"
            style={{ color: '#6f7581', marginBottom: '1rem' }}
          >
            Always at service!
          </Typography>
          <Typography
            variant="h3"
            component="h1"
            align="left"
            style={{ lineHeight: '130%', fontWeight: 700, color: '#403f52' }}
          >
            Splendid ideas for starting new business
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
            Apply
          </Button>
        </Grid>
        <Grid item xs={12} sm={8} md={8}>
          {/* <div className={classes.paper}> */}
          <Box display="flex" flexDirection="column">
            <Grid item md={12}>
              <Box display="flex" justifyContent="flex-end">
                <Test
                  icon={<CreditCardIcon />}
                  headtext="Earn $"
                  text="Get paid to create content by collaborating with brands and companies"
                />
                <Test
                  icon={<ForumIcon />}
                  headtext="Contact marketers "
                  text="Be exposed to marketers looking for online B2B influencers."
                />
              </Box>
            </Grid>
            <Grid item md={12}>
              <Box display="flex" justifyContent="flex-end">
                <Test
                  icon={<LinkedInIcon />}
                  headtext="Start a brand"
                  text="Build your own brand and increase your value as an Influencer"
                />
                <Test
                  icon={<LinkedInIcon />}
                  headtext="Get the buzz going"
                  text="Blinkstars.com gets people talking about your company and influence your business"
                />
              </Box>
            </Grid>
          </Box>
          {/* </div> */}
        </Grid>
      </Box>
    </Grid>
  );

  const AboutUs = () => (
    <Grid container className={classes.root} spacing={2}>
      <Box pb={20} display="flex" width="100%">
        <Grid item xs={6} sm={5} md={5}>
          <Box px={3}>
            <Box mb={2}>
              <Typography
                variant="h3"
                component="h1"
                align="left"
                style={{
                  lineHeight: '130%',
                  fontWeight: 700,
                  color: '#403f52'
                }}
              >
                Join us on our journey
              </Typography>
            </Box>

            <Typography
              variant="body1"
              align="left"
              style={{ color: '#9c9ab1' }}
            >
              Blinkstars.com is a B2B marketing platform specialized in
              attracting great influencers and connecting them with companies.
              <br />
              <br />
              We are building the next generation of B2B Influencer Marketing
              Services combined with new technology and human interactions.
              <br />
              <br />
              e-fluencers-com is the first of its kind to bring Influencer
              Marketing to the B2B industry. While Instagram influencer
              marketing is expected to hit $8 billion in spend by 2020, the
              growth trajectory of influencer marketing is not limited to
              consumer brands.
              <br />
              <br />
              B2B companies are now realizing the value of collaborating with
              influential experts for marketing purposes. This is what we do! We
              influence your business, to grow!
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6} sm={7} md={7} className={classes.image2}></Grid>
      </Box>
    </Grid>
  );

  const Market = () => (
    <Grid container component="main" className={classes.root} spacing={2}>
      <Box pb={20} display="flex" width="100%">
        <Grid item xs={6} sm={7} md={7} className={classes.image3}></Grid>

        <Grid item xs={6} sm={5} md={5}>
          <Box px={3}>
            <Box mb={2}>
              <Typography
                variant="h3"
                align="left"
                style={{
                  lineHeight: '130%',
                  fontWeight: 700,
                  color: '#403f52'
                }}
              >
                What does the market say?
              </Typography>
            </Box>

            <Typography variant="h6" align="left" style={{ color: '#9c9ab1' }}>
              85% of the people we've asked has seen a need for a B2B platform
              and would be interested. Something something the dark side...
            </Typography>
          </Box>
        </Grid>
      </Box>
    </Grid>
  );

  return (
    <div className="App">
      <CssBaseline />
      <Grid container>
        <Signup />
        <Container>
          <InfoFeatureComp />
          <AboutUs />
          <Market />
          <footer style={{ backgroundColor: '#f7f7f7' }}>
            <Grid container>
              <Grid item md={12}>
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
