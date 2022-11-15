const{useState}=require('react');const{useCustom}=require('./useCustom');function Component(props){const[count]=useState(0);useCustom();return count}module.exports={Component};
