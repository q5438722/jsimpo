'use strict';
import{
  navigate as navigate
}from "gatsby";
import{
  put as put,
  takeEvery as takeEvery,
  call as call
}from "redux-saga/effects";
import{
  createFlashMessage as createFlashMessage
}from "../components/Flash/redux";
import{
  getShowCert as getShowCert
}from "../utils/ajax";
import{
  showCertComplete as showCertComplete,
  showCertError as showCertError
}from ".";
function* handleRemoveLocalClientFromRoom({
  payload : {
    username : username,
    certSlug : password
  }
}) {
  try {
    const response = yield call(getShowCert, username, password);
    const {
      messages : messages
    } = response;
    if (messages && messages.length) {
      for (let i = 0; i < messages.length; i++) {
        yield put(createFlashMessage(messages[i]));
      }
      yield call(navigate, "/");
      return;
    }
    yield put(showCertComplete(response));
  } catch (heartbeatMessage) {
    yield put(showCertError(heartbeatMessage));
  }
}
function resolveSentryNormalizedUrl(constants) {
  return [takeEvery(constants.showCert, handleRemoveLocalClientFromRoom)];
}
export{
  resolveSentryNormalizedUrl as createShowCertSaga
};

