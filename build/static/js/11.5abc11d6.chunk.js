(this["webpackJsonpmaterial-kit-react"]=this["webpackJsonpmaterial-kit-react"]||[]).push([[11],{114:function(e,t,a){e.exports=a.p+"static/media/p1-min.ffb887cd.jpg"},115:function(e,t,a){e.exports=a.p+"static/media/p2-min.14201f1d.jpg"},116:function(e,t,a){e.exports=a.p+"static/media/p3-min.18b0b472.jpg"},28:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return y}));var r=a(38),o=a(42),n=a(0),i=a.n(n),l=a(394),c=a(63),p=a(74),s=a(66),m=a(72),x=a(40),d=a(50),g=a(51),b=a(62),u=a(49),f=a.n(u),h=a(229),F=a.n(h),k=a(412),v=a(408),j=function(e){return{root:{marginTop:"20px",paddingLeft:"0",marginBottom:"0",overflow:"visible !important",lineHeight:"24px",textTransform:"uppercase",fontSize:"12px",fontWeight:"500",position:"relative",display:"block",color:"inherit"},flexContainer:Object(r.a)({},e.breakpoints.down("xs"),{display:"flex",flexWrap:"wrap"}),displayNone:{display:"none !important"},fixed:{overflow:"visible !important"},horizontalDisplay:{display:"block"},pills:{float:"left",position:"relative",display:"block",borderRadius:"30px",minWidth:"100px",textAlign:"center",transition:"all .3s",padding:"10px 15px",color:"#555555",height:"auto",opacity:"1",maxWidth:"100%",margin:"0 5px"},pillsWithIcons:{borderRadius:"4px"},tabIcon:{width:"30px",height:"30px",display:"block",margin:"15px 0 !important","&, & *":{letterSpacing:"normal !important"}},horizontalPills:{width:"100%",float:"none !important","& + button":{margin:"10px 0"}},contentWrapper:{marginTop:"20px"},primary:{"&,&:hover":{color:"#FFFFFF",backgroundColor:x.j,boxShadow:"0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(156, 39, 176, 0.4)"}},info:{"&,&:hover":{color:"#FFFFFF",backgroundColor:x.g,boxShadow:"0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(76, 175, 80, 0.4)"}},success:{"&,&:hover":{color:"#FFFFFF",backgroundColor:x.k,boxShadow:"0 2px 2px 0 rgba(76, 175, 80, 0.14), 0 3px 1px -2px rgba(76, 175, 80, 0.2), 0 1px 5px 0 rgba(76, 175, 80, 0.12)"}},warning:{"&,&:hover":{color:"#FFFFFF",backgroundColor:x.n,boxShadow:"0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(255, 152, 0, 0.4)"}},danger:{"&,&:hover":{color:"#FFFFFF",backgroundColor:x.c,boxShadow:"0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(255, 152, 0, 0.4)"}},rose:{"&,&:hover":{color:"#FFFFFF",backgroundColor:x.i,boxShadow:"0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4)"}},alignCenter:{alignItems:"center",justifyContent:"center"},tabWrapper:{color:"inherit",position:"relative",fontSize:"12px",lineHeight:"24px",fontWeight:"500",textTransform:"uppercase","&,& *":{letterSpacing:"normal"}},tabContent:{color:"#032d60"}}},E=Object(l.a)(j);function O(e){var t,a=i.a.useState(e.active),o=Object(b.a)(a,2),n=o[0],l=o[1],c=E(),p=e.tabs,s=e.direction,m=e.color,x=e.horizontal,u=e.alignCenter,h=f()((t={},Object(r.a)(t,c.flexContainer,!0),Object(r.a)(t,c.horizontalDisplay,void 0!==x),t)),j=i.a.createElement(k.a,{classes:{root:c.root,fixed:c.fixed,flexContainer:h,indicator:c.displayNone},value:n,onChange:function(e,t){l(t)},centered:u},p.map((function(e,t){var a,o={};void 0!==e.tabIcon&&(o.icon=i.a.createElement(e.tabIcon,{className:c.tabIcon}));var n=f()((a={},Object(r.a)(a,c.pills,!0),Object(r.a)(a,c.horizontalPills,void 0!==x),Object(r.a)(a,c.pillsWithIcons,void 0!==e.tabIcon),a));return i.a.createElement(v.a,Object.assign({label:e.tabButton,key:t},o,{classes:{root:n,selected:c[m],wrapper:c.tabWrapper}}))}))),O=i.a.createElement("div",{className:c.contentWrapper},i.a.createElement(F.a,{axis:"rtl"===s?"x-reverse":"x",index:n,onChangeIndex:function(e){l(e)}},p.map((function(e,t){return i.a.createElement("div",{className:c.tabContent,key:t},e.tabContent)}))));return void 0!==x?i.a.createElement(d.a,null,i.a.createElement(g.a,x.tabsGrid,j),i.a.createElement(g.a,x.contentGrid,O)):i.a.createElement("div",null,j,O)}O.defaultProps={active:0,color:"primary"};var C=Object(l.a)((function(e){var t,a,n,i,l;return{section:{padding:"70px 0",textAlign:"center"},title:Object(o.a)(Object(o.a)({},x.l),{},(t={marginBottom:"3rem",marginTop:"16px",minHeight:"32px",textDecoration:"none",position:"relative",color:"#4B0082"},Object(r.a)(t,e.breakpoints.down("sm"),{fontSize:"1.5rem"}),Object(r.a)(t,e.breakpoints.up("md"),{fontSize:"1.8rem"}),Object(r.a)(t,e.breakpoints.up("lg"),{fontSize:"2rem"}),t)),subtitle:(a={fontSize:"1.313rem",maxWidth:"500px",margin:"10px 0",color:"#032d60"},Object(r.a)(a,e.breakpoints.down("sm"),{fontSize:"0.8rem"}),Object(r.a)(a,e.breakpoints.up("md"),{fontSize:"1rem"}),Object(r.a)(a,e.breakpoints.up("lg"),{fontSize:"1.313rem"}),a),description:{color:"#999"},yellowChip:{color:"#FFBC42",backgroundColor:"#FCA80F21",fontWeight:900},productionImage:{width:"100%",height:"auto"},purpleButton:{background:"#4B0082",borderRadius:"50px",padding:"12px 30px"},services:(n={},Object(r.a)(n,e.breakpoints.down("sm"),{marginTop:"50px"}),Object(r.a)(n,e.breakpoints.up("md"),{marginTop:"75px"}),Object(r.a)(n,e.breakpoints.up("lg"),{marginTop:"100px"}),n),serviceRaised:{margin:"0px 16px",borderRadius:"24px",boxShadow:"0 -3px 24px 2px rgb(0 0 0 / 5%), 0 6px 30px 5px rgb(0 0 0 / 0%), 0 8px 10px -5px rgb(0 0 0 / 0%)"},servicesGrid:{gridGap:"40px 20px",justifyContent:"center"},servicesIcon:{width:"60px",height:"60px"},whycustomer:{marginTop:"100px"},valueContainer:{marginTop:20,marginBottom:20,color:"#4B0082"},valueIcon:{marginRight:16},valueItemContainer:{padding:"4px 0px"},contact:{marginTop:"100px"},contactAddressContainer:{display:"flex",alignItems:"center"},contactAddress:(i={textAlign:"start",fontSize:"1.313rem",maxWidth:"500px",margin:"10px 0",color:"#032d60"},Object(r.a)(i,e.breakpoints.down("sm"),{fontSize:"1rem"}),Object(r.a)(i,e.breakpoints.up("md"),{fontSize:"1.2rem"}),Object(r.a)(i,e.breakpoints.up("lg"),{fontSize:"1.5rem"}),i),contactPhone:(l={textAlign:"end",fontSize:"1.313rem",maxWidth:"500px",margin:"10px 0",color:"#032d60"},Object(r.a)(l,e.breakpoints.down("sm"),{fontSize:"1rem"}),Object(r.a)(l,e.breakpoints.up("md"),{fontSize:"1.2rem"}),Object(r.a)(l,e.breakpoints.up("lg"),{fontSize:"1.5rem"}),l),imgPortfolio:{width:"100%",height:"auto"}}}));function S(){var e=C();return i.a.createElement("div",{className:e.section},i.a.createElement("div",{className:e.services},i.a.createElement("h2",{className:e.title},"Our Portfolio"),i.a.createElement(O,{color:"primary",alignCenter:!0,tabs:[{tabButton:"SALESFORCE",tabContent:i.a.createElement(d.a,{justify:"center"},i.a.createElement(g.a,{xs:12,sm:6,md:4,lg:4},i.a.createElement("img",{alt:"Australian Digital",className:e.imgPortfolio,src:a(114)})),i.a.createElement(g.a,{xs:12,sm:6,md:4,lg:4},i.a.createElement("img",{alt:"Australian Digital",className:e.imgPortfolio,src:a(115)})),i.a.createElement(g.a,{xs:12,sm:6,md:4,lg:4},i.a.createElement("img",{alt:"Australian Digital",className:e.imgPortfolio,src:a(116)})))},{tabButton:"PARTNER",tabContent:i.a.createElement(d.a,{justify:"center"},i.a.createElement(g.a,{xs:12,sm:6,md:4,lg:4},i.a.createElement("img",{alt:"Australian Digital",className:e.imgPortfolio,src:a(114)})),i.a.createElement(g.a,{xs:12,sm:6,md:4,lg:4},i.a.createElement("img",{alt:"Australian Digital",className:e.imgPortfolio,src:a(115)})),i.a.createElement(g.a,{xs:12,sm:6,md:4,lg:4},i.a.createElement("img",{alt:"Australian Digital",className:e.imgPortfolio,src:a(116)})))},{tabButton:"MARKETING AUTOMATION",tabContent:i.a.createElement(d.a,{justify:"center"},i.a.createElement(g.a,{xs:12,sm:6,md:4,lg:4},i.a.createElement("img",{alt:"Australian Digital",className:e.imgPortfolio,src:a(114)})),i.a.createElement(g.a,{xs:12,sm:6,md:4,lg:4},i.a.createElement("img",{alt:"Australian Digital",className:e.imgPortfolio,src:a(115)})),i.a.createElement(g.a,{xs:12,sm:6,md:4,lg:4},i.a.createElement("img",{alt:"Australian Digital",className:e.imgPortfolio,src:a(116)})))}]})))}var w=[],z=Object(l.a)((function(e){var t,a;return{white_main:{backgroundColor:"#ffffff"},container:Object(o.a)({zIndex:"12",color:"#FFFFFF"},x.b),title:Object(o.a)(Object(o.a)({},x.l),{},(t={display:"inline-block",position:"relative",marginTop:"30px",minHeight:"32px",color:"#4B0082",textDecoration:"none"},Object(r.a)(t,e.breakpoints.down("sm"),{fontSize:"1rem"}),Object(r.a)(t,e.breakpoints.up("md"),{fontSize:"2rem"}),Object(r.a)(t,e.breakpoints.up("lg"),{fontSize:"3rem"}),t)),subtitle:(a={fontSize:"1.313rem",maxWidth:"500px",margin:"10px 0",color:"#032d60"},Object(r.a)(a,e.breakpoints.down("sm"),{fontSize:"0.8rem"}),Object(r.a)(a,e.breakpoints.up("md"),{fontSize:"1rem"}),Object(r.a)(a,e.breakpoints.up("lg"),{fontSize:"1.313rem"}),a),main:{background:"#FFFFFF",position:"relative",zIndex:"3"},purpleButton:{background:"#4B0082",borderRadius:"50px",padding:"12px 30px"},yellowButton:{background:"#FFBC42",borderRadius:"50px",padding:"12px 30px"},yellowChip:{color:"#FFBC42",backgroundColor:"#FCA80F21",fontWeight:900},parallax_background:{backgroundColor:"#ffffff"}}}));function y(e){var t=z(),a=Object.assign({},e);return i.a.createElement("div",{className:t.white_main},i.a.createElement(c.a,Object.assign({color:"transparent",routes:w,brand:"Material Kit React",rightLinks:i.a.createElement(m.a,null),fixed:!0,changeColorOnScroll:{height:100,color:"black"}},a)),i.a.createElement("div",{className:t.main},i.a.createElement("div",{className:t.container},i.a.createElement(S,null),i.a.createElement(s.a,null))),i.a.createElement(p.a,null))}}}]);
//# sourceMappingURL=11.5abc11d6.chunk.js.map