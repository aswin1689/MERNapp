import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

import * as reducers from './ducks';
import rootSaga from './sagas';

export default function configureStore() {
    const rootReducer = combineReducers(reducers);
    const sagaMiddleware = createSagaMiddleware();
    const middleware = [sagaMiddleware];

    const store = createStore(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(...middleware)
    );

    sagaMiddleware.run(rootSaga);

    return store;
}
