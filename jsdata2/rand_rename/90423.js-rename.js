const path=require(`path`);exports.createPages=async({graphql:e,actions:t})=>{const{createPage:o}=t;const{data:a}=await e(`
    {
      allMongodbCloudDocuments(limit: 1000) {
        edges {
          node {
            id
          }
        }
      }
    }
  `);const s=path.resolve(`./src/templates/item.js`);for(const{node:n}of a.allMongodbCloudDocuments.edges){o({path:`/item/${n.id}/`,component:s,context:{id:n.id}})}};