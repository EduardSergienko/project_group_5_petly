"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[833],{833:function(e,t,r){r.r(t),r.d(t,{default:function(){return f}});var n=r(885),a=r(791);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var c=r(184),s=function(e){var t=e.formData,r=e.setFormData;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("input",{type:"text",placeholder:"Email",value:t.email,onChange:function(e){return r(i(i({},t),{},{email:e.target.value}))}}),(0,c.jsx)("input",{type:"text",placeholder:"Password",value:t.password,onChange:function(e){return r(i(i({},t),{},{password:e.target.value}))}}),(0,c.jsx)("input",{type:"text",placeholder:"Confirm Password",value:t.confirmPassword,onChange:function(e){return r(i(i({},t),{},{confirmPassword:e.target.value}))}})]})},l=function(e){var t=e.formData,r=e.setFormData;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("input",{type:"text",placeholder:"Name",value:t.name,onChange:function(e){return r(i(i({},t),{},{name:e.target.value}))}}),(0,c.jsx)("input",{type:"text",placeholder:"City, region",value:t.city,onChange:function(e){return r(i(i({},t),{},{city:e.target.value}))}}),(0,c.jsx)("input",{type:"text",placeholder:"Mobile phone",value:t.phone,onChange:function(e){return r(i(i({},t),{},{phone:e.target.value}))}})]})},p=function(){var e=(0,a.useState)(0),t=(0,n.Z)(e,2),r=t[0],o=t[1],u=(0,a.useState)({email:"",password:"",confirmPassword:"",name:"",city:"",phone:""}),i=(0,n.Z)(u,2),p=i[0],f=i[1];return(0,c.jsxs)("div",{children:[(0,c.jsx)("h1",{children:"Registration"}),(0,c.jsxs)("div",{children:[0===r?(0,c.jsx)(s,{formData:p,setFormData:f}):1===r?(0,c.jsx)(l,{formData:p,setFormData:f}):void 0,(0,c.jsx)("button",{disabled:0===r,onClick:function(){o((function(e){return e-1}))},children:"Prev"}),(0,c.jsx)("button",{type:0===r?"button":"submit",onClick:function(){1===r?(alert("FORM SUBMITTED"),console.log(p)):o((function(e){return e+1}))},children:1===r?"Submit":"Next"})]})]})},f=function(){return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(p,{})})}}}]);
//# sourceMappingURL=833.1671e9eb.chunk.js.map