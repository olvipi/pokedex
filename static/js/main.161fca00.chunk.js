(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports=a(42)},39:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(13),r=a.n(l);function o(){return c.a.createElement("div",{className:"navbar fixed-top justify-content-md-start justify-content-center bg-danger text-warning"},"Pokedex")}var s=a(3),i=a.n(s),m=a(4),u=a(1),d=a(5),f=a.n(d);a(39);function p(e){var t=e.onIncrease,a=e.onDecrease,n=e.firstItem+1,l=e.firstItem+e.limit;return l>e.end&&(l=e.end),c.a.createElement("div",{className:"d-flex justify-content-around mt-2 "},c.a.createElement("span",{className:"arrow-prev align-self-center ml-5",onClick:a},"Prev"),c.a.createElement("div",{className:"text-center"},n," - ",l,c.a.createElement("br",null),"Pokemons",c.a.createElement("br",null),"of ",e.end),c.a.createElement("span",{className:"arrow-next align-self-center mr-5",onClick:t},"Next"))}function E(e){return c.a.createElement("form",{className:"mt-3"},c.a.createElement("label",{htmlFor:"selectLimit"},"Select the amount of cards per page"),c.a.createElement("select",{className:"form-control",id:"selectLimit",onChange:function(t){e.onSetLimit(t.target.value)}},c.a.createElement("option",{value:"10",defaultValue:!0},"10"),c.a.createElement("option",{value:"20"},"20"),c.a.createElement("option",{value:"50"},"50")))}function b(e){return c.a.createElement("form",{className:"mt-3",onSubmit:function(e){e.preventDefault()}},c.a.createElement("label",{htmlFor:"search"},"Enter the Pokemon name for the search"),c.a.createElement("input",{type:"text",id:"search",placeholder:"Pokemon",className:"form-control",onChange:function(t){e.onChangeInput(t.target.value)}}))}a(40);function g(){return c.a.createElement("div",{className:"loading d-flex align-items-center mr-n3"},c.a.createElement("div",{className:"letter-holder"},c.a.createElement("div",{className:"l-1 letter"},"L"),c.a.createElement("div",{className:"l-2 letter"},"o"),c.a.createElement("div",{className:"l-3 letter"},"a"),c.a.createElement("div",{className:"l-4 letter"},"d"),c.a.createElement("div",{className:"l-5 letter"},"i"),c.a.createElement("div",{className:"l-6 letter"},"n"),c.a.createElement("div",{className:"l-7 letter"},"g"),c.a.createElement("div",{className:"l-8 letter"},"."),c.a.createElement("div",{className:"l-9 letter"},"."),c.a.createElement("div",{className:"l-10 letter"},".")))}function v(e){var t=e.name,a="https://pokeapi.co/api/v2/pokemon/".concat(e.name,"/"),l=Object(n.useState)(null),r=Object(u.a)(l,2),o=r[0],s=r[1],d=Object(n.useState)(0),p=Object(u.a)(d,2),E=p[0],b=p[1],v=Object(n.useState)([]),y=Object(u.a)(v,2),h=y[0],N=y[1],j=Object(n.useState)([]),k=Object(u.a)(j,2),O=k[0],x=k[1],w=Object(n.useState)(!0),S=Object(u.a)(w,2),C=S[0],F=S[1],I=C?{display:"none"}:{display:"block"};Object(n.useEffect)(function(){function e(){return(e=Object(m.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get(a);case 2:t=e.sent,s(t.data);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[a]),Object(n.useEffect)(function(){o&&(N(o.types),b(o.sprites.front_default),x(o.stats.reverse()))},[o]);return c.a.createElement("div",{className:"card mt-2"},c.a.createElement("div",{className:"card-header d-flex justify-content-between px-2"},c.a.createElement("div",{className:"align-self-center text-capitalize font-weight-bold font-italic text-left"},t),C?c.a.createElement(g,null):null,c.a.createElement("img",{src:E||"./img/no-image.png",alt:t,style:I,onLoad:function(){F(!1)}})),c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"d-flex justify-content-between"},c.a.createElement("span",null,"Types:"),c.a.createElement("div",{className:"d-inline-flex justify-content-end"},h.map(function(t){return c.a.createElement("div",{key:t.type.name,className:"border border-white badge badge-pill text-white text-capitalize",style:{backgroundColor:"".concat(e.colors[t.type.name])}},t.type.name)}))),O.map(function(e){return c.a.createElement("div",{className:"d-flex justify-content-between",key:e.stat.name},c.a.createElement("span",{className:"text-capitalize"},e.stat.name,":"),c.a.createElement("span",null,e.base_stat))})))}function y(e){return c.a.createElement("div",{className:"col-md-9"},c.a.createElement("div",{className:"row"},e.pokemonsForDisplay?e.pokemonsForDisplay.map(function(t){return c.a.createElement("div",{key:t.name,className:"col-12 col-md-6 col-lg-4"},c.a.createElement(v,{name:t.name,colors:e.colors}))}):c.a.createElement("h3",{className:"mx-auto mt-5 my-md-auto"},"The list is loading ...")))}function h(e){var t=function(t){var a=t.target;console.log(a.name),console.log(a.checked),e.onSetType(a)};return c.a.createElement("div",{className:"card mt-3"},c.a.createElement("div",{className:"card-header"},"Filter by types"),c.a.createElement("div",{className:"card-body"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault()}},["normal","fighting","flying","poison","ground","rock","bug","ghost","steel","fire","water","grass","electric","psychic","ice","dragon","dark","fairy"].map(function(a){return c.a.createElement("div",{key:a,className:"custom-control custom-checkbox badge-pill mb-1 text-white",style:{backgroundColor:"".concat(e.colors[a])}},c.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:a,name:a,onChange:t}),c.a.createElement("label",{className:"custom-control-label text-capitalize",htmlFor:a},a))}))))}function N(){var e="https://pokeapi.co/api/v2/",t=Object(n.useState)([]),a=Object(u.a)(t,2),l=a[0],r=a[1],o=Object(n.useState)([]),s=Object(u.a)(o,2),d=s[0],g=s[1],v=Object(n.useState)(10),N=Object(u.a)(v,2),j=N[0],k=N[1],O=Object(n.useState)(0),x=Object(u.a)(O,2),w=x[0],S=x[1],C=Object(n.useState)(""),F=Object(u.a)(C,2),I=F[0],D=F[1],P=Object(n.useState)(null),L=Object(u.a)(P,2)[1],B=Object(n.useState)([]),z=Object(u.a)(B,2),T=z[0],J=z[1],R=Object(n.useState)(0),V=Object(u.a)(R,2),_=V[0],G=V[1],q={normal:"black",fighting:"darkRed",flying:"lightBlue",poison:"purple",ground:"peru",rock:"grey",bug:"green",ghost:"thistle",steel:"lightSteelBlue",fire:"orangeRed",water:"deepSkyBlue",grass:"limeGreen",electric:"gold",psychic:"magenta",ice:"skyBlue",dragon:"blueViolet",dark:"maroon",fairy:"lightPink"};Object(n.useEffect)(function(){function t(){return(t=Object(m.a)(i.a.mark(function t(){var a;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f()("".concat(e,"pokemon/?limit=1000"));case 2:a=t.sent,r(a.data.results);case 4:case"end":return t.stop()}},t)}))).apply(this,arguments)}!function(){t.apply(this,arguments)}(),console.log("Download data for all Pokemon")},[]),Object(n.useEffect)(function(){G(l.length),g(l.slice(w,w+j)),console.log("Cut arrays to display")},[j,w,l]),Object(n.useEffect)(function(){J(l.filter(function(e){return e.name.indexOf(I)>-1})),I.length>2?(G(T.length),S(0)):G(l.length),console.log("Filter by name")},[I,T.length,l]);return c.a.createElement("div",{className:"my-5"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-3"},c.a.createElement(p,{onIncrease:function(){S(w<_-j?w+j:_-j)},onDecrease:function(){S(w>j?w-j:0)},firstItem:w,limit:j,end:_}),c.a.createElement(E,{onSetLimit:function(e){k(parseInt(e))}}),c.a.createElement(b,{onChangeInput:function(e){D(e.toLowerCase().trim())}}),c.a.createElement(h,{onSetType:function(e){L(e)},colors:q})),c.a.createElement(y,{pokemonsForDisplay:I.length<3?d:T,colors:q})))}function j(){return c.a.createElement("div",{className:" navbar fixed-bottom justify-content-md-end justify-content-center bg-danger text-warning"},"Pokedex")}a(41);r.a.render(c.a.createElement(function(){return c.a.createElement(n.Fragment,null,c.a.createElement(o,null),c.a.createElement(N,null),c.a.createElement(j,null))},null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.161fca00.chunk.js.map