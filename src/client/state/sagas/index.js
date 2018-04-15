import { watchArticleActions } from './articles';

// root saga
export default function* rootSaga() {
    yield [watchArticleActions()];
}
