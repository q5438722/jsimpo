"use strict";jest.mock("npm-registry-fetch");jest.mock("@lerna/otplease",()=>({otplease:(e,t)=>Promise.resolve(e(t))}));const fetch=require("npm-registry-fetch");const npmDistTag=require("..");const stubLog={verbose:jest.fn(),info:jest.fn(),warn:jest.fn()};const baseOptions=Object.freeze({log:stubLog,defaultTag:"latest"});fetch.mockImplementation(()=>Promise.resolve());fetch.json.mockImplementation(()=>Promise.resolve({}));describe("npmDistTag.add()",()=>{it("adds a dist-tag for a given package@version",async()=>{const e={...baseOptions};const t=await npmDistTag.add("@scope/some-pkg@1.0.1","added-tag",e);expect(t).toEqual({"added-tag":"1.0.1"});expect(fetch).toHaveBeenLastCalledWith("/-/package/@scope%2fsome-pkg/dist-tags/added-tag",expect.objectContaining({method:"PUT",body:JSON.stringify("1.0.1"),headers:{"content-type":"application/json"}}))});it("does not attempt to add duplicate of existing tag",async()=>{fetch.json.mockImplementationOnce(()=>Promise.resolve({latest:"1.0.0","dupe-tag":"1.0.1"}));const e={...baseOptions};const t=await npmDistTag.add("@scope/some-pkg@1.0.1","dupe-tag",e);expect(t).toEqual({latest:"1.0.0","dupe-tag":"1.0.1"});expect(fetch).not.toHaveBeenCalled();expect(stubLog.warn).toHaveBeenLastCalledWith("dist-tag","@scope/some-pkg@dupe-tag already set to 1.0.1")});it("defaults tag argument to opts.defaultTag",async()=>{fetch.json.mockImplementationOnce(()=>Promise.resolve({latest:"1.0.0"}));const e={...baseOptions};const t=await npmDistTag.add("@scope/some-pkg@1.0.1",undefined,e);expect(t).toEqual({latest:"1.0.1"})});it("supports npm v6 opts.tag fallback",async()=>{fetch.json.mockImplementationOnce(()=>Promise.resolve({legacy:"1.0.0"}));const e={log:stubLog,tag:"legacy"};const t=await npmDistTag.add("@scope/some-pkg@1.0.1",undefined,e);expect(t).toEqual({legacy:"1.0.1"})})});describe("npmDistTag.remove()",()=>{it("removes an existing dist-tag for a given package",async()=>{fetch.json.mockImplementationOnce(()=>Promise.resolve({latest:"1.0.0","removed-tag":"1.0.1"}));const e={...baseOptions};const t=await npmDistTag.remove("@scope/some-pkg@1.0.1","removed-tag",e);expect(t).not.toHaveProperty("removed-tag");expect(fetch).toHaveBeenLastCalledWith("/-/package/@scope%2fsome-pkg/dist-tags/removed-tag",expect.objectContaining({method:"DELETE"}))});it("does not attempt removal of nonexistent tag",async()=>{const e={...baseOptions};const t=await npmDistTag.remove("@scope/some-pkg@1.0.1","missing-tag",e);expect(t).toEqual({});expect(fetch).not.toHaveBeenCalled();expect(stubLog.info).toHaveBeenLastCalledWith("dist-tag",'"missing-tag" is not a dist-tag on @scope/some-pkg')})});describe("npmDistTag.list()",()=>{it("returns dictionary of dist-tags",async()=>{fetch.json.mockImplementationOnce(()=>Promise.resolve({latest:"1.0.0","other-tag":"1.0.1",_etag:"should-be-removed"}));const e={...baseOptions};const t=await npmDistTag.list("@scope/some-pkg",e);expect(t).toEqual({latest:"1.0.0","other-tag":"1.0.1"});expect(fetch.json).toHaveBeenLastCalledWith("/-/package/@scope%2fsome-pkg/dist-tags",expect.objectContaining({preferOnline:true,spec:expect.objectContaining({name:"@scope/some-pkg"})}))});it("handles disastrous results gracefully",async()=>{fetch.json.mockImplementationOnce(()=>Promise.resolve(null));const e={...baseOptions};const t=await npmDistTag.list("@scope/some-pkg",e);expect(t).toEqual({})})});