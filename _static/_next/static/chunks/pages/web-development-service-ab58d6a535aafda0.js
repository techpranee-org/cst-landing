(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7690],{8396:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r,i=n(7294),o=n(4168),a=n(539),s=n(8974);function l(e,t,n,r,o){let[a,l]=i.useState(()=>o&&n?n(e).matches:r?r(e).matches:t);return(0,s.Z)(()=>{let t=!0;if(!n)return;let r=n(e),i=()=>{t&&l(r.matches)};return i(),r.addListener(i),()=>{t=!1,r.removeListener(i)}},[e,n]),a}let c=(r||(r=n.t(i,2))).useSyncExternalStore;function d(e,t,n,r,o){let a=i.useCallback(()=>t,[t]),s=i.useMemo(()=>{if(o&&n)return()=>n(e).matches;if(null!==r){let{matches:t}=r(e);return()=>t}return a},[a,e,r,o,n]),[l,d]=i.useMemo(()=>{if(null===n)return[a,()=>()=>{}];let t=n(e);return[()=>t.matches,e=>(t.addListener(e),()=>{t.removeListener(e)})]},[a,n,e]),u=c(d,l,s);return u}function u(e,t={}){let n=(0,o.Z)(),r="undefined"!=typeof window&&void 0!==window.matchMedia,{defaultMatches:i=!1,matchMedia:s=r?window.matchMedia:null,ssrMatchMedia:u=null,noSsr:p=!1}=(0,a.Z)({name:"MuiUseMediaQuery",props:t,theme:n}),m="function"==typeof e?e(n):e;m=m.replace(/^@media( ?)/m,"");let h=(void 0!==c?d:l)(m,i,s,u,p);return h}},8974:function(e,t,n){"use strict";var r=n(6600);t.Z=r.Z},6600:function(e,t,n){"use strict";var r=n(7294);let i="undefined"!=typeof window?r.useLayoutEffect:r.useEffect;t.Z=i},9873:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/web-development-service",function(){return n(4474)}])},5677:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){let n=o.default,i={loading:e=>{let{error:t,isLoading:n,pastDelay:r}=e;return null}};e instanceof Promise?i.loader=()=>e:"function"==typeof e?i.loader=e:"object"==typeof e&&(i=r({},i,e)),i=r({},i,t);let l=i.loader,c=()=>null!=l?l().then(a):Promise.resolve(a(()=>null));return(i.loadableGenerated&&delete(i=r({},i,i.loadableGenerated)).loadableGenerated,"boolean"!=typeof i.ssr||i.ssr)?n(r({},i,{loader:c})):(delete i.webpack,delete i.modules,s(n,i))},t.noSSR=s;var r=n(6495).Z,i=n(2648).Z,o=(i(n(7294)),i(n(8976)));function a(e){return{default:(null==e?void 0:e.default)||e}}function s(e,t){return delete t.webpack,delete t.modules,e(t)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2254:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var r=(0,n(2648).Z)(n(7294));let i=r.default.createContext(null);t.LoadableContext=i},8976:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(6495).Z,i=(0,n(2648).Z)(n(7294)),o=n(2254);let a=[],s=[],l=!1;function c(e){let t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(e=>(n.loading=!1,n.loaded=e,e)).catch(e=>{throw n.loading=!1,n.error=e,e}),n}class d{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state=r({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function u(e){return function(e,t){let n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),r=null;function a(){if(!r){let t=new d(e,n);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!l){let e=n.webpack?n.webpack():n.modules;e&&s.push(t=>{for(let n of e)if(-1!==t.indexOf(n))return a()})}function c(e,t){!function(){a();let e=i.default.useContext(o.LoadableContext);e&&Array.isArray(n.modules)&&n.modules.forEach(t=>{e(t)})}();let s=i.default.useSyncExternalStore(r.subscribe,r.getCurrentValue,r.getCurrentValue);return i.default.useImperativeHandle(t,()=>({retry:r.retry}),[]),i.default.useMemo(()=>{var t;return s.loading||s.error?i.default.createElement(n.loading,{isLoading:s.loading,pastDelay:s.pastDelay,timedOut:s.timedOut,error:s.error,retry:r.retry}):s.loaded?i.default.createElement((t=s.loaded)&&t.default?t.default:t,e):null},[e,s])}return c.preload=()=>a(),c.displayName="LoadableComponent",i.default.forwardRef(c)}(c,e)}function p(e,t){let n=[];for(;e.length;){let r=e.pop();n.push(r(t))}return Promise.all(n).then(()=>{if(e.length)return p(e,t)})}u.preloadAll=()=>new Promise((e,t)=>{p(a).then(e,t)}),u.preloadReady=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(t=>{let n=()=>(l=!0,t());p(s,e).then(n,n)})},window.__NEXT_PRELOADREADY=u.preloadReady,t.default=u},5410:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(5944),i=n(7294),o=n(9226);let a=(0,i.forwardRef)((e,t)=>{let{src:n,sx:i,...a}=e;return(0,r.tZ)(o.Z,{component:"span",className:"svg-color",ref:t,sx:{width:24,height:24,display:"inline-block",bgcolor:"currentColor",mask:"url(".concat(n,") no-repeat center / contain"),WebkitMask:"url(".concat(n,") no-repeat center / contain"),...i},...a})});var s=a},9828:function(e,t,n){"use strict";n.d(t,{Z:function(){return o},z:function(){return a}});var r=n(2734),i=n(8396);function o(e,t,n){let o=(0,r.Z)(),a=(0,i.Z)(o.breakpoints.up(t)),s=(0,i.Z)(o.breakpoints.down(t)),l=(0,i.Z)(o.breakpoints.between(t,n)),c=(0,i.Z)(o.breakpoints.only(t));return"up"===e?a:"down"===e?s:"between"===e?l:c}function a(){let e=(0,r.Z)(),t=[...e.breakpoints.keys].reverse();return t.reduce((t,n)=>{let r=(0,i.Z)(e.breakpoints.up(n));return!t&&r?n:t},null)||"xs"}},3640:function(e,t,n){"use strict";var r=n(5152),i=n.n(r);let o=i()(()=>Promise.all([n.e(7925),n.e(9385),n.e(2183),n.e(344),n.e(8422),n.e(8594),n.e(1422),n.e(942),n.e(8193)]).then(n.bind(n,8193)),{loadableGenerated:{webpack:()=>[8193]}});t.Z=o},4474:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return P}});var r=n(5944),i=n(9008),o=n.n(i),a=n(3640),s=n(948),l=n(1796),c=n(5582),d=n(1426),u=n(1233),p=n(5861),m=n(8490);let h=(0,s.ZP)("div")(e=>{let{theme:t}=e;return{...(0,m.v3)({startColor:"".concat((0,l.Fq)(t.palette.common.black,0)," 0%"),endColor:"".concat(t.palette.common.black," 75%"),imgUrl:"/assets/images/marketing/marketing_services_hero.jpg"}),padding:t.spacing(15,0),[t.breakpoints.up("md")]:{padding:t.spacing(20,0)}}});function g(){return(0,r.tZ)(h,{children:(0,r.tZ)(c.Z,{children:(0,r.tZ)(d.Z,{container:!0,spacing:3,justifyContent:"center",children:(0,r.tZ)(d.Z,{xs:12,md:8,children:(0,r.BX)(u.Z,{spacing:3,sx:{mb:5,mx:"auto",maxWidth:480,textAlign:"center",color:"common.white"},children:[(0,r.BX)(p.Z,{variant:"h1",children:[(0,r.tZ)("span",{style:{fontSize:"20px"},children:"Empowering Businesses with Cutting-Edge Web Development"}),(0,r.tZ)("br",{}),"Web Development Service"]}),(0,r.tZ)(p.Z,{sx:{opacity:.72},children:"Scalable, Secure & High-Performance Web Solutions"})]})})})})})}function f(){return(0,r.tZ)(c.Z,{sx:{pt:{xs:10,md:15},pb:{xs:5,md:10}},children:(0,r.BX)(d.Z,{container:!0,spacing:3,justifyContent:"space-between",alignItems:"center",children:[(0,r.tZ)(d.Z,{xs:12,md:6,lg:5,children:(0,r.tZ)("img",{alt:"services",src:"/assets/illustrations/illustration_services.svg"})}),(0,r.tZ)(d.Z,{xs:12,md:6,lg:6,children:(0,r.BX)(u.Z,{spacing:3,sx:{mb:5},children:[(0,r.tZ)(p.Z,{variant:"h2",children:"Web Development Solutions"}),(0,r.tZ)(p.Z,{sx:{color:"text.secondary"},children:"In today’s digital era, having a strong online presence is essential for business success. At California SoftTech, we specialize in custom web development that is tailored to your business needs. Our team of experienced developers builds scalable, secure, and high-performance websites and web applications that enhance user experience and drive growth."})]})})]})})}var b=n(9226),v=n(5410);let Z=[{title:"Tailor-Made Solutions",description:"We develop websites and applications customized to your unique business needs.",icon:"/assets/icons/ic_statistics.svg"},{title:"User-Centric Design",description:"Our web solutions prioritize intuitive navigation and seamless user experiences.",icon:"/assets/icons/ic_social_media.svg"},{title:"Scalability & Performance",description:"We build fast, secure, and scalable websites that grow with your business.",icon:"/assets/icons/ic_real_time.svg"},{title:"Latest Technologies",description:"Our team leverages modern frameworks and tools for robust web development.",icon:"/assets/icons/ic_checklist.svg"},{title:"End-to-End Support",description:"From planning to deployment and maintenance, we provide full-cycle web development services.",icon:"/assets/icons/ic_report.svg"}];function y(){return(0,r.BX)(c.Z,{sx:{textAlign:"center",pt:{xs:5,md:10},pb:{xs:10,md:15}},children:[(0,r.tZ)(p.Z,{variant:"h2",children:"Why Choose Our Web Development Services?"}),(0,r.tZ)(p.Z,{sx:{mt:3,mx:"auto",maxWidth:480,color:"text.secondary",mb:{xs:8,md:10}},children:"Building a website isn’t just about design—it’s about creating a seamless, engaging, and high-performing digital experience. Whether you need a simple website, a complex web application, or an eCommerce platform, we ensure fast, secure, and scalable solutions that help your business stand out."}),(0,r.tZ)(b.Z,{sx:{rowGap:8,columnGap:10,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"}},children:Z.map(e=>(0,r.BX)("div",{children:[(0,r.tZ)(v.Z,{src:e.icon,color:"info",sx:{width:64,height:64,mx:"auto",bgcolor:"primary.main"}}),(0,r.tZ)(p.Z,{variant:"h5",sx:{mt:5,mb:2,color:e=>"light"===e.palette.mode?"":e.palette.primary.light},children:e.title}),(0,r.BX)(p.Z,{sx:{color:"text.secondary"},children:[" ",e.description," "]})]},e.title))})]})}var x=n(9828);let _=[{title:"Custom Website Development",description:"Tailored web solutions designed for your unique business needs.",iconColor:"primary"},{title:"Responsive & Mobile-First Design",description:"Optimized for all devices and screen sizes.",iconColor:"success"},{title:"eCommerce Development",description:"Robust, secure, and user-friendly online stores.",iconColor:"secondary"},{title:"Full-Stack Web Applications",description:"Frontend & backend solutions with modern technologies.",iconColor:"secondary"},{title:"CMS Development ",description:"WordPress, Drupal, and custom CMS solutions for easy content management.",iconColor:"success"},{title:"API Development & Integration",description:"Seamless connectivity with third-party applications.",iconColor:"primary"}];function w(){let e=(0,x.Z)("up","md");return(0,r.tZ)(b.Z,{sx:{bgcolor:"background.neutral",py:{xs:10,md:10}},children:(0,r.BX)(c.Z,{children:[(0,r.tZ)(p.Z,{variant:"h2",sx:{textAlign:"center"},children:"Our Web Development Capabilities"}),(0,r.tZ)(p.Z,{sx:{mt:3,mx:"auto",opacity:.72,maxWidth:480,textAlign:"center",mb:{xs:8,md:10},color:e=>"light"===e.palette.mode?e.palette.grey[800]:e.palette.secondary.contrastText},children:"At California SoftTech, we offer comprehensive web development services that cater to businesses of all sizes. Our expertise spans across front-end and back-end development, UI/UX design, API integrations, and cloud-based solutions."}),(0,r.BX)(b.Z,{sx:{display:"grid",alignItems:"center",gap:{xs:4,md:8},gridTemplateColumns:{md:"repeat(3, 1fr)"}},children:[(0,r.tZ)(u.Z,{spacing:{xs:4,md:10},children:_.slice(0,3).map((e,t)=>(0,r.tZ)(k,{benefit:e,index:t,reverse:!0},e.title))}),e&&(0,r.tZ)("img",{alt:"benefits",src:"/assets/illustrations/illustration_benefits.svg"}),(0,r.tZ)(u.Z,{spacing:{xs:4,md:10},children:_.slice(-3).map((e,t)=>(0,r.tZ)(k,{benefit:e,index:t},e.title))})]}),(0,r.tZ)(p.Z,{sx:{mt:10,mx:"auto",opacity:.72,maxWidth:480,textAlign:"center",mb:{xs:8,md:10},color:e=>"light"===e.palette.mode?e.palette.grey[800]:e.palette.secondary.contrastText},children:"From startups to enterprises, we deliver high-quality, future-proof web solutions that drive engagement and business success."})]})})}function k(e){let{benefit:t,reverse:n,index:i}=e,{title:o,description:a,iconColor:s}=t;return(0,r.BX)(u.Z,{spacing:1,direction:{xs:"row",md:n?"row-reverse":"row"},sx:{...n&&{textAlign:{md:"right"}},...1===i&&{pl:{md:6},...n&&{pl:{md:0},pr:{md:6}}}},children:[(0,r.tZ)(b.Z,{sx:{m:1,width:16,height:16,flexShrink:0,borderRadius:"50%",background:e=>"linear-gradient(to bottom, ".concat(e.palette.primary.light,", ").concat(e.palette.primary.main,")"),..."secondary"===s&&{background:e=>"linear-gradient(to bottom, ".concat(e.palette.secondary.light,", ").concat(e.palette.secondary.main,")")},..."success"===s&&{background:e=>"linear-gradient(to bottom, ".concat(e.palette.success.light,", ").concat(e.palette.success.main,")")}}}),(0,r.BX)(u.Z,{spacing:1,children:[(0,r.tZ)(p.Z,{variant:"h5",sx:{color:e=>"light"===e.palette.mode?"":e.palette.primary.light},children:o}),(0,r.tZ)(p.Z,{variant:"body2",sx:{color:"text.secondary"},children:a})]})]})}function C(){return(0,r.BX)(r.HY,{children:[(0,r.tZ)(g,{}),(0,r.tZ)(f,{}),(0,r.tZ)(y,{}),(0,r.tZ)(w,{})]})}function P(){return(0,r.BX)(r.HY,{children:[(0,r.BX)(o(),{children:[(0,r.tZ)("link",{rel:"shortcut icon",href:"https://techpranee.com/digital-branding/",type:"image/x-icon"}),(0,r.tZ)("title",{children:"TechPranee a Professional Branding and Marketing Agency"}),(0,r.tZ)("meta",{name:"description",content:" TechPranee is a top-notch branding and marketing agency, delivering professional solutions to elevate your business."}),(0,r.tZ)("meta",{name:"keywords",content:"branding and marketing agency   brand development services   digital branding services   branding solutions for small business"}),(0,r.tZ)("meta",{name:"og:title",content:"TechPranee a Professional Branding and Marketing Agency"}),(0,r.tZ)("meta",{name:"og:url",content:"https://techpranee.com/digital-branding"}),(0,r.tZ)("meta",{name:"og:image",content:"https://tparticles.s3.ap-south-1.amazonaws.com/How_to_Grow_your_Business_using_content_marketing_d814399fd6.png"}),(0,r.tZ)("meta",{name:"og:site_name",content:"Techpranee"}),(0,r.tZ)("meta",{name:"og:description",content:"TechPranee is a top-notch branding and marketing agency, delivering professional solutions to elevate your business."})]}),(0,r.tZ)(C,{})]})}P.getLayout=e=>(0,r.tZ)(a.Z,{children:e})},8490:function(e,t,n){"use strict";n.d(t,{Ls:function(){return i},v3:function(){return o}});var r=n(1796);function i(e){let t=(null==e?void 0:e.color)||"#000000",n=(null==e?void 0:e.blur)||6,i=(null==e?void 0:e.opacity)||.8,o=null==e?void 0:e.imgUrl;return o?{position:"relative",backgroundImage:"url(".concat(o,")"),"&:before":{position:"absolute",top:0,left:0,zIndex:9,content:'""',width:"100%",height:"100%",backdropFilter:"blur(".concat(n,"px)"),WebkitBackdropFilter:"blur(".concat(n,"px)"),backgroundColor:(0,r.Fq)(t,i)}}:{backdropFilter:"blur(".concat(n,"px)"),WebkitBackdropFilter:"blur(".concat(n,"px)"),backgroundColor:(0,r.Fq)(t,i)}}function o(e){let t=(null==e?void 0:e.direction)||"to bottom",n=null==e?void 0:e.startColor,r=null==e?void 0:e.endColor,i=null==e?void 0:e.imgUrl,o=null==e?void 0:e.color;return i?{background:"linear-gradient(".concat(t,", ").concat(n||o,", ").concat(r||o,"), url(").concat(i,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center center"}:{background:"linear-gradient(".concat(t,", ").concat(n,", ").concat(r,")")}}},5152:function(e,t,n){e.exports=n(5677)}},function(e){e.O(0,[4142,9774,2888,179],function(){return e(e.s=9873)}),_N_E=e.O()}]);