import reducer from "../reducer";describe("USERS PERMISSIONS | HOOKS | USEROLESLIST | reducer", () => {
  describe("DEFAULT_ACTION", () => {
    it("should return the initialState", () => {
      const e = { test: true };
      expect(reducer(e, {})).toEqual(e);
    });
  });describe("GET_DATA", () => {
    it("should set the isLoading key to true", () => {
      const e = { roles: ["tests"], isLoading: false };
      const t = { type: "GET_DATA" };
      const s = { roles: [], isLoading: true };
      expect(reducer(e, t)).toEqual(s);
    });
  });describe("GET_DATA_ERROR", () => {
    it("should set isLoading to false is an error occured", () => {
      const e = { type: "GET_DATA_ERROR" };
      const t = { roles: [], isLoading: true };
      const s = { roles: [], isLoading: false };
      expect(reducer(t, e)).toEqual(s);
    });
  });describe("GET_DATA_SUCCEEDED", () => {
    it("should return the state with the role list", () => {
      const e = { type: "GET_DATA_SUCCEEDED", data: [{ id: 1, name: "Super admin", description: "This is the super admin role" }] };
      const t = { roles: [], isLoading: true };
      const s = { roles: [{ id: 1, name: "Super admin", description: "This is the super admin role" }], isLoading: false };
      expect(reducer(t, e)).toEqual(s);
    });
  });
});
