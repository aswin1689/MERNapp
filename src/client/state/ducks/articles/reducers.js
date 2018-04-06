import { combineReducers } from 'redux';
import types from './types';

const initialState = {
    articlesList: [],
    errorMessage: '',
    isFetching: false
};

const articlesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCHING:
            return Object.assign({}, state, { isFetching: true });

        case types.FETCH_SUCCESS:
            return Object.assign({}, state, { isFetching: false, articlesList: action.payload });

        case types.FETCH_FAILURE:
            return Object.assign({}, state, { isFetching: false, errorMessage: action.payload });

        default:
            return state;
    }
};

const reducer = combineReducers({
    articles: articlesReducer
});

export default reducer;
