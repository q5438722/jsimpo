const path=require(`path`);const{createFilePath}=require(`gatsby-source-filesystem`);exports.onCreateNode=function e({actions:{createNodeField:t},node:a,getNode:r}){switch(a.internal.type){case`MarkdownRemark`:{const s=createFilePath({node:a,getNode:r});t({name:`slug`,value:s,node:a});break}default:{break}}};exports.createPages=async function e({actions:{createPage:a,createRedirect:t},graphql:r}){const{data:s}=await r(`
    {
      posts: allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }

      allFakeData {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `);const o=path.resolve(`src/templates/blog-post.js`);const n=path.resolve(`src/templates/preview-item.js`);s.posts.edges.forEach(({node:e})=>{const{slug:t}=e.fields;a({path:t,component:o,context:{slug:t}})});s.allFakeData.nodes.forEach(e=>{const{slug:t}=e.fields;a({path:t,component:n,context:{slug:t}})});a({path:`/안녕`,component:path.resolve(`src/pages/page-2.js`)});a({path:`/foo/@something/bar`,component:path.resolve(`src/pages/page-2.js`)});a({path:`/client-only-paths/static`,component:path.resolve(`src/templates/static-page.js`)});t({fromPath:`/redirect-without-page`,toPath:`/`,isPermanent:true,redirectInBrowser:true});t({fromPath:`/redirect`,toPath:`/`,isPermanent:true,redirectInBrowser:true});t({fromPath:`/redirect-two`,toPath:`/redirect-search-hash`,isPermanent:true,redirectInBrowser:true})};exports.onCreatePage=async({page:e,actions:t})=>{const{createPage:a,createRedirect:r,deletePage:s}=t;if(e.path.match(/^\/client-only-paths/)){e.matchPath=`/client-only-paths/*`;a(e)}if(e.path===`/redirect-me/`){const o=`/pt${e.path}`;s(e);r({fromPath:e.path,toPath:o,isPermanent:false,redirectInBrowser:true,Language:`pt`,statusCode:301});a({...e,path:o,context:{...e.context,lang:`pt`}})}if(e.path.includes(`query-data-caches`)){if(e.path.includes(`with-trailing-slash`)){const n=/\/$/.test(e.path);if(!n){throw new Error(`Page reporting to have trailing slash, doesn't have it`)}}if(e.path.includes(`no-trailing-slash`)){s(e);a({...e,path:e.path.replace(/\/$/,``)})}}};exports.createResolvers=({createResolvers:e})=>{const t={QueryDataCachesJson:{dummy:{type:`String`,args:{text:{type:`String`}},resolve(e,t){return t.text}}}};e(t)};