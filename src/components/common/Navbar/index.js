import React from 'react'
import styles from './style';
import { withStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, IconButton, Typography, Button} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
function Navbar({classes}) {
    return (
        <div className={classes.root}>
            <AppBar position="static" color='secondary'>
                <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    HealthMonk
                </Typography>
                <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
    </div>
    )
}

export default withStyles(styles)(Navbar);
