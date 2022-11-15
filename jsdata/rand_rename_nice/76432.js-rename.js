'use strict';
import{
  BaseRaw as BaseRaw
}from "../../../../../app/models/server/raw/BaseRaw";
import CannedResponse from "../models/CannedResponse";
class CannedResponseRaw extends BaseRaw {
}
export{
  CannedResponseRaw as CannedResponseRaw
};
export default new CannedResponseRaw(CannedResponse.model.rawCollection());

