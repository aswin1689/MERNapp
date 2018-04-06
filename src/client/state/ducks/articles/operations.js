import axios from 'axios';
import { fetchingArticles, fetchArticlesSuccess, fetchArticlesFailure } from './actions';

const fetchArticles = () => dispatch => {
    dispatch(fetchingArticles());
    return axios
        .get('http://localhost:3000/articles')
        .then(response => {
            if (response != null && response.status >= 200 && response.status < 300) {
                dispatch(fetchArticlesSuccess(response.data));
            } else {
                dispatch(fetchArticlesFailure(response.data));
            }
        })
        .catch(error => {
            dispatch(fetchArticlesFailure(error));
        });
};

export { fetchArticles };
