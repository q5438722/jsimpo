module.exports=function(){const t=this.getOptions();return`import thing from "./module";
export default [${Array.from({length:+t.count},()=>"thing").join(", ")}].reduce((a, b) => a + b);`};