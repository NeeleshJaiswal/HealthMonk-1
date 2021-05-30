import React from 'react';
import {Grid} from "@material-ui/core";
import BlogCard from '../Card/BlogCard';
import data from '../../../data/data';
import TimeDisplay from '../TimeDisplay/TimeDisplay';
const BlogGreet = (props) => {
    const component = data.map(item => (
        <Grid container key={item.id}>
            <Grid item xs={12} md={1}>
                <TimeDisplay time={item.postedOn}/>
            </Grid>
            <Grid item xs={12} md={6}>
                <BlogCard blog={item}/>
            </Grid>
        </Grid>
    ));
    return (
        <div>
             {component}
        </div> 
    )
}

export default BlogGreet;