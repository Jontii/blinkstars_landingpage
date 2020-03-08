import { Box, Container, createStyles, Link, ListItem, ListItemText, makeStyles, Theme, useTheme } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import ScrollIntoView from 'react-scroll-into-view';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex'
    },
    appBar: {
      textAlign: 'left',
      boxShadow: 'none'
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none'
      }
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      [theme.breakpoints.down('sm')]: {
        width: drawerWidth
      }
    },
    showLinks: {
      [theme.breakpoints.down('xs')]: {
        display: 'none'
      },
      [theme.breakpoints.up('sm')]: {
        display: 'flex'
      },
      padding: 0
    }
  })
);

interface ResponsiveDrawerProps {
  content: React.ReactElement;
}

const Navbar = (props: ResponsiveDrawerProps) => {
  const { content } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <ListItem button>
        <ListItemText>
          <Typography
            variant="h5"
            // style={{ flewGrow: 1 }}
            style={{ color: 'Black' }}
          >
            Logo
          </Typography>
        </ListItemText>
      </ListItem>
      <Divider />

      <Box display="flex" flexDirection="column" style={{ color: 'black' }}>
        <ListItem button>
          <ListItemText>
            <ScrollIntoView selector="#aboutus" smooth>
              <Typography
                id="#aboutus"
                variant="subtitle2"
                style={{ marginRight: 35, cursor: 'pointer' }}
              >
                <Link href="#aboutus" style={{ color: 'black' }}>
                  About Us
                </Link>
              </Typography>
            </ScrollIntoView>
          </ListItemText>
        </ListItem>
        <Divider />

        <ListItem button>
          <ListItemText>
            <ScrollIntoView selector="#influencers" smooth>
              <Typography
                variant="subtitle2"
                style={{ marginRight: 35, cursor: 'pointer' }}
              >
                <Link style={{ color: 'black' }}>Influencers</Link>
              </Typography>
            </ScrollIntoView>
          </ListItemText>
        </ListItem>
        <Divider />

        <ListItem button>
          <ListItemText>
            <ScrollIntoView selector="#brandsagencies" smooth>
              <Typography
                variant="subtitle2"
                style={{ marginRight: 30, cursor: 'pointer' }}
              >
                <Link style={{ color: 'black' }}>Brands & Agencies</Link>
              </Typography>
            </ScrollIntoView>
          </ListItemText>
        </ListItem>
      </Box>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={classes.appBar}
        color="transparent"
      >
        <Container>
          <Toolbar id="back-to-top-anchor" className={classes.showLinks}>
            {/* <IconButton
              style={{ color: '#FFF' }}
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton> */}
            <Typography variant="h3" style={{ color: '#FFF', flexGrow: 1 }}>
              Logo
            </Typography>
            <Box display="flex" height="56px" alignItems="center">
              <ScrollIntoView selector="#aboutus" smooth>
                <Typography
                  id="#aboutus"
                  variant="h6"
                  style={{ marginRight: 35, cursor: 'pointer' }}
                >
                  <Link style={{ color: '#FFF' }}>About Us</Link>
                </Typography>
              </ScrollIntoView>
              <ScrollIntoView selector="#influencers" smooth>
                <Typography
                  variant="h6"
                  style={{ marginRight: 35, cursor: 'pointer' }}
                >
                  <Link style={{ color: '#FFF' }}>Influencers</Link>
                </Typography>
              </ScrollIntoView>
              <ScrollIntoView selector="#brandsagencies" smooth>
                <Typography variant="h6" style={{ cursor: 'pointer' }}>
                  <Link style={{ color: '#FFF' }}>Brands & Agencies</Link>
                </Typography>
              </ScrollIntoView>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* <nav aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav> */}
      <div>{content}</div>
    </div>
  );
};

export default Navbar;
