(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{15:function(e,t,n){},34:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n(1),s=n(12),a=n.n(s),l=(n(34),n(5)),r=(n(15),n(10)),i=n.n(r),u=n(13),d="ADD_TODO",j="SHOW",b="STEP_COMPLETED",p="STEP_UNDO",O="ADD_STATE",g="DELETE_TASK",h=n(6),m=n.n(h),f=n(4),x=new Date,v=function(){return function(){var e=Object(u.a)(i.a.mark((function e(t,n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("insideapi getTASK"),e.next=3,m.a.get("https://guarded-ridge-09727.herokuapp.com/api/").then((function(e){var n;t((n=e.data,function(e){console.log("createMap",n),null!=n&&n.map((function(t){console.log("value.task",t.task),void 0!=t.task&&e({type:O,payload:t})}))}))}));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},y=function(e,t,n){return function(c,o){if(null!==t){var s=t.step;if(s=s.replace(/\s/g,"_"),console.log("STEP Completed",t),1==n){var a=x.getMonth()+1+"/"+x.getDate()+"/"+x.getFullYear();console.log("taskDate",a),m.a.put("https://guarded-ridge-09727.herokuapp.com/api/"+e.id+"/"+s,e).then((function(o){console.log("response for step complete",o.status),c({type:b,payload:e,stepFinder:t,newCompleted:n,newDate:a})}))}else console.log("STEP Completed",n),m.a.put("https://guarded-ridge-09727.herokuapp.com/api/"+e.id+"/"+s,e).then((function(o){console.log("response for step complete",o.status),c({type:b,payload:e,stepFinder:t,newCompleted:n,newDate:"TBA"})}))}else{console.log("STEP Completed",n);var l=x.getMonth()+1+"/"+x.getDate()+"/"+x.getFullYear();m.a.put("https://guarded-ridge-09727.herokuapp.com/api/"+e.id+"/null",e).then((function(o){console.log("response for step complete",o.status),c({type:b,payload:e,stepFinder:t,newCompleted:n,newDate:l})}))}}},k=function(e,t,n){return function(c,o){if(null!==t){var s=t.step;s=s.replace(/\s/g,"_"),console.log("STEP UNDO",t.step),m.a.put("https://guarded-ridge-09727.herokuapp.com/api/"+e.id+"/"+s,e).then((function(o){console.log("response for step undo",o.status),c({type:p,payload:e,stepFinder:t,newCompleted:n,newDate:"TBA"})}))}else m.a.put("https://guarded-ridge-09727.herokuapp.com/api/"+e.id+"/null",e).then((function(o){console.log("response for step undo",o.status),c({type:p,payload:e,stepFinder:t,newCompleted:n,newDate:"TBA"})}))}},S=function(e){return function(t,n){m.a.delete("https://guarded-ridge-09727.herokuapp.com/api/"+e.id,e).then((function(n){console.log("delete status",n.status),t({type:g,payload:e})}))}},C=function(e,t){var n=0,c=1,o=0;if(Object.keys(t).map((function(e){n+=1,t[e].completedS>0&&c<Object.keys(t).length&&(c+=1,console.log("result for counter",c))})),c>0)return o=c/n,console.log("result for new state",o),o;console.log("result for index",n),console.log("result for new state",o)},N=function(e,t){var n,c=0,o=Object.keys(t).length-1;return Object.keys(t).map((function(e){c++,0===t[e].completedS&&o>-1&&(o-=1)})),n=o/c,console.log("new result ",n),n},w=function(e){var t=e.propsParent,n=e.props,o=Object(f.b)();if(console.log("props",n),Object.keys(n).length>=1){var s=Object.keys(n).map((function(e){return Object(c.jsxs)("div",{className:"container",children:[console.log("propsStep",n[e].step),Object(c.jsx)("div",{className:"subitem1-container ",children:n[e].step}),Object(c.jsx)("div",{className:"subitem1-container ",children:n[e].dateBS}),Object(c.jsx)("div",{className:"subitem1-container ",children:Object(c.jsx)("div",{className:"filler",style:{width:"".concat(100*n[e].completedS,"%")},children:console.log("completedS",n[e].completedS)})}),Object(c.jsx)("div",{className:"subitem1-container ",children:n[e].completedS?Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("button",{type:"submit",onClick:function(){return o(k(t,n[e],N(t,n)))},children:"Undo"})}):Object(c.jsx)("button",{type:"submit",onClick:function(){return o(y(t,n[e],C(t,n)))},children:"Complete"})})]})}));return console.log("returning"),s}return null},T=(n(60),function(e){var t=Object(f.b)(),n=Object(f.c)((function(e){return e}))[e.category];console.log("props category",e.category),console.log("selector state",n),console.log("props category array",n[e.category]);var o=function(e){t({type:j,payload:e}),t(function(e){return function(t,n){var c=n(),o=e.id;console.log("toogleShowAPI",c),console.log("toogleShowAPI",o);var s=Object.keys(c).reduce((function(t,n){return c[n].task===e.task&&(t[n]=c[n],console.log("inside reducer",t[n])),t}),{});console.log("task to PUT",s),m.a.put("https://guarded-ridge-09727.herokuapp.com/api/"+o,s).then((function(e){return console.log("res from PUT",e)}))}}(e)),console.log("input show",e)};return Object.keys(n).length>=1?(console.log("inside showItem",n),console.log("using selector len",Object.keys(n)),Object.keys(n).map((function(e){return Object(c.jsxs)("div",{className:"holder",children:[console.log("input",n[e]),0==Object.keys(n[e].steps).length?Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsxs)("div",{className:"item2",children:[n[e].task,Object(c.jsx)("div",{className:"button-class",children:1===n[e].completed?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("button",{type:"submit",onClick:function(){return t(k(n[e],null,0))},children:"Undo"}),Object(c.jsx)("button",{type:"submit",onClick:function(){return t(S(n[e]))},children:"Remove"})]}):Object(c.jsx)("button",{type:"submit",onClick:function(){return t(y(n[e],null,1))},children:"Completed"})})]}),Object(c.jsx)("div",{className:"item2",children:n[e].dateB}),Object(c.jsx)("div",{className:"item2",children:Object(c.jsx)("div",{className:"filler",style:{width:"".concat(100*n[e].completed,"%")}})}),Object(c.jsx)("div",{className:"item2",children:n[e].dateE})]})}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"container",children:[Object(c.jsxs)("div",{className:"item2",children:[n[e].task,Object(c.jsx)("div",{className:"button-class",children:Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("button",{type:"submit",onClick:function(){return o(n[e])},children:"ShowSteps"}),1===n[e].completed&&Object(c.jsx)("button",{type:"submit",onClick:function(){return t(S(n[e]))},children:"Remove"})]})})]}),Object(c.jsx)("div",{className:"item2",children:n[e].dateB}),Object(c.jsx)("div",{className:"item2",children:Object(c.jsx)("div",{className:"filler",style:{width:"".concat(100*n[e].completed,"%")}})}),Object(c.jsx)("div",{className:"item2",children:n[e].dateE})]}),console.log("input.date",n[e].dateB),console.log("input.steps",n[e].steps),Object(c.jsx)("div",{children:Object.keys(n[e].steps).length>=1&&!0===n[e].show&&Object(c.jsx)(w,{propsParent:n[e],props:n[e].steps})})]})]})}))):null}),F=n(2),D=n(3),E=(n(61),function(e){var t=Object(o.useState)(null),n=Object(l.a)(t,2),s=n[0],a=n[1],r=Object(o.useState)(null),d=Object(l.a)(r,2),j=d[0],b=d[1],p=Object(o.useState)(""),O=Object(l.a)(p,2),g=O[0],h=O[1],x=Object(o.useState)(!1),y=Object(l.a)(x,2),k=y[0],S=y[1],C=Object(o.useState)(""),N=Object(l.a)(C,2),w=N[0],T=N[1],E=Object(f.b)(),A=Object(f.c)((function(e){return e}));console.log("testState",A);var P=new Date,B=P.getMonth()+1+"/"+P.getDate()+"/"+P.getFullYear(),L=function(e){console.log("category",w),T(e.target.value)},I=function(e){console.log("target",e.target.value),a(e.target.value),console.log("target",s)},_=function(e){b(e.target.value),console.log("subT",j)},M=function(){null===g?(h(Object(D.a)({},j,{step:j,dateBS:B,completedS:0})),console.log("if addSubTask",g),b(""),console.log("ifsubt",j)):(console.log("else",j),console.log("else addSubTask",g),h(Object(F.a)(Object(F.a)({},g),{},Object(D.a)({},j,{step:j,dateBS:B,completedS:0}))),console.log("subList",g),b(""))},U=function(){E(function(e,t,n){return function(){var c=Object(u.a)(i.a.mark((function c(o,s){var a;return i.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return a={category:e,task:t,dateB:n,dateE:"1/1/1",completed:0,show:!1,steps:{}},console.log("thunk to post",a),c.next=4,m.a.post("https://guarded-ridge-09727.herokuapp.com/api/",a).then((function(e){console.log("res",a),console.log("resdata post",e.data),o(v())}));case 4:case"end":return c.stop()}}),c)})));return function(e,t){return c.apply(this,arguments)}}()}(w,s,B)),e.closeModal()},J=function(){E(function(e,t,n){return{type:"ADD_TODO_SLAVE",payload:{task:e,dateB:n,dateE:"TBA",completed:0,show:!1,steps:t}}}(w,s,g)),E(function(e,t,n,c){return function(){var o=Object(u.a)(i.a.mark((function o(s,a){var l;return i.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return l={task:t,category:e,dateB:n,dateE:"TBA",completed:0,show:!1,steps:c},console.log("thunk to post",l),o.next=4,m.a.post("https://guarded-ridge-09727.herokuapp.com/api/",l).then((function(e){console.log("res",e),console.log("resdata",e.data),s(v())}));case 4:case"end":return o.stop()}}),o)})));return function(e,t){return o.apply(this,arguments)}}()}(w,s,B,g)),a(""),h(""),S(!1),T(""),e.closeModal()},K=function(){S(!k)};return Object(c.jsxs)("div",{className:"box",children:[Object(c.jsx)("div",{className:"close-icon",onClick:e.closeModal,children:"X"}),k?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"boxTitle",children:[Object(c.jsx)("input",{value:s,placeholder:"Input step Name",onChange:function(e){return I(e)}}),Object(c.jsx)("input",{value:w,placeholder:"Input Category Name",onChange:function(e){return L(e)}}),null===g?Object(c.jsxs)(c.Fragment,{children:[console.log("inside true sublist"),Object(c.jsxs)("div",{className:"box-Title-inside",children:[Object(c.jsx)("input",{value:j,placeholder:"Input step Name",onChange:function(e){return _(e)}}),Object(c.jsx)("button",{type:"submit",onClick:function(){return M()},children:"submit step"})]})]}):Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(c.Fragment,{children:[Object.keys(g).map((function(e){return Object(c.jsxs)("div",{className:"box-Title-inside",children:[Object(c.jsx)("input",{readOnly:!0,value:g[e].step}),Object(c.jsx)("button",{type:"submit",onClick:function(){return function(e){console.log("deleting step",e);var t=Object.keys(g).reduce((function(t,n){return g[n]!==e&&(console.log("sublist",g[n]),t[n]=g[n]),t}),{});console.log("newSubList",t),h(t),console.log("subListFromDelete",g)}(g[e])},children:"Delete Step"})]})})),Object(c.jsxs)("div",{className:"box-Title-inside",children:[Object(c.jsx)("input",{value:j,onChange:function(e){return _(e)}}),Object(c.jsx)("button",{type:"submit",onClick:function(){return M()},children:"submit step"})]})]})})]}),Object(c.jsxs)("div",{className:"buttonBox",children:[Object(c.jsx)("button",{type:"submit",onClick:function(){return J()},children:"Add Task"}),Object(c.jsx)("button",{type:"submit",onClick:function(){return K()},children:"DeleteAllSubTask"})]})]}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"boxTitle",children:[Object(c.jsx)("input",{value:s,placeholder:"Input step Name",onChange:function(e){return I(e)}}),Object(c.jsx)("input",{value:w,list:"catOptions",placeholder:"Input Category Name",onChange:function(e){return L(e)}}),Object(c.jsx)("datalist",{id:"catOptions",children:Object.keys(A).map((function(e){return Object(c.jsx)("option",{children:e})}))})]}),Object(c.jsxs)("div",{className:"buttonBox",children:[Object(c.jsx)("button",{type:"submit",onClick:function(){return U()},children:"Add Task"}),Object(c.jsx)("button",{type:"submit",onClick:function(){return K()},children:"CreateSubTask"})]})]}),Object(c.jsx)("br",{})]})}),A=function(e){var t=Object(o.useState)(""),n=Object(l.a)(t,2),s=n[0],a=n[1],r=Object(o.useState)(!1),i=Object(l.a)(r,2),u=i[0],d=i[1],j=Object(o.useState)(e.data),b=Object(l.a)(j,2),p=b[0],O=(b[1],Object(f.c)((function(e){return e}))),g=Object(o.useState)(""),h=Object(l.a)(g,2),m=h[0],x=h[1];console.log("data from APP.JS",e.data),console.log("data from APP.JS",p.length),console.log("state from APP.JS",O);var v=function(e){x(e),d(!1),console.log("cate4gori",m)},y=function(){d(!u),x(""),console.log("modal",u)},k=function(e){a(e.target.value),console.log("changeList",s)};return Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:"main",children:[Object(c.jsxs)("div",{className:"main-menu",children:[Object(c.jsx)("div",{className:"menu-boxes",children:p.length>Object.keys(O).length?Object(c.jsx)(c.Fragment,{children:Object.keys(p).map((function(e){return Object(c.jsx)("div",{className:"btn-box",children:Object(c.jsx)("button",{onClick:function(){return v(p[e])},children:p[e]})})}))}):Object(c.jsx)(c.Fragment,{children:Object.keys(O).length>0?Object(c.jsx)(c.Fragment,{children:Object.keys(O).map((function(e){return Object(c.jsx)("div",{className:"btn-box",children:Object(c.jsx)("button",{onClick:function(){return v(e)},children:e})})}))}):Object(c.jsx)(c.Fragment,{})})}),Object(c.jsx)("div",{className:"footer",children:Object(c.jsx)("div",{className:"footer-box",children:Object(c.jsx)("button",{type:"submit",onClick:function(){return y()},children:"Add Task"})})})]}),Object(c.jsxs)("div",{className:"main-content",children:[0===p.length&&0===Object.keys(O).length?Object(c.jsxs)(c.Fragment,{children:[console.log("if data is emplty modal is",u),Object(c.jsx)(E,{content:Object(c.jsx)("input",{value:s,onChange:function(e){return k(e)}}),closeModal:y,category:m})]}):Object(c.jsx)(c.Fragment,{children:u&&Object(c.jsx)(E,{content:Object(c.jsx)("input",{value:s,onChange:function(e){return k(e)}}),closeModal:y,category:m})}),""!==m&&Object(c.jsx)(T,{category:m})]})]})})},P=function(){return Object(f.b)()(v()),null},B=function(){P();var e=Object(o.useState)(!0),t=Object(l.a)(e,2),n=t[0],s=t[1],a=Object(o.useState)(""),r=Object(l.a)(a,2),i=r[0],u=r[1],d=Object(o.useState)(!1),j=Object(l.a)(d,2),b=j[0],p=j[1];return Object(o.useEffect)((function(){m.a.get("https://guarded-ridge-09727.herokuapp.com/api/getCategories").then((function(e){console.log("res.status",e.status),console.log(e.data),u(e.data),s(!1),p(!1)}))}),[b]),n?Object(c.jsx)("div",{children:"LOADING"}):Object(c.jsx)(A,{data:i})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),o(e),s(e),a(e)}))},I=n(11),_={},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:var n=t.payload,c=n.task,o=n.date;return Object(F.a)(Object(F.a)({},e),{},Object(D.a)({},c,Object(F.a)(Object(F.a)({},t.payload),{},{task:c,date:o})));case O:var s=t.payload,a=s.task,l=s.category,r=s.steps,i=s.dateB;return console.log("action.payload",a,r,i,t.payload),Object(F.a)(Object(F.a)({},e),{},Object(D.a)({},l,Object(F.a)(Object(F.a)({},e[l]),{},Object(D.a)({},a,Object(F.a)(Object(F.a)({},t.payload),{},{task:a,category:l,dateB:i,steps:r})))));case j:var u=t.payload,h=u.task,m=u.show,f=u.category;return console.log("inside SHOW category",f),Object(F.a)(Object(F.a)({},e),{},Object(D.a)({},f,Object(F.a)(Object(F.a)({},e[f]),{},Object(D.a)({},h,Object(F.a)(Object(F.a)({},t.payload),{},{show:!m})))));case b:var x=t.payload,v=x.task,y=x.steps,k=x.category,S=t.newCompleted,C=t.newDate;if(null!==t.stepFinder){var N=t.stepFinder.step;return Object(F.a)(Object(F.a)({},e),{},Object(D.a)({},k,Object(F.a)(Object(F.a)({},e[k]),{},Object(D.a)({},v,Object(F.a)(Object(F.a)({},t.payload),{},{completed:S,dateE:C,steps:Object(F.a)(Object(F.a)({},y),{},Object(D.a)({},N,Object(F.a)(Object(F.a)({},t.stepFinder),{},{completedS:1})))})))))}return Object(F.a)(Object(F.a)({},e),{},Object(D.a)({},k,Object(F.a)(Object(F.a)({},e[k]),{},Object(D.a)({},v,Object(F.a)(Object(F.a)({},t.payload),{},{dateE:C,completed:S})))));case p:var w=t.payload,T=w.task,E=w.steps,A=w.category,P=t.newDate,B=t.newCompleted;if(console.log("insde reducer completed",B),null!==t.stepFinder){var L=t.stepFinder.step;return Object(F.a)(Object(F.a)({},e),{},Object(D.a)({},A,Object(F.a)(Object(F.a)({},e[A]),{},Object(D.a)({},T,Object(F.a)(Object(F.a)({},t.payload),{},{completed:B,dateE:P,steps:Object(F.a)(Object(F.a)({},E),{},Object(D.a)({},L,Object(F.a)(Object(F.a)({},t.stepFinder),{},{completedS:0})))})))))}return Object(F.a)(Object(F.a)({},e),{},Object(D.a)({},A,Object(F.a)(Object(F.a)({},e[A]),{},Object(D.a)({},T,Object(F.a)(Object(F.a)({},t.payload),{},{dateE:P,completed:B})))));case g:var I=t.payload,M=I.task,U=I.category;console.log("inside DELETE_TASK task received",M),console.log("inside DELETE_TASK",e[U]);var J=e[U],K=Object.keys(J).reduce((function(e,t){return console.log("inside reduce",J[t].task),J[t].task!==M&&(e[t]=J[t]),e}),{});return console.log(K),Object(F.a)(Object(F.a)({},e),{},Object(D.a)({},U,K));default:return e}},U=n(28),J=Object(I.c)(M,Object(I.a)(U.a));a.a.render(Object(c.jsx)(f.a,{store:J,children:Object(c.jsx)(B,{})}),document.getElementById("root")),L()}},[[62,1,2]]]);
//# sourceMappingURL=main.851b663f.chunk.js.map