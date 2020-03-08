import { Box, Fab } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import CustomTextField from '../CustomTextField/customtextfield';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh'
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/oMpAz-DN-9I/1920x1080)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.grey[900]
        : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  header: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '4.7rem',
      textAlign: 'center'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '6rem',
      textAlign: 'left'
    }
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

export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        className={classes.image}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        id="apply"
      >
        <Box display="flex" justifyContent="center">
          <Grid container>
            <Grid item xs={12}>
              <Typography
                variant="h1"
                className={classes.header}
                style={{
                  lineHeight: '130%',
                  fontWeight: 700,
                  color: '#FFF'
                }}
              >
                Blinkstars
              </Typography>
              <Typography
                variant="h3"
                component="h3"
                className={classes.textClass}
                style={{ color: '#FFF', marginBottom: '1rem' }}
              >
                Make money as an B2B Influencer{' '}
              </Typography>
              <Box
                display="flex"
                justifyContent={{
                  xs: 'space-around',
                  sm: 'center',
                  md: 'flex-start'
                }}
                alignItems="center"
              >
                <CustomTextField />
                <Fab
                  style={{ minWidth: 130, marginLeft: '2rem' }}
                  color="primary"
                  aria-label="apply"
                  variant="extended"
                >
                  Apply
                </Fab>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
