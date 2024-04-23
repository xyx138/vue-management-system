(function(){var e={236:function(e,t,a){"use strict";var s=a(7203),o=a.n(s),n=a(6848),r=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},l=[],i={name:"App",components:{}},c=i,u=a(1656),d=(0,u.A)(c,r,l,!1,null,null,null),m=d.exports,p=a(6178),h=function(){var e=this,t=e._self._c;return t("div",[t("el-container",[t("el-aside",{attrs:{width:"auto"}},[t("common-aside")],1),t("el-container",[t("el-header",[t("Header")],1),t("common-tag"),t("el-main",[t("router-view")],1)],1)],1)],1)},f=[],g=function(){var e=this,t=e._self._c;return t("div",[t("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"/home"===e.$route.path?"/":e.$route.path,collapse:e.isCollapse,"background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},on:{open:e.handleOpen,close:e.handleClose}},[t("h3",[e._v(e._s(e.isCollapse?"后台":"后台管理系统"))]),e._l(e.noChildren,(function(a){return t("el-menu-item",{key:a.name,staticClass:"el-menu-item__content",attrs:{index:a.path},on:{click:function(t){return e.clickMenu(a)}}},[t("i",{class:`el-icon-${a.icon}`}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(a.label))])])})),e._l(e.hasChildren,(function(a){return t("el-submenu",{key:a.label,staticClass:"el-menu-item__content",attrs:{index:a.label},on:{click:function(t){return e.clickMenu(a)}}},[t("template",{slot:"title"},[t("i",{class:`el-icon-${a.icon}`}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(a.label))])]),e._l(a.children,(function(a){return t("el-menu-item-group",{key:a.name},[t("el-menu-item",{class:`el-icon-${a.icon}`,attrs:{index:a.path},on:{click:function(t){return e.clickMenu(a)}}},[e._v(e._s(a.label))])],1)}))],2)}))],2)],1)},b=[],v=(a(4114),{data(){return{}},methods:{clickMenu(e){this.$route.path==e.path||"/home"==this.$route.path&&"/"==e.path||(this.$router.push(e.path),this.$store.dispatch("selectMenu",e))}},computed:{noChildren(){return this.menuData.filter((e=>!e.children))},hasChildren(){return this.menuData.filter((e=>e.children))},isCollapse(){return this.$store.state.tab.isCollapse},menuData(){return this.$store.state.menu.Menu}},mounted(){console.log(this.$route)}}),y=v,x=(0,u.A)(y,g,b,!1,null,"43b768eb",null),_=x.exports,k=function(){var e=this,t=e._self._c;return t("div",{staticClass:"header"},[t("div",{staticClass:"left"},[t("el-button",{staticStyle:{"margin-right":"20px"},attrs:{icon:"el-icon-menu",size:"mini"},on:{click:e.headleTab}}),t("el-breadcrumb",{attrs:{separator:"/"}},e._l(e.tabs,(function(a){return t("el-breadcrumb-item",{key:a.path,attrs:{to:{path:a.path}}},[e._v(e._s(a.label))])})),1)],1),t("div",{staticClass:"right"},[t("el-dropdown",{on:{command:e.handleClick}},[t("span",{staticClass:"el-dropdown-link"},[t("div",[t("img",{staticClass:"user",attrs:{src:e.img_url,alt:""}})])]),t("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[t("el-dropdown-item",[e._v("个人中心")]),t("el-dropdown-item",{attrs:{command:"logout"}},[e._v("退出")])],1)],1)],1)])},w=[],S=a(3518),C=a(8704),$={methods:{headleTab(){this.$store.commit("updateCollapse")},handleClick(e){"logout"===e&&(C.A.remove("token"),sessionStorage.clear(),this.$router.replace("/login"))}},computed:{...(0,S.aH)({tabs:e=>e.tab.tabsList,img_url:e=>e.userInfo.infos.img})}},D=$,O=(0,u.A)(D,k,w,!1,null,"7aeb61ab",null),A=O.exports,I=function(){var e=this,t=e._self._c;return t("div",{staticClass:"tabs"},e._l(e.tags,(function(a){return t("el-tag",{key:a.name,attrs:{closable:"home"!=a.name,effect:e.$route.name===a.name?"dark":"plain"},on:{close:function(t){return e.handleClose(a)},click:function(t){return e.handleClick(a)}}},[e._v(" "+e._s(a.label)+" ")])})),1)},T=[],B={computed:{...(0,S.aH)({tags:e=>e.tab.tabsList})},methods:{handleClose(e){this.$store.commit("popTab",e),this.$router.go(-1)},handleClick(e){this.$router.replace(e.path)}},mounted(){}},U=B,M=(0,u.A)(U,I,T,!1,null,"a2ebd3d6",null),j=M.exports,L={components:{CommonAside:_,Header:A,CommonTag:j},created(){sessionStorage.getItem("store")&&this.$store.replaceState(Object.assign({},this.$store.state,JSON.parse(sessionStorage.getItem("store")))),this.$store.state.tab.tabsList=[{path:"/",name:"home",label:"首页",icon:"s-home",url:"Home/Home"}],window.addEventListener("beforeunload",(()=>{sessionStorage.setItem("store",JSON.stringify(this.$store.state))}))}},R=L,H=(0,u.A)(R,h,f,!1,null,null,null),N=H.exports,P=function(){var e=this,t=e._self._c;return t("el-row",[t("el-col",{attrs:{span:8}},[t("el-card",{staticClass:"box-card"},[t("div",{staticClass:"user"},[t("img",{attrs:{src:e.img_url}}),t("div",{staticClass:"userinfo"},[t("p",{staticClass:"name"},[e._v(e._s(e.userName))]),t("p",{staticClass:"access"},[e._v(e._s(e.access))])])]),t("div",{staticClass:"login-info"},[t("p",{staticClass:"left"},[e._v("上次登录时间："),t("span",[e._v("2034-3-27")])]),t("p",{staticClass:"left"},[e._v("上次登录地点："),t("span",[e._v("北京")])])])]),t("el-card",{staticClass:"table-card"},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},e._l(e.tableList,(function(e,a){return t("el-table-column",{key:a,attrs:{prop:a,label:e}})})),1)],1)],1),t("el-col",{attrs:{span:16}},[t("div",{staticClass:"count"},e._l(e.countData,(function(a){return t("el-card",{key:a.name,staticClass:"count-card"},[t("i",{class:`el-icon-${a.icon}`,style:{background:a.color}}),t("div",{staticClass:"text"},[t("p",[e._v(e._s(a.value))]),t("p",[e._v(e._s(a.name))])])])})),1),t("el-card",{staticStyle:{height:"280px",margin:"0 15px"}},[t("div",{ref:"echarts1",staticStyle:{height:"280px"}})]),t("div",{staticClass:"graph",staticStyle:{margin:"10px 15px"}},[t("el-card",{staticStyle:{height:"260px"}},[t("div",{ref:"echarts2",staticStyle:{height:"260px","padding-top":"10px"}})]),t("el-card",{staticStyle:{height:"260px"}},[t("div",{ref:"echarts3",staticStyle:{height:"260px"}})])],1)],1)],1)},J=[],V=a(8355);const q=V.A.create({baseURL:"/api",timeout:1e4});q.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),q.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)}));var E=q;const F=()=>E.get("/home/getData"),z=e=>E.get("/user/getUser",e),G=e=>E.post("/user/add",e),Q=e=>E.post("/user/del",e),Z=e=>E.post("/user/edit",e),K=e=>E.post("/permission/getMenu",e);var W=a(1589),X={data(){return{tableData:[],tableList:{name:"品牌",todayBuy:"今日购买",monthBuy:"本月购买",totalBuy:"总销售量"},countData:[{name:"今日支付订单",value:1234,icon:"success",color:"#2ec7c9"},{name:"今日收藏订单",value:210,icon:"star-on",color:"#ffb980"},{name:"今日未支付订单",value:1234,icon:"s-goods",color:"#5ab1ef"},{name:"本月支付订单",value:1234,icon:"success",color:"#2ec7c9"},{name:"本月收藏订单",value:210,icon:"star-on",color:"#ffb980"},{name:"本月未支付订单",value:1234,icon:"s-goods",color:"#5ab1ef"}]}},computed:{...(0,S.aH)({img_url:e=>e.userInfo.infos.img,userName:e=>e.userInfo.infos.name,access:e=>e.userInfo.infos.access})},mounted(){F().then((({data:e})=>{const{tableData:t}=e.data;this.tableData=t;const a=W.Ts(this.$refs.echarts1);var s={};const{orderData:o}=e.data,n=Object.keys(o.data[0]),r={data:n};s.xAxis=r,s.legend=r,s.yAxis={},s.series=[],n.forEach((e=>{s.series.push({name:e,data:o.data.map((t=>t[e])),type:"line"})})),a.setOption(s);const{userData:l}=e.data,i=l.map((e=>e["date"])),c=W.Ts(this.$refs.echarts2);var u={};u.xAxis={data:i},u.yAxis={};var d={name:"新增人数",type:"bar",data:l.map((e=>e["new"]))},m={name:"活跃人数",type:"bar",data:l.map((e=>e["active"]))};u.series=[d,m],u.tooltip={trigger:"axis"},u.legend={textStyle:{color:"#333"}},c.setOption(u);const p=W.Ts(this.$refs.echarts3),{videoData:h}=e.data;var f={tooltip:{trigger:"item"},color:["#0f78f4","#dd536b","#9462e5","#a6a6a6","#e1bb22","#39c362","#3ed1cf"],series:[{type:"pie",data:h}]};p.setOption(f)})),console.log(this.userName)}},Y=X,ee=(0,u.A)(Y,P,J,!1,null,"541fc89a",null),te=ee.exports,ae=function(){var e=this,t=e._self._c;return t("div",{staticClass:"users"},[t("el-dialog",{attrs:{title:"提示",visible:e.dialogVisible,width:"45%","before-close":e.clearData},on:{"update:visible":function(t){e.dialogVisible=t}}},[t("el-form",{ref:"form",attrs:{model:e.form,inline:!0,"label-width":"90px","label-position":"right",size:"medium",rules:e.rules}},[t("el-form-item",{attrs:{label:"姓名:",prop:"name"}},[t("el-input",{attrs:{placeholder:"请输入姓名"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),t("el-form-item",{attrs:{label:"年龄:",prop:"age"}},[t("el-input",{attrs:{placeholder:"请输入年龄"},model:{value:e.form.age,callback:function(t){e.$set(e.form,"age",t)},expression:"form.age"}})],1),t("el-form-item",{attrs:{label:"性别:",prop:"sex"}},[t("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},[t("el-option",{attrs:{label:"男",value:1}}),t("el-option",{attrs:{label:"女",value:0}})],1)],1),t("el-form-item",{attrs:{label:"出生日期:",prop:"birth"}},[t("el-col",{staticStyle:{width:"80%"},attrs:{span:11}},[t("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:e.form.birth,callback:function(t){e.$set(e.form,"birth",t)},expression:"form.birth"}})],1)],1),t("el-form-item",{attrs:{label:"地址:",prop:"addr"}},[t("el-input",{attrs:{placeholder:"请输入地址"},model:{value:e.form.addr,callback:function(t){e.$set(e.form,"addr",t)},expression:"form.addr"}})],1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:e.clearData}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("确 定")])],1)],1),t("div",{staticClass:"users-header",staticStyle:{"margin-bottom":"10px",display:"flex","justify-content":"space-between","align-items":"center"}},[t("div",[t("el-button",{attrs:{type:"primary"},on:{click:e.showDialog}},[e._v("+ 新增")]),t("el-button",{attrs:{type:"warning"},on:{click:e.exportExcel}},[e._v(" 导出")])],1),t("el-form",{staticStyle:{"margin-top":"15px"},attrs:{model:e.searchForm,inline:!0}},[t("el-form-item",[t("el-input",{attrs:{placeholder:e.placeholder},model:{value:e.searchForm.name,callback:function(t){e.$set(e.searchForm,"name",t)},expression:"searchForm.name"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.handleSearch}},[e._v(e._s(e.buttonText))])],1)],1)],1),t("div",{staticClass:"table-list",staticStyle:{height:"80vh",background:"#fff"}},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,height:"85%",id:"out-table"}},[t("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180"}}),t("el-table-column",{attrs:{prop:"sex",label:"性别",width:"180"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(a.row.sex?"男":"女"))])]}}])}),t("el-table-column",{attrs:{prop:"age",label:"年龄",width:"180"}}),t("el-table-column",{attrs:{prop:"birth",label:"出生日期",width:"180"}}),t("el-table-column",{attrs:{prop:"addr",label:"家庭住址"}}),t("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{size:"mini"},on:{click:function(t){return e.handleEdit(a.$index,a.row)}}},[e._v("编辑")]),t("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){return e.handleDelete(a.$index,a.row)}}},[e._v("删除")])]}}])})],1),t("div",{staticStyle:{background:"#fff",float:"right"}},[t("el-pagination",{attrs:{layout:"prev, pager, next",total:e.total,"page-size":20},on:{"current-change":e.handlePage}})],1)],1)],1)},se=[],oe=a(788),ne=a.n(oe),re=a(254),le=a.n(re),ie={data(){return{diglogType:0,dialogVisible:!1,form:{name:"",age:"",sex:"",addr:"",birth:""},rules:{name:[{required:!0,message:"请输入名字",trigger:"blur"},{min:2,max:5,message:"只能输入2-5个字",trigger:"blur"}],age:[{required:!0,message:"请输入年龄",trigger:"blur"}],sex:[{required:!0,message:"请输入性别",trigger:"change"}],address:[{required:!0,message:"请输入地址",trigger:"blur"}],birth:[{required:!0,message:"请输入生日",trigger:"change"}]},tableData:[],total:0,pageData:{page:1,limit:20},searchForm:{name:""}}},methods:{exportExcel(){var e={raw:!0},t=le().utils.table_to_book(document.querySelector("#out-table"),e),a=le().write(t,{bookType:"xlsx",bookSST:!0,type:"array"});try{ne().saveAs(new Blob([a],{type:"application/octet-stream"}),"用户列表.xlsx")}catch(s){"undefined"!==typeof console&&console.log(s,a)}return a},showDialog(){this.diglogType=0,this.dialogVisible=!this.dialogVisible},clearData(){this.dialogVisible=!1,this.$refs.form.resetFields()},submit(){this.$refs.form.validate((e=>{e?(0==this.diglogType?this.add():this.edit(),this.clearData()):alert("数据添加有误,请重新填写")}))},cancel(){this.clearData()},handleEdit(e,t){this.diglogType=1,this.dialogVisible=!this.dialogVisible,this.form=JSON.parse(JSON.stringify(t))},handleDelete(e,t){this.$confirm("此操作将永久删除该用户数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{this.$message({type:"success",message:"删除成功!"}),this.delete(t)})).catch((()=>{this.$message({type:"info",message:"已取消删除"})}))},handlePage(e){this.pageData.page=e,this.getUserInfo()},getUserInfo(){z({params:{...this.searchForm,...this.pageData}}).then((({data:e})=>{this.tableData=e.list,this.total=e.list?e.count:0,0===this.total&&this.$message.error("查找失败，没有此人"),this.searchForm.name=""}))},handleSearch(){this.getUserInfo()},add(){G(this.form).then(this.getUserInfo(),this.$message({type:"success",message:"添加成功!"}))},delete(e){Q({id:e.id}).then(this.getUserInfo())},edit(){Z(this.form).then(this.getUserInfo())}},computed:{placeholder(){return"请输入搜索内容"},buttonText(){return""===this.searchForm.name&&0===this.total?"刷新":"搜索"}},mounted(){this.getUserInfo()}},ce=ie,ue=(0,u.A)(ce,ae,se,!1,null,"67cf67ff",null),de=ue.exports,me=function(){var e=this;e._self._c;return e._m(0)},pe=[function(){var e=this,t=e._self._c;return t("div",[t("h3",[e._v("Mall")])])}],he={},fe=he,ge=(0,u.A)(fe,me,pe,!1,null,null,null),be=ge.exports,ve=function(){var e=this;e._self._c;return e._m(0)},ye=[function(){var e=this,t=e._self._c;return t("div",[t("h3",[e._v("page1")])])}],xe={},_e=xe,ke=(0,u.A)(_e,ve,ye,!1,null,null,null),we=ke.exports,Se=function(){var e=this;e._self._c;return e._m(0)},Ce=[function(){var e=this,t=e._self._c;return t("div",[t("h3",[e._v("page2")])])}],$e={},De=$e,Oe=(0,u.A)(De,Se,Ce,!1,null,null,null),Ae=Oe.exports,Ie=function(){var e=this,t=e._self._c;return t("div",{staticClass:"login",staticStyle:{"margin-top":"25vh",width:"100%"}},[t("el-card",{staticClass:"box-card"},[t("div",{staticClass:"clearfix",staticStyle:{"text-align":"center"},attrs:{slot:"header"},slot:"header"},[t("span",[e._v("登录界面")])]),t("el-form",{ref:"form",attrs:{model:e.loginInfo,rules:e.rules}},[t("el-form-item",{attrs:{label:"账户",prop:"username"}},[t("el-input",{model:{value:e.loginInfo.username,callback:function(t){e.$set(e.loginInfo,"username",t)},expression:"loginInfo.username"}})],1),t("el-form-item",{attrs:{label:"密码",prop:"password"}},[t("el-input",{attrs:{type:"password"},model:{value:e.loginInfo.password,callback:function(t){e.$set(e.loginInfo,"password",t)},expression:"loginInfo.password"}})],1),t("el-form-item",{staticStyle:{"text-align":"center"}},[t("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("登录")])],1)],1)],1)],1)},Te=[],Be={data(){return{loginInfo:{username:"",password:""},rules:{username:[{required:!0,message:"请输入账户",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},methods:{onSubmit(){this.$refs.form.validate((e=>{e?K(this.loginInfo).then((({data:e})=>{if(2e4==e.code){C.A.set("token",e.data.token);var t={};t.name=e.data.name,t.img=e.data.img,t.access=e.data.access,this.$store.commit("updatedUserInfo",t),this.$store.commit("updateMenu",e.data.menu),this.$router.push("/home")}else this.$message.error(e.data.message)})):this.$message.warning("请认真填写信息哦~")}))}}},Ue=Be,Me=(0,u.A)(Ue,Ie,Te,!1,null,"30cbbb28",null),je=Me.exports,Le={state:{isCollapse:!1,tabsList:[{path:"/",name:"home",label:"首页",icon:"s-home",url:"Home/Home"}]},actions:{selectMenu(e,t){if(console.log("actions部分被调用"),"home"!=t.name){const a=e.state.tabsList.findIndex((e=>e===t));-1==a&&e.commit("pushTab",t)}}},mutations:{updateCollapse(e){e.isCollapse=!e.isCollapse},pushTab(e,t){e.tabsList.push(t)},popTab(e,t){e.tabsList=e.tabsList.filter((e=>e!=t))}}},Re={state:{Menu:[]},mutations:{updateMenu(e,t){e.Menu=t}}},He={state:{infos:{name:"",img:"",access:""}},mutations:{updatedUserInfo(e,t){e.infos=t}}};n["default"].use(S.Ay);var Ne=new S.Ay.Store({modules:{tab:Le,menu:Re,userInfo:He}});n["default"].use(p.Ay);const Pe=new p.Ay({routes:[{path:"/",component:N,redirect:"/home",children:[{path:"/home",name:"home",component:te},{path:"/user",name:"user",component:de},{path:"/mall",name:"mall",component:be},{path:"/page1",name:"page1",component:we},{path:"/page2",name:"page2",component:Ae}]},{path:"/login",name:"login",component:je}]}),Je=p.Ay.prototype.push,Ve=p.Ay.prototype.replace;p.Ay.prototype.push=function(e,t,a){return t||a?Je.call(this,e,t,a):Je.call(this,e).catch((e=>e))},p.Ay.prototype.replace=function(e,t,a){return t||a?Ve.call(this,e,t,a):Ve.call(this,e).catch((e=>e))},Pe.beforeEach(((e,t,a)=>{null!=C.A.get("token")?(console.log("有token"),"/login"==e.path?a(t):"/user"==e.path||"mall"==e.path?4===Ne.state.menu.Menu.length?a():a(t):a()):(console.log("无token"),"/login"==e.path?a():(console.log("强制定位到登录界面"),a("/login")))}));var qe=Pe,Ee=a(4240),Fe=a.n(Ee);let ze=[];var Ge={getStatisticalData:()=>{for(let e=0;e<7;e++)ze.push(Fe().mock({"苹果":Fe().Random.float(100,8e3,0,0),vivo:Fe().Random.float(100,8e3,0,0),oppo:Fe().Random.float(100,8e3,0,0),"魅族":Fe().Random.float(100,8e3,0,0),"三星":Fe().Random.float(100,8e3,0,0),"小米":Fe().Random.float(100,8e3,0,0)}));return{code:2e4,data:{videoData:[{name:"小米",value:2999},{name:"苹果",value:5999},{name:"vivo",value:1500},{name:"oppo",value:1999},{name:"魅族",value:2200},{name:"三星",value:4500}],userData:[{date:"周一",new:5,active:200},{date:"周二",new:10,active:500},{date:"周三",new:12,active:550},{date:"周四",new:60,active:800},{date:"周五",new:65,active:550},{date:"周六",new:53,active:770},{date:"周日",new:33,active:170}],orderData:{date:["20191001","20191002","20191003","20191004","20191005","20191006","20191007"],data:ze},tableData:[{name:"oppo",todayBuy:500,monthBuy:3500,totalBuy:22e3},{name:"vivo",todayBuy:300,monthBuy:2200,totalBuy:24e3},{name:"苹果",todayBuy:800,monthBuy:4500,totalBuy:65e3},{name:"小米",todayBuy:1200,monthBuy:6500,totalBuy:45e3},{name:"三星",todayBuy:300,monthBuy:2e3,totalBuy:34e3},{name:"魅族",todayBuy:350,monthBuy:3e3,totalBuy:22e3}]}}}};function Qe(e){const t=e.split("?")[1];return t?JSON.parse('{"'+decodeURIComponent(t).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}'):{}}let Ze=[];const Ke=200;for(let Ye=0;Ye<Ke;Ye++)Ze.push(Fe().mock({id:Fe().Random.guid(),name:Fe().Random.cname(),addr:Fe().mock("@county(true)"),"age|18-60":1,birth:Fe().Random.date(),sex:Fe().Random.integer(0,1)}));var We={getUserList:e=>{const{name:t,page:a=1,limit:s=20}=Qe(e.url);console.log("name:"+t,"page:"+a,"分页大小limit:"+s);const o=Ze.filter((e=>!t||-1!==e.name.indexOf(t)||-1!==e.addr.indexOf(t))),n=o.filter(((e,t)=>t<s*a&&t>=s*(a-1)));return{code:2e4,count:o.length,list:n}},createUser:e=>{const{name:t,addr:a,age:s,birth:o,sex:n}=JSON.parse(e.body);return console.log(JSON.parse(e.body)),Ze.unshift({id:Fe().Random.guid(),name:t,addr:a,age:s,birth:o,sex:n}),{code:2e4,data:{message:"添加成功"}}},deleteUser:e=>{const{id:t}=JSON.parse(e.body);return t?(Ze=Ze.filter((e=>e.id!==t)),{code:2e4,message:"删除成功"}):{code:-999,message:"参数不正确"}},batchremove:e=>{let{ids:t}=Qe(e.url);return t=t.split(","),Ze=Ze.filter((e=>!t.includes(e.id))),{code:2e4,data:{message:"批量删除成功"}}},updateUser:e=>{const{id:t,name:a,addr:s,age:o,birth:n,sex:r}=JSON.parse(e.body),l=parseInt(r);return Ze.some((e=>{if(e.id===t)return e.name=a,e.addr=s,e.age=o,e.birth=n,e.sex=l,!0})),{code:2e4,data:{message:"编辑成功"}}}},Xe={getMenu:e=>{const{username:t,password:a}=JSON.parse(e.body);return"admin"===t&&"admin"===a?{code:2e4,data:{name:"有马公生",img:"https://unimap.wingzero.tw/unipic/14316619705299.jpg",access:"超级管理员",menu:[{path:"/home",name:"home",label:"首页",icon:"s-home",url:"Home.vue"},{path:"/mall",name:"mall",label:"商品管理",icon:"video-play",url:"Mall.vue"},{path:"/user",name:"user",label:"用户管理",icon:"user",url:"User.vue"},{label:"其他",icon:"location",children:[{path:"/page1",name:"page1",label:"页面1",icon:"setting",url:"PageOne.vue"},{path:"/page2",name:"page2",label:"页面2",icon:"setting",url:"PageTwo.vue"}]}],token:Fe().Random.guid(),message:"获取成功"}}:"xiaoxiao"===t&&"xiaoxiao"===a?{code:2e4,data:{name:"我是香奈美的狗",img:"https://lh4.googleusercontent.com/proxy/lj5c9pea5kfx0QpzpRwhkuWmEv9G1VPajvb2OKkJHTDzRMlE3ZVqvqOPJLmsmtDz-5pZjLUTLGHrLfkb4AjywwTscOVxSUZS-jD2ZxxF_H74c8HB6GeGcwpDkRbkHxNsUNxQ9Ky0nGBWrbrHVIQEyQ",access:"普通用户",menu:[{path:"/home",name:"home",label:"首页",icon:"s-home",url:"Home.vue"},{label:"其他",icon:"location",children:[{path:"/page1",name:"page1",label:"页面1",icon:"setting",url:"PageOne.vue"},{path:"/page2",name:"page2",label:"页面2",icon:"setting",url:"PageTwo.vue"}]}],token:Fe().Random.guid(),message:"获取成功"}}:{code:-999,data:{message:"密码错误"}}}};Fe().mock("/api/home/getData",Ge.getStatisticalData),Fe().mock("/api/user/add","post",We.createUser),Fe().mock("/api/user/edit","post",We.updateUser),Fe().mock("/api/user/del","post",We.deleteUser),Fe().mock(/api\/user\/getUser/,"get",We.getUserList),Fe().mock(/api\/permission\/getMenu/,"post",Xe.getMenu),n["default"].use(o()),n["default"].config.productionTip=!1,new n["default"]({render:e=>e(m),router:qe,store:Ne}).$mount("#app")},6251:function(){},7233:function(){},9800:function(){}},t={};function a(s){var o=t[s];if(void 0!==o)return o.exports;var n=t[s]={exports:{}};return e[s].call(n.exports,n,n.exports,a),n.exports}a.m=e,function(){var e=[];a.O=function(t,s,o,n){if(!s){var r=1/0;for(u=0;u<e.length;u++){s=e[u][0],o=e[u][1],n=e[u][2];for(var l=!0,i=0;i<s.length;i++)(!1&n||r>=n)&&Object.keys(a.O).every((function(e){return a.O[e](s[i])}))?s.splice(i--,1):(l=!1,n<r&&(r=n));if(l){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[s,o,n]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,s){var o,n,r=s[0],l=s[1],i=s[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(o in l)a.o(l,o)&&(a.m[o]=l[o]);if(i)var u=i(a)}for(t&&t(s);c<r.length;c++)n=r[c],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(u)},s=self["webpackChunkmyapp"]=self["webpackChunkmyapp"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=a.O(void 0,[504],(function(){return a(236)}));s=a.O(s)})();
//# sourceMappingURL=app.40f70d94.js.map