import { navigate } from "gatsby";import { put, takeEvery, call } from "redux-saga/effects";import { createFlashMessage } from "../components/Flash/redux";import { getShowCert } from "../utils/ajax";import { showCertComplete, showCertError } from ".";function* getShowCertSaga({ payload: { username: e, certSlug: t } }) {
  try {
    const r = yield call(getShowCert, e, t);
    var { messages: a } = r;
    if (a && a.length) {
      for (let e = 0; e < a.length; e++) {
        yield put(createFlashMessage(a[e]));
      }yield call(navigate, "/");return;
    }yield put(showCertComplete(r));
  } catch (e) {
    yield put(showCertError(e));
  }
}export function createShowCertSaga(e) {
  return [takeEvery(e.showCert, getShowCertSaga)];
}