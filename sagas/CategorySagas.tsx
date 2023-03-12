import { act } from "react-test-renderer";
import { takeEvery, call, put, fork } from "redux-saga/effects";
import * as actions from "../actions/CategoryAction";
import * as api from "../api/api";

function* getCategory() {
  try {
    const result = yield call(api.apiGetListAnnouncements);
    console.log('RESULT announ', result)
    // console.log("LIST", result)

    yield put(actions.getCategorySuccess(result.data.data));

  } catch (error) {
    yield put(actions.getCategoryFailed(error.message))
 
  }
}

function* getBanners() {
  try {
    const result = yield call(api.apiGetListBanner);
    console.log('RESULT BANNERS', result)
    // console.log("LIST", result)

    yield put(actions.getBannersSuccess(result.data.data.content));

  } catch (error) {
    yield put(actions.getBannersFailed(error.message))
 
  }
}

function* getHighlights() {
  try {
    const result = yield call(api.apiGetListHighlight);
    console.log('RESULT HIGHLIGHT', result.data.data.content)
    // console.log("LIST", result)

    yield put(actions.getHighlightsSuccess(result.data.data.content));

  } catch (error) {
    yield put(actions.getHighlightsFailed(error.message))
 
  }
}

function* getHeaders() {
  try {
    const result = yield call(api.apiGetListHeader);
    console.log('RESULT HEADER', result.data.data)
    // console.log("LIST", result)

    yield put(actions.getHeadersSuccess(result.data.data));

  } catch (error) {
    yield put(actions.getHeadersFailed(error.message))
 
  }
}

function* getRecommendations() {
  try {
    const result = yield call(api.apiGetListRecommendation);
    console.log('RESULT RECOMMENDATION', result.data.data.content)
    // console.log("LIST", result)

    yield put(actions.getRecommendationsSuccess(result.data.data.content));

  } catch (error) {
    yield put(actions.getRecommendationsFailed(error.message))
 
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
  yield takeEvery(actions.Types.GET_BANNERS_REQUEST, getBanners);
  yield takeEvery(actions.Types.GET_HIGHLIGHTS_REQUEST, getHighlights)
  yield takeEvery(actions.Types.GET_HEADERS_REQUEST, getHeaders)
  yield takeEvery(actions.Types.GET_RECOMMENDATIONS_REQUEST, getRecommendations)
  yield takeEvery(actions.Types.GET_CATEGORY_DETAILS_REQUEST, getCategoryDetails);
}

const pokemonsSagas = [fork(watchGetCategoryRequest)];

export default pokemonsSagas;
