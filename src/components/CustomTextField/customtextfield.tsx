import { OutlinedInputProps } from '@material-ui/core/OutlinedInput';
import { createStyles, fade, makeStyles, Theme } from '@material-ui/core/styles';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import React from 'react';

const useStylesReddit = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      border: '1px solid #e2e2e1',
      overflow: 'hidden',
      borderRadius: 4,

      backgroundColor: '#fcfcfb',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      '&:hover': {
        backgroundColor: '#fff'
      },
      '&$focused': {
        backgroundColor: '#fff',
        boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
        borderColor: theme.palette.primary.main
      }
    },
    focused: {}
  })
);

function RedditTextField(props: TextFieldProps) {
  const classes = useStylesReddit();

  return (
    <TextField
      InputProps={
        { classes, disableUnderline: true } as Partial<OutlinedInputProps>
      }
      {...props}
    />
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    margin: {
      margin: theme.spacing(1),
      flexGrow: 1,
      maxHeight: 48,
      [theme.breakpoints.down('xs')]: {
        maxWidth: 250
      },
      [theme.breakpoints.up('sm')]: {
        maxWidth: 300
      },
      [theme.breakpoints.up('md')]: {
        maxWidth: 400
      }
    }
  })
);

const CustomTextField = () => {
  const classes = useStyles();
  return (
    <RedditTextField
      label="Email"
      className={classes.margin}
      variant="filled"
      id="email"
      name="email"
      inputProps={{ 'aria-label': 'description' }}
      autoComplete="email"
      autoFocus
    />
  );
};

export default CustomTextField;
