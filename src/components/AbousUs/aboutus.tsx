import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

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
    backgroundImage: 'url(https://source.unsplash.com/random?socialmedia)',
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

const AboutUs = () => {
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
                The launch starts here
              </Typography>
            </Box>

            <Typography
              variant="body1"
              className={classes.textClass}
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
        <Grid item xs={12} sm={8} md={7} className={classes.image2}></Grid>
      </Box>
    </Grid>
  );
};

export default AboutUs;
