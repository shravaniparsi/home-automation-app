(function(t){function e(e){for(var r,n,o=e[0],l=e[1],c=e[2],d=0,v=[];d<o.length;d++)n=o[d],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&v.push(i[n][0]),i[n]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(v.length)v.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(r=!1)}r&&(s.splice(e--,1),t=n(n.s=a[0]))}return t}var r={},i={app:0},s=[];function n(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=r,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(a,r,function(e){return t[e]}.bind(null,r));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"1c88":function(t,e,a){"use strict";var r=a("4245"),i=a.n(r);i.a},"3c66":function(t,e,a){},4245:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("744f"),a("6c7b"),a("7514"),a("20d6"),a("1c4c"),a("6762"),a("cadf"),a("e804"),a("55dd"),a("d04f"),a("c8ce"),a("217b"),a("7f7f"),a("f400"),a("7f25"),a("536b"),a("d9ab"),a("f9ab"),a("32d7"),a("25c9"),a("9f3c"),a("042e"),a("c7c6"),a("f4ff"),a("049f"),a("7872"),a("a69f"),a("0b21"),a("6c1a"),a("c7c62"),a("84b4"),a("c5f6"),a("2e37"),a("fca0"),a("7cdf"),a("ee1d"),a("b1b1"),a("87f3"),a("9278"),a("5df2"),a("04ff"),a("f751"),a("4504"),a("fee7"),a("ffc1"),a("0d6d"),a("9986"),a("8e6e"),a("25db"),a("e4f7"),a("b9a1"),a("64d5"),a("9aea"),a("db97"),a("66c8"),a("57f0"),a("165b"),a("456d"),a("cf6a"),a("fd24"),a("8615"),a("551c"),a("097d"),a("df1b"),a("2397"),a("88ca"),a("ba16"),a("d185"),a("ebde"),a("2d34"),a("f6b3"),a("2251"),a("c698"),a("a19f"),a("9253"),a("9275"),a("3b2b"),a("3846"),a("4917"),a("a481"),a("28a5"),a("386d"),a("6b54"),a("4f7f"),a("8a81"),a("ac4d"),a("8449"),a("9c86"),a("fa83"),a("48c0"),a("a032"),a("aef6"),a("d263"),a("6c37"),a("9ec8"),a("5695"),a("2fdb"),a("d0b0"),a("5df3"),a("b54a"),a("f576"),a("ed50"),a("788d"),a("14b9"),a("f386"),a("f559"),a("1448"),a("673e"),a("242a"),a("c66f"),a("b05c"),a("34ef"),a("6aa2"),a("15ac"),a("af56"),a("b6e4"),a("9c29"),a("63d9"),a("4dda"),a("10ad"),a("c02b"),a("4795"),a("130f"),a("ac6a"),a("96cf");var r=a("2b0e"),i=a("ce5b"),s=a.n(i),n=(a("5363"),a("bf40"),a("d1e7"),new s.a({icons:{iconfont:"mdi"}}));r["default"].use(s.a,n);var o=n,l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-main",[a("router-view")],1)],1)},c=[],u={name:"App",data:function(){return{}}},d=u,v=(a("5c0b"),a("2877")),m=Object(v["a"])(d,l,c,!1,null,null,null),f=m.exports,p=a("2591"),h=a("8c4f"),b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.isAdmin?a("AdminPage"):a("MainPage")},g=[],w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("User"),a("NavBar"),a("Operations")],1)},y=[],_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-app-bar",{attrs:{app:"",color:"#16BAA1",dark:""}},[t.showbackbutton?a("v-btn",{attrs:{text:""},on:{click:function(e){return t.goBack()}}},[a("v-icon",[t._v("mdi-arrow-left-bold")])],1):t._e(),a("v-spacer"),a("v-btn",{attrs:{text:""},on:{click:t.logout}},[a("span",{staticClass:"mr-2"},[t._v("signOut")])])],1)],1)},A=[],C={name:"NavBar",methods:{logout:function(){var t=this;p["a"].auth().signOut().then(function(){t.$router.replace("login")})},goBack:function(){this.$router.push("/home")}},props:{showbackbutton:{type:Boolean,default:!1},userdata:null,roomtitle:""}},S=C,x=Object(v["a"])(S,_,A,!1,null,null,null),k=x.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[t.showSpinner?[a("v-container",[a("v-layout",{attrs:{wrap:""}},[a("v-flex",[a("v-card",{attrs:{elevation:"0",tag:"section",color:"transparent"}},[a("v-card-title",{staticStyle:{height:"26vh"}},[a("v-layout",{attrs:{"align-center":"","justify-center":""}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"#16BAA1",size:70}})],1)],1)],1)],1)],1)],1)]:[a("v-row",{staticClass:"ma-2",attrs:{dense:""}},[a("v-col",{attrs:{cols:"12"}},[a("v-card",[a("v-list-item",{staticClass:"pa-2"},[a("v-list-item-content",[a("v-row",{staticClass:"flex-nowrap",staticStyle:{"align-items":"baseline"},attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"10"}},[a("v-list-item-title",{staticClass:"subtitle-1 mb-1 ml-3"},[t._v("\n                    All switches on / off\n                  ")])],1),a("v-col",{attrs:{cols:"2"}},[a("v-list-item-title",{staticClass:"headline mb-1"},[a("v-switch",{attrs:{color:"#16BAA1",ripple:!1},on:{change:function(e){return t.allSwitchesChanged(t.allswitches)}},model:{value:t.allswitches,callback:function(e){t.allswitches=e},expression:"allswitches"}})],1)],1)],1)],1)],1)],1)],1)],1),t._l(t.rooms,function(e){return a("v-row",{key:e.id,staticClass:"ma-2",attrs:{dense:""},model:{value:t.rooms,callback:function(e){t.rooms=e},expression:"rooms"}},[a("div",{staticStyle:{width:"100%","font-size":"21px"}},[a("router-link",{staticStyle:{"background-color":"transparent","box-shadow":"none"},attrs:{to:{name:"Room",params:{roomtitle:e.title,userdata:t.rooms}},tag:"v-btn"}},[t._v("\n          "+t._s(e.title)+" >\n        ")])],1),t._l(e.switches,function(r){return a("v-col",{key:r.title,attrs:{cols:"6",lg:"4"}},[a("v-card",{attrs:{to:{name:"switch",params:{roomtitle:e.title,plug:r}}}},[a("v-list-item",{staticClass:"pa-2"},[a("v-list-item-content",[a("v-row",{staticClass:"flex-nowrap",attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"8"}},[a("v-list-item-avatar",{attrs:{tile:"",color:"white"}},["geyser"===r.type&&r.value?a("div",{attrs:{id:"curtain"}},[a("div",{staticClass:"circle"}),a("div",{staticClass:"circle"}),a("div",{staticClass:"circle"}),a("v-icon",{attrs:{medium:"",color:"blue"}},[t._v(t._s(t.getIcon(r.type,r.value)))])],1):"curtain"===r.type?a("div",{class:{"disabled-curtain":!r.value},attrs:{id:"curtain"}},[a("div",{attrs:{id:"curtain-left"}}),a("div",{attrs:{id:"curtain-right"}}),a("div",{attrs:{id:"curtain-bar"}})]):a("v-list-item-icon",[a("v-icon",{class:{"fa-beat":r.value&&"light-bulb"===r.type,"circle-fan":r.value&&("fan"===r.type||"air-conditioner"===r.type),boil:r.value&&"geyser"===r.type},attrs:{large:"",color:t.getColor(r.value,r.type)}},[t._v("\n                        "+t._s(t.getIcon(r.type,r.value)))])],1)],1)],1),a("v-col",{staticClass:"d-flex",attrs:{cols:"4"}},[a("v-list-item-title",{staticClass:"headline mb-1"},[a("v-switch",{class:{"not-small-screen":t.isNotSmallScreen},attrs:{color:"#16BAA1","persistent-hint":"",ripple:!1},on:{change:function(a){return t.switchChanged(r.value,r,e.title)}},model:{value:r.value,callback:function(e){t.$set(r,"value",e)},expression:"plug.value"}})],1)],1)],1)],1)],1),a("v-divider"),a("div",{staticClass:"subtitle-1 ml-4",staticStyle:{"margin-bottom":"-5px","font-weight":"bold"}},[t._v("\n            "+t._s(r.type)+"\n          ")]),a("span",{staticClass:"caption ml-4"},[t._v("\n            "+t._s(r.value?"on":"off")+"\n          ")])],1)],1)})],2)})]],2)},O=[],N={name:"Operations",components:{},mounted:function(){this.getSwitches(this.userId)},computed:{isNotSmallScreen:function(){return!this.$vuetify.breakpoint.xsOnly}},methods:{switchChanged:function(t,e,a){"curtain"===e.type&&!0===t&&this.start_curtain_animate("10%"),"curtain"===e.type&&!1===t&&this.start_curtain_animate("39.5%");var r=this.userId+"/rooms/"+a+"/switches/"+e.id,i=p["a"].database();i.ref(r).update({value:t})},allSwitchesChanged:function(t){for(var e=0;e<this.rooms.length;e++){var a=this.rooms[e];for(var r in a.switches){"curtain"===a.switches[r].type&&!0===t&&this.start_curtain_animate("10%"),"curtain"===a.switches[r].type&&!1===t&&this.start_curtain_animate("39.5%");var i=this.userId+"/rooms/"+a.title+"/switches/"+a.switches[r].id,s=p["a"].database();s.ref(i).update({value:t});var n=a.switches[r].id;this.rooms[e].switches[n].value=t}}},getData:function(t){this.showSpinner=!1;var e=t.val().rooms;for(var a in e)this.rooms.push(e[a])},geterror:function(){},getSwitches:function(){var t=p["a"].auth().currentUser;null!=t&&(this.userId=t.uid);var e=p["a"].database().ref(this.userId);e.once("value",this.getData,this.geterror)},getIcon:function(t){return"air-conditioner"===t?"mdi-air-conditioner":"light-bulb"===t?"mdi-lightbulb-on":"geyser"===t?"mdi-water-boiler":"curtain"===t?"mdi-window-open":"motion-sensor"===t?"mdi-account-settings":"fan"===t?"mdi-fan":void 0},getColor:function(t,e){return t&&"light-bulb"===e?"yellow":t&&"fan"===e?"#911f1f":t&&"air-conditioner"===e?"blue":t?"#16BAA1":"grey"},navigate:function(){this.$router.push("/room").catch(function(t){alert(t)})},start_curtain_animate:function(t){document.querySelector("#curtain-left").animate({width:t},3e3),document.querySelector("#curtain-right").animate({width:t},3e3)}},data:function(){return{userId:null,rooms:[],allswitches:!1,showSpinner:!0}}},I=N,$=(a("b842"),Object(v["a"])(I,B,O,!1,null,"31bb81ba",null)),E=$.exports,q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"user",staticStyle:{height:"30vh"}},[a("v-container",[a("v-layout",{attrs:{wrap:""}},[a("v-flex",[a("v-card",{attrs:{elevation:"0",tag:"section"}},[a("v-card-title",{staticStyle:{height:"26vh"}},[a("v-layout",{attrs:{"align-center":"","justify-center":""}},[t._v("\n              "+t._s(t.userName)+"'s Home\n            ")])],1)],1)],1)],1)],1)],1)},j=[],R={name:"NewUser",components:{},data:function(){return{userName:""}},mounted:function(){var t,e=this,a=p["a"].auth().currentUser;null!=a&&(t=a.uid);var r=p["a"].database().ref(t);r.once("value",function(t){var a=t.val();e.userName=a.userFullName},function(){alert("error")})}},U=R,P=(a("6e82"),Object(v["a"])(U,q,j,!1,null,"5e7470a8",null)),F=P.exports,z={name:"MainPage",components:{NavBar:k,Operations:E,User:F},methods:{}},L=z,T=Object(v["a"])(L,w,y,!1,null,null,null),M=T.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("NavBar"),a("NewUser")],1)},H=[],Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"add-user"},[a("v-container",[a("v-layout",{attrs:{wrap:""}},[a("v-flex",[a("v-card",{attrs:{elevation:"4",light:"",tag:"section"}},[a("v-card-title",[a("v-layout",{attrs:{"align-center":"","justify-space-between":""}},[a("h3",{staticClass:"headline"},[t._v("\n                ADD USER\n              ")]),a("v-flex")],1)],1),a("v-divider"),a("v-card-text",[[a("v-stepper",{attrs:{color:"#16BAA1"},model:{value:t.activeStepId,callback:function(e){t.activeStepId=e},expression:"activeStepId"}},[a("v-stepper-header",[a("v-stepper-step",{attrs:{complete:this.activeStepId>1,step:"1",color:"#16BAA1"}},[t._v("\n                    Name of step 1\n                  ")]),a("v-divider"),a("v-stepper-step",{attrs:{complete:this.activeStepId>2,step:"2",color:"#16BAA1"}},[t._v("\n                    Name of step 2\n                  ")]),a("v-divider"),a("v-stepper-step",{attrs:{complete:this.activeStepId>3,step:"3",color:"#16BAA1"}},[t._v("\n                    Name of step 3\n                  ")]),a("v-divider"),a("v-stepper-step",{attrs:{step:"4",color:"#16BAA1"}},[t._v("\n                    Name of step 4\n                  ")])],1),a("v-stepper-items",[a("v-stepper-content",{attrs:{step:"1"}},[a("v-form",{ref:"form1"},[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"12"}},[a("v-text-field",{attrs:{label:"Set Email id",outlined:"",color:"#16BAA1",rules:[t.rules.required,t.rules.email]},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),a("v-col",{attrs:{cols:"12",sm:"12"}},[a("v-text-field",{attrs:{label:"Set Password",outlined:"",type:"password",rules:[t.rules.required],color:"#16BAA1"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1)],1)],1),a("v-btn",{attrs:{color:"#16BAA1"},on:{click:function(e){return t.onContinue(2)}}},[t._v("\n                      Continue\n                    ")])],1),a("v-stepper-content",{attrs:{step:"2"}},[a("v-form",{ref:"form2"},[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"12"}},[a("v-text-field",{attrs:{label:"Enter User's Full Name",outlined:"",rules:[t.rules.required],color:"#16BAA1"},model:{value:t.userFullName,callback:function(e){t.userFullName=e},expression:"userFullName"}})],1),a("v-col",{attrs:{cols:"12",sm:"12"}},[a("v-text-field",{attrs:{label:"Number Of rooms",outlined:"",type:"number",color:"#16BAA1",rules:[t.rules.required,t.rules.number]},model:{value:t.NoOfRooms,callback:function(e){t.NoOfRooms=e},expression:"NoOfRooms"}})],1)],1)],1)],1),a("v-btn",{staticStyle:{"margin-right":"20px"},attrs:{color:"#16BAA1"},on:{click:function(e){return t.OnBack(1)}}},[t._v("\n                      Back\n                    ")]),a("v-btn",{attrs:{color:"#16BAA1"},on:{click:function(e){return t.onContinue(3)}}},[t._v("\n                      Continue\n                    ")])],1),a("v-stepper-content",{attrs:{step:"3"}},[a("v-form",{ref:"form3",attrs:{color:"#16BAA1"}},[a("v-container",[a("span",{staticClass:"fields"},t._l(Number(t.NoOfRooms),function(e){return a("v-row",{key:e},[a("v-col",{attrs:{sm:"12",lg:"12"}},[t._v(" ROOM "+t._s(e)+" ")]),a("v-col",{attrs:{sm:"12",lg:"4"}},[a("v-text-field",{class:"room-"+e+"-title",attrs:{label:"Title Of Room",outlined:"",color:"#16BAA1",rules:[t.rules.required,t.rules.roomTitle]}})],1),a("v-col",{attrs:{sm:"12",lg:"4"}},[a("v-text-field",{class:"room-"+e+"-switches",attrs:{label:"Number Of switches",outlined:"",type:"number",color:"#16BAA1",rules:[t.rules.required,t.rules.number]}})],1)],1)}),1)])],1),a("v-btn",{staticStyle:{"margin-right":"20px"},attrs:{color:"#16BAA1"},on:{click:function(e){return t.OnBack(2)}}},[t._v("\n                      Back\n                    ")]),a("v-btn",{attrs:{color:"#16BAA1"},on:{click:function(e){return t.toLastStep(4)}}},[t._v("\n                      Continue\n                    ")])],1),a("v-stepper-content",{attrs:{step:"4"}},[a("v-form",[a("v-container",[a("span",{staticClass:"fields"},t._l(t.rooms,function(e){return a("v-row",{key:e.title},[a("v-col",{staticClass:"subtitle-1",attrs:{sm:"12",lg:"12"}},[t._v("SET SWITCHES FOR "+t._s(e.title)+"\n                            ")]),t._l(e.switches,function(e){return a("v-row",{key:e.id,staticStyle:{width:"100%"}},[a("v-col",{attrs:{sm:"12",cols:"12"}},[a("v-radio-group",{staticClass:"overline",attrs:{row:"",label:"TYPE OF SWITCH FOR "+e.id,color:"#16BAA1"},model:{value:e.type,callback:function(a){t.$set(e,"type",a)},expression:"s.type"}},[a("v-radio",{attrs:{label:"Light Bulb",value:"light-bulb",color:"#16BAA1"}}),a("v-radio",{attrs:{label:"Air Conditioner",value:"air-conditioner",color:"#16BAA1"}}),a("v-radio",{attrs:{label:"Geyser",value:"geyser",color:"#16BAA1"}}),a("v-radio",{attrs:{label:"Curtain",value:"curtain",color:"#16BAA1"}}),a("v-radio",{attrs:{label:"Fan",value:"fan"}}),a("v-radio",{attrs:{label:"Motion sensor",value:"motion-sensor",color:"#16BAA1"}})],1)],1)],1)})],2)}),1)])],1),a("v-btn",{attrs:{color:"#16BAA1"},on:{click:function(e){return t.addUser()}}},[t._v("\n                      Submit\n                    ")])],1)],1)],1)]],2),a("v-divider")],1)],1)],1)],1)],1)},J=[],W={name:"NewUser",components:{},mounted:function(){},methods:{addUser:function(){var t=this;p["a"].auth().createUserWithEmailAndPassword(this.email,this.password).then(function(){var e,a=p["a"].auth().currentUser;null!=a&&(e=a.uid);var r=p["a"].database().ref(),i=t.getUserDataJSON();r.child(e).set(i),alert("USER Account Created")}).catch(function(t){alert(t),alert({type:"error",title:"Error",text:"Error"})})},getUserDataJSON:function(){var t={userFullName:this.userFullName,rooms:this.rooms};return t},toLastStep:function(t){var e="form"+(t-1);if(this.$refs[e].validate()){this.rooms={};for(var a=0;a<Number(this.NoOfRooms);a++){var r={title:"",switches:{}},i="room-"+(a+1)+"-title",s=document.getElementsByClassName(i),n=s[0].querySelector("input").value;r.title=n;for(var o="room-"+(a+1)+"-switches",l=document.getElementsByClassName(o),c=l[0].querySelector("input").value,u=0;u<Number(c);u++){var d="switch"+(u+1),v={id:d,value:!1,type:"",speed:0};r.switches[d]=v}this.rooms[n]=r}this.activeStepId=t}},onContinue:function(t){var e="form"+(t-1);this.$refs[e].validate()&&(this.activeStepId=t)},OnBack:function(t){this.activeStepId=t}},data:function(){return{activeStepId:1,email:null,password:null,NoOfRooms:null,setRooms:null,userFullName:null,rooms:null,rules:{required:function(t){return!!t||"Required."},email:function(t){var e=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(t)||"Invalid e-mail."},number:function(t){var e=/^([1-9][0-9]*)$/;return e.test(t)||"Invalid Number."},roomTitle:function(t){var e=/^\S*$/;return e.test(t)||"check if there are any spaces, spaces not allowed"}},userData:{userFullName:"",rooms:{}}}}},G=W,K=Object(v["a"])(G,Z,J,!1,null,null,null),Q=K.exports,V={name:"AdminPage",components:{NavBar:k,NewUser:Q},methods:{}},X=V,Y=Object(v["a"])(X,D,H,!1,null,null,null),tt=Y.exports,et={name:"Home",data:function(){return{isAdmin:Boolean}},components:{MainPage:M,AdminPage:tt},mounted:function(){var t=p["a"].auth().currentUser;this.isAdmin="alternatedimensionlab@gmail.com"===t.email}},at=et,rt=Object(v["a"])(at,b,g,!1,null,null,null),it=rt.exports,st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login"},[a("v-container",[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{sm12:"",md6:"","offset-md3":""}},[a("v-card",{attrs:{elevation:"4",light:"",tag:"section"}},[a("v-card-title",[a("v-layout",{attrs:{"align-center":"","justify-space-between":""}},[a("h3",{staticClass:"headline"},[t._v("\n                Login\n              ")]),a("v-flex")],1)],1),a("v-divider"),a("v-card-text",[a("p",[t._v("Sign in with your username and password:")]),[a("v-form",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"12"}},[a("v-text-field",{attrs:{label:"Username",outlined:"",color:"#16BAA1",rules:[t.rules.required,t.rules.email]},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),a("v-col",{attrs:{cols:"12",sm:"12"}},[a("v-text-field",{attrs:{label:"Password",outlined:"",type:"password",color:"#16BAA1"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1)],1)],1)]],2),a("v-divider"),a("v-card-actions",[a("router-link",{staticStyle:{"background-color":"transparent","box-shadow":"none"},attrs:{to:{name:"Resetpassword"},tag:"v-btn",color:"#16BAA1"}},[t._v("\n              Reset password?\n            ")]),a("v-spacer"),a("v-btn",{staticClass:"white--text",attrs:{color:"#16BAA1"},on:{click:function(e){return t.login(t.event)}}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-lock")]),t._v("\n              Login\n            ")],1)],1)],1)],1)],1)],1)],1)},nt=[],ot={name:"login",data:function(){return{email:null,password:null,rules:{required:function(t){return!!t||"Required."},email:function(t){var e=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(t)||"Invalid e-mail."}}}},methods:{login:function(t){var e=this;p["a"].auth().signInWithEmailAndPassword(this.email,this.password).then(function(){e.$router.replace("home")},function(t){alert("Oops. "+t.message)})}}},lt=ot,ct=(a("8123"),Object(v["a"])(lt,st,nt,!1,null,"6e35e8ce",null)),ut=ct.exports,dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("NavBar",{attrs:{showbackbutton:!0}}),a("div",{staticClass:"user",staticStyle:{height:"20vh"}},[a("v-container",[a("v-layout",{attrs:{wrap:""}},[a("v-flex",[a("v-card",{staticStyle:{"background-color":"transparent"},attrs:{elevation:"0",tag:"section"}},[a("v-card-title",{staticStyle:{height:"16vh"}},[a("v-layout",[a("div",[a("span",[t._v(t._s(t.roomtitle))])])])],1)],1)],1)],1)],1)],1),a("v-container",{staticClass:"pa-0",staticStyle:{"margin-top":"-8px"},attrs:{fluid:""}},[a("v-row",{staticClass:"ma-2",attrs:{dense:""}},[a("v-col",{attrs:{cols:"12"}},[a("v-card",[a("v-list-item",[a("v-list-item-content",[a("v-row",{staticClass:"flex-nowrap",staticStyle:{"align-items":"baseline"},attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"10"}},[a("v-list-item-title",{staticClass:"subtitle-1 mb-1 ml-3"},[t._v("\n                    All switches on / off\n                  ")])],1),a("v-col",{attrs:{cols:"2"}},[a("v-list-item-title",{staticClass:"headline mb-1"},[a("v-switch",{attrs:{color:"#16BAA1",ripple:!1},on:{change:function(e){return t.allSwitchesChanged(t.allswitches)}},model:{value:t.allswitches,callback:function(e){t.allswitches=e},expression:"allswitches"}})],1)],1)],1)],1)],1)],1)],1)],1),t._l(t.room,function(e){return a("v-row",{key:e.id,staticClass:"ma-2",attrs:{dense:""},model:{value:t.room,callback:function(e){t.room=e},expression:"room"}},t._l(e.switches,function(r){return a("v-col",{key:r.title,attrs:{cols:"6",lg:"4"}},[a("v-card",{attrs:{to:{name:"switch",params:{roomtitle:t.roomtitle,plug:r}}}},[a("v-list-item",{staticClass:"pa-2"},[a("v-list-item-content",[a("v-row",{staticClass:"flex-nowrap",attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"8"}},[a("v-list-item-avatar",{attrs:{tile:"",color:"white"}},["geyser"===r.type&&r.value?a("div",{attrs:{id:"curtain"}},[a("div",{staticClass:"circle"}),a("div",{staticClass:"circle"}),a("div",{staticClass:"circle"}),a("v-icon",{attrs:{medium:"",color:"blue"}},[t._v(t._s(t.getIcon(r.type,r.value)))])],1):"curtain"===r.type?a("div",{class:{"disabled-curtain":!r.value},attrs:{id:"curtain"}},[a("div",{attrs:{id:"curtain-left"}}),a("div",{attrs:{id:"curtain-right"}}),a("div",{attrs:{id:"curtain-bar"}})]):a("v-list-item-icon",[a("v-icon",{class:{"fa-beat":r.value&&"light-bulb"===r.type,"circle-fan":r.value&&("fan"===r.type||"air-conditioner"===r.type),boil:r.value&&"geyser"===r.type},attrs:{large:"",color:t.getColor(r.value,r.type)}},[t._v("\n                        "+t._s(t.getIcon(r.type,r.value)))])],1)],1)],1),a("v-col",{staticClass:"d-flex",attrs:{cols:"4"}},[a("v-list-item-title",{staticClass:"headline mb-1"},[a("v-switch",{class:{"not-small-screen":t.isNotSmallScreen},attrs:{color:"#16BAA1","persistent-hint":"",ripple:!1},on:{change:function(a){return t.switchChanged(r.value,r,e.title)}},model:{value:r.value,callback:function(e){t.$set(r,"value",e)},expression:"plug.value"}})],1)],1)],1)],1)],1),a("v-divider"),a("div",{staticClass:"subtitle-1 ml-4",staticStyle:{"margin-bottom":"-5px","font-weight":"bold"}},[t._v("\n            "+t._s(r.type)+"\n          ")]),a("span",{staticClass:"caption ml-4"},[t._v("\n            "+t._s(r.value?"on":"off")+"\n          ")])],1)],1)}),1)})],2)],1)},vt=[],mt={name:"Operations",components:{NavBar:k},mounted:function(){this.getSwitches(this.roomtitle)},computed:{isNotSmallScreen:function(){return!this.$vuetify.breakpoint.xsOnly}},methods:{switchChanged:function(t,e,a){"curtain"===e.type&&!0===t&&this.start_curtain_animate("10%"),"curtain"===e.type&&!1===t&&this.start_curtain_animate("39.5%");var r=this.userId+"/rooms/"+a+"/switches/"+e.id,i=p["a"].database();i.ref(r).update({value:t})},allSwitchesChanged:function(t){for(var e=0;e<this.room.length;e++){var a=this.room[e];for(var r in a.switches){"curtain"===a.switches[r].type&&!0===t&&this.start_curtain_animate("10%"),"curtain"===a.switches[r].type&&!1===t&&this.start_curtain_animate("39.5%");var i=this.userId+"/rooms/"+a.title+"/switches/"+a.switches[r].id,s=p["a"].database();s.ref(i).update({value:t});var n=a.switches[r].id;this.room[e].switches[n].value=t}}},getSwitches:function(t){var e=p["a"].auth().currentUser;null!=e&&(this.userId=e.uid),this.room=this.userdata.filter(function(e){if(e.title===t)return e})},getIcon:function(t){return"air-conditioner"===t?"mdi-air-conditioner":"light-bulb"===t?"mdi-lightbulb-on":"geyser"===t?"mdi-water-boiler":"curtain"===t?"mdi-window-open":"motion-sensor"===t?"mdi-account-settings":"fan"===t?"mdi-fan":void 0},getColor:function(t,e){return t&&"light-bulb"===e?"yellow":t&&"fan"===e?"#911f1f":t&&"air-conditioner"===e?"blue":t?"#16BAA1":"grey"},start_curtain_animate:function(t){document.querySelector("#curtain-left").animate({width:t},3e3),document.querySelector("#curtain-right").animate({width:t},3e3)}},data:function(){return{roomtitle:"",userdata:null,userId:"",room:null,allswitches:!1}},created:function(){this.roomtitle=this.$route.params.roomtitle,this.userdata=this.$route.params.userdata}},ft=mt,pt=(a("1c88"),Object(v["a"])(ft,dt,vt,!1,null,"1ccc508d",null)),ht=pt.exports,bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("NavBar",{attrs:{showbackbutton:!0,roomtitle:t.roomtitle,userdata:t.userdata}}),a("div",{staticClass:"user",staticStyle:{height:"20vh"}},[a("v-container",[a("v-layout",{attrs:{wrap:""}},[a("v-flex",[a("v-card",{staticStyle:{"background-color":"transparent"},attrs:{elevation:"0",tag:"section"}},[a("v-card-title",{staticStyle:{height:"16vh"}},[a("v-layout",[a("div",[a("v-list-item-avatar",{attrs:{tile:"",color:"white"}},["geyser"===t.plug.type&&t.plug.value?a("div",{attrs:{id:"curtain"}},[a("div",{staticClass:"circle"}),a("div",{staticClass:"circle"}),a("div",{staticClass:"circle"}),a("v-icon",{attrs:{medium:"",color:"blue"}},[t._v(t._s(t.getIcon(t.plug.type,t.plug.value)))])],1):"curtain"===t.plug.type?a("div",{class:{"disabled-curtain":!t.plug.value},attrs:{id:"curtain"}},[a("div",{attrs:{id:"curtain-left"}}),a("div",{attrs:{id:"curtain-right"}}),a("div",{attrs:{id:"curtain-bar"}})]):a("v-list-item-icon",[a("v-icon",{class:{"fa-beat":t.plug.value&&"light-bulb"===t.plug.type,"circle-fan":t.plug.value&&("fan"===t.plug.type||"air-conditioner"===t.plug.type),boil:t.plug.value&&"geyser"===t.plug.type},attrs:{large:"",color:t.getColor(t.plug.value,t.plug.type)}},[t._v("\n                        "+t._s(t.getIcon(t.plug.type,t.plug.value)))])],1)],1),a("br"),a("span",{staticClass:"text-capitalize"},[t._v(t._s(t.plug.type))])],1)])],1)],1)],1)],1)],1)],1),a("v-container",{staticClass:"pa-0",staticStyle:{"margin-top":"-8px"},attrs:{fluid:""}},[a("v-row",{staticClass:"ma-2",attrs:{dense:""}},[a("v-col",{attrs:{cols:"12"}},[a("v-card",[a("v-list-item",{},[a("v-list-item-content",[a("v-row",{staticClass:"flex-nowrap",staticStyle:{"align-items":"baseline"},attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"10"}},[a("v-list-item-title",{staticClass:"subtitle-1 mb-1 ml-3"},[t._v("\n                    "+t._s(t.plug.value?"On":"Off")+"\n                  ")])],1),a("v-col",{attrs:{cols:"2"}},[a("v-list-item-title",{staticClass:"headline mb-1"},[a("v-switch",{attrs:{color:"#16BAA1",ripple:!1},on:{change:function(e){return t.switchChanged(t.plug.value,t.plug,t.roomtitle)}},model:{value:t.plug.value,callback:function(e){t.$set(t.plug,"value",e)},expression:"plug.value"}})],1)],1)],1)],1)],1)],1)],1)],1),"fan"===t.plug.type?a("v-row",{staticClass:"ma-2",attrs:{dense:""}},[a("v-col",{attrs:{cols:"12"}},[a("v-card",[a("v-list-item",{},[a("v-list-item-content",[a("v-row",{staticClass:"flex-nowrap",staticStyle:{"align-items":"baseline","flex-flow":"column"},attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12"}},[a("v-list-item-title",{staticClass:"subtitle-1 mb-1 ml-3"},[t._v("\n                    Slider\n                  ")])],1),a("v-col",{attrs:{cols:"12"}},[a("v-list-item-title",{staticClass:"headline mb-1"},[a("v-range-slider",{attrs:{hint:"Slide to change value",max:"5",min:"0",step:"1",ticks:"always","tick-size":"5","track-color":"grey","track-fill-color":"#16BAA1","tick-color":"#16BAA1",color:"#16BAA1",ripple:"false","tick-labels":[0,1,2,3,4,5]},on:{change:function(e){return t.sliderChanged(e,t.plug,t.roomtitle)}}})],1)],1)],1)],1)],1)],1)],1)],1):t._e()],1)],1)},gt=[],wt={name:"Operations",components:{NavBar:k},mounted:function(){},computed:{isNotSmallScreen:function(){return!this.$vuetify.breakpoint.xsOnly}},methods:{sliderChanged:function(t,e,a){var r,i=p["a"].auth().currentUser;null!=i&&(r=i.uid);var s=r+"/rooms/"+a+"/switches/"+e.id,n=p["a"].database();n.ref(s).update({speed:t[1]})},switchChanged:function(t,e,a){var r;"curtain"===e.type&&!0===t&&this.start_curtain_animate("10%"),"curtain"===e.type&&!1===t&&this.start_curtain_animate("39.5%");var i=p["a"].auth().currentUser;null!=i&&(r=i.uid);var s=r+"/rooms/"+a+"/switches/"+e.id,n=p["a"].database();n.ref(s).update({value:t})},getIcon:function(t){return"air-conditioner"===t?"mdi-air-conditioner":"light-bulb"===t?"mdi-lightbulb-on":"geyser"===t?"mdi-water-boiler":"curtain"===t?"mdi-window-open":"motion-sensor"===t?"mdi-account-settings":"fan"===t?"mdi-fan":void 0},getColor:function(t,e){return t&&"light-bulb"===e?"yellow":t&&"fan"===e?"#911f1f":t&&"air-conditioner"===e?"blue":t?"#16BAA1":"grey"},start_curtain_animate:function(t){document.querySelector("#curtain-left").animate({width:t},3e3),document.querySelector("#curtain-right").animate({width:t},3e3)}},data:function(){return{roomtitle:"",plug:null,userdata:null,range:0}},created:function(){this.roomtitle=this.$route.params.roomtitle,this.plug=this.$route.params.plug,this.userdata=this.$route.params.userdata}},yt=wt,_t=(a("adae"),Object(v["a"])(yt,bt,gt,!1,null,"377f57b2",null)),At=_t.exports,Ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login"},[a("v-container",[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{sm12:"",md6:"","offset-md3":""}},[a("v-card",{attrs:{elevation:"4",light:"",tag:"section"}},[a("v-card-title",[a("v-layout",{attrs:{"align-center":"","justify-space-between":""}},[a("h3",{staticClass:"headline"},[t._v("\n                Login\n              ")]),a("v-flex")],1)],1),a("v-divider"),a("v-card-text",[a("p",[t._v("Sign in with your username and password:")]),[a("v-form",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"12"}},[a("v-text-field",{attrs:{label:"Username",outlined:"",color:"#16BAA1",rules:[t.rules.required,t.rules.email]},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1)],1)],1)]],2),a("v-divider"),a("v-card-actions",[a("router-link",{staticStyle:{"background-color":"transparent","box-shadow":"none"},attrs:{to:{name:"Login"},tag:"v-btn",color:"#16BAA1"}},[t._v("\n              Back to login page\n            ")]),a("v-spacer"),a("v-btn",{staticClass:"white--text",attrs:{color:"#16BAA1",loading:t.loading},on:{click:function(e){return t.login()}}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-lock")]),t._v("\n              Submit\n            ")],1)],1)],1)],1)],1)],1)],1)},St=[],xt={name:"login",data:function(){return{email:null,loading:!1,rules:{required:function(t){return!!t||"Required."},email:function(t){var e=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(t)||"Invalid e-mail."}}}},methods:{login:function(){var t=this;this.loading=!0,p["a"].auth().sendPasswordResetEmail(this.email).then(function(){t.loading=!1,alert("mail has been sent to yor email id to reset the password")}).catch(function(t){this.loading=!1,alert("Oops. "+t.message)})}}},kt=xt,Bt=(a("d081"),Object(v["a"])(kt,Ct,St,!1,null,"32e9a216",null)),Ot=Bt.exports;r["default"].use(h["a"]);var Nt=new h["a"]({routes:[{path:"*",redirect:"/login"},{path:"/",redirect:"/login"},{path:"/login",name:"Login",component:ut},{path:"/resetpassword",name:"Resetpassword",component:Ot},{path:"/home",name:"Home",component:it,meta:{requiresAuth:!0}},{path:"/room",name:"Room",component:ht,meta:{requiresAuth:!0}},{path:"/switch",name:"switch",component:At,meta:{requiresAuth:!0}}]});Nt.beforeEach(function(t,e,a){var r=p["a"].auth().currentUser,i=t.matched.some(function(t){return t.meta.requiresAuth});i&&!r?a("login"):!i&&r?a("home"):a()});var It=Nt;r["default"].config.productionTip=!1;var $t="",Et={apiKey:"AIzaSyBBNyC4e1xCcqkrRsC1lEiNwdZLfqXtnOQ",authDomain:"smarthome-fcce5.firebaseapp.com",databaseURL:"https://smarthome-fcce5-default-rtdb.firebaseio.com",projectId:"smarthome-fcce5",storageBucket:"smarthome-fcce5.appspot.com",messagingSenderId:"51169223417",appId:"1:51169223417:web:2b45f7307dabe2ad1e3828",measurementId:"G-KPG5HJVHFK"};p["a"].initializeApp(Et),p["a"].auth().onAuthStateChanged(function(){$t||($t=new r["default"]({router:It,vuetify:o,render:function(t){return t(f)}}).$mount("#app"))}),document.addEventListener("deviceready",function(){console.log("Ready, Render the App"),$t()});var qt="undefined"!==typeof window.cordova;qt||document.dispatchEvent(new CustomEvent("deviceready",{}))},"5c0b":function(t,e,a){"use strict";var r=a("e332"),i=a.n(r);i.a},"6e82":function(t,e,a){"use strict";var r=a("e135"),i=a.n(r);i.a},8123:function(t,e,a){"use strict";var r=a("bc8f"),i=a.n(r);i.a},9474:function(t,e,a){},adae:function(t,e,a){"use strict";var r=a("9474"),i=a.n(r);i.a},adaf:function(t,e,a){},b842:function(t,e,a){"use strict";var r=a("3c66"),i=a.n(r);i.a},bc8f:function(t,e,a){},d081:function(t,e,a){"use strict";var r=a("adaf"),i=a.n(r);i.a},e135:function(t,e,a){},e332:function(t,e,a){}});
//# sourceMappingURL=app.15863d86.js.map