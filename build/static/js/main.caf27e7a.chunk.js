(this["webpackJsonpcurso-intro-react"]=this["webpackJsonpcurso-intro-react"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),l=n(4),c=n.n(l),a=(n(12),n(7)),i=n(2);var s=n(1),u=o.a.createContext();function d(e){var t=function(e,t){var n=Object(r.useState)(null),o=Object(i.a)(n,2),l=o[0],c=o[1],a=Object(r.useState)(!0),s=Object(i.a)(a,2),u=s[0],d=s[1],f=Object(r.useState)(t),m=Object(i.a)(f,2),j=m[0],p=m[1];return Object(r.useEffect)((function(){setTimeout((function(){try{var n,r=localStorage.getItem(e);r?n=JSON.parse(r):(localStorage.setItem(e,JSON.stringify(t)),n=t),p(n),d(!1)}catch(l){c(l)}}),1e3)})),{item:j,saveItem:function(t){try{localStorage.setItem(e,JSON.stringify(t)),p(t)}catch(l){c(l)}},loading:u,error:l}}("TODOS_V1",[]),n=t.item,l=t.saveItem,c=t.loading,d=t.error,f=o.a.useState(""),m=Object(i.a)(f,2),j=m[0],p=m[1],b=o.a.useState(!1),O=Object(i.a)(b,2),g=O[0],h=O[1],x=n.filter((function(e){return!!e.completed})).length,v=n.length,y=[];y=!j.length>=1?n:n.filter((function(e){var t=e.text.toLowerCase(),n=j.toLowerCase();return t.includes(n)}));return Object(s.jsx)(u.Provider,{value:{loading:c,error:d,todos:n,saveTodos:l,completedTodosCount:x,totalTodos:v,searchValue:j,setSearchValue:p,searchedTodos:y,addTodo:function(e){var t=Object(a.a)(n);t.push({completed:!1,text:e}),l(t)},toggleTodoCompletion:function(e){var t=n.findIndex((function(t){return t.text===e})),r=Object(a.a)(n);r[t].completed=!r[t].completed,l(r)},deleteTodo:function(e){var t=n.filter((function(t){return t.text!==e}));l(t)},isModalOpened:g,setIsModalOpened:h},children:e.children})}n(14);function f(){var e=o.a.useContext(u),t=e.isModalOpened,n=e.setIsModalOpened;return Object(s.jsx)("button",{className:"create_todo_button",onClick:function(){n(!t)},children:"+"})}n(15);function m(){var e=o.a.useContext(u),t=e.completedTodosCount,n=e.totalTodos;return Object(s.jsxs)("h2",{className:"todo_counter",children:["Has completado ",t," de ",n," TODOs"]})}n(16),n(17);function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=r.createElement("path",{d:"m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0",fill:"#f44336"}),O=r.createElement("path",{d:"m350.273438 320.105469c8.339843 8.34375 8.339843 21.824219 0 30.167969-4.160157 4.160156-9.621094 6.25-15.085938 6.25-5.460938 0-10.921875-2.089844-15.082031-6.25l-64.105469-64.109376-64.105469 64.109376c-4.160156 4.160156-9.621093 6.25-15.082031 6.25-5.464844 0-10.925781-2.089844-15.085938-6.25-8.339843-8.34375-8.339843-21.824219 0-30.167969l64.109376-64.105469-64.109376-64.105469c-8.339843-8.34375-8.339843-21.824219 0-30.167969 8.34375-8.339843 21.824219-8.339843 30.167969 0l64.105469 64.109376 64.105469-64.109376c8.34375-8.339843 21.824219-8.339843 30.167969 0 8.339843 8.34375 8.339843 21.824219 0 30.167969l-64.109376 64.105469zm0 0",fill:"#fafafa"});function g(e,t){var n=e.title,o=e.titleId,l=p(e,["title","titleId"]);return r.createElement("svg",j({height:"512pt",viewBox:"0 0 512 512",width:"512pt",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":o},l),n?r.createElement("title",{id:o},n):null,b,O)}var h=r.forwardRef(g);n.p;function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var y=r.createElement("g",null),C=r.createElement("g",null),E=r.createElement("g",null),w=r.createElement("g",null),I=r.createElement("g",null),T=r.createElement("g",null),S=r.createElement("g",null),k=r.createElement("g",null),N=r.createElement("g",null),D=r.createElement("g",null),_=r.createElement("g",null),B=r.createElement("g",null),M=r.createElement("g",null),P=r.createElement("g",null),F=r.createElement("g",null);function J(e,t){var n=e.title,o=e.titleId,l=v(e,["title","titleId"]);return r.createElement("svg",x({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 367.805 367.805",style:{enableBackground:"new 0 0 367.805 367.805"},xmlSpace:"preserve",ref:t,"aria-labelledby":o},l),n?r.createElement("title",{id:o},n):null,r.createElement("g",null,r.createElement("path",{style:{fill:"#3BB54A"},d:"M183.903,0.001c101.566,0,183.902,82.336,183.902,183.902s-82.336,183.902-183.902,183.902 S0.001,285.469,0.001,183.903l0,0C-0.288,82.625,81.579,0.29,182.856,0.001C183.205,0,183.554,0,183.903,0.001z"}),r.createElement("polygon",{style:{fill:"#D4E1F4"},points:"285.78,133.225 155.168,263.837 82.025,191.217 111.805,161.96 155.168,204.801  256.001,103.968  "})),y,C,E,w,I,T,S,k,N,D,_,B,M,P,F)}var V=r.forwardRef(J);n.p;function z(e){var t=e.type,n=e.color,r=void 0===n?"gray":n,o=e.onClick,l={check:Object(s.jsx)(V,{className:"Icon-svg Icon-svg--check",fill:r}),delete:Object(s.jsx)(h,{className:"Icon-svg Icon-svg--delete",fill:r})};return Object(s.jsx)("span",{className:"Icon-container Icon-container--".concat(t),onClick:o,children:l[t]})}function A(e){var t=e.completed,n=e.onComplete;return Object(s.jsx)(z,{type:"check",color:t?"#4caf50":"gray",onClick:n})}function L(e){var t=e.onDelete;return Object(s.jsx)(z,{type:"delete",onClick:t})}function R(e){return Object(s.jsxs)("li",{className:"todo_item",children:[Object(s.jsx)(A,{completed:e.completed,onComplete:function(){e.onComplete()}}),Object(s.jsx)("p",{className:"todo_item-p ".concat(e.completed&&"todo_item-p--complete"),children:e.text}),Object(s.jsx)(L,{onDelete:function(){e.onDelete()}})]})}n(18);function H(e){return Object(s.jsx)("section",{children:Object(s.jsx)("ul",{children:e.children})})}n(19);function X(){var e=o.a.useContext(u),t=e.searchValue,n=e.setSearchValue;return Object(s.jsx)("input",{className:"todo_search",placeholder:"Cebolla",value:t,onChange:function(e){console.log(e.target.value),n(e.target.value)}})}n(20);function q(e){var t=e.children;return c.a.createPortal(Object(s.jsx)("div",{className:"ModalBackground",children:t}),document.getElementById("modal"))}n(21);function G(){var e=o.a.useState(""),t=Object(i.a)(e,2),n=t[0],r=t[1],l=o.a.useContext(u),c=l.addTodo,a=l.setIsModalOpened;return Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c(n),a(!1)},children:[Object(s.jsx)("label",{children:"Crea un TODO"}),Object(s.jsx)("textarea",{value:n,onChange:function(e){r(e.target.value)},placeholder:"Cortar la cebolla para el almuerzo"}),Object(s.jsxs)("div",{className:"TodoForm-buttonContainer",children:[Object(s.jsx)("button",{type:"button",onClick:function(){a(!1)},className:"TodoForm-button TodoForm-button-cancel",children:"Cancelar"}),Object(s.jsx)("button",{type:"submit",className:"TodoForm-button TodoForm-button-add",children:"A\xf1adir"})]})]})}function K(){var e=o.a.useContext(u),t=e.error,n=e.loading,r=e.searchedTodos,l=e.toggleTodoCompletion,c=e.deleteTodo,a=e.isModalOpened;return Object(s.jsxs)(o.a.Fragment,{children:[Object(s.jsx)(m,{}),Object(s.jsx)(X,{}),Object(s.jsxs)(H,{children:[t&&Object(s.jsx)("p",{children:"Desesp\xe9rate, hubo un error..."}),n&&Object(s.jsx)("p",{children:"Estamos cargando, no desesperes..."}),!n&&!r.length&&Object(s.jsx)("p",{children:"Crea tu primer TODO"}),r.map((function(e,t){return Object(s.jsx)(R,{text:e.text,completed:e.completed,onComplete:function(){return l(e.text)},onDelete:function(){return c(e.text)}},t)}))]}),!!a&&Object(s.jsx)(q,{children:Object(s.jsx)(G,{})}),Object(s.jsx)(f,{})]})}var Q=function(e){return Object(s.jsx)(d,{children:Object(s.jsx)(K,{})})};c.a.render(Object(s.jsx)(Q,{}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.caf27e7a.chunk.js.map