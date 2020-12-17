(this.webpackJsonpmarioplan=this.webpackJsonpmarioplan||[]).push([[0],{210:function(e,t,a){e.exports=a(400)},215:function(e,t,a){},400:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(207),l=a.n(c),i=(a(215),a(9)),s=a(6),o=a(24),m=a(11),u=Object(m.b)((function(e){return{authError:e.auth.authError,auth:e.firebase.auth}}),(function(e){return{signIn:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then(e({type:"LOGIN_SUCCESS"})).catch((function(t){e({type:"LOGIN_ERROR",err:t})}))}));var a}}}))((function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],l=a[1],i=Object(n.useState)(""),m=Object(o.a)(i,2),u=m[0],d=m[1],p={email:c,password:u},E=function(e){"email"===e.target.id?l(e.target.value):"password"===e.target.id&&d(e.target.value)},f=e.authError;return e.auth.uid?r.a.createElement(s.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.signIn(p)},className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign In"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:E})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:E})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Login"),r.a.createElement("div",{className:"red-text center"},f?r.a.createElement("p",null,f):null))))})),d=Object(m.b)((function(e){return{auth:e.firebase.auth,authError:e.auth.authError}}),(function(e){return{signUp:function(t){return e(function(e){return function(t,a,n){var r=n.getFirebase,c=n.getFirestore,l=r(),i=c();l.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(t){return i.collection("users").doc(t.user.uid).set({firstName:e.firstName,lastName:e.lastName,initials:e.firstName[0]+e.lastName[0]})})).then((function(){t({type:"SIGNUP_SUCCESS"})})).catch((function(e){t({type:"SIGNUP_ERROR",err:e})}))}}(t))}}}))((function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],l=a[1],i=Object(n.useState)(""),m=Object(o.a)(i,2),u=m[0],d=m[1],p=Object(n.useState)(""),E=Object(o.a)(p,2),f=E[0],h=E[1],b=Object(n.useState)(""),g=Object(o.a)(b,2),N=g[0],j=g[1],v={firstName:f,lastName:N,email:c,password:u},O=function(e){"email"===e.target.id?l(e.target.value):"password"===e.target.id?d(e.target.value):"firstName"===e.target.id?h(e.target.value):"lastName"===e.target.id&&j(e.target.value)},S=e.authError;return e.auth.uid?r.a.createElement(s.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.signUp(v)},className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign Up"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"firstName"},"Name"),r.a.createElement("input",{type:"text",id:"firstName",onChange:O})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"lastName"},"Last Name"),r.a.createElement("input",{type:"text",id:"lastName",onChange:O})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:O})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:O})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Sign Up"),r.a.createElement("div",{className:"red-text center"},S?r.a.createElement("p",null,S):null))))})),p=a(29),E=a(20),f=a(47),h=a.n(f),b=function(e){var t=e.project;return r.a.createElement("div",{className:"card z-depth-0 project-summary"},r.a.createElement("div",{className:"card-content grey-text text-darken-3"},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",null,"Posted by ",t.authorFirstName," ",t.authorLastName),r.a.createElement("p",{className:"grey-text"},h()(t.createdAt.toDate()).calendar())))},g=function(e){var t=e.projects;return r.a.createElement("div",{className:"project-list section"},t&&t.map((function(e){return r.a.createElement(i.b,{key:e.id,to:"/project/"+e.id},r.a.createElement(b,{project:e}))})))},N=function(e){var t=e.notifications;return r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},"Notifications"),r.a.createElement("ul",{className:"notifications"},t&&t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("span",{className:"pink-text"},e.user," "),r.a.createElement("span",null,e.content),r.a.createElement("div",{className:"grey-text note-date"},h()(e.time.toDate()).fromNow()))}))))))},j=Object(E.d)(Object(m.b)((function(e){return{projects:e.firestore.ordered.projects,auth:e.firebase.auth,notifications:e.firestore.ordered.notifications}})),Object(p.firestoreConnect)([{collection:"projects",orderBy:["createdAt","desc"]},{collection:"notifications",limit:3,orderBy:["time","desc"]}]))((function(e){var t=e.projects,a=e.auth,n=e.notifications;return a.uid?r.a.createElement("div",{className:"dashboard container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6"},r.a.createElement(g,{projects:t})),r.a.createElement("div",{className:"col s12 m5 offset-m1"},r.a.createElement(N,{notifications:n})))):r.a.createElement(s.a,{to:"/signin"})})),v=Object(m.b)(null,(function(e){return{signOut:function(){return e((function(e,t,a){(0,a.getFirebase)().auth().signOut().then((function(){e({type:"SIGNOUT_SUCCESS"})}))}))}}}))((function(e){var t=e.profile;return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(i.c,{to:"/create"},"New Project")),r.a.createElement("li",null,r.a.createElement("button",{onClick:e.signOut},"Log Out")),r.a.createElement("li",null,r.a.createElement(i.c,{to:"/",className:"btn btn-floating pink lighten-1"},t.initials)))})),O=function(){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(i.c,{to:"/signup"},"Sign Up")),r.a.createElement("li",null,r.a.createElement(i.c,{to:"/signin"},"Login")))},S=Object(m.b)((function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}}))((function(e){var t=e.auth,a=e.profile,n=t.uid?r.a.createElement(v,{profile:a}):r.a.createElement(O,null);return r.a.createElement("nav",{className:"nav-wrapper grey darken-3"},r.a.createElement("div",{className:"container"},r.a.createElement(i.b,{to:"/",className:"brand-logo"},"MarioPlan"),n))})),y=a(23),C=Object(m.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{createProject:function(t){return e(function(e){return function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)(),c=a().firebase.profile,l=a().firebase.auth.uid;r.collection("projects").add(Object(y.a)(Object(y.a)({},e),{},{authorFirstName:c.firstName,authorLastName:c.lastName,authorId:l,createdAt:new Date})).then((function(){t({type:"CREATE_PROJECT",project:e})})).catch((function(e){t({type:"CREATE_PROJECT_ERROR",err:e})}))}}(t))}}}))((function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],l=a[1],i=Object(n.useState)(""),m=Object(o.a)(i,2),u=m[0],d=m[1],p={title:c,content:u},E=function(e){"title"===e.target.id?l(e.target.value):"content"===e.target.id&&d(e.target.value)};return e.auth.uid?r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.createProject(p),e.history.push("/")},className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Create New Project"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{type:"text",id:"title",onChange:E})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"content"},"Project Content"),r.a.createElement("textarea",{className:"materialize-textarea",type:"text",id:"content",onChange:E})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Create")))):r.a.createElement(s.a,{to:"/signin"})})),R=Object(E.d)(Object(m.b)((function(e,t){var a=t.match.params.id,n=e.firestore.data.projects;return{project:n?n[a]:null,auth:e.firebase.auth}})),Object(p.firestoreConnect)([{collection:"projects"}]))((function(e){var t=e.project;return e.auth.uid?t?r.a.createElement("div",{className:"container section project-details"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",null,t.content)),r.a.createElement("div",{className:"card-action frey lighten-4 grey-text"},r.a.createElement("div",null,"Posted by ",t.authorFirstName," ",t.authorLastName),r.a.createElement("div",null,h()(t.createdAt.toDate()).calendar())))):r.a.createElement("div",{className:"container center"},r.a.createElement("p",null,"Loading project...")):r.a.createElement(s.a,{to:"/signin"})}));var w=function(){return r.a.createElement(i.a,null,r.a.createElement(S,null),r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/",exact:!0,component:j}),r.a.createElement(s.b,{path:"/project/:id",component:R}),r.a.createElement(s.b,{path:"/signin",component:u}),r.a.createElement(s.b,{path:"/signup",component:d}),r.a.createElement(s.b,{path:"/create",component:C})))},F=a(60),x={authError:null},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return console.log("login error"),Object(y.a)(Object(y.a)({},e),{},{authError:"Login failed"});case"LOGIN_SUCCESS":return console.log("login success"),Object(y.a)(Object(y.a)({},e),{},{authError:null});case"SIGNOUT_SUCCESS":return console.log("signout success"),e;case"SIGNUP_SUCCESS":return console.log("signup success"),Object(y.a)(Object(y.a)({},e),{},{authError:null});case"SIGNUP_ERROR":return console.log("signup error"),Object(y.a)(Object(y.a)({},e),{},{authError:t.err.message});default:return e}},P={projects:[{id:"1",title:"help me find peach",content:"blah blah blah"},{id:"2",title:"collect all the stars",content:"blah blah blah"},{id:"3",title:"egg hunt with yoshi",content:"blah blah blah"}]},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":return console.log("created project",t.project),e;case"CREATE_PROJECT_ERROR":return console.log("create project error"+t.err),e;default:return e}},_=Object(E.c)({auth:I,project:U,firestore:F.firestoreReducer,firebase:p.firebaseReducer}),k=a(209),A=a(90);a(396),a(398);A.a.initializeApp({apiKey:"AIzaSyA_2ioMZSIlLX2Py7RVmdfBI5GURiFZ-mY",authDomain:"marioplan-24fcd.firebaseapp.com",projectId:"marioplan-24fcd",storageBucket:"marioplan-24fcd.appspot.com",messagingSenderId:"824506746821",appId:"1:824506746821:web:f26ec5774c91e543a92dac"}),A.a.firestore().settings({timestampsInSnapshots:!0});var L=A.a,G=Object(E.e)(_,Object(E.d)(Object(E.a)(k.a.withExtraArgument({getFirebase:p.getFirebase,getFirestore:F.getFirestore})),Object(p.reactReduxFirebase)(L,{useFirestoreForProfile:!0,userProfile:"users",attachAuthIsReady:!0}),Object(F.reduxFirestore)(L)));G.firebaseAuthIsReady.then((function(){l.a.render(r.a.createElement(m.a,{store:G},r.a.createElement(w,null)),document.getElementById("root"))}))}},[[210,1,2]]]);
//# sourceMappingURL=main.e0cd43c1.chunk.js.map