'use strict';
import{
  expect as expect
}from "chai";
import{
  getCredentials as getCredentials,
  api as api,
  request as request,
  credentials as credentials
}from "../../../data/api-data.js";
import{
  updatePermission as updatePermission,
  updateSetting as updateSetting
}from "../../../data/permissions.helper";
import{
  createDepartment as createDepartment
}from "../../../data/livechat/department.js";
describe("LIVECHAT - departments", function() {
  this.retries(0);
  let r;
  before((f) => {
    return getCredentials(f);
  });
  before((saveNotifs) => {
    updateSetting("Livechat_enabled", true).then(() => {
      return createDepartment();
    }).then((e) => {
      r = e;
      saveNotifs();
    }).catch(console.log);
  });
  describe("livechat/department", () => {
    it('should return an "unauthorized error" when the user does not have the necessary permission ["view-livechat-departments", "view-l-room"]', (e) => {
      updatePermission("view-l-room", []).then(() => {
        return updatePermission("view-livechat-departments", []);
      }).then(() => {
        request.get(api("livechat/department")).set(credentials).expect("Content-Type", "application/json").expect(400).expect((e) => {
          expect(e.body).to.have.property("success", false);
          expect(e.body.error).to.be.equal("error-not-authorized");
        }).end(e);
      });
    });
    it("should return an array of departments", (e) => {
      updatePermission("view-l-room", ["admin"]).then(() => {
        return updatePermission("view-livechat-departments", ["admin"]);
      }).then(() => {
        request.get(api("livechat/department")).set(credentials).expect("Content-Type", "application/json").expect(200).expect((Company) => {
          expect(Company.body).to.have.property("success", true);
          expect(Company.body.departments).to.be.an("array");
          expect(Company.body).to.have.property("offset");
          expect(Company.body).to.have.property("total");
          expect(Company.body).to.have.property("count");
        }).end(e);
      });
    });
  });
  describe("livechat/department/id", () => {
    it('should return an "unauthorized error" when the user does not have the necessary permission ["view-livechat-departments", "view-l-room"]', (e) => {
      updatePermission("view-l-room", []).then(() => {
        return updatePermission("view-livechat-departments", []);
      }).then(() => {
        request.get(api(`livechat/department/${r._id}`)).set(credentials).expect("Content-Type", "application/json").expect(400).expect((e) => {
          expect(e.body).to.have.property("success", false);
          expect(e.body.error).to.be.equal("error-not-authorized");
        }).end(e);
      });
    });
    it("should return the created department without the agents if the user does not have the necessary permission", (e) => {
      updatePermission("view-l-room", ["admin"]).then(() => {
        return updatePermission("view-livechat-departments", []);
      }).then(() => {
        request.get(api(`livechat/department/${r._id}`)).set(credentials).expect("Content-Type", "application/json").expect(200).expect((req) => {
          expect(req.body).to.have.property("success", true);
          expect(req.body).to.have.property("department");
          expect(req.body).to.not.have.property("agents");
          expect(req.body.department._id).to.be.equal(r._id);
        }).end(e);
      });
    });
    it("should return the created department without the agents if the user does have the permission but request to no include the agents", (e) => {
      updatePermission("view-livechat-departments", ["admin"]).then(() => {
        request.get(api(`livechat/department/${r._id}?includeAgents=false`)).set(credentials).expect("Content-Type", "application/json").expect(200).expect((req) => {
          expect(req.body).to.have.property("success", true);
          expect(req.body).to.have.property("department");
          expect(req.body).to.not.have.property("agents");
          expect(req.body.department._id).to.be.equal(r._id);
        }).end(e);
      });
    });
    it("should return the created department", (e) => {
      updatePermission("view-l-room", ["admin"]).then(() => {
        return updatePermission("view-livechat-departments", ["admin"]);
      }).then(() => {
        request.get(api(`livechat/department/${r._id}`)).set(credentials).expect("Content-Type", "application/json").expect(200).expect((req) => {
          expect(req.body).to.have.property("success", true);
          expect(req.body).to.have.property("department");
          expect(req.body).to.have.property("agents");
          expect(req.body.department._id).to.be.equal(r._id);
        }).end(e);
      });
    });
  });
});

