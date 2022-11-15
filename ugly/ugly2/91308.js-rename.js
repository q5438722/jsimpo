import*as directory from"./directory";import resourceSchema from"../resource-schema";import Joi from"@hapi/joi";import fs from"fs-extra";import path from"path";jest.mock(`fs-extra`);const root=`fakeDir`;describe(`directory resource`,()=>{test(`e2e directory resource test`,async()=>{const e={root:root};const t={path:`directory`};const r={path:`directory1`};const o=path.join(root,t.path);const c=await directory.plan(e,t);expect(c).toBeTruthy();expect(c).toMatchInlineSnapshot(`
      Object {
        "describe": "Create directory \\"directory\\"",
      }
    `);const i=await directory.create(e,t);const a=Joi.validate(i,{...directory.schema,...resourceSchema});expect(a.error).toBeNull();expect(fs.ensureDir).toHaveBeenCalledWith(o);expect(i).toMatchInlineSnapshot(`
      Object {
        "_message": "Created directory \\"directory\\"",
        "id": "directory",
        "path": "directory",
      }
    `);const s=await directory.read(e,i.id);expect(s).toEqual(i);const d={...s,...r};const n=await directory.plan(e,d);expect(n).toMatchInlineSnapshot(`
      Object {
        "describe": "Create directory \\"directory1\\"",
      }
    `);fs.ensureDir.mockReset();const p=await directory.update(e,d);expect(fs.ensureDir).toHaveBeenCalledWith(o);await directory.destroy(e,p);expect(fs.rmdir).toHaveBeenCalledWith(o)})});