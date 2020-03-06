import { Box, Container, Fab, InputBase } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://blinkstars.com/">
        Blinkstars.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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
    backgroundPosition: 'center'
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />

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
        {/* <Box my={10}> */}
        {/* <Video /> */}
        {/* <Box> */}
        <Box display="flex" justifyContent="center">
          <Container>
            <Grid item xs={12}>
              <Typography
                variant="h1"
                component="h1"
                align="left"
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
                align="left"
                style={{ color: '#FFF', marginBottom: '1rem' }}
              >
                Make money as an B2B Influencer{' '}
              </Typography>
              <Box display="flex" justifyContent="flex-start">
                <InputBase
                  required
                  style={{
                    backgroundColor: 'white',
                    borderRadius: 9999,
                    padding: '0px 45px',
                    marginRight: '1rem'
                  }}
                  id="email"
                  name="email"
                  placeholder="Enter you email"
                  inputProps={{ 'aria-label': 'description' }}
                  autoComplete="email"
                  autoFocus
                />
                <Fab
                  style={{ minWidth: 100 }}
                  color="primary"
                  aria-label="apply"
                  variant="extended"
                >
                  Apply
                </Fab>
              </Box>
            </Grid>
          </Container>
        </Box>
        {/* </Box> */}
      </Grid>
      {/* <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
        <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
        </Avatar>
        </Box>
        <Typography component="h1" variant="h5">
            Don't miss out - Apply now
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Apply
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  WE DON'T SHARE YOUR PERSONAL INFO WITH ANYONE | PRIVAT POLICY
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid> */}
    </Grid>
  );
}
