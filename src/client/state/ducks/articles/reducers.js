import types from './types';

const initialState = {
    articlesList: [],
    errorMessage: '',
    isFetching: false
};

const articlesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH:
            return Object.assign({}, state, { isFetching: true });

        case types.FETCH_SUCCESS:
            return Object.assign({}, state, { isFetching: false, articlesList: action.payload });

        case types.FETCH_FAILURE:
            return Object.assign({}, state, { isFetching: false, errorMessage: action.payload });

        default:
            return state;
    }
};

export default articlesReducer;
