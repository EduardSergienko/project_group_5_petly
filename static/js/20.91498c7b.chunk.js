"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[20],{1665:function(e,r,n){n.d(r,{Z:function(){return a}});var t="ScrollToTopBtn_ScrollToTopBtn__YhYpQ",s=n(184);function a(){return(0,s.jsx)("svg",{className:t,viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM390.6 310.6c-12.5 12.5-32.75 12.5-45.25 0L256 221.3L166.6 310.6c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l112-112C239.6 147.1 247.8 144 256 144s16.38 3.125 22.62 9.375l112 112C403.1 277.9 403.1 298.1 390.6 310.6z"})})}},6020:function(e,r,n){n.r(r),n.d(r,{default:function(){return E}});var t=n(5861),s=n(9439),a=n(4687),c=n.n(a),o=n(3168),i="OurFriendsCards_section__jx+ZX",l="OurFriendsCards_title__85YIJ",d="OurFriendsCards_cardsWrap__Ohtgs",u="OurFriendsCards_innerCard__QZucP",p="OurFriendsCards_nameFriend__7wcl1",h="OurFriendsCards_cardBox__LqRLk",f="OurFriendsCards_leftCard__alWcs",m="OurFriendsCards_picture__M52o4",x="OurFriendsCards_rightCard__Jg8gv",v="OurFriendsCards_cardItem__VIaav",_="OurFriendsCards_subMenu__QRxuG",j="OurFriendsCards_cardLink__aZ14V",w="OurFriendsCards_cardAddress__2U7mA",g="OurFriendsCards_subMenuItem__E-IKh",b=n(3409),C=n(184),O=function(e){var r=e.data,n=(0,o.$)().t,t=function(e){var r=e.find((function(e){return!0===e.isOpen})),n=r.from,t=r.to;return"".concat(n," : ").concat(t)};return(0,C.jsx)("section",{className:i,children:(0,C.jsxs)(b.Z,{children:[(0,C.jsx)("h1",{className:l,children:n("ourFriends.title")}),(0,C.jsx)("div",{className:d,children:r.map((function(e){var r=e._id,n=e.url,s=e.imageUrl,a=e.title,c=e.address,o=e.addressUrl,i=e.email,l=e.phone,d=e.workDays;return(0,C.jsxs)("div",{className:u,children:[(0,C.jsx)("a",{href:n,target:"blank",children:(0,C.jsx)("h3",{className:p,children:a})}),(0,C.jsxs)("div",{className:h,children:[(0,C.jsx)("div",{className:f,children:(0,C.jsx)("img",{className:m,src:s,alt:"".concat(a," img")})}),(0,C.jsxs)("ul",{className:x,children:[(0,C.jsxs)("li",{className:v,children:["Work Hours: ",(0,C.jsx)("br",{}),d?(0,C.jsx)("p",{children:t(d)}):(0,C.jsx)("span",{children:"-------------"}),d&&(0,C.jsx)("ul",{className:_,children:d.map((function(e){var r=e.day,n=e.from,t=e.to,s=e.id;return(0,C.jsxs)("li",{className:g,children:[(0,C.jsx)("p",{children:r}),(0,C.jsxs)("p",{children:[n,"-",t]})]},s.toString())}))})]}),(0,C.jsxs)("li",{className:v,children:["Address: ",(0,C.jsx)("br",{}),c?(0,C.jsx)("a",{href:o,className:w,children:(0,C.jsx)("span",{children:c})}):(0,C.jsx)("span",{children:"----------"})]}),(0,C.jsxs)("li",{className:v,children:["Email: ",(0,C.jsx)("br",{}),i?(0,C.jsx)("a",{className:j,href:"mailto:".concat(i),children:i}):(0,C.jsx)("span",{children:"----------"})]}),(0,C.jsxs)("li",{className:v,children:["Phone:",(0,C.jsx)("br",{}),l?(0,C.jsx)("a",{className:j,href:"tel:".concat(l),children:l}):(0,C.jsx)("span",{children:"----------"})]})]})]})]},r)}))})]})})},y=n(6589),N=n(2791),k=n(7821),F=n.n(k),Z=n(1665),E=function(){var e=(0,N.useState)([]),r=(0,s.Z)(e,2),n=r[0],a=r[1];return(0,N.useEffect)((function(){function e(){return(e=(0,t.Z)(c().mark((function e(){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.Z.getAllFriends();case 3:r=e.sent,n=r.data,a(n.data),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,C.jsxs)("main",{children:[(0,C.jsx)(O,{data:n}),(0,C.jsx)(F(),{smooth:!0,component:(0,C.jsx)(Z.Z,{}),style:{boxShadow:"none",backgroundColor:"transparent"}})]})}},6589:function(e,r,n){var t=n(5861),s=n(4687),a=n.n(s),c=n(1044);c.ZP.defaults.baseURL="https://fetch-friends.onrender.com/api";var o=function(){var e=(0,t.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.ZP.get("/friends");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,t.Z)(a().mark((function e(r){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.ZP.get("/news?page=".concat(r));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(a().mark((function e(r){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.ZP.get("/news/search?title=".concat(r));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),d={getAllFriends:o,getNews:i,searchNews:l};r.Z=d},7821:function(e,r,n){var t,s=n(2791),a=(t=s)&&"object"===typeof t&&"default"in t?t.default:t,c=function(){return c=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++)for(var s in r=arguments[n])Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s]);return e},c.apply(this,arguments)};!function(e,r){void 0===r&&(r={});var n=r.insertAt;if(e&&"undefined"!==typeof document){var t=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css","top"===n&&t.firstChild?t.insertBefore(s,t.firstChild):t.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e))}}(".scroll-to-top {\n  background-color: white;\n  right: 40px;\n  bottom: 40px;\n  position: fixed;\n  z-index: 2;\n  cursor: pointer;\n  border-radius: 7px;\n  width: 40px;\n  height: 40px;\n  box-shadow: 0 9px 25px 0 rgba(132, 128, 177, 0.28);\n  border: none;\n}\n\n.scroll-to-top:active {\n  transform: matrix(0.95, 0, 0, 0.95, 0, 0);\n}\n");e.exports=function(e){var r=e.top,n=void 0===r?20:r,t=e.className,o=void 0===t?"":t,i=e.color,l=void 0===i?"black":i,d=e.smooth,u=void 0!==d&&d,p=e.component,h=void 0===p?"":p,f=e.viewBox,m=void 0===f?"0 0 256 256":f,x=e.svgPath,v=void 0===x?"M222.138,91.475l-89.6-89.6c-2.5-2.5-6.551-2.5-9.051,0l-89.6,89.6c-2.5,2.5-2.5,6.551,0,9.051s6.744,2.5,9.244,0L122,21.85  V249.6c0,3.535,2.466,6.4,6,6.4s6-2.865,6-6.4V21.85l78.881,78.676c1.25,1.25,2.992,1.875,4.629,1.875s3.326-0.625,4.576-1.875  C224.586,98.025,224.638,93.975,222.138,91.475z":x,_=e.width,j=void 0===_?"28":_,w=e.height,g=void 0===w?"28":w,b=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(t=Object.getOwnPropertySymbols(e);s<t.length;s++)r.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(n[t[s]]=e[t[s]])}return n}(e,["top","className","color","smooth","component","viewBox","svgPath","width","height"]),C=s.useState(!1),O=C[0],y=C[1];return s.useEffect((function(){var e=function(){y(document.documentElement.scrollTop>=n)};return e(),document.addEventListener("scroll",e),function(){return document.removeEventListener("scroll",e)}}),[n]),a.createElement(a.Fragment,null,O&&a.createElement("button",c({className:"scroll-to-top "+o,onClick:function(){return function(e){void 0===e&&(e=!1),e?window.scrollTo({top:0,behavior:"smooth"}):document.documentElement.scrollTop=0}(u)},"aria-label":"Scroll to top"},b),h||a.createElement("svg",{width:j,height:g,fill:l,viewBox:m},a.createElement("path",{d:v}))))}}}]);
//# sourceMappingURL=20.91498c7b.chunk.js.map