"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[782],{1665:function(e,n,t){t.d(n,{Z:function(){return a}});var r="ScrollToTopBtn_ScrollToTopBtn__YhYpQ",s=t(184);function a(){return(0,s.jsx)("svg",{className:r,viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM390.6 310.6c-12.5 12.5-32.75 12.5-45.25 0L256 221.3L166.6 310.6c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l112-112C239.6 147.1 247.8 144 256 144s16.38 3.125 22.62 9.375l112 112C403.1 277.9 403.1 298.1 390.6 310.6z"})})}},5685:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(4373),s="FilterInput_search__waR2z",a="FilterInput_label__YJ6od",c="FilterInput_input__SwtDH",u="FilterInput_searchIcon__XfCTQ",i="FilterInput_searchBtn__W1bj3",l=t(184),o=function(e){var n=e.onSubmit,t=e.onChange,o=e.cssClass;return(0,l.jsx)("form",{onSubmit:n,className:"".concat(s," ").concat(o),children:(0,l.jsxs)("label",{htmlFor:"search",className:a,children:[(0,l.jsx)("input",{type:"text",name:"search",id:"search",placeholder:"Search",className:c,onChange:t}),(0,l.jsx)("button",{className:i,type:"submit",children:(0,l.jsx)(r.y5k,{className:u})})]})})}},9198:function(e,n,t){var r=t(8174),s={showError:function(e){return r.Am.error(e)},showSuccess:function(e){return r.Am.success(e)},showWarning:function(e){return r.Am.warn(e)}};n.Z=s},6966:function(e,n,t){t.d(n,{Z:function(){return r.Z}});var r=t(9198)},9782:function(e,n,t){t.r(n),t.d(n,{default:function(){return I}});var r=t(3433),s=t(5861),a=t(9439),c=t(4687),u=t.n(c),i=t(2791),l=t(8977),o=t(4771),h=t(3168),p="News_newsWrap__qHh1+",d="News_title__eqYv-",f="News_box__E9dik",m="News_newsItem__6DvvE",_="News_articleName__LYAy-",x="News_text__Ps51B",w="News_additional__uOFiC",v="News_date__D3o7H",N="News_readMore__fNfmn",j=t(2881),Z=t(5685),b=t(6966),g=t(6589),y=t(7821),k=t.n(y),S=t(1665),C=t(184),F=function(){var e=(0,h.$)().t,n=(0,i.useState)(!1),t=(0,a.Z)(n,2),c=t[0],y=t[1],F=(0,i.useState)([]),M=(0,a.Z)(F,2),I=M[0],T=M[1],D=(0,i.useState)(1),E=(0,a.Z)(D,2),A=E[0],B=E[1],L=(0,i.useState)(!0),P=(0,a.Z)(L,2),Y=P[0],R=P[1],z=(0,i.useState)(null),H=(0,a.Z)(z,2),W=H[0],q=H[1];function O(){return(O=(0,s.Z)(u().mark((function e(n){var t,r,s;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),""!==(t=n.target.elements.search).value.trim()){e.next=5;break}return q(null),e.abrupt("return");case 5:return e.prev=5,y(!0),e.next=9,g.Z.searchNews(t.value);case 9:r=e.sent,s=r.data,q(s),y(!1),e.next=19;break;case 15:return e.prev=15,e.t0=e.catch(5),y(!1),e.abrupt("return",b.Z.showError("Sorry, no news found, try again"));case 19:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}(0,i.useEffect)((function(){function e(){return(e=(0,s.Z)(u().mark((function e(){var n,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,y(!0),e.next=4,g.Z.getNews(A);case 4:n=e.sent,t=n.data,T((function(e){return[].concat((0,r.Z)(e),(0,r.Z)(t.data))})),t.data.length<9&&(R(!1),b.Z.showSuccess("Thats all News")),y(!1),e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),y(!1),e.abrupt("return",b.Z.showError("Oops, try again"));case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[A]);var Q=function(e,n){return e&&e.length>n?"".concat(e.slice(0,n).split(" ").slice(0,-1).join(" "),"..."):e};return(0,C.jsxs)("div",{className:p,children:[(0,C.jsx)("h1",{className:d,children:e("news.title")}),(0,C.jsx)(Z.Z,{onSubmit:function(e){return O.apply(this,arguments)},onChange:function(e){e.target.value.trim()||q(null)}}),c&&(0,C.jsx)(j.Z,{}),W?(0,C.jsx)("ul",{className:f,children:W.map((function(e){var n=e._id,t=e.title,r=e.description,s=e.date,a=e.url;return(0,C.jsx)("li",{className:m,children:(0,C.jsxs)("article",{children:[(0,C.jsx)("h2",{className:_,children:Q(t,50)}),(0,C.jsx)("p",{className:x,children:Q(r,225)}),(0,C.jsxs)("div",{className:w,children:[(0,C.jsx)("span",{className:v,children:(0,l.Z)(new Date(s),"dd/MM/yyyy")}),(0,C.jsx)("a",{href:a,className:N,target:"_blank",rel:"noreferrer",children:"Read more"})]})]})},n)}))}):(0,C.jsx)(o.Z,{className:f,dataLength:I.length,next:function(){B(A+1)},hasMore:Y,scrollThreshold:1,children:I.map((function(e){var n=e._id,t=e.title,r=e.description,s=e.date,a=e.url;return(0,C.jsx)("li",{className:m,children:(0,C.jsxs)("article",{children:[(0,C.jsx)("h2",{className:_,children:Q(t,50)}),(0,C.jsx)("p",{className:x,children:Q(r,225)}),(0,C.jsxs)("div",{className:w,children:[(0,C.jsx)("span",{className:v,children:(0,l.Z)(new Date(s),"dd/MM/yyyy")}),(0,C.jsx)("a",{href:a,className:N,target:"_blank",rel:"noreferrer",children:"Read more"})]})]})},n)}))}),(0,C.jsx)(k(),{smooth:!0,component:(0,C.jsx)(S.Z,{}),style:{boxShadow:"none"}})]})},M=t(3409),I=function(){return(0,C.jsx)("main",{children:(0,C.jsx)(M.Z,{children:(0,C.jsx)(F,{})})})}},6589:function(e,n,t){var r=t(5861),s=t(4687),a=t.n(s),c=t(1044);c.ZP.defaults.baseURL="https://fetch-friend.herokuapp.com/api";var u=function(){var e=(0,r.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.ZP.get("/friends");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.ZP.get("/news?page=".concat(n));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.ZP.get("/news/search?title=".concat(n));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),o={getAllFriends:u,getNews:i,searchNews:l};n.Z=o}}]);
//# sourceMappingURL=782.14f8ac9f.chunk.js.map