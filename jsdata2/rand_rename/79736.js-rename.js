module.exports=function(l,n){if(process.env.UNI_PLATFORM==="app-plus"&&process.env.UNI_USING_V3){return this.callback(null,`export default function (Component) {
${l.trim()}
}`,n)}this.callback(null,l,n)};