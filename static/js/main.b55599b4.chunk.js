(this["webpackJsonp@react-zhihu/app"]=this["webpackJsonp@react-zhihu/app"]||[]).push([[0],{12:function(e,t,r){"use strict";r.r(t),r.d(t,"PALETTE",(function(){return n}));var c=r(3),n={primary:"#06f",gray:"#8590a6",get black(){var e="#121212";return{base:e,90:Object(c.b)(e,.9),80:Object(c.b)(e,.8),70:Object(c.b)(e,.7),60:Object(c.b)(e,.6),50:Object(c.b)(e,.5),40:Object(c.b)(e,.4),30:Object(c.b)(e,.3),20:Object(c.b)(e,.2),10:Object(c.b)(e,.1),6:Object(c.b)(e,.06)}},get white(){var e="#ffffff";return{base:e,90:Object(c.b)(e,.9),80:Object(c.b)(e,.8),70:Object(c.b)(e,.7),60:Object(c.b)(e,.6),50:Object(c.b)(e,.5),40:Object(c.b)(e,.4),30:Object(c.b)(e,.3),20:Object(c.b)(e,.2),10:Object(c.b)(e,.1),6:Object(c.b)(e,.06)}}}},60:function(e,t,r){"use strict";r.r(t);var c=r(0),n=r.n(c),o=r(24),a=r.n(o),i=r(1),l=r(8),b=r(26),s=r(29);var u,d=Object(s.a)("div",{target:"e14xsiis0"})({name:"1i9mmk",styles:"flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center;padding-bottom:60px"}),h=r(28);var p=Object(i.d)(u||(u=Object(b.a)(["\n  from {\n    transform: rotate(0)\n  }\n  to {\n    transform: rotate(360deg)\n  }\n"]))),j={name:"1xn3ydt",styles:"code{background-color:whitesmoke;color:slategray;border-radius:2px;padding:4px 8px;font-size:14px;}"};var f=function(){return Object(i.c)(d,{className:"HomePage",css:j},Object(i.c)(h.a,{size:"8rem",color:"royalblue",css:Object(i.b)("animation:",p," 4s linear infinite;","")}),Object(i.c)("h2",null,"Cra Template Popular"),Object(i.c)("code",null,"yarn create react-app --template ",Object(i.c)("strong",null,"popular")))};var O=function(){return Object(i.c)(d,{className:"NotfoundPage"},Object(i.c)("p",null,"Page not found."))};var m=function(e){return Object(i.b)("background-color:",e.colors.background,";border-bottom:1px solid ",e.colors.black[6],";min-height:50px;display:flex;justify-content:center;overflow-x:auto;padding:8px 0;","")},g={name:"at713n",styles:"color:lightslategray;font-size:15px;padding:8px 18px;margin:0 12px;position:relative;display:flex;align-items:center;font-weight:bold;transition:0.2s;&[aria-current='page']{color:whitesmoke;background-color:slategrey;border-radius:100px;}"};var v=function(e){var t=e.children,r=n.a.Children.toArray(t.props.children);return Object(i.c)("nav",{className:"Navigation",css:m},r.map((function(e){var t=e.props,r=t.path,c=t.label;if(e.props.default)return null;if(void 0===e.props.path)throw new Error("".concat(e.type.name," should have path prop."));return Object(i.c)(l.a,{to:r,key:r,css:g},null!==c&&void 0!==c?c:e.type.name)})))};var y=function(e){var t=e.children;return Object(i.c)(n.a.Fragment,null,Object(i.c)(v,null,t),t)},x=(r(12),r(12).PALETTE),k={colors:{primary:x.primary,secondary:x.gray,text:x.black.base,background:"#f6f6f6",black:x.black,white:x.white}},w=r(12).PALETTE,T={colors:{primary:w.primary,secondary:w.gray,text:w.white.base,background:w.black.base,black:w.white,white:w.black}},P=r(21),C=r(15),E=Object(c.createContext)(void 0);function S(e){var t=e.children,r=e.themes,n=e.defaultThemeKey;if(void 0===r)throw new Error("Please make your themes prop a plain object");if(void 0===r.light&&void 0===r.dark)throw new Error("Must provide `light` and `dark` themes");void 0===n&&void 0!==r&&(n=Object.keys(r)[0]);var o=Object(c.useState)(r[n]),a=Object(P.a)(o,2),i={themes:r,defaultThemeKey:n,theme:a[0],setTheme:a[1]};return Object(C.jsx)(E.Provider,Object.assign({value:i},{children:t}),void 0)}var z=r(30),N=r(31),F=["children","style"];function L(e){var t=e.children,r=e.style,c=Object(N.a)(e,F);return Object(C.jsx)("button",Object.assign({type:"button",className:"Button",style:Object(z.a)({backgroundColor:"royalblue",color:"white",borderRadius:20,border:"none",padding:12,fontSize:15,cursor:"pointer"},r)},c,{children:t}),void 0)}var M=function(){return Object(i.c)(d,{className:"SecondPage"},Object(i.c)("h1",null,"SecondPage"),Object(i.c)(L,null,"Click Me"))};var A=function(){return Object(i.c)(l.b,{id:"router"},Object(i.c)(y,{path:"/"},Object(i.c)(f,{path:"/",label:"Home"}),Object(i.c)(M,{path:"second",label:"Second"}),Object(i.c)(O,{default:!0})))},B=r(3);var H={name:"qc0av3",styles:"html{box-sizing:border-box;}*,*:before,*:after{box-sizing:inherit;}"},K=Object(i.b)(Object(B.a)()," ",H,"html,body,#root,#router{height:100%;}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;}#router,div[tabindex='-1']{display:flex;flex-direction:column;flex:1;}button{border:none;cursor:pointer;&:active{opacity:0.5;}}a{color:currentColor;text-decoration:none;&:active{opacity:0.5;}}"),I=r(27),J=r(4);function R(e){var t=e.children,r=function(){var e,t,r=Object(c.useContext)(E);if(void 0===r)throw new Error("useTheme must be used within ".concat(S.name));var n=r.themes,o=r.theme,a=r.setTheme,i=null!==(t=null===(e=Object.entries(n).find((function(e){var t=Object(P.a)(e,2);return t[0],t[1]===o})))||void 0===e?void 0:e[0])&&void 0!==t?t:"light";return{theme:o,setTheme:a,switchTheme:function(e){a(n[e])},toggleThemeMode:function(){"dark"===i?n.light&&a(n.light):n.dark&&a(n.dark)},curThemeKey:i}}(),n=r.theme;return Object(i.c)(J.c,{theme:n},t)}function U(e){var t=e.children;return Object(i.c)(S,{themes:{light:k,dark:T},defaultThemeKey:"dark"},Object(i.c)(R,null,Object(i.c)(I.a,{reachHistory:l.c},t)))}var q=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,61)).then((function(t){var r=t.getCLS,c=t.getFID,n=t.getFCP,o=t.getLCP,a=t.getTTFB;r(e),c(e),n(e),o(e),a(e)}))};a.a.render(Object(i.c)(n.a.StrictMode,null,Object(i.c)((function(){return Object(i.c)(U,null,Object(i.c)(i.a,{styles:[K,function(e){return Object(i.b)("body{color:",e.colors.text,";background-color:",e.colors.background,";}")},"",""]}),Object(i.c)(A,null))}),null)),document.getElementById("root")),q()}},[[60,1,2]]]);
//# sourceMappingURL=main.b55599b4.chunk.js.map