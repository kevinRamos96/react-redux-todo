(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{13:function(e,t,n){},34:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n(1),s=n(11),a=n.n(s),l=(n(34),n(5)),r=(n(13),n(15)),i=n.n(r),u=n(26),j="ADD_TODO",b="SHOW",d="STEP_COMPLETED",p="STEP_UNDO",O="ADD_STATE",g=n(7),h=n.n(g),m=n(4),f=new Date,x=function(){return function(){var e=Object(u.a)(i.a.mark((function e(t,n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("insideapi getTASK"),e.next=3,h.a.get("http://192.168.22.27:8080/api/").then((function(e){var n;t((n=e.data,function(e){console.log("createMap",n),null!=n&&n.map((function(t){console.log("value.task",t.task),void 0!=t.task&&e({type:O,payload:t})}))}))}));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},y=function(e,t,n){return function(c,o){if(null!==t){var s=t.step;if(s=s.replace(/\s/g,"_"),console.log("STEP Completed",t),1==n){var a=f.getMonth()+1+"/"+f.getDate()+"/"+f.getFullYear();console.log("taskDate",a),h.a.put("http://192.168.22.27:8080/api/"+e.task+"/"+s,e).then((function(o){console.log("response for step undo",o.status),c({type:d,payload:e,stepFinder:t,newCompleted:n,newDate:a})}))}else h.a.put("http://192.168.22.27:8080/api/"+e.task+"/"+s,e).then((function(o){console.log("response for step undo",o.status),c({type:d,payload:e,stepFinder:t,newCompleted:n,newDate:"TBA"})}))}else{var l=f.getMonth()+1+"/"+f.getDate()+"/"+f.getFullYear();h.a.put("http://192.168.22.27:8080/api/"+e.task+"/null",e).then((function(o){console.log("response for step undo",o.status),c({type:d,payload:e,stepFinder:t,newCompleted:n,newDate:l})}))}}},v=function(e,t,n){return function(c,o){if(null!==t){var s=t.step;s=s.replace(/\s/g,"_"),console.log("STEP UNDO",t.step),h.a.put("http://192.168.22.27:8080/api/"+e.task+"/"+s,e).then((function(o){console.log("response for step undo",o.status),c({type:p,payload:e,stepFinder:t,newCompleted:n,newDate:"TBA"})}))}else h.a.put("http://192.168.22.27:8080/api/"+e.task+"/null",e).then((function(o){console.log("response for step undo",o.status),c({type:p,payload:e,stepFinder:t,newCompleted:n,newDate:"TBA"})}))}},k=function(e,t){var n=0,c=1,o=0;if(Object.keys(t).map((function(e){n+=1,t[e].completedS>0&&c<Object.keys(t).length&&(c+=1,console.log("result for counter",c))})),c>0)return o=c/n,console.log("result for new state",o),o;console.log("result for index",n),console.log("result for new state",o)},S=function(e,t){var n,c=0,o=Object.keys(t).length-1;return Object.keys(t).map((function(e){c++,0===t[e].completedS&&o>-1&&(o-=1)})),n=o/c,console.log("new result ",n),n},N=function(e){var t=e.propsParent,n=e.props,o=Object(m.b)();if(console.log("props",n),Object.keys(n).length>=1){var s=Object.keys(n).map((function(e){return Object(c.jsxs)("div",{className:"container",children:[console.log("propsStep",n[e].step),Object(c.jsx)("div",{className:"subitem1-container ",children:n[e].step}),Object(c.jsx)("div",{className:"subitem1-container ",children:n[e].dateBS}),Object(c.jsx)("div",{className:"subitem1-container ",children:Object(c.jsx)("div",{className:"filler",style:{width:"".concat(100*n[e].completedS,"%")},children:console.log("completedS",n[e].completedS)})}),Object(c.jsx)("div",{className:"subitem1-container ",children:n[e].completedS?Object(c.jsx)("button",{type:"submit",onClick:function(){return o(v(t,n[e],S(t,n)))},children:"Undo"}):Object(c.jsx)("button",{type:"submit",onClick:function(){return o(y(t,n[e],k(t,n)))},children:"Complete"})})]})}));return console.log("returning"),s}return null},C=(n(60),function(e){var t=Object(m.b)(),n=Object(m.c)((function(e){return e}))[e.category];console.log("props category",e.category),console.log("selector state",n),console.log("props category array",n[e.category]);var o=function(e){t({type:b,payload:e}),t(function(e){return function(t,n){var c=n(),o=e.task;console.log("toogleShowAPI",c),console.log("toogleShowAPI",e.task);var s=Object.keys(c).reduce((function(t,n){return c[n].task===e.task&&(t[n]=c[n],console.log("inside reducer",t[n])),t}),{});console.log("task to PUT",s),h.a.put("http://192.168.22.27:8080/api/"+o,s).then((function(e){return console.log("res from PUT",e)}))}}(e)),console.log("input show",e)};return Object.keys(n).length>=1?(console.log("inside showItem",n),console.log("using selector len",Object.keys(n)),Object.keys(n).map((function(e){return Object(c.jsxs)("div",{className:"holder",children:[console.log("input",n[e]),0==Object.keys(n[e].steps).length?Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsxs)("div",{className:"item2",children:[n[e].task,Object(c.jsx)("div",{className:"button-class",children:1===n[e].completed?Object(c.jsx)("button",{type:"submit",onClick:function(){return t(v(n[e],null,0))},children:"Undo"}):Object(c.jsx)("button",{type:"submit",onClick:function(){return t(y(n[e],null,1))},children:"Completed"})})]}),Object(c.jsx)("div",{className:"item2",children:n[e].dateB}),Object(c.jsx)("div",{className:"item2",children:Object(c.jsx)("div",{className:"filler",style:{width:"".concat(100*n[e].completed,"%")}})}),Object(c.jsx)("div",{className:"item2",children:n[e].dateE})]})}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"container",children:[Object(c.jsxs)("div",{className:"item2",children:[n[e].task,Object(c.jsx)("div",{className:"button-class",children:Object(c.jsx)("button",{type:"submit",onClick:function(){return o(n[e])},children:"ShowSteps"})})]}),Object(c.jsx)("div",{className:"item2",children:n[e].dateB}),Object(c.jsx)("div",{className:"item2",children:Object(c.jsx)("div",{className:"filler",style:{width:"".concat(100*n[e].completed,"%")}})}),Object(c.jsx)("div",{className:"item2",children:n[e].dateE})]}),console.log("input.date",n[e].dateB),console.log("input.steps",n[e].steps),Object(c.jsx)("div",{children:Object.keys(n[e].steps).length>=1&&!0===n[e].show&&Object(c.jsx)(N,{propsParent:n[e],props:n[e].steps})})]})]})}))):null}),w=n(2),F=n(3),T=(n(61),function(e){var t=Object(o.useState)(null),n=Object(l.a)(t,2),s=n[0],a=n[1],r=Object(o.useState)(null),i=Object(l.a)(r,2),u=i[0],j=i[1],b=Object(o.useState)(""),d=Object(l.a)(b,2),p=d[0],g=d[1],f=Object(o.useState)(!1),y=Object(l.a)(f,2),v=y[0],k=y[1],S=Object(o.useState)(""),N=Object(l.a)(S,2),C=N[0],T=N[1],D=Object(m.b)(),A=Object(m.c)((function(e){return e}));console.log("testState",A);var B=new Date,E=B.getMonth()+1+"/"+B.getDate()+"/"+B.getFullYear(),P=function(e){console.log("category",C),T(e.target.value)},I=function(e){console.log("target",e.target.value),a(e.target.value),console.log("target",s)},L=function(e){j(e.target.value),console.log("subT",u)},M=function(){null===p?(g(Object(F.a)({},u,{step:u,dateBS:E,completedS:0})),console.log("if addSubTask",p),j(""),console.log("ifsubt",u)):(console.log("else",u),console.log("else addSubTask",p),g(Object(w.a)(Object(w.a)({},p),{},Object(F.a)({},u,{step:u,dateBS:E,completedS:0}))),console.log("subList",p),j(""))},_=function(){D(function(e,t,n){return function(c,o){var s={category:e,task:t,dateB:n,dateE:"1/1/1",completed:0,show:!1,steps:{}};console.log("thunk to post",s),h.a.post("http://192.168.22.27:8080/api/",s).then((function(e){console.log("res",s),console.log("resdata post",e.data),c({type:O,payload:s})}))}}(C,s,E)),D(x())},U=function(){D(function(e,t,n){return{type:"ADD_TODO_SLAVE",payload:{task:e,dateB:n,dateE:"TBA",completed:0,show:!1,steps:t}}}(C,s,p)),D(function(e,t,n,c){return function(o,s){var a={task:t,category:e,dateB:n,dateE:"TBA",completed:0,show:!1,steps:c};console.log("thunk to post",a),h.a.post("http://192.168.22.27:8080/api/",a).then((function(e){console.log("res",e),console.log("resdata",e.data),o({type:O,payload:a})}))}}(C,s,E,p)),a(""),g(""),k(!1),T("")},J=function(){k(!v)};return Object(c.jsxs)("div",{className:"box",children:[Object(c.jsx)("div",{className:"close-icon",onClick:e.closeModal,children:"X"}),v?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"boxTitle",children:[Object(c.jsx)("input",{value:s,placeholder:"Input step Name",onChange:function(e){return I(e)}}),Object(c.jsx)("input",{value:C,placeholder:"Input Category Name",onChange:function(e){return P(e)}}),null===p?Object(c.jsxs)(c.Fragment,{children:[console.log("inside true sublist"),Object(c.jsxs)("div",{className:"box-Title-inside",children:[Object(c.jsx)("input",{value:u,placeholder:"Input step Name",onChange:function(e){return L(e)}}),Object(c.jsx)("button",{type:"submit",onClick:function(){return M()},children:"submit step"})]})]}):Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(c.Fragment,{children:[Object.keys(p).map((function(e){return Object(c.jsxs)("div",{className:"box-Title-inside",children:[Object(c.jsx)("input",{readOnly:!0,value:p[e].step}),Object(c.jsx)("button",{type:"submit",onClick:function(){return function(e){console.log("deleting step",e);var t=Object.keys(p).reduce((function(t,n){return p[n]!==e&&(console.log("sublist",p[n]),t[n]=p[n]),t}),{});console.log("newSubList",t),g(t),console.log("subListFromDelete",p)}(p[e])},children:"Delete Step"})]})})),Object(c.jsxs)("div",{className:"box-Title-inside",children:[Object(c.jsx)("input",{value:u,onChange:function(e){return L(e)}}),Object(c.jsx)("button",{type:"submit",onClick:function(){return M()},children:"submit step"})]})]})})]}),Object(c.jsxs)("div",{className:"buttonBox",children:[Object(c.jsx)("button",{type:"submit",onClick:function(){return U()},children:"Add Task"}),Object(c.jsx)("button",{type:"submit",onClick:function(){return J()},children:"DeleteAllSubTask"})]})]}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"boxTitle",children:[Object(c.jsx)("input",{value:s,placeholder:"Input step Name",onChange:function(e){return I(e)}}),Object(c.jsx)("input",{value:C,list:"catOptions",placeholder:"Input Category Name",onChange:function(e){return P(e)}}),Object(c.jsx)("datalist",{id:"catOptions",children:Object.keys(A).map((function(e){return Object(c.jsx)("option",{children:e})}))})]}),Object(c.jsxs)("div",{className:"buttonBox",children:[Object(c.jsx)("button",{type:"submit",onClick:function(){return _()},children:"Add Task"}),Object(c.jsx)("button",{type:"submit",onClick:function(){return J()},children:"CreateSubTask"})]})]}),Object(c.jsx)("br",{})]})}),D=function(e){var t=Object(o.useState)(""),n=Object(l.a)(t,2),s=n[0],a=n[1],r=Object(o.useState)(!1),i=Object(l.a)(r,2),u=i[0],j=i[1],b=Object(o.useState)(e.data),d=Object(l.a)(b,2),p=d[0],O=(d[1],Object(m.c)((function(e){return e}))),g=Object(o.useState)(""),h=Object(l.a)(g,2),f=h[0],x=h[1];console.log("data from APP.JS",e.data),console.log("data from APP.JS",p.length),console.log("state from APP.JS",O);var y=function(e){x(e),j(!1),console.log("cate4gori",f)},v=function(){j(!u),x(""),console.log("modal",u)},k=function(e){a(e.target.value),console.log("changeList",s)};return Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:"main",children:[Object(c.jsxs)("div",{className:"main-menu",children:[Object(c.jsx)("div",{className:"menu-boxes",children:p.length>Object.keys(O).length?Object(c.jsx)(c.Fragment,{children:Object.keys(p).map((function(e){return Object(c.jsx)("div",{className:"btn-box",children:Object(c.jsx)("button",{onClick:function(){return y(p[e])},children:p[e]})})}))}):Object(c.jsx)(c.Fragment,{children:Object.keys(O).length>0?Object(c.jsx)(c.Fragment,{children:Object.keys(O).map((function(e){return Object(c.jsx)("div",{className:"btn-box",children:Object(c.jsx)("button",{onClick:function(){return y(e)},children:e})})}))}):Object(c.jsx)(c.Fragment,{})})}),Object(c.jsx)("div",{className:"footer",children:Object(c.jsx)("div",{className:"footer-box",children:Object(c.jsx)("button",{type:"submit",onClick:function(){return v()},children:"Add Task"})})})]}),Object(c.jsxs)("div",{className:"main-content",children:[0===p.length&&0===Object.keys(O).length?Object(c.jsxs)(c.Fragment,{children:[console.log("if data is emplty modal is",u),Object(c.jsx)(T,{content:Object(c.jsx)("input",{value:s,onChange:function(e){return k(e)}}),closeModal:v,category:f})]}):Object(c.jsx)(c.Fragment,{children:u&&Object(c.jsx)(T,{content:Object(c.jsx)("input",{value:s,onChange:function(e){return k(e)}}),closeModal:v,category:f})}),""!==f&&Object(c.jsx)(C,{category:f})]})]})})},A=function(){return Object(m.b)()(x()),null},B=function(){A();var e=Object(o.useState)(!0),t=Object(l.a)(e,2),n=t[0],s=t[1],a=Object(o.useState)(""),r=Object(l.a)(a,2),i=r[0],u=r[1];return Object(o.useEffect)((function(){h.a.get("http://192.168.22.27:8080/api/getCategories").then((function(e){console.log("res.status",e.status),console.log(e.data),u(e.data),s(!1)}))}),[]),n?Object(c.jsx)("div",{children:"LOADING"}):Object(c.jsx)(D,{data:i})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),o(e),s(e),a(e)}))},P=n(10),I={},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:var n=t.payload,c=n.task,o=n.date;return Object(w.a)(Object(w.a)({},e),{},Object(F.a)({},c,Object(w.a)(Object(w.a)({},t.payload),{},{task:c,date:o})));case O:var s=t.payload,a=s.task,l=s.category,r=s.steps,i=s.dateB;return console.log("action.payload",a,r,i,t.payload),Object(w.a)(Object(w.a)({},e),{},Object(F.a)({},l,Object(w.a)(Object(w.a)({},e[l]),{},Object(F.a)({},a,Object(w.a)(Object(w.a)({},t.payload),{},{task:a,category:l,dateB:i,steps:r})))));case b:var u=t.payload,g=u.task,h=u.show,m=u.category;return console.log("inside SHOW category",m),Object(w.a)(Object(w.a)({},e),{},Object(F.a)({},m,Object(w.a)(Object(w.a)({},e[m]),{},Object(F.a)({},g,Object(w.a)(Object(w.a)({},t.payload),{},{show:!h})))));case d:var f=t.payload,x=f.task,y=f.steps,v=f.category,k=t.newCompleted,S=t.newDate;if(null!==t.stepFinder){var N=t.stepFinder.step;return Object(w.a)(Object(w.a)({},e),{},Object(F.a)({},v,Object(w.a)(Object(w.a)({},e[v]),{},Object(F.a)({},x,Object(w.a)(Object(w.a)({},t.payload),{},{completed:k,dateE:S,steps:Object(w.a)(Object(w.a)({},y),{},Object(F.a)({},N,Object(w.a)(Object(w.a)({},t.stepFinder),{},{completedS:1})))})))))}return Object(w.a)(Object(w.a)({},e),{},Object(F.a)({},v,Object(w.a)(Object(w.a)({},e[v]),{},Object(F.a)({},x,Object(w.a)(Object(w.a)({},t.payload),{},{dateE:S,completed:k})))));case p:var C=t.payload,T=C.task,D=C.steps,A=C.category,B=t.newDate,E=t.newCompleted;if(console.log("insde reducer completed",E),null!==t.stepFinder){var P=t.stepFinder.step;return Object(w.a)(Object(w.a)({},e),{},Object(F.a)({},A,Object(w.a)(Object(w.a)({},e[A]),{},Object(F.a)({},T,Object(w.a)(Object(w.a)({},t.payload),{},{completed:E,dateE:B,steps:Object(w.a)(Object(w.a)({},D),{},Object(F.a)({},P,Object(w.a)(Object(w.a)({},t.stepFinder),{},{completedS:0})))})))))}return Object(w.a)(Object(w.a)({},e),{},Object(F.a)({},A,Object(w.a)(Object(w.a)({},e[A]),{},Object(F.a)({},T,Object(w.a)(Object(w.a)({},t.payload),{},{dateE:B,completed:E})))));default:return e}},M=n(28),_=Object(P.c)(L,Object(P.a)(M.a));a.a.render(Object(c.jsx)(m.a,{store:_,children:Object(c.jsx)(B,{})}),document.getElementById("root")),E()}},[[62,1,2]]]);
//# sourceMappingURL=main.2d6e245a.chunk.js.map