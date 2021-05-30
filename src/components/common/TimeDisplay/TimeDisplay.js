import React from 'react';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import {  Grid} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        marginTop: '1rem',
        alignItems: 'center',
        border: '1px solid #A9A9A9'
    },
    date: {
        margin: '1rem',
        fontSize: '3rem',
        fontWeight: '800',
        color: '#505050'
    },
    month: {
        padding: '5px',
        fontWeight: '600',
        color:'#686868',
        fontSize: '1rem',
        textTransform: 'uppercase'
    },
    divider: {
        width: '80px',
        color: '#585858'
    }
});

export default function TimeDisplay({time}) {
    const classes = useStyles();
    const date = moment(time);

    return (
            <Grid container direction='column' className={classes.root}>
                <Grid item className={classes.date}>
                    {date.date()}
                </Grid>
                <Grid item className={classes.month}>
                    {date.format('MMM')}
                </Grid>
                <hr className={classes.divider}/>  
                <Grid item className={classes.month}>
                    {date.format('YYYY')}
                </Grid>
            </Grid>
    )
}
