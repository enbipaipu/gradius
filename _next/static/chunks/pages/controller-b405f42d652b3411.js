(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[265],{1319:function(s,e,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/controller",function(){return c(6289)}])},1292:function(s,e,c){"use strict";c.d(e,{v:function(){return a}});var i=c(5893);let n=s=>(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:s.size,height:s.size,fill:s.fill,children:(0,i.jsx)("path",{d:"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z"})});var o=c(1733),t=c(7251),l=c(2038),r=c.n(l);let a=s=>{let{user:e}=s,c=async()=>{confirm("Logout?")&&await (0,t.k)()};return(0,i.jsx)("div",{className:r().container,children:(0,i.jsxs)("div",{className:r().main,children:[(0,i.jsx)("img",{src:o.D.frourio_svg,height:36,alt:"frourio logo"}),(0,i.jsxs)("div",{className:r().userBtn,onClick:c,children:[void 0!==e.photoURL?(0,i.jsx)("img",{className:r().userIcon,src:e.photoURL,height:24,alt:e.displayName}):(0,i.jsx)(n,{size:18,fill:"#555"}),(0,i.jsx)("span",{className:r().userName,children:e.displayName})]})]})})}},6289:function(s,e,c){"use strict";c.r(e);var i=c(5893),n=c(24),o=c(5371),t=c(8239),l=c(1292),r=c(1290),a=c(1985),d=c.n(a);let u=()=>{let[s]=(0,n.KO)(o.L);if(!s)return(0,i.jsx)(t.g,{visible:!0});let e=async()=>{let s=await r.x.rooms.controller2.$post({body:"up"});console.log(s)},c=async()=>{let s=await r.x.rooms.controller2.$post({body:"left"});console.log(s)},a=async()=>{let s=await r.x.rooms.controller2.$post({body:"right"});console.log(s)},u=async()=>{let s=await r.x.rooms.controller2.$post({body:"down"});console.log(s)},_=async()=>{let s=await r.x.rooms.push.$post({body:"push"});console.log(s)};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.v,{user:s}),(0,i.jsx)("div",{className:d().container,children:(0,i.jsxs)("div",{className:d().board,children:[(0,i.jsxs)("div",{className:d().items,children:[(0,i.jsx)("div",{}),(0,i.jsx)("div",{className:d().switch,onClick:e}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{className:d().switch,onClick:c}),(0,i.jsx)("div",{className:d().switch}),(0,i.jsx)("div",{className:d().switch,onClick:a}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{className:d().switch,onClick:u}),(0,i.jsx)("div",{})]}),(0,i.jsx)("div",{className:d().select,children:"select"}),(0,i.jsx)("div",{className:d().select,onClick:_,children:"push"})]})})]})};e.default=u},7251:function(s,e,c){"use strict";c.d(e,{_:function(){return t},k:function(){return l}});var i=c(7908),n=c(328),o=c(3377);let t=async()=>{let s=new i.GH;s.addScope("read:user"),await (0,i.rh)((0,n.l)(),s).catch(o.F)},l=async()=>{await (0,n.l)().signOut()}},2038:function(s){s.exports={container:"BasicHeader_container__5rTZS",main:"BasicHeader_main__yd6De",userBtn:"BasicHeader_userBtn__B7CLf",userIcon:"BasicHeader_userIcon__fjiOn",userName:"BasicHeader_userName__vjAjN"}},1985:function(s){s.exports={container:"controller_container__cQDFp",board:"controller_board__cEojV",items:"controller_items__9InOl",switch:"controller_switch__RYhbG",select:"controller_select__CY4l3"}}},function(s){s.O(0,[774,888,179],function(){return s(s.s=1319)}),_N_E=s.O()}]);