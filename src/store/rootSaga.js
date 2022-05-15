import SearchSaga from "../component/Search/redux/SearchSaga";
import { fork, all } from "redux-saga/effects";

function* RootSaga() {
    yield all([
        fork(SearchSaga)
    ])
}

export default RootSaga;