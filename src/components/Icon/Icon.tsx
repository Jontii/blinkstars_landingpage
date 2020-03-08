import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(
  {
    root: {
      height: '1.6em',
      width: '1.3em'
    }
  },
  { name: 'MuiSvgIcon' }
);

interface IconProps {
  iconOfChoice: JSX.Element;
}

const Icon: React.FC<IconProps> = ({ iconOfChoice }) => {
  const classes = useStyles();
  return <div className={classes.root}>{iconOfChoice}</div>;
};

export default Icon;
