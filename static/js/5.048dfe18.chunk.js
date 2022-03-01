(this["webpackJsonpgrocery-app"]=this["webpackJsonpgrocery-app"]||[]).push([[5],{167:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return l}));var a=n(171),c=n.n(a),o=n(172);function r(e){return i.apply(this,arguments)}function i(){return(i=Object(o.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.ok){e.next=2;break}return e.abrupt("return",t.json());case 2:if(400!==t.status){e.next=7;break}return e.next=5,t.text();case 5:throw n=e.sent,new Error(n);case 7:throw new Error("Network response was not ok.");case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){throw console.error("API call failed. "+e),alert(e),e}},168:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return l})),n.d(t,"a",(function(){return s}));var a=n(169),c=n(167),o="http://localhost:3001/groceries/";function r(){return fetch(o).then(c.b).catch(c.a)}function i(e){return fetch(o+e).then(c.b).catch(c.a)}function l(e){return fetch(o+(e.id||""),{method:null===e.id?"POST":"PUT",headers:{"content-type":"application/json"},body:JSON.stringify(Object(a.a)(Object(a.a)({},e),{},{id:parseInt(e.id,10),checked:!1}))}).then(c.b).catch(c.a)}function s(e){return fetch(o+e,{method:"DELETE"}).then(c.b).catch(c.a)}},188:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(170),o=n(169),r=n(44),i=n(0),l=n(149),s=n(152),d=n(163),u=n(157),h=n(165),m=n(160),p=n(1),b=n(3),j=(n(6),n(4)),f=n(79),v=n(54),O=Object(v.a)(i.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),x=Object(v.a)(i.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),k=n(23),g=Object(v.a)(i.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),y=n(8),S=n(5),C=i.createElement(x,null),z=i.createElement(O,null),E=i.createElement(g,null),w=i.forwardRef((function(e,t){var n=e.checkedIcon,a=void 0===n?C:n,c=e.classes,o=e.color,r=void 0===o?"secondary":o,l=e.icon,s=void 0===l?z:l,d=e.indeterminate,u=void 0!==d&&d,h=e.indeterminateIcon,m=void 0===h?E:h,v=e.inputProps,O=e.size,x=void 0===O?"medium":O,k=Object(b.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),g=u?m:s,S=u?m:a;return i.createElement(f.a,Object(p.a)({type:"checkbox",classes:{root:Object(j.a)(c.root,c["color".concat(Object(y.a)(r))],u&&c.indeterminate),checked:c.checked,disabled:c.disabled},color:r,inputProps:Object(p.a)({"data-indeterminate":u},v),icon:i.cloneElement(g,{fontSize:void 0===g.props.fontSize&&"small"===x?x:g.props.fontSize}),checkedIcon:i.cloneElement(S,{fontSize:void 0===S.props.fontSize&&"small"===x?x:S.props.fontSize}),ref:t},k))})),I=Object(S.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(k.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(k.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(w),N=n(175),P=n(168),B=n(167),H="http://localhost:3001/stores/";var T=Object(l.a)((function(e){return{root:{flexGrow:1},checkBox:{float:"right"},formControl:{marginLeft:e.spacing(5),marginTop:e.spacing(2),minWidth:200},selectEmpty:{marginTop:e.spacing(2)}}}));t.default=function(e){var t=T(),n=e.match.params.id?parseInt(e.match.params.id):null,l=Object(i.useState)({}),p=Object(r.a)(l,2),b=p[0],j=p[1],f=Object(i.useState)([]),v=Object(r.a)(f,2),O=v[0],x=v[1];function k(e){var t=e.target,n="checkbox"===t.type?t.checked:t.value,a=t.name;j(Object(o.a)(Object(o.a)({},b),{},Object(c.a)({},a,n)))}return Object(i.useEffect)((function(){null!==n&&P.c(n).then((function(e){return j(e)})),O.length||fetch(H).then(B.b).catch(B.a).then((function(e){return x(e)}))}),[j,n,O,x]),Object(a.jsx)("div",{className:t.root,children:Object(a.jsxs)(s.a,{container:!0,spacing:3,children:[Object(a.jsx)(s.a,{item:!0,xs:12,children:Object(a.jsxs)("h2",{className:t.formControl,children:[null!==n?"Edit ":"New ","Item"]})}),Object(a.jsxs)("form",{onSubmit:function(){var e={id:n,name:b.name,store:null==b.store?0:parseInt(b.store),isStaple:b.isStaple,zone:parseInt(b.zone)};P.d(e).then((function(e){console.dir(e)}))},autoComplete:"off",children:[Object(a.jsx)(s.a,{item:!0,xs:12,children:Object(a.jsx)(d.a,{className:t.formControl,label:"Name",variant:"outlined",name:"name",onChange:k,value:void 0===b.name?"":b.name})}),Object(a.jsx)(s.a,{item:!0,xs:12,children:Object(a.jsxs)(u.a,{className:t.formControl,variant:"outlined",children:[Object(a.jsx)(h.a,{htmlFor:"outlined-age-native-simple",children:"Store"}),Object(a.jsxs)(m.a,{native:!0,value:void 0===b.store?"":b.store,onChange:k,label:"Store",inputProps:{name:"store",id:"outlined-age-native-simple"},children:[Object(a.jsx)("option",{"aria-label":"None",value:""}),O.map((function(e){return Object(a.jsx)("option",{value:e.id,children:e.name},e.id)}))]})]})}),Object(a.jsx)(s.a,{item:!0,xs:12,children:Object(a.jsx)(d.a,{className:t.formControl,label:"Zone",variant:"outlined",name:"zone",onChange:k,value:void 0===b.zone?"":b.zone})}),Object(a.jsx)(s.a,{item:!0,xs:12,children:Object(a.jsx)(u.a,{className:t.formControl,variant:"outlined",children:Object(a.jsxs)("div",{children:["Is Staple:",Object(a.jsx)(I,{color:"primary",checked:void 0!==b.isStaple&&b.isStaple,onChange:k,name:"isStaple"})]})})}),Object(a.jsx)(s.a,{item:!0,xs:12,children:Object(a.jsx)(u.a,{className:t.formControl,variant:"outlined",children:Object(a.jsx)(N.a,{type:"submit",value:"Submit",variant:"contained",color:"primary",children:"Submit"})})})]})]})})}}}]);
//# sourceMappingURL=5.048dfe18.chunk.js.map