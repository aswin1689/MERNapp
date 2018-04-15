import * as types from './types';

export const fetchArticles = () => ({
    type: types.FETCH
});

export const fetchArticlesSuccess = payload => ({
    type: types.FETCH_SUCCESS,
    payload
});

export const fetchArticlesFailure = payload => ({
    type: types.FETCH_FAILURE,
    payload
});
