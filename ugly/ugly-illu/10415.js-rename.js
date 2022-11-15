import { useReducer, useEffect } from "react";import { request } from "strapi-helper-plugin";import { getRequestUrl } from "../../../../admin/src/utils";import reducer, { initialState } from "./reducer";
const useAuthProviders = ({ ssoEnabled: r }) => {
  var [e, i] = useReducer(reducer, initialState);
  useEffect(() => {
    t();
  }, []);
  const t = async () => {
    try {
      if (!r) {
        i({ type: "GET_DATA_SUCCEEDED", data: [] });return;
      }const e = getRequestUrl("providers");
      const t = await request(e, { method: "GET" });
      i({ type: "GET_DATA_SUCCEEDED", data: t });
    } catch (e) {
      console.error(e);i({ type: "GET_DATA_ERROR" });strapi.notification.toggle({ type: "warning", message: { id: "notification.error" }, centered: true });
    }
  };

  return e;
};

export default useAuthProviders;
