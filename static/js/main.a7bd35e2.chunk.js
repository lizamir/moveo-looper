(this["webpackJsonplooper-machine"]=this["webpackJsonplooper-machine"]||[]).push([[0],{33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},37:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(21),i=c.n(s),o=c(12),l=c(3),r=(c(33),c(14)),u=(c(34),c(8)),d=(c(35),c(2)),j=function(e){var t=e.padsData,c=e.padsArr,n=e.setPadsArr;return Object(d.jsx)("div",{id:"pad",className:t.isPlay?"play-on sample":"play-off sample",onClick:function(e){!function(){var e=c.map((function(e){return e.sound===t.sound&&(e.isPlay=!e.isPlay),e}));n(e)}(e.target)},children:Object(d.jsx)(t.icon,{id:"icon",className:"icon-music"})})},p=c(9),b=c(11),m=c(15),f=c.p+"static/media/Bass.52c24c81.mp3",h=c.p+"static/media/electricGuitar.230fcab8.mp3",O=c.p+"static/media/future_funk_beats.5eb417fc.mp3",y=c.p+"static/media/GrooveTanggu.3e1411b4.mp3",x=c.p+"static/media/MazePolitics.2d08c654.mp3",v=c.p+"static/media/PAS3GROOVE1.f77c6da4.mp3",w=c.p+"static/media/SilentStarOrganSynth.f2d668af.mp3",N=c.p+"static/media/StompySlosh.27bdc145.mp3",P=c.p+"static/media/StutterBreakbeats.37c82282.mp3",g=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)([]),i=Object(r.a)(s,2),o=i[0],l=i[1],g=Object(n.useState)(!1),S=Object(r.a)(g,2),k=S[0],C=S[1],H=new u.Howl({src:[f]}),A=new u.Howl({src:[h]}),E=new u.Howl({src:[O]}),B=new u.Howl({src:[y]}),F=new u.Howl({src:[x]}),L=new u.Howl({src:[v]}),T=new u.Howl({src:[w]}),D=new u.Howl({src:[N]}),G=new u.Howl({src:[P]}),I=Object(n.useState)([{sound:H,isPlay:!1,icon:b.c},{sound:E,isPlay:!1,icon:m.a},{sound:B,isPlay:!1,icon:b.e},{sound:F,isPlay:!1,icon:b.f},{sound:L,isPlay:!1,icon:b.d},{sound:A,isPlay:!1,icon:p.a},{sound:T,isPlay:!1,icon:b.b},{sound:G,isPlay:!1,icon:p.d},{sound:D,isPlay:!1,icon:b.a}]),J=Object(r.a)(I,2),M=J[0],W=J[1];Object(n.useEffect)((function(){c&&z()}),[k]);var _=M.filter((function(e){return e.isPlay})).map((function(e){return e.sound})),z=function(){(o||_)&&(null===o||void 0===o||o.forEach((function(e){e.stop()})),_[0].once("end",(function(){C(!k)})),_.forEach((function(e){e.play()})),l(_),a(!0))};return Object(d.jsxs)("div",{className:"pads",children:[Object(d.jsx)("div",{className:"container",children:M.map((function(e,t){return Object(d.jsx)(j,{padsData:e,padsArr:M,setPadsArr:W},"pad".concat(t))}))}),Object(d.jsxs)("div",{className:"control-panel",children:[Object(d.jsx)(p.c,{onClick:z,className:c?"on play":"off play"}),Object(d.jsx)(p.e,{onClick:function(){a(!1),o.forEach((function(e){e.stop()}))},className:c?"on play":"off play"})]})]})},S=function(){return Object(d.jsx)("div",{className:"hero-container",children:Object(d.jsx)(g,{})})},k=c(24),C=(c(37),function(e){return Object(d.jsxs)("header",{className:"app-header",children:[Object(d.jsxs)(o.b,{className:"flex align-center justify-center",exact:!0,to:"/",activeClassName:"active-nav",children:[Object(d.jsx)(m.b,{className:"icon"}),Object(d.jsx)("h1",{children:"Looper"})]}),Object(d.jsxs)("ul",{className:"navbar-header",children:[Object(d.jsx)(o.b,{exact:!0,to:"/",activeClassName:"active-nav",children:Object(d.jsx)(p.b,{className:"icon"})}),Object(d.jsx)(o.b,{to:"/about",activeClassName:"active-nav",children:Object(d.jsx)(k.a,{className:"icon"})})]})]})}),H=c(25),A=c(26),E=c(28),B=c(27),F=(c(42),function(e){Object(E.a)(c,e);var t=Object(B.a)(c);function c(){return Object(H.a)(this,c),t.apply(this,arguments)}return Object(A.a)(c,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"about",children:[Object(d.jsx)("p",{className:"title",children:" About Looper"}),Object(d.jsxs)("p",{className:"container",children:["Welcome to the looper. What is a looper? ",Object(d.jsx)("br",{}),"An app where you can play yourself different samples with some different sounds. ",Object(d.jsx)("br",{})," to play a sound you need to click on him and then click the play button and stop any sample, when ever you want ."," ",Object(d.jsx)("br",{})," The first sample will play automatically, but the rest of the samples will start when the first sample will end. Every sample cycle is 8 seconds.",Object(d.jsx)("br",{})," Enjoy combining different samples and sound and let the music begin !!"]})]})}}]),c}(n.Component));c(43);var L=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(o.a,{children:[Object(d.jsx)(C,{}),Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{component:F,path:"/about"}),Object(d.jsx)(l.a,{component:S,path:"/"})]})]})})},T=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,45)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(L,{})}),document.getElementById("root")),T()}},[[44,1,2]]]);
//# sourceMappingURL=main.a7bd35e2.chunk.js.map