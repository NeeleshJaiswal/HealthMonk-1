import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';

const useStyles = makeStyles({
    root: {
        margin: '1rem',
    },
    media: {
        height: '60vh'
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
    paragraph1: {
        fontFamily: 'Open Sans, sans-serif',
        fontSize: '14px',
        color: 'black'
    }
});

export default function BlogCard({blog}) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={blog.image}
                    title={blog.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {blog.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <p className={classes.paragraph}>Posted by <span className={classes.span}>{blog.postedBy}</span>  Posted on <span className={classes.span}>{moment(blog.postedOn).format('MMMM Do YYYY')}</span></p>
                        <p className={classes.paragraph1}>{blog.description.substring(0,200) + '...'} </p>

                        </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" href={`/blog/${blog.id}`}>
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
}