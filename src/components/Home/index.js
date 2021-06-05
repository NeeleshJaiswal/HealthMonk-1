import React, { useState } from 'react'
import SearchBar from "material-ui-search-bar";
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
   
});

function Home() {
    const classes = useStyles();
    const [ value, setValue ] = useState('');
    return (
        <div className={classes.root}>
        <Container maxWidth="md">
            <SearchBar
                value={value}
                onChange={(newValue) => setValue(newValue)}
                onRequestSearch={() => console.log(value)}
            />
        </Container>
        </div>
    )
}

export default Home
