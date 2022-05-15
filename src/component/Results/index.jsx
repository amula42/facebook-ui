import React from 'react';
import { connect } from 'react-redux';
import Result from './Result';

const renderSearchResults = searchResults => {
    return searchResults.map(result => {
        return <Result result={result} />
    })
}

const mapToProps = state => {
    return {
        searchResults: state.search.get('searchResults')
    }
};

const Results = (props) => {
    if (props.searchResults) {
        return (
            <>
                {renderSearchResults(props.searchResults)}
            </>
        )
    }
    return null;
}

export default connect(mapToProps)(Results);