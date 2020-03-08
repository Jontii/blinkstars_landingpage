import { Box, Link } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Fab from '@material-ui/core/Fab';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Zoom from '@material-ui/core/Zoom';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import React from 'react';
import ScrollIntoView from 'react-scroll-into-view';

interface Props {
  children: React.ReactElement;
  content: React.ReactElement;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2)
    }
  })
);

function ScrollTop(props: Props) {
  const { children } = props;
  const classes = useStyles();

  const trigger = useScrollTrigger({
    target: undefined,
    disableHysteresis: true,
    threshold: 100
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

const menuStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      textAlign: 'left'
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  })
);

const Navbar = (props: Props) => {
  const classes = menuStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <AppBar
          position="absolute"
          color="transparent"
          style={{ boxShadow: 'none' }}
        >
          <Toolbar id="back-to-top-anchor">
            <Typography
              variant="h5"
              className={classes.title}
              style={{ color: '#FFF' }}
            >
              Blinkstars
            </Typography>

            <Box display="flex">
              <ScrollIntoView selector="#aboutus" smooth>
                <Typography
                  id="#aboutus"
                  variant="subtitle2"
                  style={{ marginRight: 35, cursor: 'pointer' }}
                >
                  <Link style={{ color: '#FFF' }}>About Us</Link>
                </Typography>
              </ScrollIntoView>
              <ScrollIntoView selector="#influencers" smooth>
                <Typography
                  variant="subtitle2"
                  style={{ marginRight: 35, cursor: 'pointer' }}
                >
                  <Link style={{ color: '#FFF' }}>Influencers</Link>
                </Typography>
              </ScrollIntoView>
              <ScrollIntoView selector="#brandsagencies" smooth>
                <Typography
                  variant="subtitle2"
                  style={{ marginRight: 30, cursor: 'pointer' }}
                >
                  <Link style={{ color: '#FFF' }}>Brands & Agencies</Link>
                </Typography>
              </ScrollIntoView>
            </Box>
          </Toolbar>
        </AppBar>
      </div>
      {props.content}
      <ScrollTop {...props}>
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
};

export default Navbar;
