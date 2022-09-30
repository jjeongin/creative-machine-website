"use strict";(self.webpackChunkcreative_machine=self.webpackChunkcreative_machine||[]).push([[339],{72:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var n;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,n=!1,a=!1,r=0;r<e.length;r++){var i=e[r];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,r)+"-"+e.slice(r),t=!1,a=n,n=!0,r++):n&&a&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,r-1)+"-"+e.slice(r-1),a=n,n=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,a=n,n=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),n=e,t.pascalCase?n.charAt(0).toUpperCase()+n.slice(1):n)};e.exports=t,e.exports.default=t},6296:function(e,t,n){n.d(t,{G:function(){return O},L:function(){return f},M:function(){return x},P:function(){return w},S:function(){return R},_:function(){return c},a:function(){return o},b:function(){return l},g:function(){return s},h:function(){return u}});var a=n(7294),r=(n(72),n(5697)),i=n.n(r);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t.indexOf(n=i[a])>=0||(r[n]=e[n]);return r}var u=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function l(e,t,n,a,r){return void 0===r&&(r={}),o({},n,{loading:a,shouldLoad:e,"data-main-image":"",style:o({},r,{opacity:t?1:0})})}function s(e,t,n,a,r,i,c,u){var l={};i&&(l.backgroundColor=i,"fixed"===n?(l.width=a,l.height=r,l.backgroundColor=i,l.position="relative"):("constrained"===n||"fullWidth"===n)&&(l.position="absolute",l.top=0,l.left=0,l.bottom=0,l.right=0)),c&&(l.objectFit=c),u&&(l.objectPosition=u);var s=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},l)});return s}var d,m=["children"],p=function(e){var t=e.layout,n=e.width,r=e.height;return"fullWidth"===t?a.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/n*100+"%"}}):"constrained"===t?a.createElement("div",{style:{maxWidth:n,display:"block"}},a.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+r+"' width='"+n+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},f=function(e){var t=e.children,n=c(e,m);return a.createElement(a.Fragment,null,a.createElement(p,o({},n)),t,null)},g=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],b=function(e){var t=e.src,n=e.srcSet,r=e.loading,i=e.alt,u=void 0===i?"":i,l=e.shouldLoad,s=c(e,g);return a.createElement("img",o({},s,{decoding:"async",loading:r,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?n:void 0,"data-srcset":l?void 0:n,alt:u}))},y=function(e){var t=e.fallback,n=e.sources,r=void 0===n?[]:n,i=e.shouldLoad,u=void 0===i||i,l=c(e,h),s=l.sizes||(null==t?void 0:t.sizes),d=a.createElement(b,o({},l,t,{sizes:s,shouldLoad:u}));return r.length?a.createElement("picture",null,r.map((function(e){var t=e.media,n=e.srcSet,r=e.type;return a.createElement("source",{key:t+"-"+r+"-"+n,type:r,media:t,srcSet:u?n:void 0,"data-srcset":u?void 0:n,sizes:s})})),d):d};b.propTypes={src:r.string.isRequired,alt:r.string.isRequired,sizes:r.string,srcSet:r.string,shouldLoad:r.bool},y.displayName="Picture",y.propTypes={alt:r.string.isRequired,shouldLoad:r.bool,fallback:r.exact({src:r.string.isRequired,srcSet:r.string,sizes:r.string}),sources:r.arrayOf(r.oneOfType([r.exact({media:r.string.isRequired,type:r.string,sizes:r.string,srcSet:r.string.isRequired}),r.exact({media:r.string,type:r.string.isRequired,sizes:r.string,srcSet:r.string.isRequired})]))};var v=["fallback"],w=function(e){var t=e.fallback,n=c(e,v);return t?a.createElement(y,o({},n,{fallback:{src:t},"aria-hidden":!0,alt:""})):a.createElement("div",o({},n))};w.displayName="Placeholder",w.propTypes={fallback:r.string,sources:null==(d=y.propTypes)?void 0:d.sources,alt:function(e,t,n){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Validation failed."):null}};var x=function(e){return a.createElement(a.Fragment,null,a.createElement(y,o({},e)),a.createElement("noscript",null,a.createElement(y,o({},e,{shouldLoad:!0}))))};x.displayName="MainImage",x.propTypes=y.propTypes;var k,E,C=function(e,t,n){for(var a=arguments.length,r=new Array(a>3?a-3:0),o=3;o<a;o++)r[o-3]=arguments[o];return e.alt||""===e.alt?i().string.apply(i(),[e,t,n].concat(r)):new Error('The "alt" prop is required in '+n+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},L={image:i().object.isRequired,alt:C},S=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],N=["style","className"],T=new Set,M=function(e){var t=e.as,r=void 0===t?"div":t,i=e.image,l=e.style,s=e.backgroundColor,d=e.className,m=e.class,p=e.onStartLoad,f=e.onLoad,g=e.onError,h=c(e,S),b=i.width,y=i.height,v=i.layout,w=function(e,t,n){var a={},r="gatsby-image-wrapper";return"fixed"===n?(a.width=e,a.height=t):"constrained"===n&&(r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:a}}(b,y,v),x=w.style,C=w.className,L=c(w,N),M=(0,a.useRef)(),O=(0,a.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);m&&(d=m);var z=function(e,t,n){var a="";return"fullWidth"===e&&(a='<div aria-hidden="true" style="padding-top: '+n/t*100+'%;"></div>'),"constrained"===e&&(a='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+n+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),a}(v,b,y);return(0,a.useEffect)((function(){k||(k=Promise.all([n.e(774),n.e(989)]).then(n.bind(n,5989)).then((function(e){var t=e.renderImageToString,n=e.swapPlaceholderImage;return E=t,{renderImageToString:t,swapPlaceholderImage:n}})));var e,t,a=M.current.querySelector("[data-gatsby-image-ssr]");return a&&u()?(a.complete?(null==p||p({wasCached:!0}),null==f||f({wasCached:!0}),setTimeout((function(){a.removeAttribute("data-gatsby-image-ssr")}),0)):document.addEventListener("load",(function e(){document.removeEventListener("load",e),null==p||p({wasCached:!0}),null==f||f({wasCached:!0}),setTimeout((function(){a.removeAttribute("data-gatsby-image-ssr")}),0)})),void T.add(O)):E&&T.has(O)?void 0:(k.then((function(n){var a=n.renderImageToString,r=n.swapPlaceholderImage;M.current&&(M.current.innerHTML=a(o({isLoading:!0,isLoaded:T.has(O),image:i},h)),T.has(O)||(e=requestAnimationFrame((function(){M.current&&(t=r(M.current,O,T,l,p,f,g))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,a.useLayoutEffect)((function(){T.has(O)&&E&&(M.current.innerHTML=E(o({isLoading:T.has(O),isLoaded:T.has(O),image:i},h)),null==p||p({wasCached:!0}),null==f||f({wasCached:!0}))}),[i]),(0,a.createElement)(r,o({},L,{style:o({},x,l,{backgroundColor:s}),className:C+(d?" "+d:""),ref:M,dangerouslySetInnerHTML:{__html:z},suppressHydrationWarning:!0}))},O=(0,a.memo)((function(e){return e.image?(0,a.createElement)(M,e):null}));O.propTypes=L,O.displayName="GatsbyImage";var z,I=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],_=function(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(a)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},H=new Set(["fixed","fullWidth","constrained"]),j={src:i().string.isRequired,alt:C,width:_,height:_,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!H.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},R=(z=O,function(e){var t=e.src,n=e.__imageData,r=e.__error,i=c(e,I);return r&&console.warn(r),n?a.createElement(z,o({image:n},i)):(console.warn("Image not loaded",t),null)});R.displayName="StaticImage",R.propTypes=j},8678:function(e,t,n){var a=n(7294),r=n(1082),i=n(6296),o=n(8665);t.Z=function(e){var t=e.children,c=(0,r.K2)("3159585216"),u=a.useState(o.x7),l=u[0],s=u[1];return a.createElement("div",{className:o.nC},a.createElement("title",null,c.site.siteMetadata.title),a.createElement("header",null,a.createElement("div",{className:o.M6},a.createElement(r.rU,{to:"/"},a.createElement(i.S,{className:o.W9,src:"../images/cm-kunika-logo.svg",alt:"Creative Machine Logo",__imageData:n(2548)})),a.createElement("button",{className:o.B1,onClick:function(){l==o.cY?s(o.x7):s(o.cY)}},a.createElement(i.S,{className:o.EB,src:"../images/nav-expand-icon.svg",alt:"Navigation Bar Expand Icon",__imageData:n(4305)}))),a.createElement("nav",{className:l},a.createElement("ul",{className:o.FV},a.createElement("li",{className:o.up},a.createElement(r.rU,{to:"/download",className:o.cP},"Download")),a.createElement("li",{className:o.up},a.createElement(r.rU,{to:"/reference/tutorial",className:o.cP},"Reference")),a.createElement("li",{className:o.up},a.createElement(r.rU,{to:"/about",className:o.cP},"About"))),a.createElement("a",{href:"https://github.com/jjeongin/creative-machine"},a.createElement(i.S,{className:o.Yk,src:"../images/GitHub-Mark-64px.png",alt:"GitHub Logo",__imageData:n(4939)})))),a.createElement("main",null,t))}},8665:function(e,t,n){n.d(t,{Ah:function(){return c},B1:function(){return I},EB:function(){return _},FV:function(){return q},G1:function(){return Y},Iv:function(){return x},JE:function(){return O},Jn:function(){return P},KV:function(){return V},L2:function(){return $},LL:function(){return A},Lf:function(){return h},M6:function(){return s},Nk:function(){return a},OZ:function(){return w},Pk:function(){return f},Qf:function(){return K},RO:function(){return D},So:function(){return M},TD:function(){return y},W9:function(){return G},Yk:function(){return H},Yo:function(){return i},Zm:function(){return W},Zt:function(){return o},bo:function(){return S},cP:function(){return R},cY:function(){return Z},ci:function(){return U},cz:function(){return b},d0:function(){return E},dK:function(){return u},e$:function(){return k},h1:function(){return B},hW:function(){return m},iy:function(){return N},jR:function(){return C},ls:function(){return T},mE:function(){return z},nC:function(){return r},rD:function(){return l},ro:function(){return L},rq:function(){return p},s$:function(){return v},tp:function(){return g},ty:function(){return J},u0:function(){return F},up:function(){return j},x7:function(){return d},z9:function(){return X}});var a="layout-module--about-content--4UU-R",r="layout-module--container--eLBMS",i="layout-module--download-content--P0+ar",o="layout-module--footer-contact-heading--ffPqQ",c="layout-module--footer-contact-text--S06pC",u="layout-module--footer-container--dXC+9",l="layout-module--footer-project-description-text--+loyw",s="layout-module--header-mobile--f+vGI",d="layout-module--hide-nav-container--b6C+m",m="layout-module--hide-side-bar--47akr",p="layout-module--home-acknowledgements--MtDe-",f="layout-module--home-acknowledgements-heading--y3aGz",g="layout-module--home-acknowledgements-logo-container--k6g1c",h="layout-module--home-code-examples--M2yjH",b="layout-module--home-container--lkTLl",y="layout-module--home-download--7X-U1",v="layout-module--home-download-heading---piSx",w="layout-module--home-download-subtext--7TOyL",x="layout-module--home-examples--jTZXc",k="layout-module--home-examples-heading--RyFhC",E="layout-module--home-examples-item--PCwLj",C="layout-module--home-examples-item-container--TCwMz",L="layout-module--home-examples-item-description--hB0gF",S="layout-module--home-examples-item-image--iMOTG",N="layout-module--home-gsoc-logo--dSQ3n",T="layout-module--home-intro--bIrZU",M="layout-module--home-intro-logo--+T2Hi",O="layout-module--home-intro-text--6zF90",z="layout-module--home-processing-logo--d0Dwm",I="layout-module--nav-expand-button--xw6Th",_="layout-module--nav-expand-icon--xkdCJ",H="layout-module--nav-github-logo--f3aCR",j="layout-module--nav-link-item--pfCo2",R="layout-module--nav-link-text--ac2nV",q="layout-module--nav-links--EROwB",G="layout-module--nav-logo--dqILr",P="layout-module--reference-container--XIGz7",U="layout-module--reference-content--mU787",A="layout-module--reference-side-bar--Uzjy1",D="layout-module--reference-side-bar-button--Zmjrb",W="layout-module--reference-side-bar-icon--3-ebl",F="layout-module--reference-side-bar-icon-background--HySXJ",Z="layout-module--show-nav-container--8bMeu",B="layout-module--show-side-bar--puplZ",J="layout-module--side-bar-heading--LHmYs",V="layout-module--side-bar-index--GmX4L",X="layout-module--side-bar-items--X-pD8",Y="layout-module--side-bar-model-heading--hDfte",$="layout-module--side-bar-sub-heading--H5qE2",K="layout-module--typewriter--m9k+0"},4305:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/creative-machine/static/9b953e6204e8071bd2c029c185e4e69a/c1b28/nav-expand-icon.svg","srcSet":"/creative-machine/static/9b953e6204e8071bd2c029c185e4e69a/e46a4/nav-expand-icon.svg 14w,\\n/creative-machine/static/9b953e6204e8071bd2c029c185e4e69a/3bc4e/nav-expand-icon.svg 28w,\\n/creative-machine/static/9b953e6204e8071bd2c029c185e4e69a/c1b28/nav-expand-icon.svg 56w","sizes":"(min-width: 56px) 56px, 100vw"},"sources":[{"srcSet":"/creative-machine/static/9b953e6204e8071bd2c029c185e4e69a/105c5/nav-expand-icon.webp 14w,\\n/creative-machine/static/9b953e6204e8071bd2c029c185e4e69a/7567b/nav-expand-icon.webp 28w,\\n/creative-machine/static/9b953e6204e8071bd2c029c185e4e69a/7168f/nav-expand-icon.webp 56w","type":"image/webp","sizes":"(min-width: 56px) 56px, 100vw"}]},"width":56,"height":31}')},2548:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/creative-machine/static/43410be51679974b24d239753618f7f3/36d85/cm-kunika-logo.svg","srcSet":"/creative-machine/static/43410be51679974b24d239753618f7f3/6632a/cm-kunika-logo.svg 159w,\\n/creative-machine/static/43410be51679974b24d239753618f7f3/b7954/cm-kunika-logo.svg 318w,\\n/creative-machine/static/43410be51679974b24d239753618f7f3/36d85/cm-kunika-logo.svg 635w","sizes":"(min-width: 635px) 635px, 100vw"},"sources":[{"srcSet":"/creative-machine/static/43410be51679974b24d239753618f7f3/4fe68/cm-kunika-logo.webp 159w,\\n/creative-machine/static/43410be51679974b24d239753618f7f3/413df/cm-kunika-logo.webp 318w,\\n/creative-machine/static/43410be51679974b24d239753618f7f3/cc281/cm-kunika-logo.webp 635w","type":"image/webp","sizes":"(min-width: 635px) 635px, 100vw"}]},"width":635,"height":56.00000000000001}')},4939:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/creative-machine/static/438c17272c5f0e9f4a6da34d3e4bc5bd/1c9ce/GitHub-Mark-64px.png","srcSet":"/creative-machine/static/438c17272c5f0e9f4a6da34d3e4bc5bd/fbc98/GitHub-Mark-64px.png 16w,\\n/creative-machine/static/438c17272c5f0e9f4a6da34d3e4bc5bd/914ee/GitHub-Mark-64px.png 32w,\\n/creative-machine/static/438c17272c5f0e9f4a6da34d3e4bc5bd/1c9ce/GitHub-Mark-64px.png 64w","sizes":"(min-width: 64px) 64px, 100vw"},"sources":[{"srcSet":"/creative-machine/static/438c17272c5f0e9f4a6da34d3e4bc5bd/e789a/GitHub-Mark-64px.webp 16w,\\n/creative-machine/static/438c17272c5f0e9f4a6da34d3e4bc5bd/ef6ff/GitHub-Mark-64px.webp 32w,\\n/creative-machine/static/438c17272c5f0e9f4a6da34d3e4bc5bd/8257c/GitHub-Mark-64px.webp 64w","type":"image/webp","sizes":"(min-width: 64px) 64px, 100vw"}]},"width":64,"height":64}')}}]);
//# sourceMappingURL=367a67481e3fe26c50ebf3e0b4362bb7e2274a2e-aa71d8c10efb010b6796.js.map