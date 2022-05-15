import { Map, fromJS } from "immutable";
import { setSearchResults } from "../types";

const initialState = Map({
    searchResults: []
});

const SearchReducer = (state = initialState, action) => {
    switch(action.type) {
        case setSearchResults: {
            return state.merge( {
                searchResults: fromJS(action.results)
            } );
        }
        default: {
            return state;
        }
    }
};

export default SearchReducer;