(this["webpackJsonpform-app"]=this["webpackJsonpform-app"]||[]).push([[0],{193:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),s=n(78),c=n.n(s),a=(n(88),n(2)),o=n(3),b=n(9),m=n(10),d=(n(89),n(5)),l=n(14),j=n(16),u=n(1),x=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(d.b,{id:"pesel",name:"pesel",type:"number",placeholder:"PESEL"}),Object(u.jsx)(d.a,{name:"pesel",className:"error-box",component:"div"}),Object(u.jsx)(d.b,{id:"nip",name:"nip",type:"number",placeholder:"NIP"}),Object(u.jsx)(d.a,{name:"nip",className:"error-box",component:"div"}),Object(u.jsx)(j.b,{to:"/first",children:"Previous"}),Object(u.jsx)(j.b,{to:"/third",children:"Next"})]})},p=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(d.b,{id:"name",name:"name",type:"text",placeholder:"Name"}),Object(u.jsx)(d.a,{name:"name",className:"error-box",component:"div"}),Object(u.jsx)(d.b,{id:"surname",name:"surname",type:"text",placeholder:"Surname"}),Object(u.jsx)(d.a,{name:"surname",className:"error-box",component:"div"}),Object(u.jsx)(j.b,{to:"/second",children:"Next"})]})},h=function(e){return console.log(e.formik),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(d.b,{id:"street",name:"street",type:"text",placeholder:"street"}),Object(u.jsx)(d.a,{name:"street",className:"error-box",component:"div"}),Object(u.jsx)(d.b,{id:"city",name:"city",type:"city",placeholder:"city"}),Object(u.jsx)(d.a,{name:"city",className:"error-box",component:"div"}),Object(u.jsx)(d.b,{id:"zipCode",name:"zipCode",type:"text",placeholder:"zip code"}),Object(u.jsx)(d.a,{name:"zipCode",className:"error-box",component:"div"}),Object(u.jsx)("button",{disabled:!(e.formik.isValid&&e.formik.dirty),type:"submit",children:"Submit"}),Object(u.jsx)(j.b,{to:"/second",children:"Previous"})]})},O=n(6),f=(n.p,function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"handleSubmit",value:function(e){alert(JSON.stringify(e,null,2))}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Address and Personal Data Form"}),Object(u.jsx)(d.d,{initialValues:{name:"",surname:"",pesel:"",nip:"",street:"",city:"",zipCode:""},onSubmit:this.handleSubmit,validationSchema:l.a().shape({name:l.b().min(2,"One letter name? That`s unusual man!").max(10,"You have really long name!").required("Required"),surname:l.b().min(2,"Too Short!").max(50,"Very long surname!").required("Required"),pesel:l.b().required().matches(/^[0-9]+$/,"Must be only digits").min(11,"Must be exactly 11 digits").max(11,"Must be exactly 11 digits").test("test-name","Bad check sum of PESEL",(function(e){if(!e)return!1;for(var t=[1,3,7,9,1,3,7,9,1,3],n=0,r=0;r<10;r++)n+=e[r]*t[r];return console.log(n),(10-n%10)%10==e[10]})),nip:l.b().required().matches(/^[0-9]+$/,"Must be only digits").min(10,"Must be exactly 10 digits").max(10,"Must be exactly 10 digits"),street:l.b().min(2,"Not to short street name?").max(25,"You live on looooong street").required("Required"),city:l.b().required(),zipCode:l.b().min(6,"Must be like this: XX-XXX").max(6,"Must be like this: XX-XXX").required("Required")}),children:function(e){return Object(u.jsx)(d.c,{className:"form",children:Object(u.jsxs)(O.d,{children:[Object(u.jsx)(O.a,{from:"/",exact:!0,to:"/first"}),Object(u.jsx)(O.b,{path:"/first",children:Object(u.jsx)(p,{})}),Object(u.jsx)(O.b,{path:"/second",component:x}),Object(u.jsx)(O.b,{path:"/third",children:Object(u.jsx)(h,{formik:e})})]})})}})]})}}]),n}(i.a.Component)),y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,194)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),i(e),s(e),c(e)}))};c.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(j.a,{children:Object(u.jsx)(f,{})})}),document.getElementById("root")),y()},88:function(e,t,n){},89:function(e,t,n){}},[[193,1,2]]]);
//# sourceMappingURL=main.70813cac.chunk.js.map