import { takeLatest, put } from 'redux-saga/effects';
import types from '../types';
import axios from 'axios';
import { setSearchResults } from '../action';

function* setSearch({value}) {
    try {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=67BmK5Jmo0xgeclA5MpQo8ehcOIqmyUs&q=${value}`
        const data = yield axios.get(url);
        return yield put(setSearchResults(data.data.data));
    } catch (error) {
        console.log(error);
    }
}

function* watchSearch() {
    yield takeLatest(types.watchGetSearchResults, setSearch);
}

export default watchSearch;