import { combineReducers } from 'redux';
import SearchReducer from '../component/Search/redux/SearchReducer';

export default combineReducers( {
    search: SearchReducer
});