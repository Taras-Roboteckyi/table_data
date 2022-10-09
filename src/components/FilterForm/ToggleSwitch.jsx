import React from 'react';
import { withStyles } from '@material-ui/core/styles';


import Switch from '@material-ui/core/Switch';




const IOSSwitch = withStyles(theme => ({
  root: {
    width: 40,
    height: 20,
    padding: 0,
    margin: 0,
    marginTop:10
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(22px)',
      color: theme.palette.common.white,
      '& + $track': {
        background:  "linear-gradient(to bottom,  #5a8fff 0%, #003094 100%)",
        
        opacity: 1,
        border: 'none', 
      },
    },
    '&$focusVisible $thumb': {
      color: '#52d869',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 16,
    height: 16,
    backgroundColor: '#f2f3f4',
  },
  track: {
    height: 18,
    borderRadius: 20 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: '#f2f3f4',
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

export default function ToggleSwitch() {
  const [state, setState] = React.useState({
    checkedB: true,
  });

  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    
     <IOSSwitch checked={state.checkedB} onChange={handleChange} name="checkedB" />
      
   
  );
}
