import{unstable_capitalize as capitalize}from'@material-ui/utils';function isEmpty(string){return string.length===0}export default function propsToClassKey(props){const{variant,...other}=props;let classKey=variant||'';Object.keys(other).sort().forEach((key)=>{if(key==='color'){classKey+=isEmpty(classKey)?props[key]:capitalize(props[key])}else{classKey+=`${isEmpty(classKey)?key:capitalize(key)}${capitalize(props[key].toString(),)}`}});return classKey}