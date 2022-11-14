"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[945],{4945:function(e,s,n){n.r(s),n.d(s,{default:function(){return Z}});var r=n(1413),a=n(885),t=n(2791),i=n(9434),o=n(1087),l=n(5705),c=n(3853),d=n(9983),m="AuthForm_formWrap__i1s5e",u="AuthForm_title__WkPPr",h="AuthForm_form__kV4hH",x="AuthForm_formGroup__FWdnw",j="AuthForm_input__sMieH",p="AuthForm_icon__Z6Tyz",f="AuthForm_button__B5dfz",v="AuthForm_textHint__hVame",N="AuthForm_link__xk1HL",_="AuthForm_errorMsg__JvpxU",g=n(7103),w=n(184),P=function(e){var s=e.onNextStep,n=e.formData,r=(0,t.useState)(!1),i=(0,a.Z)(r,2),o=i[0],m=i[1],u=(0,t.useState)(!1),v=(0,a.Z)(u,2),N=v[0],P=v[1],y=g.Ry({email:g.Z_().email("Invalid email address").required("Required"),password:g.Z_().matches(/^\S*$/,"Whitespace is not allowed").min(7,"Password is too short").max(32,"Password is too long").required("Required"),confirmPassword:g.Z_().oneOf([g.iH("password"),null],"Passwords must match")});return(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(l.J9,{initialValues:n,validationSchema:y,onSubmit:function(e){s(e)},children:function(){return(0,w.jsxs)(l.l0,{className:h,children:[(0,w.jsxs)("div",{className:x,children:[(0,w.jsx)(l.gN,{className:j,name:"email",type:"text",placeholder:"Email"}),(0,w.jsx)(l.Bc,{name:"email",render:function(e){return(0,w.jsx)("div",{className:_,children:e})}})]}),(0,w.jsxs)("div",{className:x,children:[(0,w.jsx)(l.gN,{className:j,name:"password",type:o?"text":"password",placeholder:"Password"}),(0,w.jsxs)("span",{className:p,onClick:function(){return m(!o)},children:[o&&(0,w.jsx)(d.Pd.Provider,{value:{style:{verticalAlign:"middle"}},children:(0,w.jsx)(c.rDJ,{})}),!o&&(0,w.jsx)(d.Pd.Provider,{value:{style:{verticalAlign:"middle"}},children:(0,w.jsx)(c.rzC,{})})]}),(0,w.jsx)(l.Bc,{name:"password",render:function(e){return(0,w.jsx)("div",{className:_,children:e})}})]}),(0,w.jsxs)("div",{className:x,children:[(0,w.jsx)(l.gN,{className:j,name:"confirmPassword",type:N?"text":"password",placeholder:"Confirm Password"}),(0,w.jsxs)("span",{className:p,onClick:function(){return P(!N)},children:[N&&(0,w.jsx)(d.Pd.Provider,{value:{style:{verticalAlign:"middle"}},children:(0,w.jsx)(c.rDJ,{})}),!N&&(0,w.jsx)(d.Pd.Provider,{value:{style:{verticalAlign:"middle"}},children:(0,w.jsx)(c.rzC,{})})]}),(0,w.jsx)(l.Bc,{name:"confirmPassword",render:function(e){return(0,w.jsx)("div",{className:_,children:e})}})]}),(0,w.jsx)("button",{className:f,type:"submit",children:"Next"})]})}})})},y=function(e){var s=e.onNextStep,n=e.onPrevStep,r=e.formData,a=g.Ry({name:g.Z_().min(4,"Name is too short").required("Required"),location:g.Z_().min(4,"Location is too short").required("Required"),phone:g.Z_().required("required").matches(/(?=.*\+[0-9]{3}\s?[0-9]{2}\s?[0-9]{3}\s?[0-9]{4}$)/,"Phone number is not valid").min(10,"too short").max(14,"too long")});return(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(l.J9,{initialValues:r,validationSchema:a,onSubmit:function(e){s(e,!0)},children:function(e){var s=e.values;return(0,w.jsxs)(l.l0,{className:h,children:[(0,w.jsxs)("div",{className:x,children:[(0,w.jsx)(l.gN,{className:j,name:"name",type:"text",placeholder:"Name"}),(0,w.jsx)(l.Bc,{name:"name",render:function(e){return(0,w.jsx)("div",{className:_,children:e})}})]}),(0,w.jsxs)("div",{className:x,children:[(0,w.jsx)(l.gN,{className:j,name:"location",type:"text",placeholder:"City, region"}),(0,w.jsx)(l.Bc,{name:"location",render:function(e){return(0,w.jsx)("div",{className:_,children:e})}})]}),(0,w.jsxs)("div",{className:x,children:[(0,w.jsx)(l.gN,{className:j,name:"phone",type:"text",placeholder:"Mobile phone"}),(0,w.jsx)(l.Bc,{name:"phone",render:function(e){return(0,w.jsx)("div",{className:_,children:e})}})]}),(0,w.jsx)("button",{className:f,type:"submit",children:"Register"}),(0,w.jsx)("button",{onClick:function(){n(s)},className:f,type:"button",children:"Back"})]})}})})},A=n(4562),S=function(){var e=(0,i.I0)(),s=(0,t.useState)(0),n=(0,a.Z)(s,2),l=n[0],c=n[1],d=(0,t.useState)({email:"",password:"",confirmPassword:"",name:"",location:"",phone:""}),h=(0,a.Z)(d,2),x=h[0],j=h[1],p=function(s){e(A.r5.register(s))},f=function(e){var s=arguments.length>1&&void 0!==arguments[1]&&arguments[1];j((function(s){return(0,r.Z)((0,r.Z)({},s),e)})),s?p(e):c((function(e){return e+1}))},_=function(e){j((function(s){return(0,r.Z)((0,r.Z)({},s),e)})),c((function(e){return e-1}))};return(0,w.jsxs)("div",{className:m,children:[(0,w.jsx)("h1",{className:u,children:"Registration"}),0===l?(0,w.jsx)(P,{onNextStep:f,formData:x}):1===l?(0,w.jsx)(y,{onNextStep:f,onPrevStep:_,formData:x}):void 0,(0,w.jsxs)("p",{className:v,children:["Already have an account?\xa0",(0,w.jsx)(o.OL,{className:N,to:"/login",children:"Login"})]})]})},Z=function(){return(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(S,{})})}}}]);
//# sourceMappingURL=945.2ad17884.chunk.js.map