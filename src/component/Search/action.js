import types from "./types";

export const getSearchResults = value => ({
    types: "WATCH_GET_SEARCH_RESULTS",
    value
});

export const setSearchResults = results => ({
    type: "SET_SEARCH_RESULTS",
    results
})