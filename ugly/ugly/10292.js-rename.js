import commonTrads from"./commonTrads.json";const formatMessagesWithPluginId=(e,s)=>{return Object.keys(s).reduce((o,r)=>{o[`${e}.${r}`]=s[r];return o},commonTrads)};export default formatMessagesWithPluginId;