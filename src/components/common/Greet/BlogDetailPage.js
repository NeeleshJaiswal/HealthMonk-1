import React from 'react';
import data from '../../../data/data';
import TimeDisplay from '../TimeDisplay/TimeDisplay';
import CustomisedBreadcrumb from './CustomisedBreadcrumb';
import {Avatar, Grid, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';

const useStyles = makeStyles({
    root: {
        margin: '1rem'
    },
    paragraph:{
        fontWeight: '500',
        fontSize: '1rem',
        color: '#f50057'
    },
    span: {
        fontWeight: 'normal',
        color:'#787878'
    },
    image: {
        height: '60vh',
        width: 'inherit'
    },
    paragraph1: {
        fontFamily: 'Recursive, sans-serif',
        lineHeight: '1.5rem',
        fontSize: '18px',
        letterSpacing: '0.5px'
    }
});

export default function BlogDetailPage(props) {
    const classes = useStyles();
    const { id } = props.match.params;
    const blog = data.find(item => item.id == id);
    const desc = blog.description.split('\n').map(c => {
        return (
            <p className={classes.paragraph1}>{c}</p>
        )
    })
    return (
        <div>
            <CustomisedBreadcrumb title={blog.title}/>
            <Grid container spacing={2}>
            <Grid item xs={12} md={1}>
                <TimeDisplay time={blog.postedOn}/>
            </Grid>
            <Grid item xs={12} md={7} className={classes.root}>
                <Typography variant='h4'>{blog.title}</Typography>
                <p className={classes.paragraph}>Posted by <span className={classes.span}>{blog.postedBy}</span>  Posted on <span className={classes.span}>{moment(blog.postedOn).format('MMMM Do YYYY')}</span></p>
                <Avatar variant='square' className={classes.image} src={blog.image}/>
                {desc}
            </Grid>
        </Grid>
        </div>       
    )
}
