importScripts(`%idbKeyValVersioned%`)const{NavigationRoute}=workbox.routing let lastNavigationRequest=null let offlineShellEnabled=true const MessageAPI={setPathResources:(event,{path,resources})=>{event.waitUntil(idbKeyval.set(`resources:${path}`,resources))},clearPathResources:event=>{event.waitUntil(idbKeyval.clear())},enableOfflineShell:()=>{offlineShellEnabled=true},disableOfflineShell:()=>{offlineShellEnabled=false},}self.addEventListener(`message`,event=>{const{gatsbyApi:api}=event.data if(api)MessageAPI[api](event,event.data)})function handleAPIRequest({event}){const{pathname}=new URL(event.request.url)const params=pathname.match(/:(.+)/)[1]const data={}if(params.includes(`=`)){params.split(`&`).forEach(param=>{const[key,val]=param.split(`=`)data[key]=val})}else{data.api=params}if(MessageAPI[data.api]!==undefined){MessageAPI[data.api]()}if(!data.redirect){return new Response()}return new Response(null,{status:302,headers:{Location:lastNavigationRequest,},})}const navigationRoute=new NavigationRoute(async({event})=>{if(event.request.url.match(/\/.gatsby-plugin-offline:.+/)){return handleAPIRequest({event})}if(!offlineShellEnabled){return await fetch(event.request)}lastNavigationRequest=event.request.url let{pathname}=new URL(event.request.url)pathname=pathname.replace(new RegExp(`^%pathPrefix%`),``)const resources=await idbKeyval.get(`resources:${pathname}`)if(!resources||!(await caches.match(`%pathPrefix%/%appFile%`))){return await fetch(event.request)}for(const resource of resources){if(!(await caches.match(resource))){return await fetch(event.request)}}const offlineShell=`%pathPrefix%/offline-plugin-app-shell-fallback/index.html`const offlineShellWithKey=workbox.precaching.getCacheKeyForURL(offlineShell)return await caches.match(offlineShellWithKey)})workbox.routing.registerRoute(navigationRoute)workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/,handleAPIRequest)