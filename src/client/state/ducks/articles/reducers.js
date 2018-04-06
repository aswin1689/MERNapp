import { combineReducers } from 'redux';
import types from './types';

const articlesReducer = (state = [], action) => {
    switch (action.type) {
        case types.FETCHING:
            return Object.assign({}, state, { isFetching: true });

        case types.FETCH_SUCCESS:
            return Object.assign({}, state, { isFetching: false, articles: action.payload });

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
