import{log}from'../logger';import graphlib from'graphlib';export let clusterDb={};let decendants={};let parents={};export const clear=()=>{decendants={};parents={};clusterDb={}};const isDecendant=(id,ancenstorId)=>{log.trace('In isDecendant',ancenstorId,' ',id,' = ',decendants[ancenstorId].indexOf(id)>=0);if(decendants[ancenstorId].indexOf(id)>=0)return true;return false};const edgeInCluster=(edge,clusterId)=>{log.info('Decendants of ',clusterId,' is ',decendants[clusterId]);log.info('Edge is ',edge);if(edge.v===clusterId)return false;if(edge.w===clusterId)return false;if(!decendants[clusterId]){log.debug('Tilt, ',clusterId,',not in decendants');return false}log.info('Here ');if(decendants[clusterId].indexOf(edge.v)>=0)return true;if(isDecendant(edge.v,clusterId))return true;if(isDecendant(edge.w,clusterId))return true;if(decendants[clusterId].indexOf(edge.w)>=0)return true;return false};const copy=(clusterId,graph,newGraph,rootId)=>{log.warn('Copying children of ',clusterId,'root',rootId,'data',graph.node(clusterId),rootId);const nodes=graph.children(clusterId)||[];if(clusterId!==rootId){nodes.push(clusterId)}log.warn('Copying (nodes) clusterId',clusterId,'nodes',nodes);nodes.forEach((node)=>{if(graph.children(node).length>0){copy(node,graph,newGraph,rootId)}else{const data=graph.node(node);log.info('cp ',node,' to ',rootId,' with parent ',clusterId);newGraph.setNode(node,data);if(rootId!==graph.parent(node)){log.warn('Setting parent',node,graph.parent(node));newGraph.setParent(node,graph.parent(node))}if(clusterId!==rootId&&node!==clusterId){log.debug('Setting parent',node,clusterId);newGraph.setParent(node,clusterId)}else{log.info('In copy ',clusterId,'root',rootId,'data',graph.node(clusterId),rootId);log.debug('Not Setting parent for node=',node,'cluster!==rootId',clusterId!==rootId,'node!==clusterId',node!==clusterId)}const edges=graph.edges(node);log.debug('Copying Edges',edges);edges.forEach((edge)=>{log.info('Edge',edge);const data=graph.edge(edge.v,edge.w,edge.name);log.info('Edge data',data,rootId);try{if(edgeInCluster(edge,rootId)){log.info('Copying as ',edge.v,edge.w,data,edge.name);newGraph.setEdge(edge.v,edge.w,data,edge.name);log.info('newGraph edges ',newGraph.edges(),newGraph.edge(newGraph.edges()[0]))}else{log.info('Skipping copy of edge ',edge.v,'-->',edge.w,' rootId: ',rootId,' clusterId:',clusterId)}}catch(e){log.error(e)}})}log.debug('Removing node',node);graph.removeNode(node)})};export const extractDecendants=(id,graph)=>{const children=graph.children(id);let res=[].concat(children);for(let i=0;i<children.length;i++){parents[children[i]]=id;res=res.concat(extractDecendants(children[i],graph))}return res};export const validate=(graph)=>{const edges=graph.edges();log.trace('Edges: ',edges);for(let i=0;i<edges.length;i++){if(graph.children(edges[i].v).length>0){log.trace('The node ',edges[i].v,' is part of and edge even though it has children');return false}if(graph.children(edges[i].w).length>0){log.trace('The node ',edges[i].w,' is part of and edge even though it has children');return false}}return true};export const findNonClusterChild=(id,graph)=>{log.trace('Searching',id);const children=graph.children(id);log.trace('Searching children of id ',id,children);if(children.length<1){log.trace('This is a valid node',id);return id}for(let i=0;i<children.length;i++){const _id=findNonClusterChild(children[i],graph);if(_id){log.trace('Found replacement for',id,' => ',_id);return _id}}};const getAnchorId=(id)=>{if(!clusterDb[id]){return id}if(!clusterDb[id].externalConnections){return id}if(clusterDb[id]){return clusterDb[id].id}return id};export const adjustClustersAndEdges=(graph,depth)=>{if(!graph||depth>10){log.debug('Opting out, no graph ');return}else{log.debug('Opting in, graph ')}graph.nodes().forEach(function(id){const children=graph.children(id);if(children.length>0){log.warn('Cluster identified',id,' Replacement id in edges: ',findNonClusterChild(id,graph));decendants[id]=extractDecendants(id,graph);clusterDb[id]={id:findNonClusterChild(id,graph),clusterData:graph.node(id)}}});graph.nodes().forEach(function(id){const children=graph.children(id);const edges=graph.edges();if(children.length>0){log.debug('Cluster identified',id,decendants);edges.forEach((edge)=>{if(edge.v!==id&&edge.w!==id){const d1=isDecendant(edge.v,id);const d2=isDecendant(edge.w,id);if(d1^d2){log.warn('Edge: ',edge,' leaves cluster ',id);log.warn('Decendants of XXX ',id,': ',decendants[id]);clusterDb[id].externalConnections=true}}})}else{log.debug('Not a cluster ',id,decendants)}});graph.edges().forEach(function(e){const edge=graph.edge(e);log.warn('Edge '+e.v+' -> '+e.w+': '+JSON.stringify(e));log.warn('Edge '+e.v+' -> '+e.w+': '+JSON.stringify(graph.edge(e)));let v=e.v;let w=e.w;log.warn('Fix XXX',clusterDb,'ids:',e.v,e.w,'Translateing: ',clusterDb[e.v],' --- ',clusterDb[e.w]);if(clusterDb[e.v]||clusterDb[e.w]){log.warn('Fixing and trixing - removing XXX',e.v,e.w,e.name);v=getAnchorId(e.v);w=getAnchorId(e.w);graph.removeEdge(e.v,e.w,e.name);if(v!==e.v)edge.fromCluster=e.v;if(w!==e.w)edge.toCluster=e.w;log.warn('Fix Replacing with XXX',v,w,e.name);graph.setEdge(v,w,edge,e.name)}});log.warn('Adjusted Graph',graphlib.json.write(graph));extractor(graph,0);log.trace(clusterDb)};export const extractor=(graph,depth)=>{log.warn('extractor - ',depth,graphlib.json.write(graph),graph.children('D'));if(depth>10){log.error('Bailing out');return}let nodes=graph.nodes();let hasChildren=false;for(let i=0;i<nodes.length;i++){const node=nodes[i];const children=graph.children(node);hasChildren=hasChildren||children.length>0}if(!hasChildren){log.debug('Done, no node has children',graph.nodes());return}log.debug('Nodes = ',nodes,depth);for(let i=0;i<nodes.length;i++){const node=nodes[i];log.debug('Extracting node',node,clusterDb,clusterDb[node]&&!clusterDb[node].externalConnections,!graph.parent(node),graph.node(node),graph.children('D'),' Depth ',depth);if(!clusterDb[node]){log.debug('Not a cluster',node,depth)}else if(!clusterDb[node].externalConnections&&graph.children(node)&&graph.children(node).length>0){log.warn('Cluster without external connections, without a parent and with children',node,depth);const graphSettings=graph.graph();let dir=graphSettings.rankdir==='TB'?'LR':'TB';if(clusterDb[node]){if(clusterDb[node].clusterData&&clusterDb[node].clusterData.dir){dir=clusterDb[node].clusterData.dir;log.warn('Fixing dir',clusterDb[node].clusterData.dir,dir)}}const clusterGraph=new graphlib.Graph({multigraph:true,compound:true,}).setGraph({rankdir:dir,nodesep:50,ranksep:50,marginx:8,marginy:8,}).setDefaultEdgeLabel(function(){return{}});log.warn('Old graph before copy',graphlib.json.write(graph));copy(node,graph,clusterGraph,node);graph.setNode(node,{clusterNode:true,id:node,clusterData:clusterDb[node].clusterData,labelText:clusterDb[node].labelText,graph:clusterGraph,});log.warn('New graph after copy node: (',node,')',graphlib.json.write(clusterGraph));log.debug('Old graph after copy',graphlib.json.write(graph))}else{log.warn('Cluster ** ',node,' **not meeting the criteria !externalConnections:',!clusterDb[node].externalConnections,' no parent: ',!graph.parent(node),' children ',graph.children(node)&&graph.children(node).length>0,graph.children('D'),depth);log.debug(clusterDb)}}nodes=graph.nodes();log.warn('New list of nodes',nodes);for(let i=0;i<nodes.length;i++){const node=nodes[i];const data=graph.node(node);log.warn(' Now next level',node,data);if(data.clusterNode){extractor(data.graph,depth+1)}}};const sorter=(graph,nodes)=>{if(nodes.length===0)return[];let result=Object.assign(nodes);nodes.forEach((node)=>{const children=graph.children(node);const sorted=sorter(graph,children);result=result.concat(sorted)});return result};export const sortNodesByHierarchy=(graph)=>sorter(graph,graph.children());