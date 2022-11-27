"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[782],{5685:function(e,r,n){n.d(r,{Z:function(){return o}});var t=n(4373),a="FilterInput_search__waR2z",s="FilterInput_label__YJ6od",c="FilterInput_input__SwtDH",u="FilterInput_searchIcon__XfCTQ",i="FilterInput_searchBtn__W1bj3",l=n(184),o=function(e){var r=e.onSubmit,n=e.onChange,o=e.cssClass;return(0,l.jsx)("form",{onSubmit:r,className:"".concat(a," ").concat(o),children:(0,l.jsxs)("label",{htmlFor:"search",className:s,children:[(0,l.jsx)("input",{type:"text",name:"search",id:"search",placeholder:"Search",className:c,onChange:n}),(0,l.jsx)("button",{className:i,type:"submit",children:(0,l.jsx)(t.y5k,{className:u})})]})})}},9198:function(e,r,n){var t=n(8174),a={showError:function(e){return t.Am.error(e)},showSuccess:function(e){return t.Am.success(e)},showWarning:function(e){return t.Am.warn(e)}};r.Z=a},6966:function(e,r,n){n.d(r,{Z:function(){return t.Z}});var t=n(9198)},9782:function(e,r,n){n.r(r),n.d(r,{default:function(){return C}});var t=n(3433),a=n(5861),s=n(9439),c=n(4687),u=n.n(c),i=n(2791),l=n(8977),o=n(4771),h=n(3168),p="News_newsWrap__qHh1+",d="News_title__eqYv-",f="News_box__E9dik",m="News_newsItem__6DvvE",_="News_articleName__LYAy-",w="News_text__Ps51B",x="News_additional__uOFiC",N="News_date__D3o7H",v="News_readMore__fNfmn",Z=n(2881),j=n(5685),b=n(6966),y=n(6589),g=n(184),k=function(){var e=(0,h.$)().t,r=(0,i.useState)(!1),n=(0,s.Z)(r,2),c=n[0],k=n[1],S=(0,i.useState)([]),C=(0,s.Z)(S,2),F=C[0],I=C[1],D=(0,i.useState)(1),E=(0,s.Z)(D,2),M=E[0],A=E[1],P=(0,i.useState)(!0),R=(0,s.Z)(P,2),H=R[0],L=R[1],T=(0,i.useState)(null),W=(0,s.Z)(T,2),Y=W[0],q=W[1];function B(){return(B=(0,a.Z)(u().mark((function e(r){var n,t,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),""!==(n=r.target.elements.search).value.trim()){e.next=5;break}return q(null),e.abrupt("return");case 5:return e.prev=5,k(!0),e.next=9,y.Z.searchNews(n.value);case 9:t=e.sent,a=t.data,q(a),k(!1),e.next=19;break;case 15:return e.prev=15,e.t0=e.catch(5),k(!1),e.abrupt("return",b.Z.showError("Sorry, no news found, try again"));case 19:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}(0,i.useEffect)((function(){function e(){return(e=(0,a.Z)(u().mark((function e(){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,k(!0),e.next=4,y.Z.getNews(M);case 4:r=e.sent,n=r.data,I((function(e){return[].concat((0,t.Z)(e),(0,t.Z)(n.data))})),n.data.length<9&&(L(!1),b.Z.showSuccess("Thats all News")),k(!1),e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),k(!1),e.abrupt("return",b.Z.showError("Oops, try again"));case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[M]);var O=function(e,r){return e&&e.length>r?"".concat(e.slice(0,r).split(" ").slice(0,-1).join(" "),"..."):e};return(0,g.jsxs)("div",{className:p,children:[(0,g.jsx)("h1",{className:d,children:e("news.title")}),(0,g.jsx)(j.Z,{onSubmit:function(e){return B.apply(this,arguments)},onChange:function(e){e.target.value.trim()||q(null)}}),c&&(0,g.jsx)(Z.Z,{}),Y?(0,g.jsx)("ul",{className:f,children:Y.map((function(e){var r=e._id,n=e.title,t=e.description,a=e.date,s=e.url;return(0,g.jsx)("li",{className:m,children:(0,g.jsxs)("article",{children:[(0,g.jsx)("h2",{className:_,children:O(n,50)}),(0,g.jsx)("p",{className:w,children:O(t,225)}),(0,g.jsxs)("div",{className:x,children:[(0,g.jsx)("span",{className:N,children:(0,l.Z)(new Date(a),"dd/MM/yyyy")}),(0,g.jsx)("a",{href:s,className:v,target:"_blank",rel:"noreferrer",children:"Read more"})]})]})},r)}))}):(0,g.jsx)(o.Z,{className:f,dataLength:F.length,next:function(){A(M+1)},hasMore:H,scrollThreshold:1,children:F.map((function(e){var r=e._id,n=e.title,t=e.description,a=e.date,s=e.url;return(0,g.jsx)("li",{className:m,children:(0,g.jsxs)("article",{children:[(0,g.jsx)("h2",{className:_,children:O(n,50)}),(0,g.jsx)("p",{className:w,children:O(t,225)}),(0,g.jsxs)("div",{className:x,children:[(0,g.jsx)("span",{className:N,children:(0,l.Z)(new Date(a),"dd/MM/yyyy")}),(0,g.jsx)("a",{href:s,className:v,target:"_blank",rel:"noreferrer",children:"Read more"})]})]})},r)}))})]})},S=n(3409),C=function(){return(0,g.jsx)("main",{children:(0,g.jsx)(S.Z,{children:(0,g.jsx)(k,{})})})}},6589:function(e,r,n){var t=n(5861),a=n(4687),s=n.n(a),c=n(1044);c.ZP.defaults.baseURL="https://fetch-friend.herokuapp.com/api";var u=function(){var e=(0,t.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.ZP.get("/friends");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,t.Z)(s().mark((function e(r){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.ZP.get("/news?page=".concat(r));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(s().mark((function e(r){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.ZP.get("/news/search?title=".concat(r));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),o={getAllFriends:u,getNews:i,searchNews:l};r.Z=o}}]);
//# sourceMappingURL=782.52b4b534.chunk.js.map