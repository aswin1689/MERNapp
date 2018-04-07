import * as types from './types';

export const fetchingArticles = () => ({
    type: types.FETCHING
});

export const fetchArticlesSuccess = payload => ({
    type: types.FETCH_SUCCESS,
    payload
});

export const fetchArticlesFailure = payload => ({
    type: types.FETCH_FAILURE,
    payload
});
