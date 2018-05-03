import axios from 'axios';
import { put, call, takeEvery } from 'redux-saga/effects';

import { articlesActions, articlesTypes } from '../ducks/articles';

//worker sagas
export function* fetchArticles() {
    try {
        const response = yield call(axios.get, '/articles');
        yield put(articlesActions.fetchArticlesSuccess(response.data));
    } catch (error) {
        yield put(articlesActions.fetchArticlesFailure(error));
    }
}

//watcher sagas
export function* watchArticleActions() {
    yield [takeEvery(articlesTypes.FETCH, fetchArticles)];
}
