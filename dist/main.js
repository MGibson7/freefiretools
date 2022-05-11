(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>d});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,'body{\n  background-color: #eb4511;\nbackground-image: linear-gradient(315deg, #eb4511 0%, #b02e0c 74%);\n\n    color: whitesmoke;\n}\n\n#content{\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: repeat(4, 0.5fr);\n}\n\n#title{\n    grid-column: 1;\n    grid-row: 1;\n    display: grid;\n    grid-template-columns: (3, 1fr);\n}\n\n#bubble {\n    grid-column: 1;\n    grid-row: 1;\n    width: 0; \n    height: 0; \n    border-left: 5vw solid transparent;\n    border-right: 5vw solid transparent;\n    border-bottom: 10vh solid yellow;\n  }\n  #bubble2 {\n    grid-column: 1;\n    grid-row: 2;\n    width: 0; \n    height: 0; \n    border-left: 5vw solid transparent;\n    border-right: 5vw solid transparent;\n    border-top: 10vh solid orange;\n  }\n\n  #siteName{\n      grid-column: 1;\n      grid-row: 3;\n  }\n  #navBar{\n      grid-column: 2;\n      display: grid;\n      grid-template-columns: repeat(4, 1fr);\n      column-gap: 0.5vw;\n  }\n\n  #apps{\n        max-height: 20vh;\n        max-width: 7vw;\n      border-radius: 50%;\n      background-color: yellow;\n      color: orange;\n      text-align: center;\n      grid-column: 1;\n      display: grid;\n      grid-template-rows: 3;\n  }\n  #journey{\n    max-height: 20vh;\n    max-width: 7vw;\n    border-radius: 50%;\n    background-color: orange;\n    color: yellow;\n    text-align: center;\n    grid-column: 2;\n    display: grid;\n    grid-template-rows: 3;\n\n  }\n\n  #resources{\n    max-height: 20vh;\n    max-width: 7vw;\n    border-radius: 50%;\n    background-color: yellow;\n    color: orange;\n    text-align: center;\n    grid-column: 3;\n    display: grid;\n    grid-template-rows: 3;\n\n  }\n\n  #pod{\n    max-height: 20vh;\n    max-width: 7vw;\n    border-radius: 50%;\n    background-color: orange;\n    color: yellow;\n    text-align: center;\n    grid-column: 4;\n    display: grid;\n    grid-template-rows: 3;\n\n  }\n\n  #apps h3, #journey h3, #resources h3, #pod h3{\n      grid-row: 2;\n      font-size: 3vh;\n  }\n\n  #apps:hover, #journey:hover, #resources:hover, #pod:hover{\n    cursor: pointer;\n    transform: scale(1.5);\n  }\n\n  #apps:hover, #journey:hover, #pod:hover, #resources:hover{\n      background-color: #f5d020;\n      background-image: linear-gradient(315deg, #f5d020 0%, #f53803 74%);\n        color: white;\n\n  }\n\n  #subscribe{\n      grid-column: 3;\n      display: grid;\n      grid-template-columns: 3;\n      grid-template-rows: 3;\n  }\n\n  #subscriber{\n      grid-column: 3;\n      grid-row: 1;\n      font-size: 4vh;\n      background-color: #f5d020;\nbackground-image: linear-gradient(315deg, #f5d020 0%, #f53803 74%);\n    color: white;\n    border-radius: 30%;\n    height: 25vh;\n    width: 10vw;\n    border: 1px solid orange;\n      \n  }\n\n  #subscriber:hover{\n    cursor: pointer;\n    border: 1px solid orange;\n  }\n\n  #javaContent{\n    grid-row: 2;\n    grid-column: 1/4;\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n  }\n\n  #javaContent img{\n    max-height: 30vh;\n    max-width: 30vw;\n    grid-column: 2;\n  }\n\n  #javaContent #newCont{\n    font-size: 3vh;\n    color: white;\n    grid-column: 3;\n  }\n\n  #slideShow{\n    grid-row: 3;\n    grid-column: 1/4;\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n\n  }\n\n  #mainSlide{\n    grid-column: 2;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  #mainSlideCont{\n    grid-column: 2;\n  }\n\n  #mainSlide img{\n    grid-column: 1;\n  }\n\n  #slideShow img{\n    max-height: 30vh;\n  }\n\n  li{\n    margin: 1vh;\n  }\na{\n  color: yellow;\n}\n\n#title:hover{\n  cursor: pointer;\n}\n\n#overlay {\n    position: fixed; /* Sit on top of the page content */\n    display: none; /* Hidden by default */\n    top: 30vh;\n    font-size: 2vh;\n    left: 80%;\n    transform: translateX(-50%);\n    background-color: rgba(0, 0, 0, 0.829); /* Black background with opacity */\n    color: white;\n    z-index: 2; /* Specify a stack order in case you\'re using a different order for other elements */\n    text-align: center;\n  }\n\n\n\n#slideshow{\n  display: none;\n  grid-template-columns: repeat(3, 1fr);\n}\n\n#mainSlide{\n  grid-column: 2;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr) ;\n}\n\n\n\n\n\n@media screen and (max-width:500px) {\n  #javaContent{\n    grid-template-columns: repeat(2, 1fr);}\n\n    #javaContent #newCont{\n      font-size: 3vh;\n      color: white;\n      grid-column: 2;\n    }\n\n    #javaContent img{\n      max-height: 30vh;\n      max-width: 30vw;\n      grid-column: 1;\n    }\n    #title{\n      grid-column: 1;\n      grid-row: 1;\n      display: grid;\n      grid-template-columns: (1, 1fr);\n  }\n  #apps h3, #journey h3, #resources h3, #pod h3{\n    grid-row: 2;\n    font-size: 2vh;\n}\n#subscriber{\n  background-color: "";\n  grid-column: 3;\n  grid-row: 1;\n  font-size: 1vh;\ncolor: white;\n\n  \n}\n\n#apps{\n  background-color: "";\ncolor: orange;\ntext-align: center;\ngrid-column: 1;\ndisplay: grid;\ngrid-template-rows: 3;\n}\n#journey{\n  background-color: "";\ncolor: yellow;\ntext-align: center;\ngrid-column: 2;\ndisplay: grid;\ngrid-template-rows: 3;\n\n}\n\n#resources{\nbackground-color: "";\ncolor: orange;\ntext-align: center;\ngrid-column: 3;\ndisplay: grid;\ngrid-template-rows: 3;\n\n}\n\n#pod{\n  background-color: "";\ncolor: yellow;\ntext-align: center;\ngrid-column: 4;\ndisplay: grid;\ngrid-template-rows: 3;\n\n}\n\n#navBar{\n  column-gap: 1vw;\n}\n#mainSlide{\n  grid-column: 1;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n}\n\n#slideShow img{\n  max-height: 30vh;\n  max-width: 30vw;\n}\n\n  }\n\n\n  \n\n\n  \n ',""]);const d=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var d=0;d<this.length;d++){var l=this[d][0];null!=l&&(a[l]=!0)}for(var s=0;s<n.length;s++){var c=[].concat(n[s]);r&&a[c[0]]||(void 0!==i&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),o&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=o):c[4]="".concat(o)),e.push(c))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],d=0;d<n.length;d++){var l=n[d],s=r.base?l[0]+r.base:l[0],c=i[s]||0,u="".concat(s," ").concat(c);i[s]=c+1;var g=t(u),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==g)e[g].references++,e[g].updater(m);else{var h=o(m,r);r.byIndex=d,e.splice(d,0,{identifier:u,updater:h,references:1})}a.push(u)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var d=t(i[a]);e[d].references--}for(var l=r(n,o),s=0;s<i.length;s++){var c=t(i[s]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}i=l}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),i=t(569),a=t.n(i),d=t(565),l=t.n(d),s=t(216),c=t.n(s),u=t(589),g=t.n(u),m=t(426),h={};function p(){document.getElementById("javaContent").innerHTML="<img src = ./capital.webp> <div id ='newCont'><h3>at free fire tools we're so concerned with efficient capital allocation that we don't even waste capital on our words. </h3></div>",document.getElementById("slideShow").style.display="none"}h.styleTagTransform=g(),h.setAttributes=l(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=c(),e()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals,p(),function(){let n=["<div id = twenty> <img src = ./twenty.png> </div> <div id = 'mainSlideCont'><div id = twentyCont> <h4>twenties</h4> <h5>goals: save at least some amount on a consistent basis to develop the habit </h5> <h5> watchout for: accumulating student loan debt for non lucrative career path </h5> </div></div>","<div id = thirty> <img src = ./thirtyfive.png></div> <div id = 'mainSlideCont'><div id = thirtyCont> <h4>thirties</h4> <h5>goals: advance your career and save at least 15% of income toward retirement</h5> <h5> watchout for: buying too much house and speculative investments </h5></div>","<div id = fourty> <img src = ./fourtyfive.png> </div> <div id = 'mainSlideCont'><div id = fourtyCont><h4>fourties</h4> <h5>goals: save at least 25% of your income, be sure to have term life insurance</h5> <h5> watchout for: lifestyle creep </h5></div>","<div id = fifty> <img src = ./fifty.png>  </div> <div id = 'mainSlideCont'><div id = fiftyCont> <h4>fifties</h4> <h5>goals: become debt free</h5> <h5> watchout for: insurance investing products </h5></div>","<div id = sixty> <img src = ./sixty.webp>  </div> <div id = 'mainSlideCont'><div id = sixtyCont> <h4>sixties</h4> <h5>goals: meet with financial advisor to discuss distribution strategy</h5> <h5> watchout for: overwithdrawing from accounts post retirement </h5></div>"],e=document.getElementById("mainSlide");function t(n){return new Promise((e=>setTimeout(e,n)))}!async function r(){for(const r in n)e.innerHTML=`${n[r]} `,await t(7e3);r()}()}(),document.getElementById("slideShow").style.display="none",document.getElementById("apps").addEventListener("click",(n=>{document.getElementById("javaContent").innerHTML="<img src = ./apps.png> <div id ='newCont'> <h3>three easy to use tools designed to be done in order to determine your fire progress </h3>   <ul> <li><a href='https://mgibson7.github.io/networthStatement/' target = '_blank' rel = 'noopener noreferrer'>mynetworth</a></li>  <li><a href='https://docs.google.com/spreadsheets/d/1iD0YsJL127jakYgUtleoaF8wqcB5WFzIkWhC_Dsp_S8/edit#gid=0' target = '_blank' rel = 'noopener noreferrer'>myfreecashflow</a></li>  <li><a href='https://docs.google.com/spreadsheets/d/179cVO8Huv4eEm3tClGu2IV6O26-tmIWfKW0ZGAMtXsE/edit?usp=sharing&urp=gmail_link' target = '_blank' rel = 'noopener noreferrer'>myinvestmentgrowth</a></li> </ul></div>",document.getElementById("overlay").style.display="none",document.getElementById("slideShow").style.display="none"})),document.getElementById("journey").addEventListener("click",(n=>{document.getElementById("javaContent").innerHTML="<img src = ./journey.png> <div id ='newCont'><h3>this quick slideshow displays by age what to pursue and what to watch out for on your journey to financial independence</h3></div>",document.getElementById("overlay").style.display="none",document.getElementById("slideShow").style.display="grid"})),document.getElementById("resources").addEventListener("click",(n=>{document.getElementById("javaContent").innerHTML="<img src = ./resources.png> <div id ='newCont'> <h3>check out the links to some of our favorite resources below </h3>   <ul>  <li><a href='https://gallery.mailchimp.com/34a7cea33f33e45eedceea223/files/212585d4-0b93-42c6-aeda-6ec14e03ee20.pdf' target = '_blank' rel = 'noopener noreferrer'>how to get rich...slowly</a></li>  <li><a href='https://www.investopedia.com/financial-edge/1109/6-reasons-why-you-need-a-budget.aspx' target = '_blank' rel = 'noopener noreferrer'>budgets.. your bestfriend</a></li> <li><a href='https://mailchi.mp/abfa4335dbf1/financial-order-of-operations' target = '_blank' rel = 'noopener noreferrer'>when to do what?</a></li>  <li><a href='https://www.businessinsider.com/10-huge-bubbles-2009-11#housing-8' target = '_blank' rel = 'noopener noreferrer'>beware of bubbles</a></li> </ul></div>",document.getElementById("overlay").style.display="none",document.getElementById("slideShow").style.display="none"})),document.getElementById("pod").addEventListener("click",(n=>{document.getElementById("javaContent").innerHTML="<img src = ./podcast.png> <div id ='newCont'><h3>our podcast is coming soon! please subscribe to be alerted when it debuts and for quick daily fire tips and challenges sent to your email</h3></div>",document.getElementById("overlay").style.display="none",document.getElementById("slideShow").style.display="none"})),document.getElementById("subscriber").addEventListener("click",(n=>{document.getElementById("overlay").style.display="grid",document.getElementById("slideShow").style.display="none"})),document.getElementById("title").addEventListener("click",(n=>{document.getElementById("overlay").style.display="none",document.getElementById("slideShow").style.display="none",p()}))})()})();