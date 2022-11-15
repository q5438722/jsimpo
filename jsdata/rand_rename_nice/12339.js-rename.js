'use strict';
const authYahoo = (req) => {
  return req.get("permissionsManager").collectionTypesRelatedPermissions;
};
export default authYahoo;

