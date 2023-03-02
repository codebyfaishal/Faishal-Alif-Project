import { all } from 'redux-saga/effects';
import categorySagas from './CategorySagas';

export default function* rootSaga() {
  yield all([...categorySagas]);
}

