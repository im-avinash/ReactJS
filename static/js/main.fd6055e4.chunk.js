(this.webpackJsonpidm=this.webpackJsonpidm||[]).push([[0],{35:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),a=n.n(s),r=n(27),l=n.n(r),i=(n(35),n(36),n(11)),o=n(15),j=n(29);var m=function(e){var t=Object(s.useState)({}),n=Object(j.a)(t,2),c=n[0],a=n[1];return{handleSubmit:function(e){e&&e.preventDefault()},handleInput:function(e){e.persist(),a((function(t){return Object(o.a)(Object(o.a)({},t),{},Object(i.a)({},e.target.name,e.target.value))}))},inputs:c}},d=n(12),b=n.n(d);var h=function(e){var t=m((function(){b.a.fetch("http://localhost:8080/api/users",n).then((function(t){console.log(t),e.history.push("/welcome")})).catch((function(e){alert(e)}))})),n=t.inputs,s=t.handleInput,r=t.handleSubmit;return Object(c.jsx)(a.a.Fragment,{children:Object(c.jsx)("div",{className:"row mt-4",children:Object(c.jsx)("div",{className:"row mx-auto col-sm-6 center-block border border-secondary rounded",children:Object(c.jsxs)("div",{className:"col-sm-12",children:[Object(c.jsx)("h1",{className:"text-center text-info",children:"LOGIN"}),Object(c.jsx)("div",{children:Object(c.jsxs)("form",{onSubmit:r,action:"row col-sm-11 mx-auto",children:[Object(c.jsxs)("div",{className:"form-group mt-2",children:[Object(c.jsx)("label",{htmlFor:"uname",className:"text-info",children:"Username"}),Object(c.jsx)("input",{type:"text",id:"uname",className:"form-control",name:"username",value:n.username,onChange:s})]}),Object(c.jsxs)("div",{className:"form-group mt-2",children:[Object(c.jsx)("label",{htmlFor:"pword",className:"text-info",children:"Password"}),Object(c.jsx)("input",{type:"text",id:"pword",className:"form-control",name:"password",value:n.password,onChange:s})]}),Object(c.jsx)("div",{className:"form-group mt-2",children:Object(c.jsx)("button",{type:"submit",className:"col-sm-2 btn btn-primary",children:"Submit"})})]})})]})})})})},u=n(8);var x=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("nav",{className:"navbar bg-dark",children:Object(c.jsxs)("div",{className:"container-fluid",children:[Object(c.jsx)(u.b,{className:"brand-name",to:"/",children:Object(c.jsx)("h1",{className:"text-info text-left",children:"IDM"})}),Object(c.jsx)("div",{children:Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{className:"btn btn-default",children:Object(c.jsx)(u.b,{to:"/login",children:"Login"})}),Object(c.jsx)("li",{className:"btn btn-primary",children:Object(c.jsx)(u.b,{to:"/register",children:"Register"})})]})}),Object(c.jsx)("div",{children:Object(c.jsx)(u.b,{to:"/",className:"btn btn-danger",children:"Log out"})})]})})})};var O=function(e){var t=m((function(){b.a.post("http://localhost:8080/api/users",n).then((function(t){console.log(t),e.history.push("/welcome")})).catch((function(e){alert(e)}))})),n=t.inputs,s=t.handleInput,r=t.handleSubmit;return Object(c.jsx)(a.a.Fragment,{children:Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"col-sm-6 mx-auto border border-secondary rounded mt-4",children:Object(c.jsx)("div",{className:"col-sm-12",children:Object(c.jsxs)("form",{onSubmit:r,action:"",children:[Object(c.jsx)("h1",{className:"text-center text-info",children:"Register"}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"name",className:"text-info",children:"Full Name"}),Object(c.jsx)("input",{type:"text",id:"name",className:"form-control",name:"fullname",value:n.fullname,onChange:s})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"email",className:"text-info",children:"E-mail"}),Object(c.jsx)("input",{type:"email",id:"name",className:"form-control",name:"email",value:n.email,onChange:s})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"uname",className:"text-info",children:"Username"}),Object(c.jsx)("input",{type:"text",id:"uname",className:"form-control",name:"username",value:n.username,onChange:s})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"pword",className:"text-info",children:"Password"}),Object(c.jsx)("input",{type:"text",id:"pword",className:"form-control",name:"password",value:n.password,onChange:s})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"cpword",className:"text-info",children:"Confirm Password"}),Object(c.jsx)("input",{type:"text",id:"cpword",className:"form-control",name:"confirmpassword",value:n.confirmpassword,onChange:s})]}),Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})})]})})})})})},p=n(2);var f=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("h1",{className:"text-center text-info ",children:"Welcome"})})};var N=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("h1",{className:"text-center text-info",children:"Home"})})};var g=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(x,{}),Object(c.jsxs)(p.c,{children:[Object(c.jsx)(p.a,{path:"/register",children:Object(c.jsx)(O,{})}),Object(c.jsx)(p.a,{path:"/login",children:Object(c.jsx)(h,{})}),Object(c.jsx)(p.a,{path:"/welcome",children:Object(c.jsx)(f,{})}),Object(c.jsx)(p.a,{path:"/",children:Object(c.jsx)(N,{})})]})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,61)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))};l.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(u.a,{children:Object(c.jsx)(g,{})})}),document.getElementById("root")),v()}},[[60,1,2]]]);
//# sourceMappingURL=main.fd6055e4.chunk.js.map