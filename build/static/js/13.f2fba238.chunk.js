(this["webpackJsonpmaterial-kit-react"]=this["webpackJsonpmaterial-kit-react"]||[]).push([[13],{32:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return E}));var n=a(38),o=a(40),i=a(0),r=a.n(i),l=a(409),c=a(72),m=a(92),u=a(76),p=a(90),s=a(41),d=a(52),b=a(56),h=a(57),g=a(376),f=a(377),x=a(93),O=a(425),w=f.b().shape({first_name:f.c("Enter your first name").min(2,"Too Short!").max(50,"Too Long!").required("Required"),email:f.c("Enter your email").email("Enter a valid email").required("Email is required"),phone:f.a("Enter a valid number").required("Enter your phone number").typeError("You must specify a number").min(3,"Too Short!")}),k=Object(l.a)((function(e){var t,a,i,r,l,c,m,u,p;return{section:{padding:"70px 0",textAlign:"center"},title:Object(o.a)(Object(o.a)({},s.l),{},(t={marginBottom:"3rem",marginTop:"16px",minHeight:"32px",textDecoration:"none",position:"relative",color:"#4B0082"},Object(n.a)(t,e.breakpoints.down("sm"),{fontSize:"1.5rem"}),Object(n.a)(t,e.breakpoints.up("md"),{fontSize:"1.8rem"}),Object(n.a)(t,e.breakpoints.up("lg"),{fontSize:"3rem"}),t)),formTitle:Object(o.a)(Object(o.a)({},s.l),{},(a={marginTop:"8px",minHeight:"32px",textDecoration:"none",position:"relative",color:"#FFBC42"},Object(n.a)(a,e.breakpoints.down("sm"),{fontSize:"1rem"}),Object(n.a)(a,e.breakpoints.up("md"),{fontSize:"2rem"}),Object(n.a)(a,e.breakpoints.up("lg"),{fontSize:"3rem"}),a)),subtitle:(i={fontSize:"1.313rem",maxWidth:"500px",margin:"10px 0",color:"#032d60"},Object(n.a)(i,e.breakpoints.down("sm"),{fontSize:"0.8rem"}),Object(n.a)(i,e.breakpoints.up("md"),{fontSize:"1rem"}),Object(n.a)(i,e.breakpoints.up("lg"),{fontSize:"1.313rem"}),i),description:{color:"#999"},yellowChip:{color:"#FFBC42",backgroundColor:"#FCA80F21",fontWeight:900},productionImage:{width:"100%",height:"auto"},purpleButton:{background:"#4B0082",borderRadius:"50px",padding:"12px 30px"},yellowSubmitButton:(r={background:"#FFBC42",borderRadius:"50px",padding:"12px 30px",marginTop:"32px"},Object(n.a)(r,e.breakpoints.down("sm"),{fontSize:"1rem"}),Object(n.a)(r,e.breakpoints.up("md"),{fontSize:"1.2rem"}),Object(n.a)(r,e.breakpoints.up("lg"),{fontSize:"1.3rem"}),r),whiteSuccessButton:(l={color:"#FFBC42"},Object(n.a)(l,e.breakpoints.down("sm"),{fontSize:"1rem"}),Object(n.a)(l,e.breakpoints.up("md"),{fontSize:"1.2rem"}),Object(n.a)(l,e.breakpoints.up("lg"),{fontSize:"1.3rem"}),l),services:(c={},Object(n.a)(c,e.breakpoints.down("sm"),{marginTop:"50px"}),Object(n.a)(c,e.breakpoints.up("md"),{marginTop:"75px"}),Object(n.a)(c,e.breakpoints.up("lg"),{marginTop:"100px"}),c),serviceRaised:{margin:"0px 16px",borderRadius:"24px",boxShadow:"0 -3px 24px 2px rgb(0 0 0 / 5%), 0 6px 30px 5px rgb(0 0 0 / 0%), 0 8px 10px -5px rgb(0 0 0 / 0%)"},servicesGrid:{gridGap:"40px 20px",justifyContent:"center"},servicesIcon:{width:"60px",height:"60px"},whycustomer:{marginTop:"100px"},valueContainer:{marginTop:20,marginBottom:20,color:"#4B0082"},valueIcon:{marginRight:16},valueItemContainer:{padding:"4px 0px"},contact:{marginTop:"100px"},contactAddressContainer:{display:"flex",alignItems:"center"},contactAddress:(m={textAlign:"start",fontSize:"1.313rem",maxWidth:"500px",margin:"10px 0",color:"#032d60"},Object(n.a)(m,e.breakpoints.down("sm"),{fontSize:"1rem"}),Object(n.a)(m,e.breakpoints.up("md"),{fontSize:"1.2rem"}),Object(n.a)(m,e.breakpoints.up("lg"),{fontSize:"1.5rem"}),m),contactPhone:(u={textAlign:"end",fontSize:"1.313rem",maxWidth:"500px",margin:"10px 0",color:"#032d60"},Object(n.a)(u,e.breakpoints.down("sm"),{fontSize:"1rem"}),Object(n.a)(u,e.breakpoints.up("md"),{fontSize:"1.2rem"}),Object(n.a)(u,e.breakpoints.up("lg"),{fontSize:"1.5rem"}),u),imgPortfolio:{width:"100%",height:"auto"},dFlexCenter:{display:"flex",justifyContent:"center",alignItems:"center"},formControl:{minWidth:120,textAlign:"start",marginTop:e.spacing(2),"& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{borderColor:"white"},"&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{borderColor:"white"},"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{borderColor:"white"},"& .MuiOutlinedInput-input":{color:"white"},"&:hover .MuiOutlinedInput-input":{color:"white"},"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input":{color:"white"},"& .MuiInputLabel-outlined":{color:"white"},"&:hover .MuiInputLabel-outlined":{color:"white"},"& .MuiInputLabel-outlined.Mui-focused":{color:"white"}},selectEmpty:{marginTop:e.spacing(2)},textFieldSpacing:{textAlign:"start",marginTop:e.spacing(2),"& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{borderColor:"white"},"&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{borderColor:"white"},"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{borderColor:"white"},"& .MuiOutlinedInput-input":{color:"white"},"&:hover .MuiOutlinedInput-input":{color:"white"},"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input":{color:"white"},"& .MuiInputLabel-outlined":{color:"white"},"&:hover .MuiInputLabel-outlined":{color:"white"},"& .MuiInputLabel-outlined.Mui-focused":{color:"white"}},textFieldWhite:{color:"white"},formContainer:(p={margin:e.spacing(2),backgroundColor:"#40348E",borderRadius:"5%",marginTop:e.spacing(10)},Object(n.a)(p,e.breakpoints.down("sm"),{padding:"40px"}),Object(n.a)(p,e.breakpoints.up("md"),{padding:"60px"}),Object(n.a)(p,e.breakpoints.up("lg"),{padding:"80px"}),p)}}));function S(){var e=Object(i.useState)(!1),t=Object(d.a)(e,2),n=t[0],o=t[1],l=Object(g.a)({initialValues:{},validationSchema:w,onSubmit:function(e){e.oid="00D5g000004Q7r1",e.submit="Submit",e["00N5g000006oAit"]="Australian Digital",e.lead_source="Web",fetch("https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8",{method:"POST",mode:"no-cors",body:new URLSearchParams(e)}).then((function(e){console.log(e),o(!0)}))}}),c=k();return r.a.createElement("div",{className:c.section},r.a.createElement("div",{className:c.services},r.a.createElement(b.a,{justify:"center"},r.a.createElement(h.a,{className:c.dFlexCenter,xs:12,sm:6,md:6,lg:6},r.a.createElement("h2",{className:c.title},"Contact Us")),r.a.createElement(h.a,{xs:12,sm:6,md:6,lg:6},r.a.createElement("img",{alt:"Australian Digital",className:c.productionImage,src:a(375)}))),r.a.createElement("form",{onSubmit:l.handleSubmit},r.a.createElement(b.a,{className:c.formContainer,justify:"center"},r.a.createElement(h.a,{xs:12,sm:12,md:12,lg:12},r.a.createElement("h4",{className:c.formTitle},"Please get in touch",r.a.createElement("br",null)," and let us know how we can help")),r.a.createElement(h.a,{xs:12,sm:12,md:12,lg:12},r.a.createElement(O.a,{className:c.textFieldSpacing,fullWidth:!0,variant:"outlined",id:"first_name",name:"first_name",label:"First Name",onChange:l.handleChange,error:l.touched.first_name&&Boolean(l.errors.first_name),helperText:l.touched.first_name&&l.errors.first_name,autoComplete:"off"})),r.a.createElement(h.a,{xs:12,sm:12,md:12,lg:12},r.a.createElement(O.a,{className:c.textFieldSpacing,fullWidth:!0,variant:"outlined",id:"last_name",name:"last_name",label:"Last Name",onChange:l.handleChange,error:l.touched.last_name&&Boolean(l.errors.last_name),helperText:l.touched.last_name&&l.errors.last_name,autoComplete:"off"})),r.a.createElement(h.a,{xs:12,sm:12,md:12,lg:12},r.a.createElement(O.a,{className:c.textFieldSpacing,fullWidth:!0,variant:"outlined",id:"title",name:"title",label:"Title",onChange:l.handleChange,autoComplete:"off"})),r.a.createElement(h.a,{xs:12,sm:12,md:12,lg:12},r.a.createElement(O.a,{className:c.textFieldSpacing,fullWidth:!0,variant:"outlined",id:"email",name:"email",label:"Email",onChange:l.handleChange,error:l.touched.email&&Boolean(l.errors.email),helperText:l.touched.email&&l.errors.email,autoComplete:"off"})),r.a.createElement(h.a,{xs:12,sm:12,md:12,lg:12},r.a.createElement(O.a,{className:c.textFieldSpacing,fullWidth:!0,variant:"outlined",id:"phone",name:"phone",label:"Phone",onChange:l.handleChange,error:l.touched.phone&&Boolean(l.errors.phone),helperText:l.touched.phone&&l.errors.phone,autoComplete:"off"})),r.a.createElement(h.a,{xs:12,sm:12,md:12,lg:12},r.a.createElement(O.a,{className:c.textFieldSpacing,fullWidth:!0,variant:"outlined",id:"company",name:"company",label:"Company",onChange:l.handleChange,autoComplete:"off"})),r.a.createElement(h.a,{xs:12,sm:12,md:12,lg:12},r.a.createElement(O.a,{className:c.textFieldSpacing,fullWidth:!0,variant:"outlined",id:"description",name:"description",label:"How can we help?",onChange:l.handleChange,autoComplete:"off"})),r.a.createElement(h.a,{xs:12,sm:12,md:12,lg:12},r.a.createElement(x.a,{disabled:n,className:c.yellowSubmitButton,variant:"contained",type:"submit"},"Submit")),n?r.a.createElement(h.a,{style:{textAlign:"center"},xs:12,sm:12,md:12,lg:12,className:c.whiteSuccessButton},r.a.createElement("h4",null,"Thank you for your enquiry. We look forward to working with you.")):null))))}var C=[],j=Object(l.a)((function(e){var t,a;return{white_main:{backgroundColor:"#ffffff"},container:Object(o.a)({zIndex:"12",color:"#FFFFFF"},s.b),title:Object(o.a)(Object(o.a)({},s.l),{},(t={display:"inline-block",position:"relative",marginTop:"30px",minHeight:"32px",color:"#4B0082",textDecoration:"none"},Object(n.a)(t,e.breakpoints.down("sm"),{fontSize:"1rem"}),Object(n.a)(t,e.breakpoints.up("md"),{fontSize:"2rem"}),Object(n.a)(t,e.breakpoints.up("lg"),{fontSize:"3rem"}),t)),subtitle:(a={fontSize:"1.313rem",maxWidth:"500px",margin:"10px 0",color:"#032d60"},Object(n.a)(a,e.breakpoints.down("sm"),{fontSize:"0.8rem"}),Object(n.a)(a,e.breakpoints.up("md"),{fontSize:"1rem"}),Object(n.a)(a,e.breakpoints.up("lg"),{fontSize:"1.313rem"}),a),main:{background:"#FFFFFF",position:"relative",zIndex:"3"},purpleButton:{background:"#4B0082",borderRadius:"50px",padding:"12px 30px"},yellowButton:{background:"#FFBC42",borderRadius:"50px",padding:"12px 30px"},yellowChip:{color:"#FFBC42",backgroundColor:"#FCA80F21",fontWeight:900},parallax_background:{backgroundColor:"#ffffff"}}}));function E(e){var t=j(),a=Object.assign({},e);return r.a.createElement("div",{className:t.white_main},r.a.createElement(c.a,Object.assign({color:"transparent",routes:C,brand:"Material Kit React",rightLinks:r.a.createElement(p.a,null),fixed:!0,changeColorOnScroll:{height:100,color:"black"}},a)),r.a.createElement("div",{className:t.main},r.a.createElement("div",{className:t.container},r.a.createElement(S,null),r.a.createElement(u.a,null))),r.a.createElement(m.a,null))}},375:function(e,t,a){e.exports=a.p+"static/media/teamwork.e0ecfd21.svg"}}]);
//# sourceMappingURL=13.f2fba238.chunk.js.map