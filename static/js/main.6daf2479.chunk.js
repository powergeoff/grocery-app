(this["webpackJsonpgrocery-app"]=this["webpackJsonpgrocery-app"]||[]).push([[1],{108:function(e,n,t){},109:function(e,n,t){"use strict";t.r(n);var c=t(2),a=t(0),o=t.n(a),r=t(9),i=t.n(r),s=t(23),l=t(14),d=t(35),f=function(e){if(0===e)try{var n=localStorage.getItem("groceryList");if(null===n)return;return JSON.parse(n)}catch(a){return}else if(1===e)try{var t=localStorage.getItem("recipeList");if(null===t)return;return JSON.parse(t)}catch(a){return}else if(2===e)try{var c=localStorage.getItem("oneTimeList");if(null===c)return;return JSON.parse(c)}catch(a){return}},u=function(e,n){if(0===n)try{var t=JSON.stringify(e);localStorage.setItem("groceryList",t)}catch(o){}else if(1===n)try{var c=JSON.stringify(e);localStorage.setItem("recipeList",c)}catch(r){}else if(2===n)try{var a=JSON.stringify(e);localStorage.setItem("oneTimeList",a)}catch(i){}},h=f(0),j=Object(d.b)({name:"groceryList",initialState:void 0!==h?h:[],reducers:{toggle:function(e,n){if(!n.payload.checked)return e.filter((function(e){return e.id!==n.payload.id}));e.push(n.payload)},add:function(e,n){e.push(n.payload)},remove:function(e,n){return e.filter((function(e){return e!==n.payload}))},removeAll:function(e,n){return n.payload}}}),m=j.actions,b=m.add,p=m.remove,O=(m.toggle,m.removeAll),x=function(e){return e.groceryList},k=j.reducer,g=f(1),z=Object(d.b)({name:"recipeList",initialState:void 0!==g?g:[],reducers:{addRecipe:function(e,n){e.push(n.payload)},removeRecipe:function(e,n){return e.filter((function(e){return e!==n.payload}))},removeAllRecipes:function(e,n){return n.payload}}}),v=z.actions,y=v.addRecipe,S=v.removeRecipe,w=v.removeAllRecipes,L=function(e){return e.recipeList},C=z.reducer,I=f(2),N=Object(d.b)({name:"oneTimeList",initialState:void 0!==I?I:[],reducers:{addItem:function(e,n){e.push(n.payload)},removeItem:function(e,n){return e.filter((function(e){return e!==n.payload}))},removeAllItems:function(e,n){return n.payload}}}),R=N.actions,W=R.addItem,A=(R.removeItem,R.removeAllItems),T=function(e){return e.oneTimeList},B=N.reducer,D=Object(d.a)({reducer:{groceryList:k,recipeList:C,oneTimeList:B}}),F=(t(105),t(149)),J=t(152),E=t(144),P=t(162),H=t(148);var G=function(e){var n=e.recipe,t=n.id,a=Object(l.b)(),o=Object(l.c)(L),r=Object(l.c)(x);console.dir(r);var i=void 0!==o.find((function(e){return e===t}));return Object(c.jsxs)(E.a,{button:!0,children:[Object(c.jsx)(P.a,{primary:n.name}),Object(c.jsx)(H.a,{checked:i,color:"primary",onChange:function(e){e.target.checked?(a(y(n.id)),n.items.forEach((function(e){r.find((function(n){return n===e}))||a(b(e))}))):(a(S(n.id)),n.items.forEach((function(e){a(p(e))})))}})]},t)},U=t(71),M=function(){return U.groceries},$=function(){return U.recipes},q=t(150),K=t(151),Q=t(82),V=t.n(Q),X=t(83),Y=t.n(X),Z=Object(F.a)({root:{width:"100%",position:"fixed",bottom:0,color:"#fff",background:"#3f51b5"}});function _(){var e=Z(),n=Object(l.b)(),t=Object(l.c)(x),a=Object(l.c)(L),o=Object(l.c)(T);return Object(c.jsxs)(q.a,{showLabels:!0,className:e.root,children:[Object(c.jsx)(K.a,{onClick:function(){u(t,0),u(a,1),u(o,2)},label:"Save",icon:Object(c.jsx)(V.a,{})}),Object(c.jsx)(K.a,{onClick:function(){n(O([])),n(w([])),n(A([])),localStorage.clear()},label:"Clear All",icon:Object(c.jsx)(Y.a,{})})]})}var ee=$(),ne=Object(F.a)((function(e){return{root:{flexGrow:1,marginBottom:60}}}));var te=function(){var e=ne();return Object(c.jsxs)("div",{className:e.root,children:[Object(c.jsx)(J.a,{container:!0,spacing:3,children:Object(c.jsx)(J.a,{item:!0,xs:12,component:"nav","aria-label":"main mailbox folders",children:ee.map((function(e){return Object(c.jsx)(G,{recipe:e},e.id)}))})}),Object(c.jsx)(_,{})]})},ce=t(44);var ae=function(e){var n=Object(a.useState)(!1),t=Object(ce.a)(n,2),o=t[0],r=t[1];return Object(c.jsx)(E.a,{style:{textDecoration:o?"line-through":"none"},onClick:function(){r(!o)},button:!0,children:Object(c.jsx)(P.a,{primary:void 0!==e.grocery.name?e.grocery.name:e.grocery})})},oe=Object(F.a)((function(e){return{root:{flexGrow:1,marginBottom:60},formControl:{marginLeft:e.spacing(5),marginTop:e.spacing(2),minWidth:200}}}));var re=function(){var e=oe(),n=Object(l.c)((function(e){return e.groceryList})),t=[];n.forEach((function(e){return t.push(function(e){return M().find((function(n){return n.id===e}))}(e))})),t.sort((function(e,n){return e.zone-n.zone}));var a=Object(l.c)((function(e){return e.oneTimeList}));return Object(c.jsxs)("div",{className:e.root,children:[Object(c.jsx)(J.a,{container:!0,spacing:3,children:Object(c.jsxs)(J.a,{item:!0,xs:12,component:"nav","aria-label":"main mailbox folders",children:[a.map((function(e){return Object(c.jsx)(ae,{grocery:e},e)})),t.map((function(e){return Object(c.jsx)(ae,{grocery:e},e.id)}))]})}),Object(c.jsx)(_,{})]})},ie=t(158),se=t(159),le=t(91),de=t(86),fe=t.n(de),ue=t(87),he=t.n(ue),je=t(88),me=t.n(je),be=t(89),pe=t.n(be),Oe=t(84),xe=t.n(Oe),ke=t(63),ge=t.n(ke),ze=t(85),ve=t.n(ze);var ye=function(){return"localhost"===window.location.hostname?Object(c.jsxs)("div",{children:[Object(c.jsx)(s.c,{style:{textDecoration:"none",margin:"5px"},to:"/admin",children:Object(c.jsx)(le.a,{"aria-label":"home",children:Object(c.jsx)(xe.a,{style:{fontSize:40}})})}),Object(c.jsx)(s.c,{style:{textDecoration:"none",margin:"5px"},to:"/create",children:Object(c.jsx)(le.a,{"aria-label":"home",children:Object(c.jsx)(ge.a,{style:{fontSize:40}})})}),Object(c.jsx)(s.c,{style:{textDecoration:"none",margin:"5px"},to:"/createrecipe",children:Object(c.jsx)(le.a,{"aria-label":"home",children:Object(c.jsx)(ve.a,{style:{fontSize:40}})})})]}):Object(c.jsx)("div",{})},Se=t(163),we=t(161),Le=t(153),Ce=t(154),Ie=Object(F.a)({root:{top:"75px",width:"100%",position:"fixed"},accordion:{display:"none"}}),Ne=function(e){var n=Ie(),t=Object(l.b)(),o=a.useState(""),r=Object(ce.a)(o,2),i=r[0],s=r[1];return Object(c.jsx)("div",{className:n.root,children:Object(c.jsxs)(we.a,{expanded:e.expandedItem,children:[Object(c.jsx)(Le.a,{className:n.accordion}),Object(c.jsxs)(Ce.a,{children:[Object(c.jsx)(Se.a,{id:"standard-basic",variant:"standard",onChange:function(e){s(e.target.value)},value:i}),Object(c.jsx)(le.a,{"aria-label":"add",onClick:function(){t(W(i)),s(""),e.handleClick()},children:Object(c.jsx)(ge.a,{})})]})]})})};function Re(){var e=o.a.useState(!1),n=Object(ce.a)(e,2),t=n[0],a=n[1],r=function(){a(!t)};return Object(c.jsx)(J.a,{container:!0,spacing:3,children:Object(c.jsxs)(J.a,{item:!0,xs:12,children:[Object(c.jsxs)(ie.a,{position:"fixed",children:[Object(c.jsxs)(se.a,{children:[Object(c.jsx)(s.c,{style:{textDecoration:"none",margin:"5px"},to:"/",children:Object(c.jsx)(le.a,{"aria-label":"home",children:Object(c.jsx)(fe.a,{style:{fontSize:40}})})}),Object(c.jsx)(s.c,{style:{textDecoration:"none",margin:"5px"},to:"/all",children:Object(c.jsx)(le.a,{"aria-label":"all-items",children:Object(c.jsx)(he.a,{style:{fontSize:40}})})}),Object(c.jsx)(s.c,{style:{textDecoration:"none",margin:"5px"},to:"/recipes",children:Object(c.jsx)(le.a,{"aria-label":"all-items",children:Object(c.jsx)(me.a,{style:{fontSize:40}})})}),Object(c.jsx)(le.a,{"aria-label":"all-items",onClick:r,children:Object(c.jsx)(pe.a,{style:{fontSize:40}})}),Object(c.jsx)(ye,{})]}),Object(c.jsx)(Ne,{handleClick:r,expandedItem:t})]}),Object(c.jsx)(se.a,{})]})})}var We=function(e){var n=e.groceryItem,t=n.id,a=Object(l.b)(),o=void 0!==Object(l.c)(x).find((function(e){return e===t}));return Object(c.jsxs)(E.a,{button:!0,children:[Object(c.jsx)(P.a,{primary:n.name}),Object(c.jsx)(H.a,{checked:o,color:"primary",onChange:function(e){e.target.checked?a(b(t)):a(p(t))}})]},t)},Ae=M(),Te=Object(F.a)((function(){return{root:{flexGrow:1,marginBottom:60}}}));var Be=function(){var e=Te();return Ae.sort((function(e,n){return e.zone-n.zone})),Object(c.jsxs)("div",{className:e.root,children:[Object(c.jsx)(J.a,{container:!0,spacing:3,children:Object(c.jsx)(J.a,{item:!0,xs:12,component:"nav","aria-label":"main mailbox folders",children:Ae.map((function(e){return Object(c.jsx)(We,{groceryItem:e},e.name)}))})}),Object(c.jsx)(_,{})]})},De=t(12),Fe=o.a.lazy((function(){return t.e(8).then(t.bind(null,185))})),Je=o.a.lazy((function(){return t.e(7).then(t.bind(null,186))})),Ee="localhost"===window.location.hostname,Pe=function(e){var n=e.children,t=Ee?"BROWSER":"HASH";return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)(o.a.Suspense,{fallback:Object(c.jsx)(c.Fragment,{}),children:["BROWSER"===t&&Object(c.jsx)(Je,{}),"HASH"===t&&Object(c.jsx)(Fe,{})]}),n]})},He=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(4)]).then(t.bind(null,189))})),Ge=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(5)]).then(t.bind(null,190))})),Ue=Object(a.lazy)((function(){return t.e(6).then(t.bind(null,187))}));var Me=function(){return Object(c.jsx)(Pe,{children:Object(c.jsxs)(a.Suspense,{fallback:Object(c.jsx)("div",{children:"Loading..."}),children:[Object(c.jsx)(Re,{}),Object(c.jsxs)(De.c,{children:[Object(c.jsx)(De.a,{path:"/admin",component:He}),Object(c.jsx)(De.a,{path:"/create/:id",component:Ge}),Object(c.jsx)(De.a,{path:"/create",component:Ge}),Object(c.jsx)(De.a,{path:"/createrecipe",component:Ue}),Object(c.jsx)(De.a,{exact:!0,path:"/recipes",render:function(){return Object(c.jsx)(te,{})}}),Object(c.jsx)(De.a,{exact:!0,path:"/all",render:function(){return Object(c.jsx)(Be,{})}}),Object(c.jsx)(De.a,{path:"/",render:function(){return Object(c.jsx)(re,{})}})]})]})})},$e=(t(108),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)||"192.168.1.5"===window.location.hostname));function qe(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Ke=function(e){e&&e instanceof Function&&t.e(9).then(t.bind(null,188)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,o=n.getLCP,r=n.getTTFB;t(e),c(e),a(e),o(e),r(e)}))};i.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(l.a,{store:D,children:Object(c.jsx)(s.a,{children:Object(c.jsx)(Me,{})})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/grocery-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/grocery-app","/service-worker.js");$e?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var c=t.headers.get("content-type");404===t.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):qe(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):qe(n,e)}))}}(),Ke()},71:function(e){e.exports=JSON.parse('{"groceries":[{"id":1,"name":"avocado","store":0,"isStaple":true,"zone":-10,"checked":false},{"id":4,"name":"broccoli","store":0,"isStaple":true,"zone":0,"checked":false},{"id":7,"name":"coffee","store":0,"zone":2,"checked":false},{"id":8,"name":"melon","store":0,"zone":0,"checked":false},{"id":9,"name":"cinnamon","store":0,"zone":6,"checked":false},{"id":10,"name":"pepcid","store":0,"zone":11,"checked":false},{"id":13,"name":"coffee filters","store":0,"zone":2,"checked":false},{"id":16,"name":"granola","store":0,"zone":4,"checked":false},{"id":17,"name":"oats","store":0,"zone":4,"checked":false},{"id":18,"name":"pasta","store":0,"zone":5,"checked":false},{"id":19,"name":"claritin","store":0,"zone":11,"checked":false},{"id":20,"name":"tofu","store":0,"isStaple":false,"zone":0,"checked":false},{"id":21,"name":"banana","store":0,"isStaple":true,"zone":-10,"checked":false},{"id":24,"name":"frozen berries","store":0,"zone":16,"checked":false},{"id":25,"name":"Milk","store":0,"isStaple":true,"zone":17,"checked":false},{"id":27,"name":"Frozen Ravioli","store":0,"isStaple":true,"zone":15,"checked":false},{"id":28,"name":"bread","store":0,"zone":12,"checked":false},{"id":29,"name":"peanut butter","store":0,"zone":12,"checked":false},{"id":30,"name":"jelly","store":0,"zone":12,"checked":false},{"id":31,"name":"Beans","store":0,"isStaple":true,"zone":4,"checked":false},{"id":32,"name":"soy sauce","store":0,"zone":5,"checked":false},{"id":33,"name":"olive oil","store":0,"zone":6,"checked":false},{"id":34,"name":"canned tomatoes","store":0,"zone":4,"checked":false},{"id":35,"name":"red sauce","store":0,"zone":4,"checked":false},{"id":36,"name":"sausage","store":0,"zone":5,"checked":false},{"id":37,"name":"chicken","store":0,"isStaple":true,"zone":5,"checked":false},{"id":38,"name":"Sunday Dinner","store":0,"isStaple":true,"zone":5,"checked":false},{"id":39,"name":"garlic","store":0,"zone":0,"checked":false},{"id":40,"name":"onion","store":0,"zone":0,"checked":false},{"id":41,"name":"sweet potato","store":0,"zone":0,"checked":false},{"id":44,"name":"beets","store":0,"isStaple":true,"zone":0,"checked":false},{"id":45,"name":"spinach","store":0,"isStaple":true,"zone":0,"checked":false},{"id":46,"name":"celery","store":0,"zone":0,"checked":false},{"id":47,"name":"carrots","store":0,"zone":0,"checked":false},{"id":48,"name":"ginger","store":0,"zone":0,"checked":false},{"id":50,"name":"raisins","store":0,"zone":0,"checked":false},{"id":51,"name":"ground beef/ turkey","store":0,"zone":5,"checked":false},{"id":52,"name":"whole chicken","store":0,"zone":5,"checked":false},{"id":53,"name":"deodorant","store":0,"zone":11,"checked":false},{"id":54,"name":"bell pepper","store":0,"zone":-4,"checked":false},{"id":55,"name":"fish","store":1,"isStaple":true,"zone":1,"checked":false},{"id":56,"name":"saurkraut","store":1,"zone":5,"checked":false},{"id":57,"name":"vinegar","store":0,"zone":6,"checked":false},{"id":58,"name":"tooth paste","store":0,"zone":11,"checked":false},{"id":59,"name":"yogurt","store":0,"zone":15,"checked":false},{"id":60,"name":"kosher salt","store":0,"zone":6,"checked":false},{"id":61,"name":"3 cans white beans","store":0,"zone":4,"checked":false},{"id":62,"name":"enchilada sauce","store":0,"zone":4,"checked":false},{"id":63,"name":"canned corn","store":0,"zone":4,"checked":false},{"id":64,"name":"4 oz can green chilies","store":0,"zone":5,"checked":false},{"id":65,"name":"chicken stock","store":0,"zone":6,"checked":false},{"id":66,"name":"fresh herb bundle","store":0,"zone":-7,"checked":false},{"id":67,"name":"potatoes","store":0,"zone":0,"checked":false},{"id":68,"name":"pork loin","store":0,"zone":5,"checked":false},{"id":69,"name":"yaki soba noodles","store":0,"zone":0,"checked":false},{"id":70,"name":"ice cream","store":0,"zone":15,"checked":false},{"id":71,"name":"Paper Towels","store":0,"zone":12,"checked":false},{"id":73,"name":"hummus","store":0,"zone":-10,"checked":false},{"id":74,"name":"Flax","store":0,"zone":-10,"checked":false},{"id":75,"name":"cabbage","store":0,"zone":0,"checked":false},{"id":76,"name":"cacao","store":0,"zone":1,"checked":false},{"id":77,"name":"paprika","store":0,"zone":6,"checked":false},{"id":78,"name":"chilli powder","store":0,"zone":6,"checked":false},{"id":79,"name":"american cheese","store":0,"zone":0,"checked":false},{"id":80,"name":"sammich meat","store":0,"zone":0,"checked":false},{"id":81,"name":"pita bread","store":0,"zone":0,"checked":false},{"id":82,"name":"berries","store":0,"zone":-10,"checked":false},{"id":83,"name":"soap","store":0,"zone":11,"checked":false},{"id":84,"name":"walnuts","store":0,"zone":0,"checked":false},{"id":86,"name":"oranges","store":0,"isStaple":true,"zone":-9,"checked":false},{"id":87,"name":"eggs","store":0,"isStaple":true,"zone":17,"checked":false},{"id":88,"name":"lentils","store":0,"zone":4,"checked":false}],"stores":[{"id":0,"name":"Stop & Shop"},{"id":1,"name":"Whole Foods"}],"recipes":[{"id":0,"name":"White Bean Chicken Chilli","items":[54,39,61,62,63,64,65],"checked":false},{"id":1,"name":"Pork Roast","items":[68,66,67,46,47],"checked":false}]}')}},[[109,2,3]]]);
//# sourceMappingURL=main.6daf2479.chunk.js.map