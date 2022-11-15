'use strict';
import reducer from "../reducer";
describe("USERS PERMISSIONS | HOOKS | USEROLESLIST | reducer", () => {
  describe("DEFAULT_ACTION", () => {
    it("should return the initialState", () => {
      const e = {
        test : true
      };
      expect(reducer(e, {})).toEqual(e);
    });
  });
  describe("GET_DATA", () => {
    it("should set the isLoading key to true", () => {
      const manyClustersInitialState = {
        roles : ["tests"],
        isLoading : false
      };
      const action = {
        type : "GET_DATA"
      };
      const mockOtherDomainObject = {
        roles : [],
        isLoading : true
      };
      expect(reducer(manyClustersInitialState, action)).toEqual(mockOtherDomainObject);
    });
  });
  describe("GET_DATA_ERROR", () => {
    it("should set isLoading to false is an error occured", () => {
      const e = {
        type : "GET_DATA_ERROR"
      };
      const manyClustersInitialState = {
        roles : [],
        isLoading : true
      };
      const mockOtherDomainObject = {
        roles : [],
        isLoading : false
      };
      expect(reducer(manyClustersInitialState, e)).toEqual(mockOtherDomainObject);
    });
  });
  describe("GET_DATA_SUCCEEDED", () => {
    it("should return the state with the role list", () => {
      const e = {
        type : "GET_DATA_SUCCEEDED",
        data : [{
          id : 1,
          name : "Super admin",
          description : "This is the super admin role"
        }]
      };
      const manyClustersInitialState = {
        roles : [],
        isLoading : true
      };
      const mockOtherDomainObject = {
        roles : [{
          id : 1,
          name : "Super admin",
          description : "This is the super admin role"
        }],
        isLoading : false
      };
      expect(reducer(manyClustersInitialState, e)).toEqual(mockOtherDomainObject);
    });
  });
});

