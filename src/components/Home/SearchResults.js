import { Paper, Typography, Grid, Chip } from '@material-ui/core';
import React from 'react'
import { connect } from 'react-redux';
import {Fade} from 'react-reveal'
import * as searchResultsSelector from '../../selector/searchResults';
import { makeStyles } from '@material-ui/core/styles';
import { getChipColor } from '../../utilities/labChip';

const useStyles = makeStyles({
    item: {
        padding: '1em',
        background: 'beige',
        boxShadow: '1px 1px gray'
    },
    title: {
        fontSize: '16px',
        fontFamily: 'Bree Serif, serif'
    }
});

function SearchResults({ searchResults }) {
    const classes = useStyles();
    if(!searchResults) {
        return <div/>
    }
    const results = searchResults.map(item => (
        <Grid item xs={12} md={6} key={item.id}>
            <Fade>
            <Paper className={classes.item}>
                <Typography className={classes.title}>{item.testName}</Typography>
                <Grid container justify="space-between" alignItems='flex-end'>
                    <Grid item>
                        <Chip label={item.lab} color={getChipColor(item.lab)} size='small'/>
                    </Grid>
                    <Grid item>
                    <Typography color='textPrimary' variant='h5'>&#8377;{item.cost}/-</Typography>
                    </Grid>
                </Grid>
            </Paper>
            </Fade>
        </Grid>
    ));
    if(Array.isArray(searchResults) && searchResults.length === 0) {
        return (
            <div>
                No search results to display
            </div>
        )
    }
    return (
        <Grid container spacing={2}>
            {results}
        </Grid>
    )
}

const mapStateToProps = (store) => ({
    searchResults: searchResultsSelector.getSearchResults(store)
})
export default connect(mapStateToProps, null)(SearchResults);
