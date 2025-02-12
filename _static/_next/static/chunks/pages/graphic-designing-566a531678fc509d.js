(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5945],{7109:function(e,t,n){"use strict";n.d(t,{Z:function(){return _}});var i,r=n(3366),a=n(7462),o=n(7294),s=n(6010),c=n(4780),l=n(8216),d=n(5861),m=n(7167),h=n(4423),p=n(948),g=n(1588),u=n(4867);function Z(e){return(0,u.Z)("MuiInputAdornment",e)}let v=(0,g.Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var b=n(1657),x=n(5893);let f=["children","className","component","disablePointerEvents","disableTypography","position","variant"],y=(e,t)=>{let{ownerState:n}=e;return[t.root,t[`position${(0,l.Z)(n.position)}`],!0===n.disablePointerEvents&&t.disablePointerEvents,t[n.variant]]},w=e=>{let{classes:t,disablePointerEvents:n,hiddenLabel:i,position:r,size:a,variant:o}=e,s={root:["root",n&&"disablePointerEvents",r&&`position${(0,l.Z)(r)}`,o,i&&"hiddenLabel",a&&`size${(0,l.Z)(a)}`]};return(0,c.Z)(s,Z,t)},k=(0,p.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:y})(({theme:e,ownerState:t})=>(0,a.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(e.vars||e).palette.action.active},"filled"===t.variant&&{[`&.${v.positionStart}&:not(.${v.hiddenLabel})`]:{marginTop:16}},"start"===t.position&&{marginRight:8},"end"===t.position&&{marginLeft:8},!0===t.disablePointerEvents&&{pointerEvents:"none"})),C=o.forwardRef(function(e,t){let n=(0,b.Z)({props:e,name:"MuiInputAdornment"}),{children:c,className:l,component:p="div",disablePointerEvents:g=!1,disableTypography:u=!1,position:Z,variant:v}=n,y=(0,r.Z)(n,f),C=(0,h.Z)()||{},_=v;v&&C.variant,C&&!_&&(_=C.variant);let B=(0,a.Z)({},n,{hiddenLabel:C.hiddenLabel,size:C.size,disablePointerEvents:g,position:Z,variant:_}),X=w(B);return(0,x.jsx)(m.Z.Provider,{value:null,children:(0,x.jsx)(k,(0,a.Z)({as:p,ownerState:B,className:(0,s.Z)(X.root,l),ref:t},y,{children:"string"!=typeof c||u?(0,x.jsxs)(o.Fragment,{children:["start"===Z?i||(i=(0,x.jsx)("span",{className:"notranslate",children:"​"})):null,c]}):(0,x.jsx)(d.Z,{color:"text.secondary",children:c})}))})});var _=C},3180:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/graphic-designing",function(){return n(342)}])},342:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ea}});var i=n(5944),r=n(9008),a=n.n(r),o=n(3640);n(7294),n(6768);var s=n(8331),c=n(7979),l=n(948),d=n(1796),m=n(8490);(0,l.ZP)("div")(e=>{let{theme:t}=e;return{...(0,m.v3)({color:(0,d.Fq)(t.palette.background.default,.9),imgUrl:"/assets/background/overlay_1.jpg"}),overflow:"hidden"}}),n(9552);var h=n(6485),p=n(5582),g=n(1426),u=n(5861),Z=n(1233),v=n(3321),b=n(6310),x=n(7536),f=n(7533);let y=(0,l.ZP)("div")(e=>{let{theme:t}=e;return{...(0,m.v3)({color:(0,d.Fq)(t.palette.grey[900],0),imgUrl:"/assets/images/marketing/marketing_get_free_seo.jpg"}),padding:t.spacing(10,0),overflow:"hidden",[t.breakpoints.up("md")]:{padding:t.spacing(15,0)}}}),w=(0,l.ZP)(e=>(0,i.tZ)(h.Z,{fullWidth:!0,...e}))(e=>{let{theme:t}=e;return{"& .MuiInputBase-input":{color:t.palette.common.white},"& .MuiInputLabel-root,& .MuiInputLabel-root.Mui-focused":{color:t.palette.grey[500]}}}),k=b.Ry().shape({name:b.Z_().required("Name is required"),email:b.Z_().required("Email is required").email("Invalid email"),phoneNumber:b.Z_().required("Phone Number is required"),website:b.Z_().required("Website is required")});function C(){let e={name:"",email:"",phoneNumber:"",website:""},{handleSubmit:t,control:n,reset:r}=(0,x.cI)({resolver:(0,f.X)(k),defaultValues:e}),a=async t=>{try{let n={data:{Name:t.name,Email:t.email,Message:t.website,phone:t.phoneNumber}},i=await fetch("https://content.techpranee.com/api/leads",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}),a=await i.json();i.ok?r(e):console.error("API Error:",a)}catch(e){console.error("An error occurred:",e)}};return(0,i.tZ)(y,{children:(0,i.tZ)(p.Z,{children:(0,i.BX)(g.Z,{container:!0,spacing:{xs:5,md:3},justifyContent:"space-between",children:[(0,i.BX)(g.Z,{xs:12,md:5,children:[(0,i.tZ)(u.Z,{variant:"h1",component:"h2",sx:{color:"primary.main",mb:{xs:3,md:8},textAlign:{xs:"center",md:"left"}},children:"Ready to Make a Visual Statement?"}),(0,i.tZ)(Z.Z,{direction:"row",alignItems:"center",justifyContent:{xs:"center",md:"flex-start"},sx:{color:"common.white"},children:"Let's turn your ideas into captivating designs. Contact us today for a consultation and let's embark on a journey of creative excellence."})]}),(0,i.tZ)(g.Z,{xs:12,md:5,children:(0,i.tZ)("form",{onSubmit:t(a),children:(0,i.BX)(Z.Z,{alignItems:{xs:"center",md:"flex-start"},children:[(0,i.tZ)(x.Qr,{name:"name",control:n,render:e=>{let{field:t,fieldState:n}=e;return(0,i.BX)(i.HY,{children:[(0,i.tZ)(w,{...t,variant:"filled",label:"Name",sx:{mb:2.5}}),n.error&&(0,i.tZ)(u.Z,{variant:"caption",color:"error",sx:{mt:-2,mb:2.5},children:n.error.message})]})}}),(0,i.tZ)(x.Qr,{name:"email",control:n,render:e=>{let{field:t,fieldState:n}=e;return(0,i.BX)(i.HY,{children:[(0,i.tZ)(w,{...t,variant:"filled",label:"Email",sx:{mb:2.5}}),n.error&&(0,i.tZ)(u.Z,{variant:"caption",color:"error",sx:{mt:-2,mb:2.5},children:n.error.message})]})}}),(0,i.tZ)(x.Qr,{name:"phoneNumber",control:n,render:e=>{let{field:t,fieldState:n}=e;return(0,i.BX)(i.HY,{children:[(0,i.tZ)(w,{...t,variant:"filled",label:"Phone",sx:{mb:2.5}}),n.error&&(0,i.tZ)(u.Z,{variant:"caption",color:"error",sx:{mt:-2,mb:2.5},children:n.error.message})]})}}),(0,i.tZ)(x.Qr,{name:"website",control:n,render:e=>{let{field:t,fieldState:n}=e;return(0,i.BX)(i.HY,{children:[(0,i.tZ)(w,{...t,variant:"filled",label:"Website URL / Brand Name",sx:{mb:5}}),n.error&&(0,i.tZ)(u.Z,{variant:"caption",color:"error",sx:{mt:-4.5,mb:2.5},children:n.error.message})]})}}),(0,i.tZ)(v.Z,{size:"large",type:"submit",variant:"contained",children:"Send Request"})]})})})]})})})}var _=n(5410),B=n(1664),X=n.n(B),P=n(6662);n(2037),n(1456),P.H.marketing.services,P.H.marketing.services,P.H.marketing.services,P.H.marketing.services,P.H.marketing.services,P.H.marketing.services,P.H.marketing.services,P.H.marketing.services,n(8826),(0,l.ZP)("div")(e=>{let{theme:t}=e;return{...(0,m.v3)({startColor:"".concat((0,d.Fq)(t.palette.common.black,.48)," 0%"),endColor:"".concat((0,d.Fq)(t.palette.common.black,.48)," 100%")}),top:0,left:0,zIndex:8,width:"100%",height:"100%",position:"absolute"}});var E=n(9226);let I=["Creative Visionaries","Strategic Design","Collaborative Process","Attention to Detail","Diverse Expertise"];function S(){return(0,i.tZ)(p.Z,{sx:{pt:{xs:10,md:15},pb:{xs:5,md:10}},children:(0,i.BX)(g.Z,{container:!0,spacing:3,justifyContent:"space-between",alignItems:"center",children:[(0,i.tZ)(g.Z,{xs:12,md:6,lg:5,children:(0,i.tZ)(s.Z,{alt:"services",src:"/assets/illustrations/illustration_services.svg"})}),(0,i.BX)(g.Z,{xs:12,md:6,lg:6,children:[(0,i.BX)(Z.Z,{spacing:3,sx:{mb:5},children:[(0,i.tZ)(u.Z,{variant:"h2",children:"Graphic Designing"}),(0,i.tZ)(u.Z,{sx:{color:"text.secondary"},children:"Graphic design is the language of visuals. It's about conveying messages, emotions, and information through compelling imagery. At Techpranee we understand that design is not just about aesthetics – it's about communication that resonates."}),(0,i.tZ)(Z.Z,{spacing:2,children:I.map(e=>(0,i.BX)(Z.Z,{direction:"row",alignItems:"center",children:[(0,i.tZ)(E.Z,{component:"span",sx:{mr:2,width:6,height:6,borderRadius:"50%",bgcolor:"primary.main"}}),e]},e))})]}),(0,i.tZ)(v.Z,{component:X(),href:P.H.marketing.caseStudies,size:"large",color:"inherit",variant:"outlined",endIcon:(0,i.tZ)(c.Z,{icon:"carbon:chevron-right"}),children:"Check Our Work"})]})]})})}var q=n(3032),N=n(7109),A=n(9828),D=n(1163),j=n(2941),H=n(6486);let T=(0,l.ZP)("div")(e=>{let{theme:t}=e;return{...(0,m.v3)({startColor:"".concat((0,d.Fq)(t.palette.common.black,0)," 0%"),endColor:"".concat(t.palette.common.black," 75%"),imgUrl:"/assets/images/marketing/marketing_services_hero.jpg"}),padding:t.spacing(15,0),[t.breakpoints.up("md")]:{padding:t.spacing(20,0)}}}),M=(0,l.ZP)(e=>(0,i.tZ)(q.ZP,{fullWidth:!0,...e}))(e=>{let{theme:t}=e;return{...t.typography.body1,height:56,paddingLeft:t.spacing(1.5),borderRadius:t.shape.borderRadius,backgroundColor:t.palette.common.white}}),R=b.Ry().shape({email:b.Z_().required("Email is required").email("Invalid email"),name:b.Z_().required("BarndName is required"),phoneNumber:b.Z_().required("Phone number is required").matches(/^\d{10}$/,"Invalid phone number")});function W(){return(0,i.tZ)(T,{children:(0,i.tZ)(p.Z,{children:(0,i.tZ)(g.Z,{container:!0,spacing:3,justifyContent:"center",children:(0,i.BX)(g.Z,{xs:12,md:8,children:[(0,i.BX)(Z.Z,{spacing:3,sx:{mb:5,mx:"auto",maxWidth:480,textAlign:"center",color:"common.white"},children:[(0,i.tZ)(u.Z,{variant:"h1",children:"Creative Design Services"}),(0,i.tZ)(u.Z,{sx:{opacity:.72},children:"Transform your ideas to reality !"}),(0,i.tZ)(u.Z,{sx:{opacity:.72},children:"In today's visually-driven world, standing out requires more than just words – it demands captivating visuals that tell your brand's story. Let techpranee be your creative partner in transforming ideas into stunning visuals that leave a lasting impact."})]}),(0,i.tZ)(L,{})]})})})})}function L(){let{asPath:e,pathname:t}=(0,D.useRouter)(),n=(0,A.Z)("up","md"),r={email:"",name:"",phoneNumber:""},{handleSubmit:a,control:o,reset:s}=(0,x.cI)({resolver:(0,f.X)(R),defaultValues:r}),l=async e=>{let n=t.substring(1);try{let t={data:{Email:e.email,Name:e.name,phone:e.phoneNumber,Service:(0,j.V)(n)}},i=await fetch("https://content.techpranee.com/api/leads",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),a=await i.json();i.ok?s(r):console.error("API Error:",a)}catch(e){console.error("An error occurred:",e)}},d=(0,H.debounce)(l,3e3),m=e=>{d(e)};return(0,i.tZ)("form",{onSubmit:a(m),children:(0,i.BX)(Z.Z,{spacing:2.5,direction:{xs:"column",md:"row"},alignItems:{md:"start"},children:[(0,i.tZ)(Z.Z,{sx:{width:"100%"},children:(0,i.tZ)(x.Qr,{name:"email",control:o,render:e=>{let{field:t,fieldState:n}=e;return(0,i.BX)(i.HY,{children:[(0,i.tZ)(M,{...t,startAdornment:(0,i.tZ)(N.Z,{position:"start",children:(0,i.tZ)(c.Z,{icon:"carbon:email",width:24,sx:{color:"text.disabled"}})}),placeholder:"Email"}),n.error&&(0,i.tZ)(u.Z,{variant:"caption",color:"error",children:n.error.message})]})}})}),(0,i.tZ)(Z.Z,{sx:{width:"100%"},children:(0,i.tZ)(x.Qr,{name:"name",control:o,render:e=>{let{field:t,fieldState:n}=e;return(0,i.BX)(i.HY,{children:[(0,i.tZ)(M,{...t,startAdornment:(0,i.tZ)(N.Z,{position:"start",children:(0,i.tZ)(c.Z,{icon:"iconoir:xbox-b",width:24,sx:{color:"text.disabled"}})}),placeholder:"Brand name"}),n.error&&(0,i.tZ)(u.Z,{variant:"caption",color:"error",children:n.error.message})]})}})}),(0,i.tZ)(Z.Z,{sx:{width:"100%"},children:(0,i.tZ)(x.Qr,{name:"phoneNumber",control:o,render:e=>{let{field:t,fieldState:n}=e;return(0,i.BX)(i.HY,{children:[(0,i.tZ)(M,{...t,startAdornment:(0,i.tZ)(N.Z,{position:"start",children:(0,i.tZ)(c.Z,{icon:"carbon:phone",width:24,sx:{color:"text.disabled"}})}),placeholder:"Phone Number"}),n.error&&(0,i.tZ)(u.Z,{variant:"caption",color:"error",children:n.error.message})]})}})}),(0,i.tZ)(v.Z,{fullWidth:!n,type:"submit",size:"large",variant:"contained",sx:{height:"55px",paddingX:"40px"},children:"enquire"})]})})}let z=[{title:"Infographics & Illustration",description:"Convey complex information visually through graphics and artwork.",icon:"/assets/icons/ic_statistics.svg"},{title:"Digital Posters & Banners",description:"Create eye-catching online ads and announcements with impactful visuals.",icon:"/assets/icons/ic_social_media.svg"},{title:"Catalogs & Digital Menu",description:"Showcase products or services digitally for easy browsing and selection.",icon:"/assets/icons/ic_real_time.svg"},{title:"Presentations & Decks",description:"Design visually engaging slides to enhance presentations and informative talks.",icon:"/assets/icons/ic_checklist.svg"}];function F(){return(0,i.BX)(p.Z,{sx:{textAlign:"center",pt:{xs:5,md:10},pb:{xs:10,md:15}},children:[(0,i.tZ)(u.Z,{variant:"h2",children:"Services Include"}),(0,i.tZ)(u.Z,{sx:{mt:3,mx:"auto",maxWidth:480,color:"text.secondary",mb:{xs:8,md:10}},children:"Elevate your business's visual communication with our expertise"}),(0,i.tZ)(E.Z,{sx:{rowGap:8,columnGap:10,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"}},children:z.map(e=>(0,i.BX)("div",{children:[(0,i.tZ)(_.Z,{src:e.icon,color:"info",sx:{width:64,height:64,mx:"auto",bgcolor:"primary.main"}}),(0,i.tZ)(u.Z,{variant:"h5",sx:{mt:5,mb:2},children:e.title}),(0,i.BX)(u.Z,{sx:{color:"text.secondary"},children:[" ",e.description," "]})]},e.title))})]})}let G=[{title:"Strong Brand Identity",description:"Professional designs establish a consistent and memorable brand identity.",iconColor:"primary"},{title:"Effective Communication",description:" Graphics simplify complex information for clearer messaging.",iconColor:"success"},{title:"Enhanced Marketing",description:"Well-designed materials capture attention and communicate value.    ",iconColor:"secondary"},{title:"Engaging Content",description:"Graphics for digital platforms increase user engagement.",iconColor:"secondary"},{title:"Consistency",description:" Designers ensure visuals are uniform across all channels.",iconColor:"success"},{title:"Creativity and Credibility",description:"Customized designs enhance creativity and boost brand credibility.",iconColor:"primary"}];function U(){let e=(0,A.Z)("up","md");return(0,i.tZ)(E.Z,{sx:{bgcolor:"background.neutral",py:{xs:10,md:15}},children:(0,i.BX)(p.Z,{children:[(0,i.tZ)(u.Z,{variant:"h2",sx:{textAlign:"center"},children:"Benefits of Graphic Desinging"}),(0,i.tZ)(u.Z,{sx:{mt:3,mx:"auto",opacity:.72,maxWidth:480,textAlign:"center",mb:{xs:8,md:10}},children:"From eye-catching graphics to cohesive branding, discover how our graphic designing services enhance user experience and contribute to long-term brand loyalty"}),(0,i.BX)(E.Z,{sx:{display:"grid",alignItems:"center",gap:{xs:4,md:8},gridTemplateColumns:{md:"repeat(3, 1fr)"}},children:[(0,i.tZ)(Z.Z,{spacing:{xs:4,md:10},children:G.slice(0,3).map((e,t)=>(0,i.tZ)(Y,{benefit:e,index:t,reverse:!0},e.title))}),e&&(0,i.tZ)(s.Z,{alt:"benefits",src:"/assets/illustrations/illustration_benefits.svg"}),(0,i.tZ)(Z.Z,{spacing:{xs:4,md:10},children:G.slice(-3).map((e,t)=>(0,i.tZ)(Y,{benefit:e,index:t},e.title))})]})]})})}function Y(e){let{benefit:t,reverse:n,index:r}=e,{title:a,description:o,iconColor:s}=t;return(0,i.BX)(Z.Z,{spacing:1,direction:{xs:"row",md:n?"row-reverse":"row"},sx:{...n&&{textAlign:{md:"right"}},...1===r&&{pl:{md:6},...n&&{pl:{md:0},pr:{md:6}}}},children:[(0,i.tZ)(E.Z,{sx:{m:1,width:16,height:16,flexShrink:0,borderRadius:"50%",background:e=>"linear-gradient(to bottom, ".concat(e.palette.primary.light,", ").concat(e.palette.primary.main,")"),..."secondary"===s&&{background:e=>"linear-gradient(to bottom, ".concat(e.palette.secondary.light,", ").concat(e.palette.secondary.main,")")},..."success"===s&&{background:e=>"linear-gradient(to bottom, ".concat(e.palette.success.light,", ").concat(e.palette.success.main,")")}}}),(0,i.BX)(Z.Z,{spacing:1,children:[(0,i.tZ)(u.Z,{variant:"h5",children:a}),(0,i.tZ)(u.Z,{variant:"body2",sx:{color:"text.secondary"},children:o})]})]})}var O=n(6599),Q=n(7413),V=n(9601),$=n(7494),J=n(1221),K=n(2162);let ee=[{step:"STEP 1",title:"Requirement Gathering and Conceptualization",description:["Understanding the company's branding, goals, target audience, requirements and preferences"]},{step:"STEP 2",title:"Design Development",description:["Developing comprehensive designs incorporating colors, typography, and visual elements as per brand's identity and message."]},{step:"STEP 3",title:"Client Collaboration and Iteration",description:["Collaborate closely with the client to make necessary revisions and adjustments to meet their vision and expectations."]},{step:"STEP 4",title:"Finalization and Delivery",description:["Prepare the final version with all required assets and formats suitable for various platforms, both digital and print."]}],et=["primary","secondary","warning","success"],en=(0,l.ZP)("div")(e=>{let{theme:t}=e;return{...(0,m.v3)({color:(0,d.Fq)(t.palette.grey[900],.8),imgUrl:"/assets/background/overlay_2.jpg"}),padding:t.spacing(10,0),color:t.palette.common.white,[t.breakpoints.up("md")]:{padding:t.spacing(15,0)}}});function ei(){let e=(0,A.Z)("up","md");return(0,i.tZ)(en,{children:(0,i.BX)(p.Z,{children:[(0,i.tZ)(u.Z,{variant:"h2",sx:{textAlign:"center"},children:"How Graphic Designing Works"}),(0,i.tZ)(u.Z,{sx:{mt:3,mx:"auto",opacity:.72,maxWidth:480,textAlign:"center",mb:{xs:8,md:10}},children:"From idea to creation, our graphic designing process ensures your vision comes to life"}),(0,i.tZ)(O.Z,{position:e?"alternate":"right",children:ee.map((t,n)=>(0,i.BX)(Q.Z,{sx:{"&:before":{...!e&&{display:"none"}}},children:[(0,i.BX)(V.Z,{children:[(0,i.tZ)($.Z,{color:et[n]}),(0,i.tZ)(J.Z,{})]}),(0,i.BX)(K.Z,{sx:{pb:{xs:3,md:5}},children:[(0,i.tZ)(u.Z,{variant:"overline",sx:{color:"".concat(et[n],".main")},children:t.step}),(0,i.tZ)(u.Z,{variant:"h4",sx:{mt:.5,mb:1},children:t.title}),t.description.map((e,t)=>(0,i.tZ)(u.Z,{variant:"body2",sx:{opacity:.72,maxWidth:{md:360},...n%2&&{ml:"auto"}},children:e},t))]})]},t.title))})]})})}function er(){return(0,i.BX)(i.HY,{children:[(0,i.tZ)(W,{}),(0,i.tZ)(S,{}),(0,i.tZ)(F,{}),(0,i.tZ)(U,{}),(0,i.tZ)(ei,{}),(0,i.tZ)(C,{})]})}function ea(){return(0,i.BX)(i.HY,{children:[(0,i.BX)(a(),{children:[(0,i.tZ)("link",{rel:"shortcut icon",href:"https://techpranee.com/graphic-designing/",type:"image/x-icon"}),(0,i.tZ)("title",{children:"Cutting-Edge Creative Design Services: Unleashing Innovation"}),(0,i.tZ)("meta",{name:"main keyword",content:"creative design services"}),(0,i.tZ)("meta",{name:"description",content:"Unleash digital success with our premier online advertising agency. Drive growth and achieve results with our expert strategies."}),(0,i.tZ)("meta",{name:"keywords",content:"creative design services   graphic design services in india   creative graphic design ideas   creative graphics logo   best service logo"}),(0,i.tZ)("meta",{name:"og:title",content:"Cutting-Edge Creative Design Services: Unleashing Innovation"}),(0,i.tZ)("meta",{name:"og:url",content:"https://techpranee.com/graphic-desiging"}),(0,i.tZ)("meta",{name:"og:image",content:"https://tparticles.s3.ap-south-1.amazonaws.com/open_recruitment_ui_ux_designer_instagram_post_96fbd28d62.png"}),(0,i.tZ)("meta",{name:"og:site_name",content:"Techpranee"}),(0,i.tZ)("meta",{name:"og:description",content:"Unleash digital success with our premier online advertising agency. Drive growth and achieve results with our expert strategies."})]}),(0,i.tZ)(er,{})]})}ea.getLayout=e=>(0,i.tZ)(o.Z,{children:e})},2941:function(e,t,n){"use strict";function i(e){let t;switch(e){case"digital-branding":t="Content Marketing";break;case"web-development":t="Website development";break;case"seo":t="Search Engine Optimisation";break;case"online-advertising":t="Ads Marketing";break;case"digital-marketing":t="Digital Marketing";break;case"graphic-designing":t="Graphic Designing";break;default:t=""}return t}n.d(t,{V:function(){return i}})}},function(e){e.O(0,[3662,4142,7925,9385,2183,7609,7975,942,5941,9774,2888,179],function(){return e(e.s=3180)}),_N_E=e.O()}]);