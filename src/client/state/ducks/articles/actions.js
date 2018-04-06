import * as types from './types';

export const fetchingArticles = () => ({
    type: types.FETCHING
});

export const fetchArticlesSuccess = () => ({
    type: types.FETCH_SUCCESS
});

export const fetchArticlesFailure = () => ({
    type: types.FETCH_FAILURE
});
