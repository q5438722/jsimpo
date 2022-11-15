import fs from"fs-extra";import resourceSchema from"../resource-schema";import Joi from"@hapi/joi";jest.mock(`fs-extra`);jest.mock(`node-fetch`,()=>require(`fetch-mock-jest`).sandbox());const fetchMock=require(`node-fetch`);const file=require(`./file`);const root=__dirname;const content=`Hello, world!`;const url=`http://example.com/file1.txt`;const url2=`http://example.com/file2.txt`;const response1=`query {
  allGatsbyPlugin {
    nodes {
      name
      options
      resolvedOptions
      package {
        version
      }
      ... on GatsbyTheme {
        files {
          nodes {
            path
          }
        }
        shadowedFiles {
          nodes {
            path
          }
        }
      }
    }
  }  
}`;const response2=`const options = {
  key: process.env.WHATEVER
  
}`;describe(`file resource`,()=>{test(`e2e file resource test`,async()=>{const e={root:root};const t={path:`file.txt`,content:content};const o={content:content+`1`};fs.readFile.mockReturnValue(t.content);const n=await file.plan(e,t);expect(n).toMatchInlineSnapshot(`
      Object {
        "currentState": "Hello, world!",
        "describe": "Write file.txt",
        "diff": "",
        "newState": "Hello, world!",
      }
    `);const s=await file.create(e,t);const l=Joi.validate(s,{...file.schema,...resourceSchema});expect(l.error).toBeNull();expect(s).toMatchInlineSnapshot(`
      Object {
        "_message": "Wrote file file.txt",
        "content": "Hello, world!",
        "id": "file.txt",
        "path": "file.txt",
      }
    `);const a=await file.read(e,s.id);expect(a).toEqual(s);const c={...a,...o};const i=await file.plan(e,c);expect(i).toMatchInlineSnapshot(`
      Object {
        "currentState": "Hello, world!",
        "describe": "Write file.txt",
        "diff": "- Original  - 1
      + Modified  + 1

      - Hello, world!
      + Hello, world!1",
        "newState": "Hello, world!1",
      }
    `);fs.readFile.mockReturnValueOnce(o.content);const r=await file.update(e,c);expect(r).toMatchInlineSnapshot(`
      Object {
        "_message": "Wrote file file.txt",
        "content": "Hello, world!1",
        "id": "file.txt",
        "path": "file.txt",
      }
    `);await file.destroy(e,r)});test(`e2e remote file resource test`,async()=>{const e={root:root};const t={path:`file.txt`,content:url};const o={content:url2};fs.readFile.mockReturnValue(response1);const{Readable:n,PassThrough:s}=require(`stream`);fs.createWriteStream.mockImplementation(()=>new s);fetchMock.get(url,()=>{const e=new n;e.push(response1);e.push(null);return e},{sendAsJson:false}).mock(url2,response2);fs.readFile.mockReturnValueOnce(``);const l=await file.plan(e,t);expect(l.currentState).toEqual(``);expect(l.newState).toEqual(response1);const a=await file.create(e,t);const c=Joi.validate(a,{...file.schema,...resourceSchema});expect(c.error).toBeNull();expect(a.content).toEqual(response1);const i=await file.read(e,a.id);expect(i).toEqual(a);const r={...i,...o};const f=await file.plan(e,r);expect(f.diff).toMatchInlineSnapshot(`
      "- Original  - 23
      + Modified  +  3

      - query {
      -   allGatsbyPlugin {
      -     nodes {
      -       name
      -       options
      -       resolvedOptions
      -       package {
      -         version
      -       }
      -       ... on GatsbyTheme {
      -         files {
      -           nodes {
      -             path
      -           }
      -         }
      -         shadowedFiles {
      -           nodes {
      -             path
      -           }
      -         }
      -       }
      -     }
      -   }  
      + const options = {
      +   key: process.env.WHATEVER
      +   
        }"
    `);fs.readFile.mockReturnValueOnce(o.content);const p=await file.update(e,r);expect(p).toMatchInlineSnapshot(`
      Object {
        "_message": "Wrote file file.txt",
        "content": "http://example.com/file2.txt",
        "id": "file.txt",
        "path": "file.txt",
      }
    `);await file.destroy(e,p)})});