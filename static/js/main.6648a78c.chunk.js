(this["webpackJsonpwild-heroes"]=this["webpackJsonpwild-heroes"]||[]).push([[0],{16:function(e,t,n){},34:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(26),r=n.n(s),i=n(9),l=n(2),o=n.p+"static/media/Logo.b43d2c16.png",j=(n(34),n(0)),d=function(){return Object(j.jsx)("header",{className:"header",children:Object(j.jsxs)("div",{className:"header-content",children:[Object(j.jsx)("a",{href:"/home",className:"logo-content",children:Object(j.jsx)("img",{src:o,className:"logo",alt:"Logo"})}),Object(j.jsx)("div",{className:"title",children:Object(j.jsx)("h1",{children:"WILD HEROES"})}),Object(j.jsxs)("div",{className:"header-content-link",children:[Object(j.jsx)(i.c,{activeClassName:"text-nav-active",className:"text-nav",to:"/quiz",children:"Quiz"}),Object(j.jsx)(i.c,{activeClassName:"text-nav-active",className:"text-nav",to:"/informations",children:"Informations"})]})]})})},b=function(){return Object(j.jsx)("div",{children:" "})},h=function(){return Object(j.jsx)("div",{children:" "})},u=n(8),m=n(29),O=n.n(m),g=(n(62),function(e){for(var t=e.hideModal,n=e.image,c=e.name,a=e.alignment,s=e.stats,r=e.publisher,i=e.gender,l=e.race,o=e.weight,d=e.height,b=e.fullName,h=e.placeOfBirth,u=e.firstAppearance,m=e.groupAffiliation,O=Object.keys(s),g=Object.values(s),p=[],f=0;f<O.length;f+=1)p.push(O[f].toUpperCase()),p.push(g[f]);var x=function(e){return"good"===e?"good-hero":"bad"===e?"bad-hero":"neutral-hero"};return Object(j.jsxs)("div",{className:"modal-container",children:[Object(j.jsx)("div",{className:"modal-background",onClick:function(){return t()},onKeyPress:function(){return t()},role:"button",tabIndex:0,children:" "}),Object(j.jsxs)("div",{className:"modal-content ".concat(x(a)),children:[Object(j.jsx)("button",{type:"button",className:"close-modal-button",onClick:function(){return t()},children:"\xd7"}),Object(j.jsx)("div",{className:"modal-header ".concat(x(a)),children:Object(j.jsx)("h1",{children:c})}),Object(j.jsxs)("div",{className:"modal-body",children:[Object(j.jsx)("div",{className:"modal-card",children:Object(j.jsx)("img",{src:n,alt:c,className:"modal-img"})}),Object(j.jsxs)("div",{className:"modal-stats",children:[Object(j.jsx)("h1",{children:"Statistics"}),Object(j.jsx)("ul",{className:"stats-list",children:p.map((function(e){return Object(j.jsx)("li",{children:e.includes("null")?e.replace("null","Unknown"):e},p.indexOf(e))}))})]}),Object(j.jsxs)("div",{className:"modal-bio",children:[Object(j.jsx)("h1",{children:"Information"}),Object(j.jsxs)("ul",{className:"bio-list",children:[""!==b?Object(j.jsxs)("li",{children:[Object(j.jsxs)("strong",{children:["Full name",Object(j.jsx)("br",{})]})," ",b," "]}):"","-"!==i?Object(j.jsxs)("li",{children:[" ",Object(j.jsxs)("strong",{children:["Gender",Object(j.jsx)("br",{})]})," ",i," "]}):"","null"!==l?Object(j.jsxs)("li",{children:[" ",Object(j.jsxs)("strong",{children:["Race",Object(j.jsx)("br",{})]})," ",l," "]}):"","0 kg"!==o&&"0 cm"!==d?Object(j.jsxs)("li",{children:[" ",Object(j.jsxs)("strong",{children:["Weight and height",Object(j.jsx)("br",{})]})," ",o,", ",d," "]}):"","-"!==h?Object(j.jsxs)("li",{children:[" ",Object(j.jsxs)("strong",{children:["Place of birth",Object(j.jsx)("br",{})]})," ",h," "]}):"","null"!==r&&""!==r?Object(j.jsxs)("li",{children:[" ",Object(j.jsxs)("strong",{children:["Original publisher",Object(j.jsx)("br",{})]})," ",r," "]}):"","-"!==u?Object(j.jsxs)("li",{children:[" ",Object(j.jsxs)("strong",{children:["First appearance",Object(j.jsx)("br",{})]})," ",u," "]}):"","-"!==m?Object(j.jsxs)("li",{children:[" ",Object(j.jsxs)("strong",{children:["Affiliation",Object(j.jsx)("br",{})]})," ",m," "]}):""]})]})]})]})]})}),p=(n(16),function(e){var t,n=e.name,a=e.image,s=e.alignment,r=e.stats,i=e.publisher,l=e.gender,o=e.race,d=e.weight,b=e.height,h=e.fullName,m=e.placeOfBirth,O=e.firstAppearance,p=e.groupAffiliation,f=Object(c.useState)(!1),x=Object(u.a)(f,2),v=x[0],N=x[1],y=function(){N(!v)};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"card ".concat((t=s,"good"===t?"good-card":"bad"===t?"bad-card":"normal-card")),onClick:function(){return y()},onKeyPress:function(){return y()},role:"button",tabIndex:0,children:[Object(j.jsx)("img",{src:a,alt:n}),Object(j.jsx)("h2",{children:n})]}),Object(j.jsx)("div",{children:v&&Object(j.jsx)(g,{name:n,image:a,toggleModal:v,setToggleModal:N,hideModal:y,alignment:s,stats:r,publisher:i,gender:l,race:o,weight:d,height:b,fullName:h,placeOfBirth:m,firstAppearance:O,groupAffiliation:p})})]})}),f=function(e){var t=e.setFilter,n=e.filter,c=e.response;return Object(j.jsx)("div",{className:"boxes",children:Object(j.jsxs)("select",{className:"comics-filter",onChange:function(e){return t(e.target.value)},children:[Object(j.jsxs)("option",{value:"",children:[" ",n," "]}),c.map((function(e){return Object(j.jsx)("option",{value:e,children:e},c.indexOf(e))}))]})})},x=(n(63),function(e){var t=e.hero,n=e.isLoading,c=e.searchName,a=e.setByPublisher,s=e.setGender,r=e.setRace,i=e.setAlignment,l=e.byPublisher,o=e.gender,d=e.race,b=e.alignment;return Object(j.jsx)("div",{className:"cards-list",children:n?Object(j.jsx)("img",{src:"https://mir-s3-cdn-cf.behance.net/project_modules/disp/da734b28921021.55d95297d71f4.gif",alt:"loader",className:"loader-cardsList"}):Object(j.jsxs)("div",{className:"container-cards-button",children:[Object(j.jsxs)("div",{className:"container-filter",children:[Object(j.jsx)(f,{setFilter:s,filter:"by gender",response:["Male","Female"]}),Object(j.jsx)(f,{setFilter:a,filter:"by publisher",response:["Marvel Comics","DC Comics","Image Comics","Dark Horse","NBC - Heroes","Sharon Carter","Wildstorm","Archangel","Tempest","Image Comics","Giant-Man","Toxin","Angel","Speedy","Goliath","Spectre","Oracle","Hawkfire","Huntress","Misfit","Spoiler","Nightwing","Icon Comics"]}),Object(j.jsx)(f,{setFilter:r,filter:"by race",response:["Human","Icthyo Sapien","Ungaran","Cosmic Entity","Cyborg","Xenomorph","Android","Vampire","Mutant","God","Symbiote","Atlantean","Alien","Neyaphen","Alpha","Bizarro","Inhuman","Metahuman","Demon","Dathomirian Zabrak","Amazon","Kryptonian","Kakarantharaian","Black Racer"]}),Object(j.jsx)(f,{setFilter:i,filter:"by alignment",response:["good","bad","neutral"]})]}),Object(j.jsxs)("div",{className:"container-cards",children:[t.filter((function(e){return e.biography.publisher.includes(l)})).filter((function(e){return e.appearance.gender.includes(o)})).filter((function(e){return e.appearance.race.includes(d)})).filter((function(e){return e.biography.alignment.includes(b)})).filter((function(e){return e.name.toLowerCase().includes(c.toLowerCase())})).map((function(e){return Object(j.jsx)(p,{name:e.name,image:e.image.url,alignment:e.biography.alignment,stats:e.powerstats,publisher:e.biography.publisher,gender:e.appearance.gender,race:e.appearance.race,weight:e.appearance.weight[1],height:e.appearance.height[1],fullName:e.biography["full-name"],placeOfBirth:e.biography["place-of-birth"],firstAppearance:e.biography["first-appearance"],groupAffiliation:e.connections["group-affiliation"]},e.id)})),"))"]})]})})}),v=(n(64),function(e){for(var t=e.cardsPerPage,n=e.totalCards,c=e.paginate,a=e.currentPage,s=[],r=1;r<=Math.ceil(n/t);r+=1)s.push(r);return Object(j.jsxs)("nav",{className:"nav-page",children:[Object(j.jsxs)("p",{children:[" ",t<31&&"Page: ".concat(a)]}),Object(j.jsx)("ul",{className:"pagination",children:s.map((function(e){return Object(j.jsx)("li",{className:"page-item",children:t<31&&Object(j.jsx)("input",{to:"/",value:e,type:"button",onClick:function(){c(e)},className:"page-link"})},e)}))})]})}),N=(n(65),function(e){var t=e.handleChange,n=e.searchName;return Object(j.jsx)("div",{className:"search",children:Object(j.jsx)("label",{htmlFor:"inputName",children:Object(j.jsx)("input",{className:"inputName",type:"text",value:n,placeholder:"Enter the name of a character",onChange:t})})})}),y=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(!0),r=Object(u.a)(s,2),i=r[0],l=r[1],o=Object(c.useState)(1),d=Object(u.a)(o,2),b=d[0],h=d[1],m=Object(c.useState)(30),g=Object(u.a)(m,2),p=g[0],f=g[1],y=Object(c.useState)(""),C=Object(u.a)(y,2),S=C[0],A=C[1],k=Object(c.useState)(""),w=Object(u.a)(k,2),P=w[0],E=w[1],M=Object(c.useState)(""),I=Object(u.a)(M,2),B=I[0],F=I[1],L=Object(c.useState)(""),G=Object(u.a)(L,2),H=G[0],z=G[1],D=b*p,R=D-p,K=n.slice(R,D),T=Object(c.useState)(""),U=Object(u.a)(T,2),W=U[0],q=U[1];return Object(c.useEffect)((function(){i&&O.a.get("https://superheroapi.com/api.php/10216027606921557/search/'%20'").then((function(e){return e.data.results})).then((function(e){a(e),l(!1)}))}),[n]),Object(c.useEffect)((function(){""!==W?(h(1),f(n.length)):f(30)}),[W]),Object(c.useEffect)((function(){""!==S&&(h(1),f(n.length))}),[S]),Object(c.useEffect)((function(){""!==P&&(h(1),f(n.length))}),[P]),Object(c.useEffect)((function(){""!==B&&(h(1),f(n.length))}),[B]),Object(c.useEffect)((function(){""!==H&&(h(1),f(n.length))}),[H]),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:Object(j.jsx)(N,{searchName:W,setSearchName:q,handleChange:function(e){q(e.target.value)}})}),Object(j.jsx)(x,{searchName:W,isLoading:i,hero:K,byPublisher:S,setByPublisher:A,gender:P,setGender:E,alignment:B,setAlignment:F,race:H,setRace:z}),Object(j.jsx)("div",{className:"container-pagination",children:Object(j.jsx)(v,{currentPage:b,cardsPerPage:p,totalCards:n.length,paginate:function(e){h(e),document.documentElement.scrollTop=0}})})]})};n(66);var C=function(){return Object(j.jsxs)(i.a,{children:[Object(j.jsx)(d,{}),Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{path:"/home",component:b}),Object(j.jsx)(l.a,{path:"/quiz",component:h}),Object(j.jsx)(l.a,{path:"/informations",component:y})]})]})};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(i.b,{basename:"/wild-heroes",children:Object(j.jsx)(C,{})})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.6648a78c.chunk.js.map