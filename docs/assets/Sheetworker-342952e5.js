import{_ as r}from"./Library-d7d765b7.js";import{j as s,o as n,g as o,w as c,u as m,a as l}from"./index-4d811fd1.js";const i=l("p",null,"Placeholder description",-1),u={__name:"Sheetworker",setup(d){console.log("js",s.filter(e=>!e.undocumented));const a=s.filter(e=>(/sheetworkers|utilities|re|aliases|variables/i.test(e.memberof)||e.kind==="namespace"&&/sheetworkers/i.test(e.longname))&&!e.undocumented).sort((e,t)=>e.name.localeCompare(t.name)).map(e=>({...e,name:e.kind==="namespace"?e.name:`k.${e.name}`}));return console.log("sheetworker data",a),(e,t)=>(n(),o(r,{data:m(a)},{default:c(()=>[i]),_:1},8,["data"]))}};export{u as default};