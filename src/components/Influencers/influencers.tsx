import { Box, Grid } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import ForumIcon from '@material-ui/icons/Forum';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
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
      ml={{ xs: 0, md: '20%' }}
      style={{ maxWidth: 225 }}
      mb={{ xs: 6, md: 10 }}
    >
      <Avatar className={classes.avatar}>{icon}</Avatar>
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

const Influencers = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Box
        flexDirection={{ xs: 'column', md: 'row' }}
        pt={{ xs: 3, md: 15 }}
        pb={{ xs: 1, md: 0 }}
        display="flex"
        alignItems={{ xs: 'center', md: 'normal' }}
      >
        <Grid item xs={false} sm={8} md={4}>
          <Typography
            variant="h5"
            component="h3"
            className={classes.textClass}
            style={{ color: '#6f7581', marginBottom: '1rem' }}
          >
            Influencers!
          </Typography>
          <Typography
            variant="h3"
            component="h1"
            className={classes.textClass}
            style={{ lineHeight: '130%', fontWeight: 700, color: '#403f52' }}
          >
            Use our B2B platform to reach the stars!
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
            Apply as Influencer
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={8}>
          <Box display="flex" flexDirection="column" mt={{ xs: 5, sm: 0 }}>
            <Grid item xs={12} sm={12} md={12}>
              <Box
                display="flex"
                flexDirection={{ xs: 'column', sm: 'row' }}
                justifyContent={{ sm: 'space-evenly', md: 'flex-end' }}
                alignItems={{ xs: 'center' }}
              >
                <FeatureBox
                  icon={<CreditCardIcon />}
                  headtext="Earn $"
                  text="Get paid to create content by collaborating with brands and companies"
                />
                <FeatureBox
                  icon={<ForumIcon />}
                  headtext="Contact marketers "
                  text="Be exposed to marketers looking for online B2B influencers."
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Box
                display="flex"
                flexDirection={{ xs: 'column', sm: 'row' }}
                justifyContent={{ sm: 'space-evenly', md: 'flex-end' }}
                alignItems={{ xs: 'center' }}
              >
                {' '}
                <FeatureBox
                  icon={<AssignmentIndIcon />}
                  headtext="Start a brand"
                  text="Build your own brand and increase your value as an Influencer"
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
      </Box>
    </Grid>
  );
};

export default Influencers;
