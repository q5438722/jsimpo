require("../spec_helper");const path=require("path");const Promise=require("bluebird");const config=require(`${root}lib/config`);const fixture=require(`${root}lib/fixture`);const{fs}=require(`${root}lib/util/fs`);const FixturesHelper=require(`${root}/test/support/helpers/fixtures`);const os=require("os");const eol=require("eol");const isWindows=()=>{return os.platform()==="win32"};describe("lib/fixture",()=>{beforeEach(function(){FixturesHelper.scaffold();this.todosPath=FixturesHelper.projectPath("todos");return config.get(this.todosPath).then(e=>{({fixturesFolder:this.fixturesFolder}=e)})});afterEach(()=>{return FixturesHelper.remove()});context("file not found",()=>{it("throws when file cannot be found",function(){const A="does-not-exist.json";return fixture.get(this.fixturesFolder,A).then(()=>{throw new Error("should have failed but did not")}).catch(e=>{expect(e.message).to.include("A fixture file could not be found");expect(e.message).to.include(A)})})});context("unicode escape syntax",()=>{it("can parse unicode escape in JSON",function(){return fixture.get(this.fixturesFolder,"unicode_escape.json").then(e=>{expect(e).to.deep.eq({name:"♥"})})})});context("nested fixtures",()=>{it("can pass path to nested fixture",function(){return fixture.get(this.fixturesFolder,"nested/fixture.js").then(e=>{expect(e).to.deep.eq({nested:"fixture"})})})});context("json files",()=>{it("throws when json is invalid",function(){const A=`\
'bad_json.json' is not valid JSON.
Parse error on line 2:
{  "bad": "json"  "should": "not parse
------------------^
Expecting 'EOF', '}', ':', ',', ']', got 'STRING'\
`;return fixture.get(this.fixturesFolder,"bad_json.json").then(()=>{throw new Error("should have failed but did not")}).catch(e=>{if(isWindows()){expect(e.message).to.include("'bad_json.json' is not valid JSON.");expect(e.message).to.include("Parse error on line 2:");expect(e.message).to.include("Expecting 'EOF', '}', ':', ',', ']', got 'STRING'")}else{expect(eol.auto(e.message)).to.eq(eol.auto(A))}})});it("does not reformat json on parse error",function(){return fixture.get(this.fixturesFolder,"bad_json.json").then(()=>{throw new Error("should have failed but did not")}).catch(e=>{return fs.readFileAsync(`${this.fixturesFolder}/bad_json.json`,"utf8").then(e=>{expect(e).to.eq(`\
{
  "bad": "json"
  "should": "not parse"
}\
`)})})});it("does not reformat json or write fixture file",function(){return fixture.get(this.fixturesFolder,"no_format.json").then(e=>{return fs.readFileAsync(`${this.fixturesFolder}/no_format.json`,"utf8").then(e=>{expect(e).to.eq('{"id": 1, "name": "brian"}')})})});it("does not remove string whitespace",function(){return fixture.get(this.fixturesFolder,"words.json").then(e=>{return fs.readFileAsync(`${this.fixturesFolder}/words.json`,"utf8").then(e=>{expect(e).to.eq(`\
{
  "some": "multiple space separate words",
  "that": "should keep their spaces"
}\
`)})})});it("parses json to valid JS object",function(){return fixture.get(this.fixturesFolder,"users.json").then(e=>{expect(e).to.deep.eq([{id:1,name:"brian"},{id:2,name:"jennifer"}])})});it("does not reformat empty objects",function(){const e=()=>{return fixture.get(this.fixturesFolder,"empty_objects")};return Promise.map(Array(500),e,{concurrency:5}).then(()=>{return fs.readFileAsync(`${this.fixturesFolder}/empty_objects.json`,"utf8").then(e=>{expect(e).to.eq(`\
{
  "empty": {
    "object": {},
    "array": [],
    "object2": {\n\n    },
    "array2": [\n\n    ]
  }
}\
`)})})});it("can load a fixture with no extension when a same-named folder also exists",()=>{const e=FixturesHelper.projectPath("folder-same-as-fixture");return config.get(e).then(e=>{return fixture.get(e.fixturesFolder,"foo").then(e=>{expect(e).to.deep.eq({bar:"baz"})})})})});context("js files",()=>{it("returns valid JS object",function(){return fixture.get(this.fixturesFolder,"user.js").then(e=>{expect(e).to.deep.eq({id:1,name:"brian",age:29,posts:[]})})});it("does not rewrite file as a formated valid JS object",function(){return fixture.get(this.fixturesFolder,"no_format.js").then(e=>{return fs.readFileAsync(`${this.fixturesFolder}/no_format.js`,"utf8").then(e=>{expect(e).to.eq('{foo: "bar", baz: "quux"}')})})});it("throws on a bad JS object",function(){const A=`\
bad_js.js:3
  bar: "bar
       ^
ParseError: Unterminated string constant\
`;return fixture.get(this.fixturesFolder,"bad_js.js").then(()=>{throw new Error("should have failed but did not")}).catch(e=>{expect(e.message).to.eq(`'bad_js.js' is not a valid JavaScript object.\n${A}`)})})});context("coffee files",()=>{it("returns valid coffee object",function(){return fixture.get(this.fixturesFolder,"valid_coffee_obj.coffee").then(e=>{expect(e).to.deep.eq({name:"cypress",users:[]})})});it("does not rewrite coffee files",function(){return fixture.get(this.fixturesFolder,"no_format_coffee.coffee").then(()=>{return fs.readFileAsync(`${this.fixturesFolder}/no_format_coffee.coffee`,"utf8").then(e=>{expect(e).to.eq(`\
[
  {id: 1}
  {id: 2}
]\
`)})})});it("throws on bad coffee object",function(){return fixture.get(this.fixturesFolder,"bad_coffee.coffee").then(()=>{throw new Error("should have failed but did not")}).catch(e=>{expect(e.message).to.eq(`\
'bad_coffee.coffee is not a valid CoffeeScript object.
[stdin]:1:1: error: missing }
{
^\
`)})})});context("html files",()=>{it("returns html as a string",function(){return fixture.get(this.fixturesFolder,"index.html").then(e=>{expect(e).to.eq(`\
<!doctype html>
<html>
<head>
<title>index.html</title>
</head>
<body>
index
</body>
</html>\
`)})});it("does not rewrite file as formatted html",function(){return fixture.get(this.fixturesFolder,"index.html").then(()=>{return fs.readFileAsync(`${this.fixturesFolder}/index.html`,"utf8").then(e=>{expect(e).to.eq(`\
<!doctype html>
<html>
<head>
<title>index.html</title>
</head>
<body>
index
</body>
</html>\
`)})})})});context("txt files",()=>{it("returns text as string",function(){return fixture.get(this.fixturesFolder,"message.txt").then(e=>{expect(e).to.eq("foobarbaz")})})});context("csv files",()=>{it("returns text as string",function(){return fixture.get(this.fixturesFolder,"data.csv").then(e=>{expect(e).to.eq(`\
Name,Occupation,Birth Year
Jane,Engineer,1976
John,Chef,1982
\
`)})})});context("file with unknown extension",()=>{it("returns text as string",function(){return fixture.get(this.fixturesFolder,"unknown_ext.yaml").then(e=>{expect(e).to.eq(`\
- foo
- bar
- 
\
`)})})});context("file with unknown extension and encoding specified",()=>{it("returns text encoded as specified",function(){return fixture.get(this.fixturesFolder,"ascii.foo",{encoding:"ascii"}).then(e=>{expect(e).to.eq("o#?\n")})})});context("image files",()=>{beforeEach(function(){this.read=(e,A,t)=>{return fs.readFileAsync(path.join(e,A),t)}});it("returns png as string",function(){return this.read(this.fixturesFolder,"images/flower.png","base64").then(A=>{return fixture.get(this.fixturesFolder,"images/flower.png").then(e=>{expect(e).to.eq(A)})})});it("returns jpg as string",function(){return this.read(this.fixturesFolder,"images/sample.jpg","base64").then(A=>{return fixture.get(this.fixturesFolder,"images/sample.jpg").then(e=>{expect(e).to.eq(A)})})});it("returns gif as string",function(){return this.read(this.fixturesFolder,"images/word.gif","base64").then(A=>{return fixture.get(this.fixturesFolder,"images/word.gif").then(e=>{expect(e).to.eq(A)})})});it("returns tif as string",function(){return this.read(this.fixturesFolder,"images/sample.tif","base64").then(A=>{return fixture.get(this.fixturesFolder,"images/sample.tif").then(e=>{expect(e).to.eq(A)})})});it("returns png as binary",function(){return this.read(this.fixturesFolder,"images/flower.png","binary").then(A=>{return fixture.get(this.fixturesFolder,"images/flower.png",{encoding:"binary"}).then(e=>{expect(A).to.eq(e)})})})});context("zip files",()=>{it("returns zip as base64 string",function(){return fixture.get(this.fixturesFolder,"example.zip").then(e=>{const A="UEsDBAoAAAAAAK2zOUcAAAAAAAAAAAAAAAAEABAAemlwL1VYDAAGAwZWBgMGVvUBFABQSwMECgAAAAAAo7M5RwAAAAAAAAAAAAAAAAkAEAB6aXAvYS50eHRVWAwA8QIGVvECBlb1ARQAUEsDBAoAAAAAAKSzOUcAAAAAAAAAAAAAAAAJABAAemlwL2IudHh0VVgMAPMCBlbzAgZW9QEUAFBLAwQKAAAAAAClszlHAAAAAAAAAAAAAAAACQAQAHppcC9jLnR4dFVYDAD1AgZW9QIGVvUBFABQSwMECgAAAAAApbM5RwAAAAAAAAAAAAAAAAkAEAB6aXAvZC50eHRVWAwA9gIGVvYCBlb1ARQAUEsDBAoAAAAAAKazOUcAAAAAAAAAAAAAAAAJABAAemlwL2UudHh0VVgMAPgCBlb4AgZW9QEUAFBLAwQKAAAAAACnszlHAAAAAAAAAAAAAAAACQAQAHppcC9mLnR4dFVYDAD5AgZW+QIGVvUBFABQSwMECgAAAAAAqLM5RwAAAAAAAAAAAAAAAAkAEAB6aXAvZy50eHRVWAwA+wIGVvsCBlb1ARQAUEsDBAoAAAAAAKizOUcAAAAAAAAAAAAAAAAJABAAemlwL2gudHh0VVgMAPwCBlb8AgZW9QEUAFBLAwQKAAAAAACpszlHAAAAAAAAAAAAAAAACQAQAHppcC9pLnR4dFVYDAD9AgZW/QIGVvUBFABQSwMECgAAAAAAqrM5RwAAAAAAAAAAAAAAAAkAEAB6aXAvai50eHRVWAwA/wIGVv8CBlb1ARQAUEsDBAoAAAAAAK2zOUcAAAAAAAAAAAAAAAAJABAAemlwL2sudHh0VVgMAAYDBlYGAwZW9QEUAFBLAQIVAwoAAAAAAK2zOUcAAAAAAAAAAAAAAAAEAAwAAAAAAAAAAEDtQQAAAAB6aXAvVVgIAAYDBlYGAwZWUEsBAhUDCgAAAAAAo7M5RwAAAAAAAAAAAAAAAAkADAAAAAAAAAAAQKSBMgAAAHppcC9hLnR4dFVYCADxAgZW8QIGVlBLAQIVAwoAAAAAAKSzOUcAAAAAAAAAAAAAAAAJAAwAAAAAAAAAAECkgWkAAAB6aXAvYi50eHRVWAgA8wIGVvMCBlZQSwECFQMKAAAAAAClszlHAAAAAAAAAAAAAAAACQAMAAAAAAAAAABApIGgAAAAemlwL2MudHh0VVgIAPUCBlb1AgZWUEsBAhUDCgAAAAAApbM5RwAAAAAAAAAAAAAAAAkADAAAAAAAAAAAQKSB1wAAAHppcC9kLnR4dFVYCAD2AgZW9gIGVlBLAQIVAwoAAAAAAKazOUcAAAAAAAAAAAAAAAAJAAwAAAAAAAAAAECkgQ4BAAB6aXAvZS50eHRVWAgA+AIGVvgCBlZQSwECFQMKAAAAAACnszlHAAAAAAAAAAAAAAAACQAMAAAAAAAAAABApIFFAQAAemlwL2YudHh0VVgIAPkCBlb5AgZWUEsBAhUDCgAAAAAAqLM5RwAAAAAAAAAAAAAAAAkADAAAAAAAAAAAQKSBfAEAAHppcC9nLnR4dFVYCAD7AgZW+wIGVlBLAQIVAwoAAAAAAKizOUcAAAAAAAAAAAAAAAAJAAwAAAAAAAAAAECkgbMBAAB6aXAvaC50eHRVWAgA/AIGVvwCBlZQSwECFQMKAAAAAACpszlHAAAAAAAAAAAAAAAACQAMAAAAAAAAAABApIHqAQAAemlwL2kudHh0VVgIAP0CBlb9AgZWUEsBAhUDCgAAAAAAqrM5RwAAAAAAAAAAAAAAAAkADAAAAAAAAAAAQKSBIQIAAHppcC9qLnR4dFVYCAD/AgZW/wIGVlBLAQIVAwoAAAAAAK2zOUcAAAAAAAAAAAAAAAAJAAwAAAAAAAAAAECkgVgCAAB6aXAvay50eHRVWAgABgMGVgYDBlZQSwUGAAAAAAwADAAfAwAAjwIAAAAA";expect(e).to.eq(A)})})});context("extension omitted",()=>{it("#1 finds json",function(){return fixture.get(this.fixturesFolder,"foo").then(e=>{expect(e).to.deep.eq([{json:true}])})});it("#2 finds js",function(){return fixture.get(this.fixturesFolder,"bar").then(e=>{expect(e).to.deep.eq({js:true})})});it("throws when no file by any extension can be found",function(){return fixture.get(this.fixturesFolder,"does-not-exist").then(()=>{throw new Error("should have failed but did not")}).catch(e=>{expect(e.message).to.include("A fixture file could not be found");expect(e.message).to.include("/does-not-exist")})})});context("new lines",()=>{it("does not remove trailing new lines on .txt",function(){return fixture.get(this.fixturesFolder,"trailing_new_line.txt").then(e=>{return fs.readFileAsync(`${this.fixturesFolder}/trailing_new_line.txt`,"utf8").then(e=>{expect(e).to.eq("foo\nbar\nbaz\n")})})});it("does not remove trailing new lines on .json",function(){return fixture.get(this.fixturesFolder,"trailing_new_line.json").then(e=>{return fs.readFileAsync(`${this.fixturesFolder}/trailing_new_line.json`,"utf8").then(e=>{expect(e).to.eq('{"foo": "bar"}\n')})})});it("does not remove trailing new lines on .js",function(){return fixture.get(this.fixturesFolder,"trailing_new_line.js").then(e=>{return fs.readFileAsync(`${this.fixturesFolder}/trailing_new_line.js`,"utf8").then(e=>{expect(e).to.eq('{foo: "bar"}\n')})})});it("does not remove trailing new lines on .coffee",function(){return fixture.get(this.fixturesFolder,"trailing_new_line_coffee.coffee").then(e=>{return fs.readFileAsync(`${this.fixturesFolder}/trailing_new_line_coffee.coffee`,"utf8").then(e=>{expect(e).to.eq('{ foo: "bar" }\n')})})});it("does not remove trailing new lines on .html",function(){return fixture.get(this.fixturesFolder,"trailing_new_line.html").then(e=>{return fs.readFileAsync(`${this.fixturesFolder}/trailing_new_line.html`,"utf8").then(e=>{expect(e).to.eq("<html><body>foo</body></html>\n")})})})})});