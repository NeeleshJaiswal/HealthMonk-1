import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import SearchBar from "material-ui-search-bar";
import { Container } from '@material-ui/core';
import { bindActionCreators } from 'redux';
import * as searchResultsActions from '../../actions/searchResults.action';
import * as searchResultsSelector from '../../selector/searchResults';
import SearchResults from './SearchResults';

const useStyles = makeStyles({
    container: {
        marginBottom: '1rem',
    }
})

function Home({setSearchResults}) {
    const [ value, setValue ] = useState('');
    const classes = useStyles();
    return (
        <div>
        <Container maxWidth="md" className={classes.container}>
            <SearchBar
                value={value}
                placeholder={'Search for tests...'}
                onChange={(newValue) => setValue(newValue)}
                onRequestSearch={() => setSearchResults(value)}
            />
        </Container>
        <SearchResults/>
        </div>
    )
}

const mapStateToProps = (store) => ({
    searchResults: searchResultsSelector.getSearchResults(store)
})

const mapDispatchToProps = dispatch =>(
    bindActionCreators({
        setSearchResults : searchResultsActions.setSearchResult
    }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Home);
