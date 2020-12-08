(this["webpackJsonpprojectile-calc"]=this["webpackJsonpprojectile-calc"]||[]).push([[0],{52:function(e,t,a){},53:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var i=a(4),n=a(0),c=a.n(n),l=a(8),r=a.n(l),s=a(91),h=(a(52),a(53),a(88)),o=a(86),j=Object(o.a)({root:{height:"25vh",minWidth:"100%",display:"flex",justifyContent:"center",alignItems:"center"},title:{textAlign:"center"}});var u=function(){var e=j();return Object(i.jsx)("div",{className:e.root,children:Object(i.jsx)(h.a,{variant:"h2",className:e.title,children:"Projectile Motion Calculator"})})},m=a(30),d=a(33),b=a(41),x=function(e){return e*Math.PI/180};function g(e){var t=e.initialVelocity,a=e.angle,i=e.initialHeight,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,c=-4.905,l=t*Math.sin(x(a)),r=i;if("number"===typeof n)return c*Math.pow(n,2)+l*n+r;var s=(-1*l+Math.sqrt(Math.pow(l,2)-4*c*r))/(2*c),h=(-1*l-Math.sqrt(Math.pow(l,2)-4*c*r))/(2*c),o=s>0?s:h,j=-l/(2*c);return{positiveRoot:o,xVertex:j}}var O=function(e){var t=e.initialVelocity,a=e.angle,i=e.initialHeight,n={initialVelocity:Number(t),angle:Number(a),initialHeight:Number(i)},c=g(n),l={};return l.travelTime=c.positiveRoot,console.log(c.xVertex),l.maxHeight=c.xVertex>=0?g(n,c.xVertex):g(n,0),l.horizontalDistance=n.initialVelocity*Math.cos(x(a))*l.travelTime,Object.keys(l).forEach((function(e){l[e]=l[e]>0?l[e].toFixed(2):0})),l};var v=a(90),p=a(92),f=a(40),V=a(94),y=Object(f.a)({palette:{primary:{main:"#000000"}}}),N=y=Object(V.a)(y),I=Object(o.a)((function(e){return{formInput:{height:"15%"},formItem:{padding:e.spacing(.5)},formField:{width:"100%",height:"100%"}}}));var M=function(e){var t=I(N);return Object(i.jsxs)(v.a,{container:!0,item:!0,className:t.formInput,children:[Object(i.jsx)(v.a,{className:t.formItem,item:!0,xs:4,children:Object(i.jsx)(p.a,{className:t.formField,label:"Initial Velocity",placeholder:"0 m/s",type:"number",name:"initialVelocity",variant:"outlined",value:e.inputValues.initialVelocity,onChange:e.handleChange})}),Object(i.jsx)(v.a,{item:!0,className:t.formItem,xs:4,children:Object(i.jsx)(p.a,{className:t.formField,label:"Angle",placeholder:"0 degrees",type:"number",name:"angle",variant:"outlined",value:e.inputValues.angle,onChange:e.handleChange})}),Object(i.jsx)(v.a,{item:!0,className:t.formItem,xs:4,children:Object(i.jsx)(p.a,{className:t.formField,label:"Initial Height",placeholder:"0 m",type:"number",name:"initialHeight",variant:"outlined",value:e.inputValues.initialHeight,onChange:e.handleChange})})]})},C=a(93),H=Object(o.a)({gridItem:{height:"20vh",display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"}});var w=function(e){var t=e.values,a=t.travelTime,n=t.maxHeight,c=t.horizontalDistance,l=H();return Object(i.jsxs)(v.a,{item:!0,container:!0,direction:"column",children:[Object(i.jsx)(v.a,{item:!0,className:l.gridItem,children:Object(i.jsxs)(C.a,{children:[Object(i.jsx)(h.a,{variant:"h4",children:"Travel Time"}),Object(i.jsx)(h.a,{children:Object(i.jsxs)(h.a,{variant:"h5",children:[a," s"]})})]})}),Object(i.jsx)(v.a,{item:!0,className:l.gridItem,children:Object(i.jsxs)(C.a,{children:[Object(i.jsx)(h.a,{variant:"h4",children:"Max Height"}),Object(i.jsx)(h.a,{children:Object(i.jsxs)(h.a,{variant:"h5",children:[n," m"]})})]})}),Object(i.jsx)(v.a,{item:!0,className:l.gridItem,children:Object(i.jsxs)(C.a,{children:[Object(i.jsx)(h.a,{variant:"h4",children:"Horizontal Distance Traveled"}),Object(i.jsx)(h.a,{children:Object(i.jsxs)(h.a,{variant:"h5",children:[c," m"]})})]})})]})},T=Object(o.a)({gridMain:{height:"75vh"}});var F=function(e){var t=T(),a=function(){var e=Object(n.useState)({initialVelocity:"",angle:"",initialHeight:""}),t=Object(b.a)(e,2),a=t[0],i=t[1];return{inputValues:a,outputValues:O(a),handleChange:function(e){i(Object(d.a)(Object(d.a)({},a),{},Object(m.a)({},e.target.name,e.target.value)))}}}(),c=a.inputValues,l=a.outputValues,r=a.handleChange;return Object(i.jsxs)(v.a,{container:!0,direction:"column",className:t.gridMain,children:[Object(i.jsx)(M,{inputValues:c,handleChange:r}),Object(i.jsx)(w,{values:l})]})};var A=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(u,{}),Object(i.jsx)(F,{})]})};r.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(s.a,{theme:N,children:Object(i.jsx)(A,{})})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.9ecdc6b8.chunk.js.map