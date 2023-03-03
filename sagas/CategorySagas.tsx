import { takeEvery, call, put, fork } from "redux-saga/effects";
import * as actions from "../actions/CategoryAction";
import * as api from "../api/api";

function* getCategory() {
  try {
    const result = yield call(api.apiGetList);
    // console.log("LIST", result)

    yield put(actions.getCategorySuccess(result.data.categories));

  } catch (error) {
    yield put(actions.getCategoryFailed(error.message))
 
  }
}





export function* getCategoryDetails(action) {
//   console.log("AACTION", action);
  try {
    const result = yield call(api.apiGetListDetail, action.selectedCategory);


    yield put(actions.getCategoryDetailsSuccess(result.data));
  } catch (error) {
    console.log(error);
    yield put(actions.getCategoryDetailsFailed(error.message));
  }
}

function* watchGetCategoryRequest() {
  yield takeEvery(actions.Types.GET_CATEGORY_REQUEST, getCategory);
  yield takeEvery(actions.Types.GET_CATEGORY_DETAILS_REQUEST, getCategoryDetails);
}

const pokemonsSagas = [fork(watchGetCategoryRequest)];

export default pokemonsSagas;
