(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{114:function(e,t,a){},115:function(e,t,a){},170:function(e,t,a){e.exports=a(240)},188:function(e,t,a){},192:function(e,t,a){},240:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),i=a.n(o),l=a(59),c=a(15),s=a(28),u=a(29),m=a(31),d=a(30),p=a(23),h=a(19),g=a.n(h),f=a(35),y=a(151),E=(a(187),a(133)),w=a(68),b=a.n(w),v=(a(188),a(114),a(115),a(273)),k=a(275),S=a(277),C=a(278),O=a(291),x=a(276),j=a(91),D=a(138),N=a.n(D),W=a(139),F=a.n(W),I=a(137),L=a.n(I),B=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).clickItem=function(){e.props.onClickItem(e.props.item)},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v.a,{className:"root"},r.a.createElement(k.a,{className:"item",onClick:this.clickItem,avatar:r.a.createElement(O.a,{"aria-label":"recipe",className:"avatar"},this.props.item.type.charAt(0).toUpperCase()),action:r.a.createElement(x.a,{"aria-label":"settings"},r.a.createElement(L.a,null)),title:this.props.item.display_name,subheader:this.props.item.type}),r.a.createElement(S.a,null,r.a.createElement(j.a,{variant:"body2",color:"textSecondary",component:"p"},this.props.item.display_name)),r.a.createElement(C.a,{disableSpacing:!0},r.a.createElement(x.a,{"aria-label":"add to favorites"},r.a.createElement(N.a,null)),r.a.createElement(x.a,{"aria-label":"share"},r.a.createElement(F.a,null)))))}}]),a}(r.a.Component),z=a(292),A=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).clickItem=function(t){e.props.onClickItem(t)},e}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e,t=this;return r.a.createElement(z.a,{className:"listBox"},null===(e=this.props.result)||void 0===e?void 0:e.map((function(e,a){return r.a.createElement(B,{key:a,item:e,onClickItem:t.clickItem})})))}}]),a}(r.a.Component),M=a(140),P=a.n(M),Q=a(87),T=a.n(Q),V=a(279),G=(a(192),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).onChangeSearch=function(e){n.setState({newSearch:"".concat(e.target.value)})},n.onKeyPressSearch=function(e){"Enter"===e.key&&(n.getData(),n.getMapQuestData())},n.onClick=function(){n.getData(),n.getMapQuestData()},n.state={resultString:"Pusto",result:e.result,mapQuestResult:{results:[{locations:[]}]},onGetData:function(){},onGetMapQuestData:function(){},searchOnProgres:!1,onClickItem:function(){}},n}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.result!==this.state.result&&this.props.onGetData(this.state.result),t.mapQuestResult!==this.state.mapQuestResult&&this.props.onGetMapQuestData(this.state.mapQuestResult)}},{key:"onClickItemChanged",value:function(e){console.log("test",e)}},{key:"componentDidMount",value:function(){console.log("Odlaczony",this.state)}},{key:"componentWillUnmount",value:function(){console.log("Odlaczony??????",this.state)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"mainSerachBox"},this.state.searchOnProgres?r.a.createElement(V.a,null):"",r.a.createElement("div",{className:"searchBox"},r.a.createElement(P.a,{className:"searchBoxInput",onChange:this.onChangeSearch,value:this.props.newSearch,onKeyPress:this.onKeyPressSearch,placeholder:"Wyszukaj",inputProps:{"aria-label":"search"}}),r.a.createElement(x.a,{type:"submit",onClick:this.onClick,className:"iconButton","aria-label":"search"},r.a.createElement(T.a,null))),r.a.createElement(A,{result:this.state.result,resultMapQuest:this.state.mapQuestResult,onClickItem:this.props.onClickItem})))}},{key:"getData",value:function(){var e=this;this.setState({searchOnProgres:!0});var t="https://nominatim.openstreetmap.org/?addressdetails=1&q=".concat(this.state.newSearch,"&format=json&limit=10");fetch(t).then((function(e){return e.json()})).then((function(t){e.setState({resultString:JSON.stringify(t)}),e.setState({result:t}),e.setState({searchOnProgres:!1})})).catch((function(t){console.error("Error:",t),e.setState({resultString:JSON.stringify([])}),e.setState({result:[]}),e.setState({searchOnProgres:!1})}))}},{key:"getMapQuestData",value:function(){}}]),a}(r.a.Component)),R=a(149),J=a.n(R),U=a(150),_=a.n(U),q=a(18),H=a(280),K=a(281),X=a(283),Z=a(284),Y=a(289),$=a(285),ee=a(90),te=(a(76),a(223),a(226),a(61)),ae=te.a.initializeApp({apiKey:"AIzaSyBPnakkMCkHQR26zXRstzrBIorHAWo5H3w",authDomain:"geostarapp.firebaseapp.com",databaseURL:"https://geostarapp.firebaseio.com",projectId:"geostarapp",storageBucket:"geostarapp.appspot.com",messagingSenderId:"593481844972",appId:"1:593481844972:web:3d55715029e07c806efdc9",measurementId:"G-MEWLDR8DWF"}),ne=a(142),re=a.n(ne),oe=a(143),ie=a.n(oe),le=a(141),ce=a.n(le),se=Object(H.a)((function(e){return Object(K.a)({toolBox:{margin:"1px",paddingLeft:"25px"}})}));function ue(e){var t=se();return r.a.createElement("div",{className:t.toolBox},r.a.createElement(x.a,{title:"Punkt","aria-label":"search",onClick:function(){e.draw.changeMode("draw_point")}},r.a.createElement(ce.a,null)),r.a.createElement(x.a,{title:"Linia","aria-label":"search",onClick:function(){e.draw.changeMode("draw_line_string")}},r.a.createElement(re.a,null)),r.a.createElement(x.a,{title:"Obszar","aria-label":"search",onClick:function(){e.draw.changeMode("draw_polygon")}},r.a.createElement(ie.a,null)))}var me=a(290),de=a(144),pe=a.n(de),he=Object(H.a)((function(e){return Object(K.a)({root:{flexGrow:1},paperGrid:{padding:e.spacing(4),textAlign:"center",color:e.palette.text.secondary},toolBox:{margin:"1px"},fullForm:{backgroundColor:"whitesmoke"}})}));function ge(e){var t=Object(ee.b)(),a=(t.register,t.handleSubmit),n=t.control,o=t.reset,i=he(),c=r.a.useState(!1),s=Object(q.a)(c,2),u=s[0],m=s[1],d=r.a.useState(!1),p=Object(q.a)(d,2),h=p[0],g=p[1],f=function(e,t){"clickaway"!==t&&m(!1)};return r.a.createElement("div",null,r.a.createElement(me.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:u,autoHideDuration:6e3,onClose:f,message:"Data saved",action:r.a.createElement(r.a.Fragment,null,r.a.createElement(X.a,{color:"secondary",size:"small",onClick:f},"UNDO"),r.a.createElement(x.a,{size:"small","aria-label":"close",color:"inherit",onClick:f},r.a.createElement(pe.a,{fontSize:"small"})))}),r.a.createElement("div",{className:i.fullForm},r.a.createElement(ue,{draw:e.draw}),r.a.createElement("form",{onSubmit:a((function(t){g(!0);var a=new Date,n=Object(l.a)({},t,{createDate:a,status:"new"},a,{},{geojson:JSON.stringify(e.draw.getAll())});console.log(n),ae.auth().onAuthStateChanged((function(e){e&&ae.firestore().collection("zgloszenia").add(Object(l.a)({},n,{},{user:e.email})).then((function(e){console.log("Document written with ID: ",e.id),m(!0),g(!1),o({})})).catch((function(e){console.error("Error adding document: ",e),g(!1)}))}))}))},r.a.createElement(Z.a,{className:i.paperGrid,container:!0,spacing:3,direction:"column"},r.a.createElement(ee.a,{as:r.a.createElement(Y.a,null),name:"title",label:"First Name",control:n,defaultValue:"",required:!0}),r.a.createElement(ee.a,{as:r.a.createElement(Y.a,null),name:"descryption",label:"Descryption",control:n,defaultValue:"",required:!0}),h?r.a.createElement(X.a,{type:"submit",variant:"contained",color:"primary"},r.a.createElement($.a,{color:"secondary"}),"  Sending..."):r.a.createElement(X.a,{type:"submit",variant:"contained",color:"primary"},"  Send")))))}var fe=a(102),ye=Object(fe.WidthProvider)(fe.Responsive),Ee=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"editForm",value:function(){return this.props.showEditForm?r.a.createElement("div",{key:"2"},r.a.createElement(ge,null)):r.a.createElement("div",{key:"2"})}},{key:"viewForm",value:function(){return this.props.showViewForm?r.a.createElement("div",{key:"3"},"Przegladanie",r.a.createElement(ge,null)):r.a.createElement("div",{key:"3"})}},{key:"render",value:function(){return r.a.createElement(ye,{isDraggable:!0,isResizable:!0,className:"layout",layouts:this.props.layouts,breakpoints:{lg:1200,md:996,sm:768,xs:480,xxs:0},cols:{lg:6,md:6,sm:6,xs:4,xxs:2}},this.editForm(),this.viewForm())}}]),a}(r.a.Component),we=a(288),be=a(147),ve=a.n(be),ke=a(146),Se=a.n(ke),Ce=a(148),Oe=a.n(Ce),xe=a(287),je=a(145),De=a.n(je),Ne=a(286),We=Object(H.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function Fe(e){var t=We(),a=Object(n.useState)(""),o=Object(q.a)(a,2),i=o[0],l=o[1],c=Object(n.useState)(""),s=Object(q.a)(c,2),u=s[0],m=s[1],d=Object(n.useState)(!1),p=Object(q.a)(d,2),h=p[0],g=p[1];return r.a.createElement(Ne.a,{component:"main",maxWidth:"xs"},h?r.a.createElement(V.a,null):"",r.a.createElement(xe.a,null),r.a.createElement("div",{className:t.paper},r.a.createElement(O.a,{className:t.avatar},r.a.createElement(De.a,null)),r.a.createElement(j.a,{component:"h1",variant:"h5"},e.label),r.a.createElement("form",{className:t.form,noValidate:!0},r.a.createElement(Z.a,{container:!0,spacing:2},r.a.createElement(Z.a,{item:!0,xs:12},r.a.createElement(Y.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",value:i,onChange:function(e){return l(e.target.value)}})),r.a.createElement(Z.a,{item:!0,xs:12},r.a.createElement(Y.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:u,onChange:function(e){return m(e.target.value)}}))),r.a.createElement(X.a,{fullWidth:!0,variant:"contained",color:"primary",className:t.submit,onClick:function(){g(!0),e.login(i,u)}},"Sign Up"),e.infoMessage)))}function Ie(e){var t=r.a.useState(!1),a=Object(q.a)(t,2),o=a[0],i=a[1],l=r.a.useState(!1),c=Object(q.a)(l,2),s=c[0],u=c[1],m=r.a.useState(!1),d=Object(q.a)(m,2),p=d[0],h=d[1],g=r.a.useState({}),f=Object(q.a)(g,2),y=f[0],E=f[1],w=r.a.useState(""),b=Object(q.a)(w,2),v=b[0],k=b[1],S=r.a.useState(""),C=Object(q.a)(S,2),O=C[0],j=C[1];Object(n.useEffect)((function(){te.a.auth().onAuthStateChanged((function(t){t?(h(!0),e.userLoged(!0)):(h(!1),e.userLoged(!1))}))}),[]);return r.a.createElement("div",null,p?r.a.createElement("div",{className:"iconButtonStyle"},r.a.createElement(x.a,{className:"logout",title:"Log out",type:"submit",onClick:function(){console.log("Wylogowano"),te.a.auth().signOut().then((function(){E(y),h(!0),e.userLoged(!0)})).catch((function(e){console.log("singOut",e)}))},"aria-label":"search"},r.a.createElement(Se.a,null))):r.a.createElement("div",{className:"iconButtonStyle"}," ",r.a.createElement(x.a,{className:"login",title:"Login",type:"submit",onClick:function(){i(!0)},"aria-label":"search"},r.a.createElement(ve.a,null))),p?"":r.a.createElement("div",{className:"iconButtonStyle"},r.a.createElement(x.a,{className:"create",title:"Create account",type:"submit",onClick:function(){console.log("nowe konto"),u(!0)},"aria-label":"search"},r.a.createElement(Oe.a,null))),r.a.createElement(we.a,{onClose:function(){i(!1)},open:o},r.a.createElement(Fe,{infoMessage:O,label:"Login",login:function(t,a){ae.auth().signInWithEmailAndPassword(t,a).then((function(t){console.log(t,t.user,t.credential),E(t),i(!1),h(!0),e.userLoged(!0)})).catch((function(e){j(e.message)}))}})),r.a.createElement(we.a,{onClose:function(){u(!1)},open:s},r.a.createElement(Fe,{infoMessage:v,label:"Sing up",login:function(t,a){console.log("Tworze konto"),te.a.auth().createUserWithEmailAndPassword(t,a).then((function(t){console.log("Account created",t),u(!1),e.userLoged(!0),h(!0)})).catch((function(e){console.log("Create account",e);e.code;k(e.message)}))}})))}var Le=a(293);b.a.accessToken="pk.eyJ1IjoidGxvbWllaiIsImEiOiJja2cyNm4wY2YwZ2ZkMnlvNWFjdTB3ZWV2In0.Bo-nyJTaJwxOpgDFwIH_9g";var Be=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).mapContainer=void 0,n.map=void 0,n.marker=void 0,n.draw=void 0,n.updateAndNotify=function(){console.log("LOGED 222")},n.drawLog=function(){console.log("draw",n.draw.getAll())},n.getDataFromMapQuest=function(e){console.log("getDataFromMapQuest =>",e);var t=e.results[0].locations.map((function(e){return{type:"Feature",geometry:{type:"Point",coordinates:[parseFloat(e.latLng.lng),parseFloat(e.latLng.lat)]}}})),a={type:"FeatureCollection",features:[]};a.features=t,n.map.getSource("mapQuestLayer")||(n.map.addSource("mapQuestLayer",{type:"geojson",data:{type:"FeatureCollection",features:[]}}),n.map.addLayer({id:"mapQuestLayerId",source:"mapQuestLayer",type:"circle",paint:{"circle-radius":10,"circle-color":"blue"}})),n.map.getSource("mapQuestLayer").setData(a)},n.getDataFromSearch=function(){var e=Object(f.a)(g.a.mark((function e(t){var a,r,o;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({searchBackup:t}),console.log("getDataFromSearch =>",t),a=t.map((function(e){return{type:"Feature",geometry:{type:"Point",coordinates:[parseFloat(e.lon),parseFloat(e.lat)]}}})),console.log("GEoJson",a),n.setState({points:a}),(r={type:"FeatureCollection",features:[]}).features=a,n.map.getSource("point")||(n.map.addSource("point",{type:"geojson",data:{type:"FeatureCollection",features:[]}}),n.map.addLayer({id:"points",source:"point",type:"circle",paint:{"circle-radius":20,"circle-color":"red"}})),n.map.getSource("point").setData(r),o=n.buildBbox(r),e.next=12,n.map.fitBounds([[o[0],o[1]],[o[2],o[3]]]);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.rotateCamera=function(e){n.map.rotateTo(e/150%360,{duration:0}),requestAnimationFrame(n.rotateCamera)},n.onClikItem=function(e){var t=e.boundingbox.map((function(e){return Number(e)}));n.map.fitBounds([[t[2],t[0]],[t[3],t[1]]],{padding:20})},n.handleCreateAccount=function(e,t){n.setState({email:e}),n.setState({password:t})},n.handleLoged=function(e){console.log("LOGED",e),n.setState({loged:e}),n.state.loged?n.map.addControl(n.draw):n.map.removeControl(n.draw)},n.toggleDrawer=function(e,t){return function(e){(!e||"keydown"!==e.type||"Tab"!==e.key&&"Shift"!==e.key)&&n.setState({drawer:t})}},n.drawerWidth=240,n.handleClickOpen=function(){n.setState({openView:!n.state.openView})},n.handleClickViewOpen=function(){console.log("klik"),n.setState({openEdit:!n.state.openEdit})},n.toggleDrawerEdit=function(e,t){return function(e){(!e||"keydown"!==e.type||"Tab"!==e.key&&"Shift"!==e.key)&&n.setState({drawerEdit:t})}},n.styles=function(e){var t;return{drawer:(t={position:"absolute",overflowX:"hidden",zIndex:e.zIndex.drawer+2},Object(p.a)(t,e.breakpoints.up("sm"),{position:"relative",width:n.drawerWidth,flexShrink:0,zIndex:e.zIndex.drawer}),Object(p.a)(t,"whiteSpace","nowrap"),t),drawerOpen:{width:n.drawerWidth,background:"red",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(p.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:0},e.breakpoints.up("sm"),{width:9*e.spacing.unit+1})}},n.state={lng:5,lat:34,zoom:0,points:[],email:"",password:"",loged:!1,drawer:!1,drawerEdit:!1,searchBackup:[],layouts:{lg:[{i:"2",x:0,y:0,w:1,h:2,minW:4,maxW:7},{i:"3",x:6,y:6,w:1,h:2,minW:4,maxW:7}],md:[{i:"2",x:0,y:0,w:2,h:2,minW:4,maxW:8},{i:"3",x:5,y:6,w:2,h:2,minW:4,maxW:8}],sm:[{i:"2",x:0,y:0,w:2,h:2,minW:4,maxW:4},{i:"3",x:6,y:6,w:2,h:2,minW:4,maxW:4}],xs:[{i:"2",x:0,y:0,w:2,h:2,minW:4,maxW:8},{i:"3",x:2,y:0,w:2,h:2,minW:4,maxW:8}],xxs:[{i:"2",x:0,y:0,w:2,h:2,minW:3,maxW:4},{i:"3",x:2,y:0,w:2,h:2,minW:3,maxW:4}]},openEdit:!1,openView:!1},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.map=new b.a.Map({container:this.mapContainer,center:[this.props.longitude,this.props.latitude],style:"mapbox://styles/mapbox/streets-v11",zoom:5,pitch:45}),this.draw=new y.a({displayControlsDefault:!1,controls:{}}),this.map.addControl(new b.a.NavigationControl,"bottom-right"),this.map.addControl(new b.a.ScaleControl),this.map.on("load",(function(){e.map.addSource("point",{type:"geojson",data:{type:"FeatureCollection",features:[]}}),e.map.addLayer({id:"points",source:"point",type:"circle",paint:{"circle-radius":20,"circle-color":"red"}})})),this.map.on("move",(function(){e.setState({lng:e.map.getCenter().lng.toFixed(4),lat:e.map.getCenter().lat.toFixed(4),zoom:e.map.getZoom().toFixed(2)})})),this.map.on("draw.create",this.drawLog),this.map.on("draw.delete",this.drawLog),this.map.on("draw.update",this.drawLog)}},{key:"buildBbox",value:function(e){return E.bbox(e)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"searchStyle"},r.a.createElement(Ie,{userLoged:this.handleLoged}),r.a.createElement("div",{className:"iconButtonStyle"},r.a.createElement(x.a,{title:"Szukaj",type:"submit",onClick:this.toggleDrawer("left",!0),"aria-label":"search"},r.a.createElement(T.a,null))),this.state.loged?r.a.createElement("div",{className:"iconButtonStyle"},r.a.createElement(x.a,{title:"Dodaj ?",type:"submit",onClick:this.handleClickOpen,"aria-label":"search"},r.a.createElement(J.a,null))):r.a.createElement("div",null),this.state.loged?r.a.createElement("div",{className:"iconButtonStyle"},r.a.createElement(x.a,{title:"Przegladaj",type:"submit",onClick:this.handleClickViewOpen,"aria-label":"search"},r.a.createElement(_.a,null))):r.a.createElement("div",null)),r.a.createElement("div",{id:"right",className:"sidebar flex-center right collapsed"},r.a.createElement("div",{className:"sidebar-content rounded-rect flex-center"},r.a.createElement(ge,{draw:this.draw}),r.a.createElement("div",{className:"sidebar-toggle rounded-rect right",onClick:this.handleClickOpen},"\u2190"))),r.a.createElement("div",{id:"rightView",className:"sidebar flex-center right collapsed"},r.a.createElement("div",{className:"sidebar-content rounded-rect flex-center"},"Przegladanie danyych",r.a.createElement(ge,{draw:this.draw}),r.a.createElement("div",{className:"sidebar-toggle rounded-rect right",onClick:this.handleClickViewOpen},"\u2190"))),r.a.createElement(Le.a,{open:this.state.drawer,onClose:this.toggleDrawer("left",!1)},r.a.createElement(X.a,{onClick:this.toggleDrawer("left",!1)},'"X"'),r.a.createElement(G,{result:this.state.searchBackup,onGetMapQuestData:this.getDataFromMapQuest,onGetData:this.getDataFromSearch,onClickItem:this.onClikItem})),r.a.createElement("div",{ref:function(t){return e.mapContainer=t},className:"mapContainer"}),this.state.openEdit||this.state.openView?r.a.createElement(Ee,{layouts:this.state.layouts,showEditForm:this.state.openEdit,showViewForm:this.state.openView}):r.a.createElement("div",null))}}]),a}(r.a.Component),ze=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={newSearch:"",geoNames:"",newTask:{id:1,name:""},tasks:[{name:"test4",id:12},{name:"test5",id:15},{name:"test6",id:16},{name:"test7",id:17}]},e.textParam="Administrator",e.deleteTask=function(t){console.log("App.tsx -> ".concat(t.id)),e.setState({tasks:Object(c.a)(e.state.tasks.filter((function(e){return e.id!==t.id})))})},e.addTask=function(t){t.preventDefault(),console.log("Dodaj"),e.setState((function(e){return{newTask:{id:e.newTask.id+1,name:""},tasks:[].concat(Object(c.a)(e.tasks),[e.newTask])}}))},e.onChangeTask=function(t){console.log(t.target.value),e.setState({newTask:Object(l.a)(Object(l.a)({},e.state.newTask),{},{name:t.target.value})})},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(Be,{longitude:17,latitude:52})))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ze,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[170,1,2]]]);
//# sourceMappingURL=main.1a6d6563.chunk.js.map