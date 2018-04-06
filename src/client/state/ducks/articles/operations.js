import axios from 'axios';
import { fetchingArticles, fetchArticlesSuccess, fetchArticlesFailure } from './actions';

const fetchArticles = () => dispatch => {
    dispatch(fetchingArticles());
    return axios
        .get('/articles')
        .then(data => {
            dispatch(fetchArticlesSuccess(data));
        })
        .catch(error => {
            dispatch(fetchArticlesFailure(error));
        });
};

export { fetchArticles };
