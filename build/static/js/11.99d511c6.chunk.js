/*! For license information please see 11.99d511c6.chunk.js.LICENSE.txt */
(this["webpackJsonpmaterial-kit-react"]=this["webpackJsonpmaterial-kit-react"]||[]).push([[11],{32:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return S}));var o=t(39),r=t(41),n=t(0),i=t.n(n),p=t(383),l=t(57),c=t(62),d=t(61),x=t(40),s=t(56),m=t(49),b=t(50),u=t(359),g=t(360),f=t(52),h=t(399),w=g.b().shape({first_name:g.c("Enter your first name").min(2,"Too Short!").max(50,"Too Long!").required("Required"),email:g.c("Enter your email").email("Enter a valid email").required("Email is required"),phone:g.a("Enter a valid number").required("Enter your phone number").typeError("You must specify a number").min(3,"Too Short!")}),v=Object(p.a)((function(e){var a,t,n,i,p,l,c,d;return{section:{padding:"70px 0",textAlign:"center"},title:Object(r.a)(Object(r.a)({},x.l),{},(a={marginBottom:"3rem",marginTop:"16px",minHeight:"32px",textDecoration:"none",position:"relative",color:"#4B0082"},Object(o.a)(a,e.breakpoints.down("sm"),{fontSize:"2rem"}),Object(o.a)(a,e.breakpoints.up("md"),{fontSize:"3rem"}),Object(o.a)(a,e.breakpoints.up("lg"),{fontSize:"3.5rem"}),a)),formTitle:Object(r.a)(Object(r.a)({},x.l),{},(t={marginTop:"8px",minHeight:"32px",textDecoration:"none",position:"relative",color:"#FFBC42"},Object(o.a)(t,e.breakpoints.down("sm"),{fontSize:"2rem"}),Object(o.a)(t,e.breakpoints.up("md"),{fontSize:"2.3rem"}),Object(o.a)(t,e.breakpoints.up("lg"),{fontSize:"2.5rem"}),t)),subtitle:(n={fontSize:"1.313rem",maxWidth:"500px",margin:"10px 0",color:"#000000"},Object(o.a)(n,e.breakpoints.down("sm"),{fontSize:"1rem"}),Object(o.a)(n,e.breakpoints.up("md"),{fontSize:"1.2rem"}),Object(o.a)(n,e.breakpoints.up("lg"),{fontSize:"1.5rem"}),n),description:{color:"#999"},yellowChip:{color:"#FFBC42",backgroundColor:"#FCA80F21",fontWeight:900},productionImage:{width:"100%",height:"auto"},purpleButton:{background:"#4B0082",borderRadius:"50px",padding:"12px 30px"},yellowSubmitButton:(i={background:"#FFBC42",borderRadius:"50px",padding:"12px 30px",marginTop:"32px"},Object(o.a)(i,e.breakpoints.down("sm"),{fontSize:"1rem"}),Object(o.a)(i,e.breakpoints.up("md"),{fontSize:"1.2rem"}),Object(o.a)(i,e.breakpoints.up("lg"),{fontSize:"1.3rem"}),i),whiteSuccessButton:(p={color:"#FFBC42"},Object(o.a)(p,e.breakpoints.down("sm"),{fontSize:"1rem"}),Object(o.a)(p,e.breakpoints.up("md"),{fontSize:"1.2rem"}),Object(o.a)(p,e.breakpoints.up("lg"),{fontSize:"1.3rem"}),p),services:{marginTop:"100px"},serviceRaised:{margin:"0px 16px",borderRadius:"24px",boxShadow:"0 -3px 24px 2px rgb(0 0 0 / 5%), 0 6px 30px 5px rgb(0 0 0 / 0%), 0 8px 10px -5px rgb(0 0 0 / 0%)"},servicesGrid:{gridGap:"40px 20px",justifyContent:"center"},servicesIcon:{width:"60px",height:"60px"},whycustomer:{marginTop:"100px"},valueContainer:{marginTop:20,marginBottom:20,color:"#4B0082"},valueIcon:{marginRight:16},valueItemContainer:{padding:"4px 0px"},contact:{marginTop:"100px"},contactAddressContainer:{display:"flex",alignItems:"center"},contactAddress:(l={textAlign:"start",fontSize:"1.313rem",maxWidth:"500px",margin:"10px 0",color:"#000000"},Object(o.a)(l,e.breakpoints.down("sm"),{fontSize:"1rem"}),Object(o.a)(l,e.breakpoints.up("md"),{fontSize:"1.2rem"}),Object(o.a)(l,e.breakpoints.up("lg"),{fontSize:"1.5rem"}),l),contactPhone:(c={textAlign:"end",fontSize:"1.313rem",maxWidth:"500px",margin:"10px 0",color:"#000000"},Object(o.a)(c,e.breakpoints.down("sm"),{fontSize:"1rem"}),Object(o.a)(c,e.breakpoints.up("md"),{fontSize:"1.2rem"}),Object(o.a)(c,e.breakpoints.up("lg"),{fontSize:"1.5rem"}),c),imgPortfolio:{width:"100%",height:"auto"},dFlexCenter:{display:"flex",justifyContent:"center",alignItems:"center"},formControl:{minWidth:120,textAlign:"start",marginTop:e.spacing(2),"& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{borderColor:"white"},"&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{borderColor:"white"},"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{borderColor:"white"},"& .MuiOutlinedInput-input":{color:"white"},"&:hover .MuiOutlinedInput-input":{color:"white"},"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input":{color:"white"},"& .MuiInputLabel-outlined":{color:"white"},"&:hover .MuiInputLabel-outlined":{color:"white"},"& .MuiInputLabel-outlined.Mui-focused":{color:"white"}},selectEmpty:{marginTop:e.spacing(2)},textFieldSpacing:{textAlign:"start",marginTop:e.spacing(2),"& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{borderColor:"white"},"&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{borderColor:"white"},"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{borderColor:"white"},"& .MuiOutlinedInput-input":{color:"white"},"&:hover .MuiOutlinedInput-input":{color:"white"},"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input":{color:"white"},"& .MuiInputLabel-outlined":{color:"white"},"&:hover .MuiInputLabel-outlined":{color:"white"},"& .MuiInputLabel-outlined.Mui-focused":{color:"white"}},textFieldWhite:{color:"white"},formContainer:(d={margin:e.spacing(2),backgroundColor:"#40348E",borderRadius:"5%",marginTop:e.spacing(10)},Object(o.a)(d,e.breakpoints.down("sm"),{padding:"40px"}),Object(o.a)(d,e.breakpoints.up("md"),{padding:"60px"}),Object(o.a)(d,e.breakpoints.up("lg"),{padding:"80px"}),d)}}));function k(){var e=Object(n.useState)(!1),a=Object(s.a)(e,2),o=a[0],r=a[1],p=Object(u.a)({initialValues:{},validationSchema:w,onSubmit:function(e){e.oid="00D5g000004Q7r1",e.submit="Submit",e["00N5g000006oAit"]="Australian Digital",e.lead_source="Web",fetch("https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8",{method:"POST",mode:"no-cors",body:new URLSearchParams(e)}).then((function(e){console.log(e),r(!0)}))}}),l=v();return i.a.createElement("div",{className:l.section},i.a.createElement("div",{className:l.services},i.a.createElement(m.a,{justify:"center"},i.a.createElement(b.a,{className:l.dFlexCenter,xs:12,sm:6,md:6,lg:6},i.a.createElement("h2",{className:l.title},"CONTACT US")),i.a.createElement(b.a,{xs:12,sm:6,md:6,lg:6},i.a.createElement("img",{alt:"Australian Digital",className:l.productionImage,src:t(358)}))),i.a.createElement("form",{onSubmit:p.handleSubmit},i.a.createElement(m.a,{className:l.formContainer,justify:"center"},i.a.createElement(b.a,{xs:12,sm:12,md:12,lg:12},i.a.createElement("h4",{className:l.formTitle},"Please get in touch",i.a.createElement("br",null)," and let us know how we can help")),i.a.createElement(b.a,{xs:12,sm:12,md:12,lg:12},i.a.createElement(h.a,{className:l.textFieldSpacing,fullWidth:!0,variant:"outlined",id:"first_name",name:"first_name",label:"First Name",onChange:p.handleChange,error:p.touched.first_name&&Boolean(p.errors.first_name),helperText:p.touched.first_name&&p.errors.first_name,autoComplete:"off"})),i.a.createElement(b.a,{xs:12,sm:12,md:12,lg:12},i.a.createElement(h.a,{className:l.textFieldSpacing,fullWidth:!0,variant:"outlined",id:"last_name",name:"last_name",label:"Last Name",onChange:p.handleChange,error:p.touched.last_name&&Boolean(p.errors.last_name),helperText:p.touched.last_name&&p.errors.last_name,autoComplete:"off"})),i.a.createElement(b.a,{xs:12,sm:12,md:12,lg:12},i.a.createElement(h.a,{className:l.textFieldSpacing,fullWidth:!0,variant:"outlined",id:"title",name:"title",label:"Title",onChange:p.handleChange,autoComplete:"off"})),i.a.createElement(b.a,{xs:12,sm:12,md:12,lg:12},i.a.createElement(h.a,{className:l.textFieldSpacing,fullWidth:!0,variant:"outlined",id:"email",name:"email",label:"Email",onChange:p.handleChange,error:p.touched.email&&Boolean(p.errors.email),helperText:p.touched.email&&p.errors.email,autoComplete:"off"})),i.a.createElement(b.a,{xs:12,sm:12,md:12,lg:12},i.a.createElement(h.a,{className:l.textFieldSpacing,fullWidth:!0,variant:"outlined",id:"phone",name:"phone",label:"Phone",onChange:p.handleChange,error:p.touched.phone&&Boolean(p.errors.phone),helperText:p.touched.phone&&p.errors.phone,autoComplete:"off"})),i.a.createElement(b.a,{xs:12,sm:12,md:12,lg:12},i.a.createElement(h.a,{className:l.textFieldSpacing,fullWidth:!0,variant:"outlined",id:"company",name:"company",label:"Company",onChange:p.handleChange,autoComplete:"off"})),i.a.createElement(b.a,{xs:12,sm:12,md:12,lg:12},i.a.createElement(h.a,{className:l.textFieldSpacing,fullWidth:!0,variant:"outlined",id:"description",name:"description",label:"How can we help?",onChange:p.handleChange,autoComplete:"off"})),i.a.createElement(b.a,{xs:12,sm:12,md:12,lg:12},i.a.createElement(f.a,{disabled:o,className:l.yellowSubmitButton,variant:"contained",type:"submit"},"Submit")),o?i.a.createElement(b.a,{style:{textAlign:"center"},xs:12,sm:12,md:12,lg:12,className:l.whiteSuccessButton},i.a.createElement("h4",null,"Thank you for your enquiry. We look forward to working with you.")):null))),i.a.createElement("div",{className:l.contact},i.a.createElement("h2",{className:l.title},"OUR CONTACT DETAILS"),i.a.createElement(m.a,{justify:"center"},i.a.createElement(b.a,{className:l.contactAddressContainer,xs:12,sm:6,md:6,lg:6},i.a.createElement("h4",{className:l.contactAddress},"PO Box 889, Neutral Bay,",i.a.createElement("br",null)," NSW, 2089,",i.a.createElement("br",null)," Australia")),i.a.createElement(b.a,{xs:12,sm:6,md:6,lg:6},i.a.createElement("h4",{className:l.contactPhone},"Monday to Friday 8AM to 6PM",i.a.createElement("br",null),"Saturday 9AM to 1PM ",i.a.createElement("br",null)," (Certainly for phone) +61 404 852 274"),i.a.createElement("h4",{className:l.contactPhone},"enquiry@australian-digital.com")))))}var F=[],O=Object(p.a)((function(e){var a,t;return{white_main:{backgroundColor:"#ffffff"},container:Object(r.a)({zIndex:"12",color:"#FFFFFF"},x.b),title:Object(r.a)(Object(r.a)({},x.l),{},(a={display:"inline-block",position:"relative",marginTop:"30px",minHeight:"32px",color:"#4B0082",textDecoration:"none"},Object(o.a)(a,e.breakpoints.down("sm"),{fontSize:"1rem"}),Object(o.a)(a,e.breakpoints.up("md"),{fontSize:"2rem"}),Object(o.a)(a,e.breakpoints.up("lg"),{fontSize:"3rem"}),a)),subtitle:(t={fontSize:"1.313rem",maxWidth:"500px",margin:"10px 0",color:"#000000"},Object(o.a)(t,e.breakpoints.down("sm"),{fontSize:"0.8rem"}),Object(o.a)(t,e.breakpoints.up("md"),{fontSize:"1rem"}),Object(o.a)(t,e.breakpoints.up("lg"),{fontSize:"1.313rem"}),t),main:{background:"#FFFFFF",position:"relative",zIndex:"3"},purpleButton:{background:"#4B0082",borderRadius:"50px",padding:"12px 30px"},yellowButton:{background:"#FFBC42",borderRadius:"50px",padding:"12px 30px"},yellowChip:{color:"#FFBC42",backgroundColor:"#FCA80F21",fontWeight:900},parallax_background:{backgroundColor:"#ffffff"}}}));function S(e){var a=O(),t=Object.assign({},e);return i.a.createElement("div",{className:a.white_main},i.a.createElement(l.a,Object.assign({color:"transparent",routes:F,brand:"Material Kit React",rightLinks:i.a.createElement(d.a,null),fixed:!0,changeColorOnScroll:{height:100,color:"black"}},t)),i.a.createElement("div",{className:a.main},i.a.createElement("div",{className:a.container},i.a.createElement(k,null))),i.a.createElement(c.a,null))}},358:function(e,a,t){e.exports=t.p+"static/media/teamwork.e0ecfd21.svg"},40:function(e,a,t){"use strict";t.d(a,"e",(function(){return r})),t.d(a,"m",(function(){return n})),t.d(a,"b",(function(){return i})),t.d(a,"a",(function(){return p})),t.d(a,"d",(function(){return l})),t.d(a,"h",(function(){return c})),t.d(a,"j",(function(){return d})),t.d(a,"n",(function(){return x})),t.d(a,"c",(function(){return s})),t.d(a,"k",(function(){return m})),t.d(a,"g",(function(){return b})),t.d(a,"i",(function(){return u})),t.d(a,"f",(function(){return g})),t.d(a,"l",(function(){return f}));var o=t(41),r=260,n={transition:"all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"},i=Object(o.a)(Object(o.a)({},{paddingRight:"15px",paddingLeft:"15px",marginRight:"auto",marginLeft:"auto",width:"100%"}),{},{"@media (min-width: 576px)":{maxWidth:"540px"},"@media (min-width: 768px)":{maxWidth:"720px"},"@media (min-width: 992px)":{maxWidth:"960px"},"@media (min-width: 1200px)":{maxWidth:"1140px"}}),p={boxShadow:"0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"},l={fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontWeight:"300",lineHeight:"1.5em"},c="#4B0082",d="#FFBC42",x="#ff9800",s="#f44336",m="#4caf50",b="#00acc1",u="#e91e63",g="#999999",f=(Object(o.a)({color:"#fff",background:"linear-gradient(60deg, #ffa726, #fb8c00)"},{boxShadow:"0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)"}),Object(o.a)({color:"#fff",background:"linear-gradient(60deg, #66bb6a, #43a047)"},{boxShadow:"0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)"}),Object(o.a)({color:"#fff",background:"linear-gradient(60deg, #ef5350, #e53935)"},{boxShadow:"0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)"}),Object(o.a)({color:"#fff",background:"linear-gradient(60deg, #26c6da, #00acc1)"},{boxShadow:"0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)"}),Object(o.a)({color:"#fff",background:"linear-gradient(60deg, #ab47bc, #8e24aa)"},{boxShadow:"0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)"}),Object(o.a)({color:"#fff",background:"linear-gradient(60deg, #ec407a, #d81b60)"},{boxShadow:"0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4)"}),Object(o.a)({margin:"0 20px 10px",paddingTop:"10px",borderTop:"1px solid #eeeeee",height:"auto"},l),{color:"#3C4858",margin:"1.75rem 0 0.875rem",textDecoration:"none",fontWeight:"700",fontFamily:'"Roboto Slab", "Times New Roman", serif'});Object(o.a)(Object(o.a)({},f),{},{marginTop:".625rem"})},49:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var o=t(53),r=t(0),n=t.n(r),i=t(383),p=t(393),l=Object(i.a)({grid:{marginRight:"-15px",marginLeft:"-15px",width:"auto"}});function c(e){var a=l(),t=e.children,r=e.className,i=Object(o.a)(e,["children","className"]);return n.a.createElement(p.a,Object.assign({container:!0},i,{className:a.grid+" "+r}),t)}c.defaultProps={className:""}},50:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var o=t(53),r=t(0),n=t.n(r),i=t(383),p=t(393),l=Object(i.a)({grid:{position:"relative",width:"100%",minHeight:"1px",paddingRight:"15px",paddingLeft:"15px",flexBasis:"auto"}});function c(e){var a=l(),t=e.children,r=e.className,i=Object(o.a)(e,["children","className"]);return n.a.createElement(p.a,Object.assign({item:!0},i,{className:a.grid+" "+r}),t)}c.defaultProps={className:""}},52:function(e,a,t){"use strict";var o=t(39),r=t(53),n=t(41),i=t(0),p=t.n(i),l=t(43),c=t.n(l),d=t(114),x=t.n(d),s=t(394),m=t(40),b={button:{minHeight:"auto",minWidth:"auto",backgroundColor:m.f,color:"#FFFFFF",boxShadow:"0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12)",border:"none",borderRadius:"3px",position:"relative",padding:"12px 30px",margin:".3125rem 1px",fontSize:"12px",fontWeight:"400",textTransform:"uppercase",letterSpacing:"0",willChange:"box-shadow, transform",transition:"box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",lineHeight:"1.42857143",textAlign:"center",whiteSpace:"nowrap",verticalAlign:"middle",touchAction:"manipulation",cursor:"pointer","&:hover,&:focus":{color:"#FFFFFF",backgroundColor:m.f,boxShadow:"0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)"},"& .fab,& .fas,& .far,& .fal,& .material-icons":{position:"relative",display:"inline-block",top:"0",fontSize:"1.1rem",marginRight:"4px",verticalAlign:"middle"},"& svg":{position:"relative",display:"inline-block",top:"0",width:"18px",height:"18px",marginRight:"4px",verticalAlign:"middle"},"&$justIcon":{"& .fab,& .fas,& .far,& .fal,& .material-icons":{marginRight:"0px",position:"absolute",width:"100%",transform:"none",left:"0px",top:"0px",height:"100%",lineHeight:"41px",fontSize:"20px"}}},fullWidth:{width:"100%"},primary:{backgroundColor:m.h,boxShadow:"0 2px 2px 0 rgba(156, 39, 176, 0.14), 0 3px 1px -2px rgba(156, 39, 176, 0.2), 0 1px 5px 0 rgba(156, 39, 176, 0.12)","&:hover,&:focus":{backgroundColor:m.h,boxShadow:"0 14px 26px -12px rgba(156, 39, 176, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(156, 39, 176, 0.2)"}},info:{backgroundColor:m.g,boxShadow:"0 2px 2px 0 rgba(0, 188, 212, 0.14), 0 3px 1px -2px rgba(0, 188, 212, 0.2), 0 1px 5px 0 rgba(0, 188, 212, 0.12)","&:hover,&:focus":{backgroundColor:m.g,boxShadow:"0 14px 26px -12px rgba(0, 188, 212, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 188, 212, 0.2)"}},success:{backgroundColor:m.k,boxShadow:"0 2px 2px 0 rgba(76, 175, 80, 0.14), 0 3px 1px -2px rgba(76, 175, 80, 0.2), 0 1px 5px 0 rgba(76, 175, 80, 0.12)","&:hover,&:focus":{backgroundColor:m.k,boxShadow:"0 14px 26px -12px rgba(76, 175, 80, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(76, 175, 80, 0.2)"}},warning:{backgroundColor:m.n,boxShadow:"0 2px 2px 0 rgba(255, 152, 0, 0.14), 0 3px 1px -2px rgba(255, 152, 0, 0.2), 0 1px 5px 0 rgba(255, 152, 0, 0.12)","&:hover,&:focus":{backgroundColor:m.n,boxShadow:"0 14px 26px -12px rgba(255, 152, 0, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(255, 152, 0, 0.2)"}},danger:{backgroundColor:m.c,boxShadow:"0 2px 2px 0 rgba(244, 67, 54, 0.14), 0 3px 1px -2px rgba(244, 67, 54, 0.2), 0 1px 5px 0 rgba(244, 67, 54, 0.12)","&:hover,&:focus":{backgroundColor:m.c,boxShadow:"0 14px 26px -12px rgba(244, 67, 54, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(244, 67, 54, 0.2)"}},rose:{backgroundColor:m.i,boxShadow:"0 2px 2px 0 rgba(233, 30, 99, 0.14), 0 3px 1px -2px rgba(233, 30, 99, 0.2), 0 1px 5px 0 rgba(233, 30, 99, 0.12)","&:hover,&:focus":{backgroundColor:m.i,boxShadow:"0 14px 26px -12px rgba(233, 30, 99, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(233, 30, 99, 0.2)"}},white:{"&,&:focus,&:hover,&:visited":{backgroundColor:"#FFFFFF",color:m.f}},twitter:{backgroundColor:"#55acee",color:"#fff",boxShadow:"0 2px 2px 0 rgba(85, 172, 238, 0.14), 0 3px 1px -2px rgba(85, 172, 238, 0.2), 0 1px 5px 0 rgba(85, 172, 238, 0.12)","&:hover,&:focus,&:visited":{backgroundColor:"#55acee",color:"#fff",boxShadow:"0 14px 26px -12px rgba(85, 172, 238, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(85, 172, 238, 0.2)"}},facebook:{backgroundColor:"#3b5998",color:"#fff",boxShadow:"0 2px 2px 0 rgba(59, 89, 152, 0.14), 0 3px 1px -2px rgba(59, 89, 152, 0.2), 0 1px 5px 0 rgba(59, 89, 152, 0.12)","&:hover,&:focus":{backgroundColor:"#3b5998",color:"#fff",boxShadow:"0 14px 26px -12px rgba(59, 89, 152, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(59, 89, 152, 0.2)"}},google:{backgroundColor:"#dd4b39",color:"#fff",boxShadow:"0 2px 2px 0 rgba(221, 75, 57, 0.14), 0 3px 1px -2px rgba(221, 75, 57, 0.2), 0 1px 5px 0 rgba(221, 75, 57, 0.12)","&:hover,&:focus":{backgroundColor:"#dd4b39",color:"#fff",boxShadow:"0 14px 26px -12px rgba(221, 75, 57, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(221, 75, 57, 0.2)"}},github:{backgroundColor:"#333333",color:"#fff",boxShadow:"0 2px 2px 0 rgba(51, 51, 51, 0.14), 0 3px 1px -2px rgba(51, 51, 51, 0.2), 0 1px 5px 0 rgba(51, 51, 51, 0.12)","&:hover,&:focus":{backgroundColor:"#333333",color:"#fff",boxShadow:"0 14px 26px -12px rgba(51, 51, 51, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(51, 51, 51, 0.2)"}},simple:{"&,&:focus,&:hover,&:visited":{color:"#FFFFFF",background:"transparent",boxShadow:"none"},"&$primary":{"&,&:focus,&:hover,&:visited":{color:m.h}},"&$info":{"&,&:focus,&:hover,&:visited":{color:m.g}},"&$success":{"&,&:focus,&:hover,&:visited":{color:m.k}},"&$warning":{"&,&:focus,&:hover,&:visited":{color:m.n}},"&$rose":{"&,&:focus,&:hover,&:visited":{color:m.i}},"&$danger":{"&,&:focus,&:hover,&:visited":{color:m.c}},"&$twitter":{"&,&:focus,&:hover,&:visited":{color:"#55acee"}},"&$facebook":{"&,&:focus,&:hover,&:visited":{color:"#3b5998"}},"&$google":{"&,&:focus,&:hover,&:visited":{color:"#dd4b39"}},"&$github":{"&,&:focus,&:hover,&:visited":{color:"#333333"}}},transparent:{"&,&:focus,&:hover,&:visited":{color:"inherit",background:"transparent",boxShadow:"none"}},disabled:{opacity:"0.65",pointerEvents:"none"},lg:{padding:"1.125rem 2.25rem",fontSize:"0.875rem",lineHeight:"1.333333",borderRadius:"0.2rem"},sm:{padding:"0.40625rem 1.25rem",fontSize:"0.6875rem",lineHeight:"1.5",borderRadius:"0.2rem"},round:{borderRadius:"30px"},block:{width:"100% !important"},link:{"&,&:hover,&:focus":{backgroundColor:"transparent",color:"#999999",boxShadow:"none"}},justIcon:{paddingLeft:"12px",paddingRight:"12px",fontSize:"20px",height:"41px",minWidth:"41px",width:"41px","& .fab,& .fas,& .far,& .fal,& svg,& .material-icons":{marginRight:"0px"},"&$lg":{height:"57px",minWidth:"57px",width:"57px",lineHeight:"56px","& .fab,& .fas,& .far,& .fal,& .material-icons":{fontSize:"32px",lineHeight:"56px"},"& svg":{width:"32px",height:"32px"}},"&$sm":{height:"30px",minWidth:"30px",width:"30px","& .fab,& .fas,& .far,& .fal,& .material-icons":{fontSize:"17px",lineHeight:"29px"},"& svg":{width:"17px",height:"17px"}}}},u=x()((function(){return Object(n.a)({},b)})),g=p.a.forwardRef((function(e,a){var t,n=e.color,i=e.round,l=e.children,d=e.fullWidth,x=e.disabled,m=e.simple,b=e.size,g=e.block,f=e.link,h=e.justIcon,w=e.className,v=Object(r.a)(e,["color","round","children","fullWidth","disabled","simple","size","block","link","justIcon","className"]),k=u(),F=c()((t={},Object(o.a)(t,k.button,!0),Object(o.a)(t,k[b],b),Object(o.a)(t,k[n],n),Object(o.a)(t,k.round,i),Object(o.a)(t,k.fullWidth,d),Object(o.a)(t,k.disabled,x),Object(o.a)(t,k.simple,m),Object(o.a)(t,k.block,g),Object(o.a)(t,k.link,f),Object(o.a)(t,k.justIcon,h),Object(o.a)(t,w,w),t));return p.a.createElement(s.a,Object.assign({},v,{ref:a,className:F}),l)}));a.a=g},57:function(e,a,t){"use strict";t.d(a,"a",(function(){return v}));var o=t(56),r=t(39),n=t(41),i=t(0),p=t.n(i),l=t(43),c=t.n(l),d=t(383),x=t(387),s=t(391),m=t(392),b=t(403),u=t(406),g=t(111),f=t.n(g),h=t(40),w=Object(d.a)((function(e){var a;return{appBar:{display:"flex",border:"0",borderRadius:"3px",padding:"0.625rem 0",marginBottom:"20px",color:"#555",width:"100%",backgroundColor:"#fff",boxShadow:"0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)",transition:"all 150ms ease 0s",alignItems:"center",flexFlow:"row nowrap",justifyContent:"flex-start",position:"relative",zIndex:"unset"},absolute:{position:"absolute",zIndex:"1100"},fixed:{position:"fixed",zIndex:"1100"},container:Object(n.a)(Object(n.a)({},h.b),{},{minHeight:"50px",flex:"1",alignItems:"center",justifyContent:"space-between",display:"flex",flexWrap:"nowrap"}),flex:{flex:1},title:Object(n.a)(Object(n.a)({},h.d),{},{lineHeight:"30px",fontSize:"18px",borderRadius:"3px",textTransform:"none",color:"inherit",padding:"8px 16px",letterSpacing:"unset","&:hover,&:focus":{color:"inherit",background:"transparent"}}),title_img:Object(n.a)(Object(n.a)({},h.d),{},(a={lineHeight:"30px",fontSize:"18px",borderRadius:"3px",textTransform:"none",color:"inherit",padding:"8px 16px",letterSpacing:"unset","&:hover,&:focus":{color:"inherit",background:"transparent"},width:"100%",maxWidth:160},Object(r.a)(a,e.breakpoints.down("sm"),{maxWidth:200}),Object(r.a)(a,e.breakpoints.up("md"),{maxWidth:300}),Object(r.a)(a,e.breakpoints.up("lg"),{maxWidth:300}),a)),appResponsive:{margin:"20px 10px"},primary:{backgroundColor:h.h,color:"#FFFFFF",boxShadow:"0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(156, 39, 176, 0.46)"},info:{backgroundColor:h.g,color:"#FFFFFF",boxShadow:"0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(0, 188, 212, 0.46)"},success:{backgroundColor:h.k,color:"#FFFFFF",boxShadow:"0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(76, 175, 80, 0.46)"},warning:{backgroundColor:h.n,color:"#FFFFFF",boxShadow:"0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(255, 152, 0, 0.46)"},danger:{backgroundColor:h.c,color:"#FFFFFF",boxShadow:"0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(244, 67, 54, 0.46)"},rose:{backgroundColor:h.i,color:"#FFFFFF",boxShadow:"0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(233, 30, 99, 0.46)"},transparent:{backgroundColor:"transparent !important",boxShadow:"none",color:"#FFFFFF"},dark:{color:"#FFFFFF",backgroundColor:"#212121 !important",boxShadow:"0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(33, 33, 33, 0.46)"},white:{border:"0",padding:"0.625rem 0",marginBottom:"20px",color:"#555",backgroundColor:"#fff !important",boxShadow:"0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)"},drawerPaper:Object(n.a)(Object(n.a)({border:"none",bottom:"0",transitionProperty:"top, bottom, width",transitionDuration:".2s, .2s, .35s",transitionTimingFunction:"linear, linear, ease",width:h.e},h.a),{},{position:"fixed",display:"block",top:"0",height:"100vh",right:"0",left:"auto",visibility:"visible",overflowY:"visible",borderTop:"none",textAlign:"left",paddingRight:"0px",paddingLeft:"0"},h.m)}}));function v(e){var a,n=w(),i=p.a.useState(!1),l=Object(o.a)(i,2),d=l[0],g=l[1];p.a.useEffect((function(){return e.changeColorOnScroll&&window.addEventListener("scroll",v),function(){e.changeColorOnScroll&&window.removeEventListener("scroll",v)}}));var h=function(){g(!d)},v=function(){var a=e.color,t=e.changeColorOnScroll;window.pageYOffset>t.height?(document.body.getElementsByTagName("header")[0].classList.remove(n[a]),document.body.getElementsByTagName("header")[0].classList.add(n[t.color])):(document.body.getElementsByTagName("header")[0].classList.add(n[a]),document.body.getElementsByTagName("header")[0].classList.remove(n[t.color]))},k=e.color,F=e.rightLinks,O=e.leftLinks,S=e.fixed,j=e.absolute,C=c()((a={},Object(r.a)(a,n.appBar,!0),Object(r.a)(a,n[k],k),Object(r.a)(a,n.absolute,j),Object(r.a)(a,n.fixed,S),a)),E=p.a.createElement("a",{href:"/"},p.a.createElement("img",{href:"/",alt:"Australian Digital",className:n.title_img,src:t(68)}));return p.a.createElement(x.a,{className:C},p.a.createElement(s.a,{className:n.container},void 0!==O?E:null,p.a.createElement("div",{className:n.flex},void 0!==O?p.a.createElement(b.a,{smDown:!0,implementation:"css"},O):E),p.a.createElement(b.a,{smDown:!0,implementation:"css"},F),p.a.createElement(b.a,{mdUp:!0},p.a.createElement(m.a,{color:"#FFBC42","aria-label":"open drawer",onClick:h},p.a.createElement(f.a,null)))),p.a.createElement(b.a,{mdUp:!0,implementation:"js"},p.a.createElement(u.a,{variant:"temporary",anchor:"right",open:d,classes:{paper:n.drawerPaper},onClose:h},p.a.createElement("div",{className:n.appResponsive},O,F))))}v.defaultProp={color:"white"}},61:function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));var o=t(0),r=t.n(o),n=t(383),i=t(395),p=t(396),l=t(52),c=t(39),d=t(41),x=t(40),s={tooltip:{padding:"10px 15px",minWidth:"130px",color:"#555555",lineHeight:"1.7em",background:"#FFFFFF",border:"none",borderRadius:"3px",boxShadow:"0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2)",maxWidth:"200px",textAlign:"center",fontFamily:'"Helvetica Neue",Helvetica,Arial,sans-serif',fontSize:"0.875em",fontStyle:"normal",fontWeight:"400",textShadow:"none",textTransform:"none",letterSpacing:"normal",wordBreak:"normal",wordSpacing:"normal",wordWrap:"normal",whiteSpace:"normal",lineBreak:"auto"}},m=function(e){return Object(d.a)(Object(d.a)({list:Object(d.a)(Object(d.a)({},x.d),{},{fontSize:"14px",margin:0,paddingLeft:"0",listStyle:"none",paddingTop:"0",paddingBottom:"0",color:"inherit"}),listItem:Object(c.a)({float:"left",color:"inherit",position:"relative",display:"block",width:"auto",margin:"0",padding:"0"},e.breakpoints.down("sm"),{width:"100%","&:after":{width:"calc(100% - 30px)",content:'""',display:"block",height:"1px",marginLeft:"15px",backgroundColor:"#e5e5e5"}}),listItemText:{padding:"0 !important"},navLink:Object(c.a)({color:"#4B0082",position:"relative",padding:"0.9375rem",fontWeight:"400",fontSize:"14px",textTransform:"uppercase",borderRadius:"3px",lineHeight:"20px",textDecoration:"none",margin:"0px",display:"inline-flex",backgroundColor:"transparent",boxShadow:"none","&:hover,&:focus":{color:"#FFBC42",background:"rgba(200, 200, 200, 0.2)"}},e.breakpoints.down("sm"),{width:"calc(100% - 30px)",marginLeft:"15px",marginBottom:"8px",marginTop:"8px",textAlign:"left","& > span:first-child":{justifyContent:"flex-start"}}),notificationNavLink:{color:"inherit",padding:"0.9375rem",fontWeight:"400",fontSize:"12px",textTransform:"uppercase",lineHeight:"20px",textDecoration:"none",margin:"0px",display:"inline-flex",top:"4px"},registerNavLink:{top:"3px",position:"relative",fontWeight:"400",fontSize:"12px",textTransform:"uppercase",lineHeight:"20px",textDecoration:"none",margin:"0px",display:"inline-flex"},navLinkActive:{color:"#4B0082",backgroundColor:"rgba(255, 255, 255, 0.1)"},icons:{width:"20px",height:"20px",marginRight:"3px"},socialIcons:{position:"relative",fontSize:"20px !important",marginRight:"4px"},dropdownLink:{"&,&:hover,&:focus":{color:"inherit",textDecoration:"none",display:"block",padding:"10px 20px"}}},s),{},{marginRight5:{marginRight:"5px"}})},b=Object(n.a)(m);function u(e){var a=b();return r.a.createElement(i.a,{className:a.list},r.a.createElement(p.a,{className:a.listItem},r.a.createElement(l.a,{href:"/",className:a.navLink},"Home")),r.a.createElement(p.a,{className:a.listItem},r.a.createElement(l.a,{href:"/about",className:a.navLink},"About")),r.a.createElement(p.a,{className:a.listItem},r.a.createElement(l.a,{href:"/service",className:a.navLink},"Services")),r.a.createElement(p.a,{className:a.listItem},r.a.createElement(l.a,{href:"/portfolio",className:a.navLink},"Portfolio")),r.a.createElement(p.a,{className:a.listItem},r.a.createElement(l.a,{href:"/contact",className:a.navLink},"Contact")))}},62:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var o=t(39),r=t(0),n=t.n(r),i=t(43),p=t.n(i),l=t(383),c=t(40),d={block:{color:"inherit",padding:"0.9375rem",fontWeight:"500",fontSize:"12px",textTransform:"uppercase",borderRadius:"3px",textDecoration:"none",position:"relative",display:"block"},left:{float:"left!important",display:"block",color:"#ffffff"},right:{padding:"15px 0",margin:"0",float:"right!important"},footer:{padding:"0.9375rem 0",textAlign:"center",display:"flex",zIndex:"2",position:"relative",backgroundColor:"#51038b"},a:{color:c.h,textDecoration:"none",backgroundColor:"transparent"},footerWhiteFont:{"&,&:hover,&:focus":{color:"#FFFFFF"}},container:c.b,list:{marginBottom:"0",padding:"0",marginTop:"0"},inlineBlock:{display:"inline-block",padding:"0px",width:"auto"},icon:{width:"18px",height:"18px",position:"relative",top:"3px"}},x=Object(l.a)(d);function s(e){var a,t,r=x(),i=e.whiteFont,l=p()((a={},Object(o.a)(a,r.footer,!0),Object(o.a)(a,r.footerWhiteFont,i),a));p()((t={},Object(o.a)(t,r.a,!0),Object(o.a)(t,r.footerWhiteFont,i),t));return n.a.createElement("footer",{className:l},n.a.createElement("div",{className:r.container},n.a.createElement("div",{className:r.left},"\xa9 2020 Australian Digital. All Rights Reserved.")))}},68:function(e,a,t){e.exports=t.p+"static/media/350xl.71bfff1c.png"}}]);
//# sourceMappingURL=11.99d511c6.chunk.js.map