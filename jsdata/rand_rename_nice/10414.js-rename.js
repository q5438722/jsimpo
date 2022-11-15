'use strict';
import reducer from "../reducer";
describe("ADMIN | HOOKS | USEFETCHROLE | reducer", () => {
  describe("DEFAULT_ACTION", () => {
    it("should return the initialState", () => {
      const e = {
        test : true
      };
      expect(reducer(e, {})).toEqual(e);
    });
  });
  describe("GET_DATA_ERROR", () => {
    it("should set isLoading to false is an error occured", () => {
      const e = {
        type : "GET_DATA_ERROR"
      };
      const manyClustersInitialState = {
        data : [],
        isLoading : true
      };
      const mockOtherDomainObject = {
        data : [],
        isLoading : false
      };
      expect(reducer(manyClustersInitialState, e)).toEqual(mockOtherDomainObject);
    });
  });
  describe("GET_DATA_SUCCEEDED", () => {
    it("should return the state with the data", () => {
      const e = {
        type : "GET_DATA_SUCCEEDED",
        data : [{
          uid : "provider1",
          displayName : "Provider 1",
          icon : "icon1"
        }, {
          uid : "provider2",
          displayName : "Provider 2",
          icon : "icon2"
        }]
      };
      const manyClustersInitialState = {
        data : [],
        isLoading : true
      };
      const mockOtherDomainObject = {
        data : [{
          uid : "provider1",
          displayName : "Provider 1",
          icon : "icon1"
        }, {
          uid : "provider2",
          displayName : "Provider 2",
          icon : "icon2"
        }],
        isLoading : false
      };
      expect(reducer(manyClustersInitialState, e)).toEqual(mockOtherDomainObject);
    });
  });
});

