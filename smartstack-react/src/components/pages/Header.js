import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


const growStyle = {
    flexGrow: 1 
};

const menuButtonStyle = {
    marginLeft: -12,
    marginRight: 20, 
};


class Header extends Component {
    render() {
        return (
            <div>
            <AppBar position="static">
                <Toolbar>
                  <IconButton style={menuButtonStyle} color="inherit" aria-label="Menu">
                    <MenuIcon />
                  </IconButton>
                  <Typography variant="title" color="inherit" style={growStyle}>
                    <Link to="/">SmartStack</Link>
                  </Typography>
                  
                  <Link to="/login">Login</Link>
                </Toolbar>
              </AppBar>
             
            </div> 
        );
    }
}

export default Header;
