'use strict';
import{
  useReducer as useReducer,
  useEffect as useEffect
}from "react";
import{
  request as request
}from "strapi-helper-plugin";
import{
  getRequestUrl as getRequestUrl
}from "../../../../admin/src/utils";
import reducer, {
  initialState as initialState
}from "./reducer";
const handler = ({
  ssoEnabled : r
}) => {
  const [test, openModalBox] = useReducer(reducer, initialState);
  useEffect(() => {
    init();
  }, []);
  const init = async() => {
    try {
      if (!r) {
        openModalBox({
          type : "GET_DATA_SUCCEEDED",
          data : []
        });
        return;
      }
      const hipchatUrl = getRequestUrl("providers");
      const maindata3 = await request(hipchatUrl, {
        method : "GET"
      });
      openModalBox({
        type : "GET_DATA_SUCCEEDED",
        data : maindata3
      });
    } catch (logValues) {
      console.error(logValues);
      openModalBox({
        type : "GET_DATA_ERROR"
      });
      strapi.notification.toggle({
        type : "warning",
        message : {
          id : "notification.error"
        },
        centered : true
      });
    }
  };
  return test;
};
export default handler;

