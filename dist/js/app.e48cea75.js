(function(e){function t(t){for(var r,s,c=t[0],u=t[1],i=t[2],p=0,d=[];p<c.length;p++)s=c[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(d.length)d.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var i=0;i<c.length;i++)t(c[i]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1455:function(e,t,n){},"28c7":function(e,t,n){"use strict";n("583b")},5297:function(e,t,n){"use strict";n("f3d3")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={id:"app"},o=Object(r["f"])("br",null,null,-1),s=Object(r["f"])("br",null,null,-1);function c(e,t,n,c,u,i){var l=Object(r["y"])("NavbarComponent"),p=Object(r["y"])("router-view");return Object(r["q"])(),Object(r["e"])("div",a,[Object(r["h"])(l),o,s,Object(r["h"])(p)])}var u=function(e){return Object(r["t"])("data-v-3cb29af6"),e=e(),Object(r["r"])(),e},i={class:"container"},l={class:"navbar navbar-expand-lg navbar-light bg-light my-navbar"},p=Object(r["g"])(" TodoApp "),d=u((function(){return Object(r["f"])("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(r["f"])("span",{class:"navbar-toggler-icon"})],-1)})),b={class:"collapse navbar-collapse",id:"navbarSupportedContent"},f={class:"navbar-nav mr-auto"},h={class:"nav-item active nav-link"},j=Object(r["g"])(" TaskBoard "),m={class:"nav-item active nav-link"},O=Object(r["g"])(" About "),k={class:"nav-item active nav-link"},v=Object(r["g"])(" CreateGroup "),g={class:"nav-item active nav-link"},T=Object(r["g"])(" SearchGroup "),G={class:"nav-item dropdown"},w=u((function(){return Object(r["f"])("a",{class:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}," Groups ",-1)})),y={class:"dropdown-menu","aria-labelledby":"navbarDropdown"},C=["onClick"],_={class:"btn btn-outline-success"};function I(e,t,n,a,o,s){var c=this,u=Object(r["y"])("router-link");return Object(r["q"])(),Object(r["e"])("div",i,[Object(r["f"])("nav",l,[Object(r["h"])(u,{to:{name:"TaskBoard"},class:"navbar-brand"},{default:Object(r["F"])((function(){return[p]})),_:1}),d,Object(r["f"])("div",b,[Object(r["f"])("ul",f,[Object(r["f"])("li",h,[Object(r["h"])(u,{to:{name:"TaskBoard"}},{default:Object(r["F"])((function(){return[j]})),_:1})]),Object(r["f"])("li",m,[Object(r["h"])(u,{to:{name:"About"}},{default:Object(r["F"])((function(){return[O]})),_:1})]),Object(r["f"])("li",k,[Object(r["h"])(u,{to:{name:"CreateGroup"}},{default:Object(r["F"])((function(){return[v]})),_:1})]),Object(r["f"])("li",g,[Object(r["h"])(u,{to:{name:"SearchGroup"}},{default:Object(r["F"])((function(){return[T]})),_:1})]),Object(r["f"])("li",G,[w,Object(r["f"])("div",y,[(Object(r["q"])(!0),Object(r["e"])(r["a"],null,Object(r["w"])(this.$store.state.UserInfo.groups,(function(e,t){return Object(r["q"])(),Object(r["e"])("div",{key:e.id,class:"dropdown-item"},[Object(r["f"])("div",{onClick:function(t){return s.getGroupID(e)}},"ID: "+Object(r["A"])(e)+","+Object(r["A"])(c.$store.state.Group[t]),9,C)])})),128))])])]),Object(r["f"])("button",_,[Object(r["h"])(u,{to:{name:"MyPage"}},{default:Object(r["F"])((function(){return[Object(r["g"])(" ようこそ"+Object(r["A"])(c.$store.state.UserInfo.username),1)]})),_:1})])])])])}var x={name:"NavbarComponent",data:function(){return{}},methods:{getGroupID:function(e){this.$store.commit("setCurrentGroupID",e),this.$store.dispatch("getCurrentGroupTasks")}},created:function(){}},A=(n("28c7"),n("6b0d")),S=n.n(A);const $=S()(x,[["render",I],["__scopeId","data-v-3cb29af6"]]);var D=$,U=n("bc3a");U.defaults.xsrfCookieName="csrftoken",U.defaults.xsrfHeaderName="X-CSRFTOKEN";var q={name:"App",components:{NavbarComponent:D}};n("629c");const E=S()(q,[["render",c]]);var B=E,N=n("6c02"),P=n("1da1"),R=(n("159b"),n("b0c0"),n("96cf"),n("5502")),H=Object(R["a"])({state:{LoginInfo:{},UserInfo:[],currentGroupID:null,Group:[],GroupTasks:[],BASE_PATH:"https://sk-todoapp.herokuapp.com/",tokenKey:""},getters:{loggedIn:function(e){return Boolean(sessionStorage.getItem("tokenkey"))}},mutations:{setTokenKey:function(e,t){e.tokenKey=t},setUserInfo:function(e,t){e.UserInfo=t},setGroupName:function(e,t){e.Group=t},setCurrentGroupID:function(e,t){e.currentGroupID=t},setCurrentGroupTasks:function(e,t){e.GroupTasks=t}},actions:{login:function(e,t){return Object(P["a"])(regeneratorRuntime.mark((function n(){var r,a,o,s,c,u,i,l;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.state,a=e.commit,o=e.dispatch,s=t.username,c=t.email,u=t.password,i=r.BASE_PATH+"api/rest-auth/login/",l="",n.prev=4,n.next=7,U.post(i,{username:s,email:c,password:u}).then((function(e){return l=e.data["key"]}));case 7:return a("setTokenKey",l),sessionStorage.setItem("tokenkey",r.tokenKey),n.next=11,o("getCurrentUserInfo");case 11:return n.next=13,o("getGroupName");case 13:n.next=18;break;case 15:n.prev=15,n.t0=n["catch"](4),alert(n.t0.response.statusText);case 18:case"end":return n.stop()}}),n,null,[[4,15]])})))()},getCurrentUserInfo:function(e){return Object(P["a"])(regeneratorRuntime.mark((function t(){var n,r,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.state,r=e.commit,a=n.BASE_PATH+"api/user/",console.error(123),t.prev=3,t.next=6,U.get(a,{headers:{Authorization:"Token "+sessionStorage.getItem("tokenkey")}});case 6:o=t.sent,r("setUserInfo",o.data),r("setCurrentGroupID",n.UserInfo.groups[0]),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](3),alert(t.t0.response.statusText);case 14:case"end":return t.stop()}}),t,null,[[3,11]])})))()},getGroupName:function(e){return Object(P["a"])(regeneratorRuntime.mark((function t(){var n,r,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.state,r=e.commit,a=n.BASE_PATH+"api/group/",t.prev=2,t.next=5,U.get(a,{headers:{Authorization:"Token "+sessionStorage.getItem("tokenkey")}});case 5:o=t.sent,r("setGroupName",o.data.results),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](2),alert(t.t0.response.statusText);case 12:case"end":return t.stop()}}),t,null,[[2,9]])})))()},getCurrentGroupTasks:function(e){return Object(P["a"])(regeneratorRuntime.mark((function t(){var n,r,a,o,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,r=e.state,a=r.BASE_PATH+"api/tasks/",t.prev=2,t.next=5,U.get(a,{headers:{Authorization:"Token "+sessionStorage.getItem("tokenkey")}});case 5:o=t.sent,s=[],o.data.results.forEach((function(e){e.group==r.currentGroupID&&s.push(e)})),n("setCurrentGroupTasks",s),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](2),alert(t.t0.response.statusText);case 14:case"end":return t.stop()}}),t,null,[[2,11]])})))()},getCreateTask:function(e,t){return Object(P["a"])(regeneratorRuntime.mark((function n(){var r,a,o,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.state,a=t.newTaskBody,o=t.deadline_at,s=r.BASE_PATH+"api/users/".concat(r.UserInfo.id,"/task/"),n.prev=3,n.next=6,U.post(s,{taskname:a,deadline_at:o,group:r.currentGroupID},{headers:{Authorization:"Token "+sessionStorage.getItem("tokenkey")}});case 6:n.next=11;break;case 8:n.prev=8,n.t0=n["catch"](3),alert(n.t0.response.statusText);case 11:case"end":return n.stop()}}),n,null,[[3,8]])})))()},joinCreatedGroup:function(e,t){return Object(P["a"])(regeneratorRuntime.mark((function n(){var r,a,o,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.state,a=t.joinGroupName,o="",r.Group.forEach((function(e){e.name===a&&(o=e.id)})),r.UserInfo.groups.push(o),console.error("groups: ",r.UserInfo.groups),s=r.BASE_PATH+"api/user/",n.prev=7,n.next=10,U.put(s,{id:r.UserInfo.id,password:r.UserInfo.password,username:r.UserInfo.username,groups:r.UserInfo.groups},{headers:{Authorization:"Token "+sessionStorage.getItem("tokenkey")}});case 10:n.next=15;break;case 12:n.prev=12,n.t0=n["catch"](7),alert(n.t0.response.statusText);case 15:case"end":return n.stop()}}),n,null,[[7,12]])})))()},getCreateGroup:function(e,t){return Object(P["a"])(regeneratorRuntime.mark((function n(){var r,a,o,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.dispatch,a=e.state,o=t.newGroupName,s=a.BASE_PATH+"api/group/",n.prev=3,n.next=6,U.post(s,{name:o},{headers:{Authorization:"Token "+sessionStorage.getItem("tokenkey")}});case 6:return n.next=8,r("getGroupName");case 8:return n.next=10,r("joinCreatedGroup",{joinGroupName:o});case 10:n.next=15;break;case 12:n.prev=12,n.t0=n["catch"](3),alert(n.t0.response.statusText);case 15:case"end":return n.stop()}}),n,null,[[3,12]])})))()},joinGroup:function(e,t){return Object(P["a"])(regeneratorRuntime.mark((function n(){var r,a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.state,a=t.joinGroupID,r.UserInfo.groups.push(a),o=r.BASE_PATH+"api/user/",n.prev=4,n.next=7,U.put(o,{id:r.UserInfo.id,password:r.UserInfo.password,username:r.UserInfo.username,groups:r.UserInfo.groups},{headers:{Authorization:"Token "+sessionStorage.getItem("tokenkey")}});case 7:n.next=12;break;case 9:n.prev=9,n.t0=n["catch"](4),alert(n.t0.response.statusText);case 12:case"end":return n.stop()}}),n,null,[[4,9]])})))()},deleteTask:function(e,t){return Object(P["a"])(regeneratorRuntime.mark((function n(){var r,a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.state,a=t.task_id,o=r.BASE_PATH+"api/tasks/".concat(a,"/"),n.prev=3,n.next=6,U.delete(o,{headers:{Authorization:"Token "+sessionStorage.getItem("tokenkey")}});case 6:n.next=11;break;case 8:n.prev=8,n.t0=n["catch"](3),alert(n.t0.response.statusText);case 11:case"end":return n.stop()}}),n,null,[[3,8]])})))()},editTask:function(e,t){return Object(P["a"])(regeneratorRuntime.mark((function n(){var r,a,o,s,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.state,a=t.task_id,o=t.taskname,s=t.deadline_at,c=r.BASE_PATH+"api/tasks/".concat(a,"/"),n.prev=3,n.next=6,U.put(c,{taskname:o,deadline_at:s,group:r.currentGroupID},{headers:{Authorization:"Token "+sessionStorage.getItem("tokenkey")}});case 6:n.next=11;break;case 8:n.prev=8,n.t0=n["catch"](3),alert(n.t0.response.statusText);case 11:case"end":return n.stop()}}),n,null,[[3,8]])})))()}},modules:{}}),F={class:"login"},M=Object(r["f"])("h1",null,"Login",-1),L=Object(r["f"])("input",{type:"submit",value:"Login"},null,-1);function V(e,t,n,a,o,s){return Object(r["q"])(),Object(r["e"])("div",F,[Object(r["f"])("form",{class:"box",onSubmit:t[2]||(t[2]=Object(r["H"])((function(){return s.doLogin&&s.doLogin.apply(s,arguments)}),["prevent"]))},[M,Object(r["G"])(Object(r["f"])("input",{type:"text",placeholder:"user name","onUpdate:modelValue":t[0]||(t[0]=function(e){return o.username=e})},null,512),[[r["C"],o.username]]),Object(r["G"])(Object(r["f"])("input",{type:"password",placeholder:"password","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.password=e})},null,512),[[r["C"],o.password]]),L],32)])}var z={name:"Login",data:function(){return{username:"",password:"",email:""}},methods:{doLogin:function(){this.$store.dispatch("login",{username:this.username,email:this.email,password:this.password});var e=this;setTimeout((function(){e.$router.push("/")}),500)}}};n("b09c");const K=S()(z,[["render",V]]);var J=K,X={class:"board"},Q=Object(r["f"])("br",null,null,-1),W=Object(r["f"])("br",null,null,-1),Y=Object(r["f"])("br",null,null,-1);function Z(e,t,n,a,o,s){var c=this,u=Object(r["y"])("CreateTask"),i=Object(r["y"])("TaskCard");return Object(r["q"])(),Object(r["e"])("div",X,[Object(r["f"])("h2",null,"グループ名: "+Object(r["A"])(this.$store.state.Group[this.$store.state.currentGroupID-1]["name"]),1),Q,Object(r["f"])("button",{onClick:t[0]||(t[0]=function(){return s.openModal&&s.openModal.apply(s,arguments)})},"create"),W,Y,Object(r["G"])(Object(r["h"])(u,{onFromChild:s.closeModal,onCreate:t[1]||(t[1]=function(e){return c.$store.dispatch("getCurrentGroupTasks")})},null,8,["onFromChild"]),[[r["D"],o.showContent]]),(Object(r["q"])(!0),Object(r["e"])(r["a"],null,Object(r["w"])(this.$store.state.GroupTasks,(function(e){return Object(r["q"])(),Object(r["d"])(i,{key:e.id,task:e,class:"card-position"},null,8,["task"])})),128))])}var ee={class:"card card-skin"},te={class:"card_imgframe"};function ne(e,t,n,a,o,s){var c=this,u=Object(r["y"])("EditTask");return Object(r["q"])(),Object(r["e"])("div",ee,[Object(r["f"])("div",te,[Object(r["f"])("p",null,"タスク名: "+Object(r["A"])(n.task.taskname),1),Object(r["f"])("p",null,"作成者: "+Object(r["A"])(n.task.user),1),Object(r["f"])("p",null,"締め切り: "+Object(r["A"])(n.task.deadline_at),1),Object(r["f"])("button",{onClick:t[0]||(t[0]=function(){return s.openModal&&s.openModal.apply(s,arguments)})},"Edit"),Object(r["G"])(Object(r["h"])(u,{onFromChild:s.closeModal,onEdit:t[1]||(t[1]=function(e){return c.$store.dispatch("getCurrentGroupTasks")}),task_id:n.task.id,prev_taskname:n.task.taskname},null,8,["onFromChild","task_id","prev_taskname"]),[[r["D"],o.showContent]]),Object(r["f"])("button",{onClick:t[2]||(t[2]=function(e){return s.deleteTask(n.task.id)})},"Delete")])])}function re(e,t,n,a,o,s){return Object(r["q"])(),Object(r["e"])("button",{class:"button-text btn btn-success my-3",onClick:t[0]||(t[0]=function(){return s.handleClick&&s.handleClick.apply(s,arguments)})},[Object(r["x"])(e.$slots,"default")])}var ae={name:"Button",methods:{handleClick:function(e){this.$emit("click",e)}}};const oe=S()(ae,[["render",re]]);var se=oe,ce={id:"overlay"},ue={id:"content"},ie=Object(r["f"])("p",null,"Edit Task",-1),le=["placeholder"],pe=Object(r["g"])(" DeadLine : "),de=Object(r["f"])("button",{type:"submit",class:"button-text btn btn-success my-3"}," Edit Task ",-1);function be(e,t,n,a,o,s){return Object(r["q"])(),Object(r["e"])("div",ce,[Object(r["f"])("div",ue,[Object(r["f"])("button",{onClick:t[0]||(t[0]=function(){return s.clickEvent&&s.clickEvent.apply(s,arguments)})},"close"),Object(r["f"])("form",{onSubmit:t[3]||(t[3]=Object(r["H"])((function(){return s.editTask&&s.editTask.apply(s,arguments)}),["prevent"]))},[ie,Object(r["f"])("h1",null,"currentGroupID : "+Object(r["A"])(this.$store.state.currentGroupID),1),Object(r["G"])(Object(r["f"])("textarea",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return o.taskname=e}),class:"form-control",placeholder:n.prev_taskname,rows:"10"},null,8,le),[[r["C"],o.taskname]]),Object(r["f"])("div",null,[pe,Object(r["G"])(Object(r["f"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return o.deadline_at=e}),type:"datetime-local"},null,512),[[r["C"],o.deadline_at]])]),de],32)])])}n("a9e3");var fe={name:"EditTask",data:function(){return{taskname:null,deadline_at:null}},props:{task_id:{type:Number,required:!0},prev_taskname:{type:String,required:!0}},methods:{clickEvent:function(){this.$emit("from-child")},editTask:function(){this.$store.dispatch("editTask",{task_id:this.task_id,taskname:this.taskname,deadline_at:this.deadline_at}),this.$store.dispatch("getCurrentGroupTasks"),this.$emit("edit")}}};n("e49b");const he=S()(fe,[["render",be]]);var je=he,me={name:"TaskCard",data:function(){return{showContent:!1}},components:{Button:se,EditTask:je},props:{task:{type:Object,required:!0}},methods:{openModal:function(){this.showContent=!0},closeModal:function(){this.showContent=!1},deleteTask:function(e){this.$store.dispatch("getCurrentGroupTasks"),this.$store.dispatch("deleteTask",{task_id:e}),this.$store.dispatch("getCurrentGroupTasks")}}};n("f055");const Oe=S()(me,[["render",ne]]);var ke=Oe,ve={id:"overlay"},ge={id:"content"},Te=Object(r["f"])("p",null,"Create Task",-1),Ge=Object(r["g"])(" DeadLine : "),we=Object(r["f"])("button",{type:"submit",class:"button-text btn btn-success my-3"}," Create Task ",-1);function ye(e,t,n,a,o,s){return Object(r["q"])(),Object(r["e"])("div",ve,[Object(r["f"])("div",ge,[Object(r["f"])("button",{onClick:t[0]||(t[0]=function(){return s.clickEvent&&s.clickEvent.apply(s,arguments)})},"close"),Object(r["f"])("form",{onSubmit:t[3]||(t[3]=Object(r["H"])((function(){return s.createTask&&s.createTask.apply(s,arguments)}),["prevent"]))},[Te,Object(r["f"])("h1",null,"currentGroupID : "+Object(r["A"])(this.$store.state.currentGroupID),1),Object(r["G"])(Object(r["f"])("textarea",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return o.newTaskBody=e}),class:"form-control",placeholder:"タスク名を入力",rows:"10"},null,512),[[r["C"],o.newTaskBody]]),Object(r["f"])("div",null,[Ge,Object(r["G"])(Object(r["f"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return o.deadline_at=e}),type:"datetime-local"},null,512),[[r["C"],o.deadline_at]])]),we],32)])])}var Ce={name:"CreateTask",data:function(){return{newTaskBody:null,deadline_at:null}},methods:{clickEvent:function(){this.$emit("from-child")},createTask:function(){this.$store.dispatch("getCreateTask",{newTaskBody:this.newTaskBody,deadline_at:this.deadline_at}),this.$store.dispatch("getCurrentGroupTasks"),this.$emit("create")}}};n("841c");const _e=S()(Ce,[["render",ye]]);var Ie=_e,xe={name:"TaskBoard",data:function(){return{showContent:!1}},components:{TaskCard:ke,CreateTask:Ie},methods:{openModal:function(){this.showContent=!0},closeModal:function(){this.showContent=!1}},created:function(){this.$store.dispatch("getCurrentGroupTasks")}};n("5297");const Ae=S()(xe,[["render",Z]]);var Se=Ae,$e={class:"about"},De=Object(r["f"])("h1",null,"This is an about page",-1),Ue=Object(r["f"])("hr",null,null,-1);function qe(e,t,n,a,o,s){var c=Object(r["y"])("TaskCards");return Object(r["q"])(),Object(r["e"])("div",$e,[De,Object(r["f"])("h1",null,Object(r["A"])(this.$store.state.UserInfo.groups),1),Ue,Object(r["h"])(c)])}var Ee=Object(r["f"])("hr",null,null,-1),Be=Object(r["g"])("タスク名: "),Ne={class:"task-color"},Pe=Object(r["g"])("作成者: "),Re={class:"task-color"},He=Object(r["g"])("グループ: "),Fe={class:"task-color"},Me=Object(r["g"])("締め切り: "),Le={class:"task-color"},Ve=Object(r["f"])("button",null,"Edit",-1),ze=["onClick"],Ke=Object(r["f"])("hr",null,null,-1);function Je(e,t,n,a,o,s){var c=Object(r["y"])("router-link");return Object(r["q"])(),Object(r["e"])("div",null,[Object(r["f"])("h1",null,"TaskCard (currentGroupID): "+Object(r["A"])(this.$store.state.currentGroupID),1),Ee,(Object(r["q"])(!0),Object(r["e"])(r["a"],null,Object(r["w"])(this.$store.state.GroupTasks,(function(e){return Object(r["q"])(),Object(r["e"])("div",{key:e.id},[Object(r["f"])("p",null,[Be,Object(r["f"])("span",Ne,Object(r["A"])(e.taskname),1)]),Object(r["f"])("p",null,[Pe,Object(r["f"])("span",Re,Object(r["A"])(e.user),1)]),Object(r["f"])("p",null,[He,Object(r["f"])("span",Fe,Object(r["A"])(e.group),1)]),Object(r["f"])("p",null,[Me,Object(r["f"])("span",Le,Object(r["A"])(e.deadline_at),1)]),Object(r["h"])(c,{to:{name:"EditTask",params:{task_id:e.id}}},{default:Object(r["F"])((function(){return[Ve]})),_:2},1032,["to"]),Object(r["f"])("button",{onClick:function(t){return s.deleteTask(e.id)}},"Delete",8,ze),Ke])})),128))])}var Xe={name:"TaskCards",methods:{deleteTask:function(e){this.$store.dispatch("getCurrentGroupTasks"),this.$store.dispatch("deleteTask",{task_id:e}),this.$store.dispatch("getCurrentGroupTasks")},editTask:function(e){this.$store.dispatch("editTask",{task_id:e,taskname:taskname,deadline_at:deadline_at})}}};n("daf8");const Qe=S()(Xe,[["render",Je]]);var We=Qe,Ye={name:"About",components:{TaskCards:We},data:function(){return{}},created:function(){this.$store.dispatch(""),this.$store.dispatch("getCurrentGroupTasks")}};const Ze=S()(Ye,[["render",qe]]);var et=Ze,tt=Object(r["f"])("label",null,"User ID",-1),nt=Object(r["f"])("label",null,"Password",-1),rt=Object(r["f"])("button",{type:"submit"},"Sign In",-1);function at(e,t,n,a,o,s){return Object(r["q"])(),Object(r["e"])("form",{onSubmit:t[2]||(t[2]=Object(r["H"])((function(){return s.doLogin&&s.doLogin.apply(s,arguments)}),["prevent"]))},[tt,Object(r["G"])(Object(r["f"])("input",{type:"text",placeholder:"customer id","onUpdate:modelValue":t[0]||(t[0]=function(e){return o.username=e})},null,512),[[r["C"],o.username]]),nt,Object(r["G"])(Object(r["f"])("input",{type:"password",placeholder:"password","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.password=e})},null,512),[[r["C"],o.password]]),rt],32)}var ot={data:function(){return{username:"",password:"",email:""}},methods:{doLogin:function(){this.$store.dispatch("login",{username:this.username,email:this.email,password:this.password})}}};const st=S()(ot,[["render",at]]);var ct=st;function ut(e,t,n,a,o,s){return Object(r["q"])(),Object(r["e"])("h1",null,"Not Found")}var it={name:"NotFound"};const lt=S()(it,[["render",ut]]);var pt=lt,dt=Object(r["f"])("p",null,"test",-1),bt=Object(r["f"])("p",null,"Create Group",-1),ft=Object(r["g"])(" Create Group ");function ht(e,t,n,a,o,s){var c=Object(r["y"])("Button");return Object(r["q"])(),Object(r["e"])("div",null,[dt,Object(r["f"])("form",{onSubmit:t[1]||(t[1]=Object(r["H"])((function(){return s.create_join_group&&s.create_join_group.apply(s,arguments)}),["prevent"]))},[bt,Object(r["f"])("h1",null,"currentGroupID : "+Object(r["A"])(this.$store.state.currentGroupID),1),Object(r["f"])("div",null,Object(r["A"])(this.$store.state.Group),1),Object(r["G"])(Object(r["f"])("textarea",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return o.newGroupName=e}),class:"form-control",placeholder:"",rows:"1"},null,512),[[r["C"],o.newGroupName]]),Object(r["h"])(c,null,{default:Object(r["F"])((function(){return[ft]})),_:1})],32)])}var jt={name:"CreateGroup",components:{Button:se},data:function(){return{newGroupName:null}},methods:{create_join_group:function(){this.$store.dispatch("getCreateGroup",{newGroupName:this.newGroupName})}}};const mt=S()(jt,[["render",ht]]);var Ot=mt,kt=Object(r["f"])("p",null,"test",-1),vt=Object(r["f"])("p",null,"Search Group",-1),gt=Object(r["g"])(" Join Group ");function Tt(e,t,n,a,o,s){var c=Object(r["y"])("Button");return Object(r["q"])(),Object(r["e"])("div",null,[kt,Object(r["f"])("form",{onSubmit:t[1]||(t[1]=Object(r["H"])((function(){return s.join_group&&s.join_group.apply(s,arguments)}),["prevent"]))},[vt,Object(r["f"])("div",null,Object(r["A"])(this.$store.state.currentGroupID),1),Object(r["G"])(Object(r["f"])("textarea",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return o.joinGroupID=e}),class:"form-control",placeholder:"グループIDを入力",rows:"1"},null,512),[[r["C"],o.joinGroupID]]),Object(r["h"])(c,null,{default:Object(r["F"])((function(){return[gt]})),_:1})],32)])}var Gt={name:"SearchGroup",components:{Button:se},data:function(){return{joinGroupID:null}},methods:{join_group:function(){this.$store.dispatch("joinGroup",{joinGroupID:this.joinGroupID})}}};const wt=S()(Gt,[["render",Tt]]);var yt=wt,Ct=[{path:"/login",name:"Login",component:J},{path:"/",name:"TaskBoard",component:Se,meta:{requiresAuth:!0}},{path:"/about",name:"About",component:et,meta:{requiresAuth:!0}},{path:"/createTask",name:"Task",component:Ie,meta:{requiresAuth:!0}},{path:"/editTask",name:"EditTask",component:je,meta:{requiresAuth:!0}},{path:"/createGroup",name:"CreateGroup",component:Ot,meta:{requiresAuth:!0}},{path:"/searchGroup",name:"SearchGroup",component:yt,meta:{requiresAuth:!0}},{path:"/mypage",name:"MyPage",component:ct,meta:{requiresAuth:!0}},{path:"/*",name:"NotFound",component:pt}],_t=Object(N["a"])({history:Object(N["b"])(),routes:Ct});_t.beforeEach((function(e,t,n){e.matched.some((function(e){return e.meta.requiresAuth}))?H.getters.loggedIn?n():(console.error("to: ",e.fullPath),n({path:"/login",query:{redirect:e.fullPath}})):n()}));var It=_t;Object(r["c"])(B).use(H).use(It).mount("#app"),console.log("start"),H.getters.loggedIn&&(H.dispatch("getCurrentUserInfo"),H.dispatch("getGroupName"),H.dispatch("getCurrentGroupTasks"))},"583b":function(e,t,n){},"629c":function(e,t,n){"use strict";n("cd16")},7810:function(e,t,n){},"841c":function(e,t,n){"use strict";n("ed7c")},"8e6c":function(e,t,n){},b09c:function(e,t,n){"use strict";n("7810")},bdf7:function(e,t,n){},cd16:function(e,t,n){},daf8:function(e,t,n){"use strict";n("bdf7")},e49b:function(e,t,n){"use strict";n("1455")},ed7c:function(e,t,n){},f055:function(e,t,n){"use strict";n("8e6c")},f3d3:function(e,t,n){}});
//# sourceMappingURL=app.e48cea75.js.map