(this["webpackJsonpchakra-tut"]=this["webpackJsonpchakra-tut"]||[]).push([[0],{130:function(e,t,n){},137:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),i=n(40),r=n.n(i),a=n(37),s=(n(130),n(159)),j=n(155),d=n(19),l=n(6),b=n(160),u=n(114),O=n(35),h=n(67),x=n(157),f=n(150),g=n(4);var p=function(e){return Object(g.jsx)(x.a,{label:e.title,children:Object(g.jsx)(f.a,{icon:e.icon,isRound:!0,alignSelf:"flex-end",size:"lg",onClick:e.onClick})})};var v=function(){var e=Object(u.c)(),t=e.colorMode,n=e.toggleColorMode;return Object(g.jsxs)(b.a,{alignSelf:"flex-end",children:[Object(g.jsx)(p,{icon:"light"===t?Object(g.jsx)(O.f,{}):Object(g.jsx)(O.e,{}),title:"Toggle Color Mode",onClick:n}),Object(g.jsx)(h.b,{to:"/login",children:Object(g.jsx)(p,{icon:Object(g.jsx)(O.h,{}),title:"Account Page"})}),Object(g.jsx)(h.b,{to:"/",children:Object(g.jsx)(p,{icon:Object(g.jsx)(O.c,{}),title:"Home Page"})})]})},m=n(158),S=n(161),w=n(111),C=n(112);var I=function(e){var t=Object(c.useState)(""),n=Object(l.a)(t,2),o=n[0],i=n[1],r=Object(m.a)();return Object(g.jsx)("form",{onSubmit:function(t){if(t.preventDefault(),o){var n={id:Object(C.a)(),timestamp:Date.now(),body:o};e.addTodo(n),i("")}else r({title:"No content",status:"error",duration:2e3,isClosable:!0})},children:Object(g.jsxs)(b.a,{mt:"8",children:[Object(g.jsx)(S.a,{variant:"filled",placeholder:"buy milk at the store",value:o,onChange:function(e){return i(e.target.value)}}),Object(g.jsx)(w.a,{colorScheme:"pink",px:"8",type:"submit",children:"Add Todo"})]})})},T=n(151);var k=function(e){return Object(g.jsx)(T.a,{pb:"4",fontWeight:"extrabold",size:"2xl",bgGradient:"linear(to-r, pink.500, pink.300, blue.500)",bgClip:"text",children:e.children})},y=n(107),A=n.n(y),z=n(152),W=n(153),P=n(154);var F=function(e){var t=Object(c.useState)([]),n=Object(l.a)(t,2),i=n[0],r=n[1],a=Object(c.useState)(""),s=Object(l.a)(a,2),j=s[0],d=s[1];return Object(c.useEffect)((function(){r(e.todos)}),[e.todos]),e.todos.length?Object(g.jsxs)(o.a.Fragment,{children:[Object(g.jsx)(b.a,{pb:"4",children:Object(g.jsx)(S.a,{variant:"filled",placeholder:"Filter Todos",onChange:function(e){return d(e.target.value)}})}),Object(g.jsx)(b.d,{divider:Object(g.jsx)(b.c,{}),borderColor:"gray.100",borderWidth:"2px",p:"4",borderRadius:"lg",w:"100%",maxW:{base:"90vw",sm:"80vw",lg:"50vw",xl:"40vw"},alignItems:"stretch",children:(j?i.filter((function(e){return e.body.toLowerCase().includes(j.toLowerCase())})):i).map((function(t){return Object(g.jsxs)(b.a,{children:[Object(g.jsxs)(b.b,{direction:"column",children:[Object(g.jsx)(W.a,{fontSize:"2xl",children:t.body}),Object(g.jsx)(W.a,{fontSize:"sm",children:A.a.ago(t.timestamp)})]}),Object(g.jsx)(P.a,{}),Object(g.jsx)(f.a,{icon:Object(g.jsx)(O.g,{}),isRound:!0,onClick:function(){return e.deleteTodo(t.id)}})]},t.id)}))})]}):Object(g.jsx)(z.a,{colorScheme:"green",p:"4",m:"4",borderRadius:"lg",fontSize:"medium",children:"No Todos!"})};var G=function(e){var t=e.todos,n=e.deleteTodo,c=e.addTodo,i=e.setTodos;return Object(g.jsxs)(o.a.Fragment,{children:[Object(g.jsx)(k,{children:"Todo Application"}),Object(g.jsx)(F,{todos:t,setTodos:i,deleteTodo:n}),Object(g.jsx)(I,{addTodo:c})]})},J=n(17),L=n(108);var M=function(){var e=Object(c.useState)({isSignedIn:!1,pending:!0,user:null}),t=Object(l.a)(e,2),n=t[0],o=t[1];return Object(c.useEffect)((function(){var e=a.a.auth().onAuthStateChanged((function(e){return o({user:e,pending:!1,isSignedIn:!!e})}));return function(){return e()}}),[]),Object(L.a)({},n)};var N=function(){var e=M().isSignedIn;return Object(g.jsx)(o.a.Fragment,{children:Object(g.jsx)(b.d,{w:"100%",maxW:{base:"100vw",sm:"40vw",lg:"25vw",xl:"20vw"},children:Object(g.jsx)(b.d,{children:e?Object(g.jsxs)(o.a.Fragment,{children:[Object(g.jsx)(k,{children:"Logged In"}),Object(g.jsx)(w.a,{w:"100%",leftIcon:Object(g.jsx)(O.d,{}),onClick:function(){return a.a.auth().signOut()},children:"Sign Out"})]}):Object(g.jsxs)(o.a.Fragment,{children:[Object(g.jsx)(k,{children:"Login"}),Object(g.jsx)(w.a,{w:"100%",leftIcon:Object(g.jsx)(O.b,{}),onClick:function(){a.a.auth().signInWithPopup(new a.a.auth.GoogleAuthProvider)},children:"Sign In With Google"}),Object(g.jsx)(w.a,{w:"100%",leftIcon:Object(g.jsx)(O.a,{}),onClick:function(){a.a.auth().signInWithPopup(new a.a.auth.GoogleAuthProvider)},children:"Sign In With GitHub"})]})})})})};var E=function(){var e=Object(c.useState)((function(){return JSON.parse(localStorage.getItem("todos"))||[]})),t=Object(l.a)(e,2),n=t[0],o=t[1];return Object(c.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(n))}),[n]),Object(g.jsx)(h.a,{children:Object(g.jsxs)(b.d,{p:4,children:[Object(g.jsx)(v,{}),Object(g.jsxs)(J.c,{children:[Object(g.jsx)(J.a,{exact:!0,path:"/",children:Object(g.jsx)(G,{deleteTodo:function(e){var t=n.filter((function(t){return t.id!==e}));o(t)},setTodos:o,addTodo:function(e){o([].concat(Object(d.a)(n),[e]))},todos:n})}),Object(g.jsx)(J.a,{path:"/login",children:Object(g.jsx)(N,{})})]})]})})};a.a.initializeApp({apiKey:"AIzaSyCQSiGwuwvYANheJuTUXS3uPg16r7LAzCs",authDomain:"fir-auth-24449.firebaseapp.com",projectId:"fir-auth-24449"}),r.a.render(Object(g.jsx)(o.a.StrictMode,{children:Object(g.jsxs)(s.a,{children:[Object(g.jsx)(j.a,{initialColorMode:"dark"}),Object(g.jsx)(E,{})]})}),document.getElementById("root"))}},[[137,1,2]]]);