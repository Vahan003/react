(this.webpackJsonpnewapp=this.webpackJsonpnewapp||[]).push([[0],[,,,function(e,t,n){e.exports=n(10)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),l=n(1),c=n.n(l);n(8),n(9);var r=function(e){return a.a.createElement("button",{id:"but",className:"button",onClick:e.func},e.name)},d={list:[],id:function(){return Math.round(1e14*Math.random())}};function u(e){d.list.map((function(t){var n=document.getElementById("up".concat(t.id));e?(n.setAttribute("disabled",""),n.style.opacity="0.4"):(n.removeAttribute("disabled"),n.style.opacity="1")}))}function o(e,t){var n=document.getElementById("re".concat(t));e?(n.style.opacity="0.4",n.setAttribute("disabled","")):(n.style.opacity="1",n.removeAttribute("disabled"))}var m=function(){return d.list.map((function(e){return a.a.createElement("div",{id:e.id,className:"printSide"},a.a.createElement("div",{className:"name"},e.name),a.a.createElement("div",{className:"title"},e.title),a.a.createElement("div",{className:"description"},e.description),a.a.createElement("div",null,a.a.createElement("button",{id:"up"+e.id,onClick:function(){return function(e){var t=document.getElementById("inpName"),n=document.getElementById("inpTitle"),i=document.getElementById("inpDescription");u(!0),d.list.map((function(l,m){if(l.id===e){t.value=l.name,n.value=l.title,i.value=l.description,o(!0,e);var p=a.a.createElement("button",{className:"button",onClick:function(){""!==t.value&&""!==n.value&&""!==i.value&&(d.list[m].name=t.value,d.list[m].title=n.value,d.list[m].description=i.value,s(),c.a.render(a.a.createElement(r,{func:v,name:"Submit"}),document.getElementById("but")),t.value="",n.value="",i.value=""),u(!1),o(!1,e)}},"Update");c.a.render(p,document.getElementById("but"))}}))}(e.id)}},"Update"),a.a.createElement("button",{id:"re"+e.id,onClick:function(){return t=e.id,d.list.map((function(e,n){e.id===t&&delete d.list[n]})),void s();var t}},"Remove")))}))};var s=function(){c.a.render(m(),document.getElementById("printroot"))};function p(e){var t=document.getElementById("inpName"),n=document.getElementById("inpTitle"),i=document.getElementById("inpDescription");e?(t.style.border="1px solid red",n.style.border="1px solid red",i.style.border="1px solid red"):(t.style.border="1px solid black",n.style.border="1px solid black",i.style.border="1px solid black")}var v=function(){var e=document.getElementById("inpName"),t=document.getElementById("inpTitle"),n=document.getElementById("inpDescription");""!==e.value&&""!==t.value&&""!==n.value?(d.list.push({id:"id".concat(d.id()),name:"".concat(e.value),title:"".concat(t.value),description:"".concat(n.value)}),p(!1)):p(!0),e.value="",t.value="",n.value="",s()};var E=function(){return a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"inpSide"},a.a.createElement("input",{id:"inpName"}),a.a.createElement("input",{id:"inpTitle"}),a.a.createElement("input",{id:"inpDescription"}),a.a.createElement("div",{id:"but"},a.a.createElement(r,{func:v,name:"Submit"}))),a.a.createElement("div",{id:"printroot"}))};var b=function(){return a.a.createElement(E,null)};c.a.render(a.a.createElement(b,null),document.getElementById("root"))}],[[3,1,2]]]);
//# sourceMappingURL=main.a6f7ae48.chunk.js.map