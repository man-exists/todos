(this["webpackJsonpchakra-tut"]=this["webpackJsonpchakra-tut"]||[]).push([[0],{82:function(e,t,o){},92:function(e,t,o){"use strict";o.r(t);var c=o(0),n=o.n(c),r=o(29),i=o.n(r),a=(o(82),o(11)),d=o(3),s=o(72),l=o(113),j=o(108),b=o(109),u=o(111),O=o(114),x=o(70),f=o(71),h=o(5);var g=function(e){var t=Object(c.useState)(""),o=Object(d.a)(t,2),n=o[0],r=o[1],i=Object(u.a)();return Object(h.jsx)("form",{onSubmit:function(t){if(t.preventDefault(),n){var o={id:Object(f.a)(),body:n};e.addTodo(o),r("")}else i({title:"No content",status:"error",duration:2e3,isClosable:!0})},children:Object(h.jsxs)(l.a,{mt:"8",children:[Object(h.jsx)(O.a,{variant:"filled",placeholder:"buy milk at the store",value:n,onChange:function(e){return r(e.target.value)}}),Object(h.jsx)(x.a,{colorScheme:"pink",px:"8",type:"submit",children:"Add Todo"})]})})},p=o(34),m=o(105),v=o(106),S=o(107);var k=function(e){return e.todos.length?Object(h.jsx)(l.c,{divider:Object(h.jsx)(l.b,{}),borderColor:"gray.100",borderWidth:"2px",p:"4",borderRadius:"lg",w:"100%",maxW:{base:"90vw",sm:"80vw",lg:"50vw",xl:"40vw"},alignItems:"stretch",children:e.todos.map((function(t){return Object(h.jsxs)(l.a,{children:[Object(h.jsx)(v.a,{children:t.body}),Object(h.jsx)(S.a,{}),Object(h.jsx)(j.a,{icon:Object(h.jsx)(p.c,{}),isRound:!0,onClick:function(){return e.deleteTodo(t.id)}})]},t.id)}))}):Object(h.jsx)(m.a,{colorScheme:"green",p:"4",m:"4",borderRadius:"lg",fontSize:"medium",children:"No Todos!"})};var C=function(){var e=Object(c.useState)((function(){return JSON.parse(localStorage.getItem("todos"))||[]})),t=Object(d.a)(e,2),o=t[0],n=t[1];Object(c.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(o))}),[o]);var r=Object(s.c)(),i=r.colorMode,u=r.toggleColorMode;return Object(h.jsxs)(l.c,{p:4,children:[Object(h.jsx)(j.a,{icon:"light"===i?Object(h.jsx)(p.b,{}):Object(h.jsx)(p.a,{}),isRound:!0,size:"lg",alignSelf:"flex-end",onClick:u}),Object(h.jsx)(b.a,{mb:"8",pb:"4",fontWeight:"extrabold",size:"2xl",bgGradient:"linear(to-r, pink.500, pink.300, blue.500)",bgClip:"text",children:"Todo Application"}),Object(h.jsx)(k,{todos:o,deleteTodo:function(e){var t=o.filter((function(t){return t.id!==e}));n(t)}}),Object(h.jsx)(g,{addTodo:function(e){n([].concat(Object(a.a)(o),[e]))}})]})},w=o(112),y=o(110);i.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsxs)(w.a,{children:[Object(h.jsx)(y.a,{initialColorMode:"dark"}),Object(h.jsx)(C,{})]})}),document.getElementById("root"))}},[[92,1,2]]]);