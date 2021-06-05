import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react'
import { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import data from '../../data/LabTest';
import _ from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import "./theme.css";
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
  btn: {
      maxHeight: '40px'
  },
  text:{
    fontStyle: 'italic'
  }
});


const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    let pattern
    try{
        pattern = new RegExp('(\\w*'+inputValue+'\\w*)','gi');
    }
    catch (error) {
        console.log(error);
    }

    return inputLength === 0 ? [] : data.filter(item => {
        const matches = item.testName.match(pattern);
        return matches !== null
    });
};

const getSuggestionValue = suggestion => suggestion.testName;

const renderSuggestion = suggestion => (
    <div className={'container'}>
      <p>
        {suggestion.testName}
      </p>
      <p className={'text'}>
        {suggestion.lab}
      </p>    
    </div>
  );

export default function CustomSearchBar({onEnter, onEnterSuggestion}) {
  
  const classes = useStyles();
    const [state, setState] = useState({
        value: '',
        suggestions: []
      });
    
    const onChange = (event, { newValue }) => {
        setState({
          value: newValue
        });
      };
    
    const onSuggestionsFetchRequested = ({ value }) => {
        setState(prevState => ({
            ...prevState,
            suggestions: getSuggestions(value)
        }));
      };

    const onSuggestionsClearRequested = () => {
        setState(prevState => ({
            ...prevState,
            suggestions: []
        }));
    };

    const onSuggestionSelected = (event, { suggestionValue }) => {
        onEnterSuggestion(suggestionValue);
    }


    const inputProps = {
        placeholder: 'Type your tests',
        value: state.value,
        onChange
    };

    const buttonClick = () => {
      onEnter(state.value);
      setState(prevState => {
        return ({
          ...prevState,
          suggestions: []
        })
      })
    }

    return (
      <div className={'item'}>
          <Autosuggest
          suggestions={state.suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          onSuggestionSelected ={onSuggestionSelected}
          inputProps={inputProps}
        />  
          <Button
          className={classes.btn}
            onClick={buttonClick}
            variant='contained'
            size='large' 
            startIcon={<SearchIcon/>}>Search</Button>       
      </div>
    )
}
