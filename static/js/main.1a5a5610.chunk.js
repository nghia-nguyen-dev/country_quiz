(this.webpackJsonpsomething=this.webpackJsonpsomething||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c(4),a=c.n(n),i=(c(10),c(2)),r=c.p+"static/media/correct.a0805114.svg",l=c.p+"static/media/incorrect.d653c612.svg",o=c(0),u=function(e){var t=e.markSelection,c=e.className,s=void 0===c?"":c;return"correct"===t?Object(o.jsx)("img",{src:r,className:s}):"incorrect"===t?Object(o.jsx)("img",{src:l,className:s}):null},j=function(e){var t,c=e.currentQuestion,s=e.state,n=e.handleOptionClick,a=e.selected,i=null===(t=c.options)||void 0===t?void 0:t.map((function(e,t){var i=function(){if(2===s){if(e===c.answer)return"correct";if(e===a)return"incorrect"}}();return Object(o.jsxs)("li",{onClick:function(){return n(e)},className:"quiz-options__item ".concat(i),children:[Object(o.jsx)("span",{children:["A","B","C","D","E"][t]}),e,Object(o.jsx)(u,{markSelection:i,className:"quiz-options__icon"})]},e)}));return Object(o.jsx)("ul",{className:"quiz-options",children:i})},d=c(5),b=[function(e){var t=O(e);return{subject:"capital",question:"".concat(t.capital," is the capital of"),answer:t.name,options:e.map((function(e){return e.name}))}},function(e){var t=O(e);return{subject:"flag",question:"This is the flag of",answer:t.name,options:e.map((function(e){return e.name})),imgSrc:t.flag}}],O=function(e){return e[(t=e.length,Math.floor(Math.random()*t))];var t},f=c.p+"static/media/traveler.182b6171.svg",h=c.p+"static/media/results.d76bfdf8.svg",m={questions:3,difficulty:{backpacker:3,traveler:4,voyager:5}},N=function(e){var t=e.handleSelection,c=e.lvl;return Object(o.jsx)("li",{onClick:t,className:"Levels__option",children:c})},S=function(){var e=Object(s.useState)({}),t=Object(i.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(0),r=Object(i.a)(a,2),l=r[0],u=r[1],S=Object(s.useState)(m.questions),v=Object(i.a)(S,2),M=v[0],p=v[1],x=Object(s.useState)(""),C=Object(i.a)(x,2),G=C[0],T=C[1],A=Object(s.useState)(0),B=Object(i.a)(A,2),L=B[0],g=B[1],_=Object(s.useState)(m.difficulty.backpacker),E=Object(i.a)(_,2),K=E[0],R=E[1];Object(s.useEffect)((function(){var e;1===l&&fetch((e=function(e){for(var t=[],c=1;c<=e;c++){var s=void 0;do{s=O(d)}while(t.includes(s));t.push(s)}return t}(K),e.reduce((function(e,t){return e+"".concat(t,";")}),"https://restcountries.eu/rest/v2/alpha?codes="))).then((function(e){return e.json()})).then((function(e){return t=e,O(b)(t);var t})).then((function(e){n(e)}))}),[l]),Object(s.useEffect)((function(){G===c.answer&&g(L+1)}),[G]);var I=function(){0===M?(n({}),u(3)):u(1)},P=function(e){2!==l&&(u(2),p(M-1),T(e))},q=function(){u(0),g(0),p(m.questions)},k=function(e){R(m.difficulty[e.target.innerText.toLowerCase()]),u(1)};return Object(o.jsx)("div",{className:"app",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{children:"Country Quiz"}),function(e){switch(e){case 0:return Object(o.jsx)("div",{className:"card",children:Object(o.jsxs)("div",{className:"Levels",children:[Object(o.jsx)("h2",{className:"Levels__title",children:"Select difficulty"}),Object(o.jsxs)("ul",{className:"Levels__list",children:[Object(o.jsx)(N,{lvl:"Backpacker",handleSelection:k}),Object(o.jsx)(N,{lvl:"Traveler",handleSelection:k}),Object(o.jsx)(N,{lvl:"Voyager",handleSelection:k})]})]})});case 1:case 2:return void 0!==c.subject?Object(o.jsx)("div",{className:"card",children:Object(o.jsxs)("div",{className:"quiz",children:[Object(o.jsx)("img",{className:"quiz__traveler",src:f}),"flag"===c.subject?Object(o.jsx)("img",{className:"quiz__flag",src:c.imgSrc}):null,Object(o.jsx)("h2",{className:"quiz__question",children:c.question}),Object(o.jsx)(j,{currentQuestion:c,state:e,handleOptionClick:P,selected:G}),Object(o.jsx)("button",{className:"quiz__btn ".concat(1===e?"disable":""),onClick:I,disabled:1===e,children:"Next"})]})}):Object(o.jsx)("p",{className:"loading-txt",children:"Loading..."});case 3:return Object(o.jsx)("div",{className:"card",children:Object(o.jsxs)("div",{className:"results",children:[Object(o.jsx)("img",{src:h}),Object(o.jsxs)("div",{className:"results__content",children:[Object(o.jsx)("h2",{children:"Results"}),Object(o.jsxs)("p",{children:["You got"," ",Object(o.jsx)("span",{className:"results__correct",children:L})," ","out of"," ",Object(o.jsx)("span",{className:"results__questions",children:m.questions})," "]})]}),Object(o.jsx)("button",{className:"results__btn",onClick:q,children:"Try again"})]})})}}(l)]})})};a.a.render(Object(o.jsx)(S,{}),document.querySelector("#root"))},5:function(e){e.exports=JSON.parse('["BD","BE","BF","BG","BA","BB","WF","BL","BM","BN","BO","BH","BI","BJ","BT","JM","BV","BW","WS","BQ","BR","BS","JE","BY","BZ","RU","RW","RS","TL","RE","TM","TJ","RO","TK","GW","GU","GT","GS","GR","GQ","GP","JP","GY","GG","GF","GE","GD","GB","GA","SV","GN","GM","GL","GI","GH","OM","TN","JO","HR","HT","HU","HK","HN","HM","VE","PR","PS","PW","PT","SJ","PY","IQ","PA","PF","PG","PE","PK","PH","PN","PL","PM","ZM","EH","EE","EG","ZA","EC","IT","VN","SB","ET","SO","ZW","SA","ES","ER","ME","MD","MG","MF","MA","MC","UZ","MM","ML","MO","MN","MH","MK","MU","MT","MW","MV","MQ","MP","MS","MR","IM","UG","TZ","MY","MX","IL","FR","IO","SH","FI","FJ","FK","FM","FO","NI","NL","NO","NA","VU","NC","NE","NF","NG","NZ","NP","NR","NU","CK","XK","CI","CH","CO","CN","CM","CL","CC","CA","CG","CF","CD","CZ","CY","CX","CR","CW","CV","CU","SZ","SY","SX","KG","KE","SS","SR","KI","KH","KN","KM","ST","SK","KR","SI","KP","KW","SN","SM","SL","SC","KZ","KY","SG","SE","SD","DO","DM","DJ","DK","VG","DE","YE","DZ","US","UY","YT","UM","LB","LC","LA","TV","TW","TT","TR","LK","LI","LV","TO","LT","LU","LR","LS","TH","TF","TG","TD","TC","LY","VA","VC","AE","AD","AG","AF","AI","VI","IS","IR","AM","AL","AO","AQ","AS","AR","AU","AT","AW","IN","AX","AZ","IE","ID","UA","QA","MZ"]')}},[[12,1,2]]]);
//# sourceMappingURL=main.1a5a5610.chunk.js.map