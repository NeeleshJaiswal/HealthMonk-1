import React from 'react';
import data from '../../../data/data';
import TimeDisplay from '../TimeDisplay/TimeDisplay';
import CustomisedBreadcrumb from './CustomisedBreadcrumb';
import {Avatar, Grid, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
import ReactHtmlParser from 'react-html-parser';

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
        height: 'auto',
        width: '100%'
    },
    paragraph1: {
        fontFamily: 'PT Serif, serif',
        lineHeight: '1.5rem',
        fontSize: '18px',
        letterSpacing: '0.5px'
    }
});

export default function BlogDetailPage(props) {
    const classes = useStyles();
    const { id } = props.match.params;
    // eslint-disable-next-line
    const blog = data.find(item => item.id == id);
    return (
        <div>
            <CustomisedBreadcrumb title={blog.title}/>
            <Grid container spacing={2}>
            <Grid item md={2}></Grid>
            <Grid item xs={12} md={1}>
                <TimeDisplay time={blog.postedOn}/>
            </Grid>
            <Grid item xs={12} md={7} className={classes.root}>
                <Typography variant='h4'>{blog.title}</Typography>
                <p className={classes.paragraph}>Posted by <span className={classes.span}>{blog.postedBy}</span>  Posted on <span className={classes.span}>{moment(blog.postedOn).format('MMMM Do YYYY')}</span></p>
                <Avatar variant='square' className={classes.image} src={blog.image}/>
                <div className={classes.paragraph1}>{ReactHtmlParser(blog.description)}</div>
                
            </Grid>
        </Grid>
        </div>       
    )
}
