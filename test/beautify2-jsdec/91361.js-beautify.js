const visit=require(`unist-util-visit`)const{interopDefault}=require(`./interop-default`)const withPathPrefix=(url,pathPrefix)=>(pathPrefix+url).replace(/\/\//,`/`)module.exports=async function getSourcePluginsAsRemarkPlugins({gatsbyRemarkPlugins,mdxNode,getNode,getNodesByType,reporter,cache,pathPrefix,...helpers}){let pathPlugin=undefined if(pathPrefix){pathPlugin=()=>async function transformer(markdownAST){visit(markdownAST,[`link`,`definition`],node=>{if(node.url&&node.url.startsWith(`/`)&&!node.url.startsWith(`){node.url=withPathPrefix(node.url,pathPrefix)}})return markdownAST}}const userPluginsFiltered=gatsbyRemarkPlugins.filter(plugin=>typeof interopDefault(require(plugin.resolve))===`function`)if(!userPluginsFiltered.length){return pathPlugin?[pathPlugin]:[]}const userPlugins=userPluginsFiltered.map(plugin=>{const requiredPlugin=interopDefault(require(plugin.resolve))const wrappedPlugin=()=>async function transformer(markdownAST){await requiredPlugin({markdownAST,markdownNode:mdxNode,getNode,getNodesByType,get files(){return getNodesByType(`File`)},pathPrefix,reporter,cache,...helpers,},plugin.options||{})return markdownAST}return[wrappedPlugin,{}]})if(pathPlugin){return[pathPlugin,...userPlugins]}else{return[...userPlugins]}}