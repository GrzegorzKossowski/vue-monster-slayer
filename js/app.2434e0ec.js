(function(t){function e(e){for(var n,i,o=e[0],s=e[1],l=e[2],h=0,d=[];h<o.length;h++)i=o[h],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);u&&u(e);while(d.length)d.shift()();return c.push.apply(c,l||[]),a()}function a(){for(var t,e=0;e<c.length;e++){for(var a=c[e],n=!0,o=1;o<a.length;o++){var s=a[o];0!==r[s]&&(n=!1)}n&&(c.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},c=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/vue-monster-slayer/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=s;c.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"04a4":function(t,e,a){},1390:function(t,e,a){},"2da9":function(t,e,a){"use strict";a("9ee0")},"2f66":function(t,e,a){"use strict";a("04a4")},"473c":function(t,e,a){},"49fe":function(t,e,a){"use strict";a("ba3d")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23"),r=(a("b0c0"),a("5502")),c=(a("fb6a"),a("d3b7"),a("25f0"),{player:{hitMax:10,hitMin:3,pUrl:"https://robohash.org/".concat(Math.random().toString(16).slice(2),".png?set=set3&size=100x100")},monster:{hitMax:10,hitMin:3,mUrl:"https://robohash.org/".concat(Math.random().toString(16).slice(2),".png?set=set2&size=100x100")}}),i=function(){var t=["Orbakh","Baga","Lurtzog","Snakhak","Ufthak","Rishnag","Uhur","Mauhak","Bulurtz","Balcmeg","Golfimb","Uhuf","Balcmauh","Mauhur","Balug","Luga","Othrol","Grishnakh","Uglur","Gorga","Muzga","Olfil","Orbakh","Bulugd","Lukil","Lugdog","Lugduf","Gorbug","Gorkil","Orbat"];return t[t.length*Math.random()|0]};function o(){return Math.random().toString(16).slice(2)}var s=Object(r["a"])({state:function(){return{data:{monster:{health:100,name:i()},player:{health:100,name:"Player"},currentRound:0,specialCharge:0,history:[]}}},getters:{getMonsterHealth:function(t){return t.data.monster.health},getMonsterName:function(t){return t.data.monster.name},getPlayerHealth:function(t){return t.data.player.health},getPlayerName:function(t){return t.data.player.name},getCurrentRound:function(t){return t.data.currentRound},getSpecialCharge:function(t){return t.data.specialCharge},getFightHistory:function(t){return t.data.history}},mutations:{RESET_GAME:function(t){t.data={monster:{health:100,name:i()},player:{health:100},currentRound:0,specialCharge:0,history:[]}},HIT_MONSTER:function(t,e){t.data.specialCharge++,e.hitPoints<t.data.monster.health?t.data.monster.health-=e.hitPoints:t.data.monster.health=0,t.data.history.length>=5&&t.data.history.pop(),t.data.history.unshift({id:o(),type:"monster",damage:e.hitPoints})},HIT_PLAYER:function(t,e){e.hitPoints<t.data.player.health?t.data.player.health-=e.hitPoints:t.data.player.health=0,t.data.history.length>=10&&t.data.history.pop(),t.data.history.unshift({id:o(),type:"player",damage:e.hitPoints})},HEAL_PLAYER:function(t){t.data.player.health<=90&&(t.data.player.health+=3)},NEXT_ROUND:function(t){t.data.currentRound+=1},RESET_CHARGE:function(t){t.data.specialCharge=0},SET_PLAYER_NAME:function(t,e){t.data.player.name=e}},actions:{setPlayerName:function(t,e){t.commit("SET_PLAYER_NAME",e)},resetGame:function(t){t.commit("RESET_GAME")},hitMonster:function(t){var e=c.player.hitMax,a=c.player.hitMin,n=Math.floor(Math.random()*(e-a+1))+a;t.commit("HIT_MONSTER",{hitPoints:n})},hitMonsterSpecial:function(t){var e=2*c.player.hitMax,a=2*c.player.hitMin,n=Math.floor(Math.random()*(e-a+1))+a;t.commit("HIT_MONSTER",{hitPoints:n})},hitPlayer:function(t){var e=c.monster.hitMax,a=c.monster.hitMin,n=Math.floor(Math.random()*(e-a+1))+a;t.commit("HIT_PLAYER",{hitPoints:n})},healPlayer:function(t){t.commit("HEAL_PLAYER")},nextRound:function(t){t.commit("NEXT_ROUND")},resetSpecialCharge:function(t){t.commit("RESET_CHARGE")}}});function l(t,e,a,r,c,i){var o=Object(n["o"])("Home");return Object(n["i"])(),Object(n["d"])(o)}var u=Object(n["t"])("data-v-0e8a86d2");Object(n["k"])("data-v-0e8a86d2");var h={class:"n-container"},d={class:"n-container"},b={class:"n-container"},f={class:"n-container"},p=Object(n["g"])("svg",{style:{"margin-left":"10px"},height:"1em",width:"1em",viewBox:"0 0 4 4 ",fill:"currentColor"},[Object(n["g"])("g",{transform:"translate(0,-292.76667)"},[Object(n["g"])("path",{d:"m 2.2045503,292.81427 a 0.1204124,0.17271454 43.736638 0 0 -0.1601415,0.0996 0.1204124,0.17271454 43.736638 0 0 -0.026553,0.0544 c -0.2041528,0.0179 -0.3562239,0.0957 -0.470469,0.21334 a 0.21451091,0.0950655 21.806094 0 0 -0.047295,-0.0283 0.21451091,0.0950655 21.806094 0 0 -0.1875237,-0.0493 0.21451091,0.0950655 21.806094 0 0 -0.076338,0.022 0.21451091,0.0950655 21.806094 0 0 0.1103559,0.16581 0.21451091,0.0950655 21.806094 0 0 0.089612,0.0351 c -0.075997,0.12861 -0.1254826,0.28323 -0.1526753,0.45556 a 0.11626376,0.27366944 82.31706 0 0 -0.1120161,0.0232 0.11626376,0.27366944 82.31706 0 0 -0.1319311,0.17034 0.11626376,0.27366944 82.31706 0 0 0.2215437,0.0424 c -0.032215,0.58191 0.1097099,1.27418 0.210757,1.72433 0.081819,0.36448 0.4306942,0.98663 0.761712,0.9762 0.4232766,-0.0126 -0.2701537,-0.91372 -0.2904132,-1.37743 -0.015906,-0.36391 0.2819874,-0.86721 0.5028295,-1.31971 a 0.22183906,0.10643963 15.907731 0 0 0.00166,5.7e-4 0.22183906,0.10643963 15.907731 0 0 0.2771372,-0.004 0.22183906,0.10643963 15.907731 0 0 -0.1261226,-0.16809 0.22183906,0.10643963 15.907731 0 0 -0.064721,-0.0209 c 0.079693,-0.18256 0.1360869,-0.35138 0.1360793,-0.48952 a 0.09502199,0.26579633 79.512545 0 0 0.082146,-0.012 0.09502199,0.26579633 79.512545 0 0 0.2323304,-0.14318 0.09502199,0.26579633 79.512545 0 0 -0.1609725,-0.0532 0.09502199,0.26579633 79.512545 0 0 -0.1277813,0.0142 0.09502199,0.26579633 79.512545 0 0 -0.063061,0.0158 c -0.052042,-0.0934 -0.1629132,-0.15537 -0.3418575,-0.18222 a 0.1204124,0.17271454 43.736638 0 0 -0.038997,-0.15563 0.1204124,0.17271454 43.736638 0 0 -0.047295,-0.009 z m -0.00166,0.455 a 0.21036646,0.10941663 9.719859 0 1 0.09708,0.0118 0.21036646,0.10941663 9.719859 0 1 0.153504,0.15279 0.21036646,0.10941663 9.719859 0 1 -0.2505851,0.0504 0.21036646,0.10941663 9.719859 0 1 -0.1543332,-0.15223 0.21036646,0.10941663 9.719859 0 1 0.1543332,-0.0628 z m -0.4928723,0.29709 a 0.110016,0.21462756 69.57508 0 1 0.09708,0.0271 0.110016,0.21462756 69.57508 0 1 -0.090444,0.17883 0.110016,0.21462756 69.57508 0 1 -0.2746478,0.022 0.110016,0.21462756 69.57508 0 1 0.089613,-0.17883 0.110016,0.21462756 69.57508 0 1 0.1783967,-0.0493 z"})])],-1),m={class:"n-container"},g=Object(n["g"])("div",null,null,-1);Object(n["j"])();var O=u((function(t,e,a,r,c,i){var o=Object(n["o"])("EndGame"),s=Object(n["o"])("Header"),l=Object(n["o"])("BasicInput"),O=Object(n["o"])("HealthCard"),j=Object(n["o"])("BasicButton"),v=Object(n["o"])("FistIcon"),y=Object(n["o"])("HeartIcon"),M=Object(n["o"])("FightHistory");return Object(n["i"])(),Object(n["d"])(n["a"],null,[c.endGame?(Object(n["i"])(),Object(n["d"])(o,{key:0,"onReset-game":i.resetGame,winner:c.winner},null,8,["onReset-game","winner"])):Object(n["e"])("",!0),Object(n["g"])(s),Object(n["g"])("div",h,[Object(n["g"])(l)]),Object(n["g"])("div",d,[Object(n["g"])(O,{creature:{name:"Monster "+i.getMonsterName+"'s",health:i.getMonsterHealth}},null,8,["creature"])]),Object(n["g"])("div",b,[Object(n["g"])(O,{creature:{name:i.getPlayerName+"'s",health:i.getPlayerHealth}},null,8,["creature"])]),Object(n["g"])("div",f,[Object(n["g"])(j,{onClick:i.hitMonster,label:"Attack"},{default:u((function(){return[p]})),_:1},8,["onClick"]),Object(n["g"])(j,{onClick:i.hitMonsterSpecial,label:"Special",disabled:i.isSpecialActive},{default:u((function(){return[Object(n["g"])(v)]})),_:1},8,["onClick","disabled"]),Object(n["g"])(j,{onClick:i.healPlayer,label:"Heal",disabled:i.isSpecialActive},{default:u((function(){return[Object(n["g"])(y)]})),_:1},8,["onClick","disabled"])]),Object(n["g"])("div",m,[Object(n["g"])(M)]),g],64)})),j=Object(n["t"])("data-v-fa62b774");Object(n["k"])("data-v-fa62b774");var v={class:"n-morph"},y={class:"ms-title"},M=Object(n["g"])("i",{class:"fab fa-vuejs"},null,-1);Object(n["j"])();var P=j((function(t,e,a,r,c,i){return Object(n["i"])(),Object(n["d"])("header",v,[Object(n["g"])("div",y,[M,Object(n["f"])(" "+Object(n["p"])(c.title),1)])])})),H={data:function(){return{title:"Monster Slayer Game"}}};a("c652");H.render=P,H.__scopeId="data-v-fa62b774";var _=H,N=Object(n["t"])("data-v-48f5c469");Object(n["k"])("data-v-48f5c469");var S={class:"ms-h-card n-border n-morph"};Object(n["j"])();var k=N((function(t,e,a,r,c,i){var o=Object(n["o"])("HealthBar");return Object(n["i"])(),Object(n["d"])("div",S,[Object(n["g"])("h3",null,Object(n["p"])(a.creature.name)+" Health",1),Object(n["g"])(o,{health:a.creature.health+"%"},null,8,["health"])])})),E=(a("a9e3"),Object(n["t"])("data-v-5e681ecb"));Object(n["k"])("data-v-5e681ecb");var R={class:"ms-hb-baar"},w={class:"ms-hb-label"};Object(n["j"])();var C=E((function(t,e,a,r,c,i){return Object(n["i"])(),Object(n["d"])("div",R,[Object(n["g"])("span",w,Object(n["p"])(a.health),1),Object(n["g"])("span",{class:"ms-hb-health",style:i.cssVars},null,4)])})),x={props:["health"],computed:{cssVars:function(){return{"--bar-length":this.health}}}};a("49fe");x.render=C,x.__scopeId="data-v-5e681ecb";var G=x,A={props:{creature:{name:String,health:Number}},components:{HealthBar:G}};a("62e3");A.render=k,A.__scopeId="data-v-48f5c469";var B=A,T=Object(n["t"])("data-v-2fed8af3");Object(n["k"])("data-v-2fed8af3");var I={class:"ms-bb-label"};Object(n["j"])();var $=T((function(t,e,a,r,c,i){return Object(n["i"])(),Object(n["d"])("button",{disabled:a.disabled},[Object(n["g"])("span",I,Object(n["p"])(a.label),1),Object(n["n"])(t.$slots,"default")],8,["disabled"])})),z={props:{label:String,disabled:{type:Boolean,required:!1,default:!1}}};a("a1e0");z.render=$,z.__scopeId="data-v-2fed8af3";var L=z,U=Object(n["t"])("data-v-22738e21");Object(n["k"])("data-v-22738e21");var F={class:"n-container ms-eg-container"},Y={class:"ms-eg-panel n-morph n-border"},V=Object(n["g"])("h1",null,"END GAME",-1),D={class:"ms-eg-winner"},q={key:0},J={key:1},X=Object(n["f"])(" has won! ");Object(n["j"])();var W=U((function(t,e,a,r,c,i){var o=Object(n["o"])("BasicButton");return Object(n["i"])(),Object(n["d"])("div",F,[Object(n["g"])("div",Y,[V,Object(n["g"])("div",D,["monster"===a.winner.type?(Object(n["i"])(),Object(n["d"])("span",q,"The Monster")):(Object(n["i"])(),Object(n["d"])("span",J,"The Player")),X]),Object(n["g"])(o,{onClick:i.resetGame,label:"START NEW GAME"},null,8,["onClick"])])])})),Z={props:["winner"],methods:{resetGame:function(){this.$emit("reset-game")}},components:{BasicButton:L}};a("2f66");Z.render=W,Z.__scopeId="data-v-22738e21";var K=Z,Q={class:"n-svg",style:{"margin-left":"10px"},height:"1em",width:"1em",viewBox:"0 0 4 4",fill:"currentColor"},tt=Object(n["g"])("g",{transform:"translate(0,-292.76667)"},[Object(n["g"])("path",{d:"m 1.1997652,295.64188 c -0.85292618,-1.03248 -0.87588449,-1.06062 -0.91334098,-1.11916 -0.25902521,-0.40487 -0.20228263,-0.94201 0.13555587,-1.28322 0.30557354,-0.30862 0.77189281,-0.39517 1.16156371,-0.21558 0.1554197,0.0716 0.2953152,0.18136 0.387001,0.30355 0.014121,0.0188 0.027322,0.0341 0.029338,0.034 0.00202,-1.4e-4 0.025137,-0.0271 0.051377,-0.0599 0.1378502,-0.1724 0.3706906,-0.30967 0.5982484,-0.35269 0.1911059,-0.0361 0.4024777,-0.0143 0.5855127,0.0606 0.2580131,0.1055 0.469679,0.32012 0.5682094,0.57614 0.1100165,0.28587 0.093808,0.59197 -0.045455,0.85839 l -0.038339,0.0734 -0.1446852,0.002 -0.1446851,0.002 v -0.28252 -0.28253 H 2.935001 2.4399348 v 0.28237 0.28237 H 2.1539027 1.8678641 v 0.49498 0.49498 l 0.2842045,0.002 0.2842051,0.002 0.00157,0.28237 0.00157,0.28237 -0.215417,0.26014 c -0.1184799,0.14308 -0.2185099,0.26117 -0.2222896,0.26243 -0.00378,10e-4 -0.3646656,-0.43082 -0.8019685,-0.96018 z m 1.4822078,-0.0941 v -0.28604 H 2.399602 2.117231 v -0.2457 -0.2457 h 0.2822849 0.282285 l 0.00189,-0.28421 0.00189,-0.2842 0.2475327,-0.002 0.2475335,-0.002 v 0.28613 0.28614 H 3.466688 3.7527259 v 0.2457 0.24569 H 3.4667441 3.1807062 v 0.28605 0.28603 H 2.9313393 2.681973 Z"})],-1);function et(t,e,a,r,c,i){return Object(n["i"])(),Object(n["d"])("svg",Q,[tt])}var at={};a("b9d0");at.render=et;var nt=at,rt={class:"n-svg",style:{"margin-left":"10px"},height:"1em",width:"1em",viewBox:"0 0 4 4",fill:"currentColor"},ct=Object(n["g"])("g",{transform:"translate(0,-292.76667)"},[Object(n["g"])("path",{d:"m 1.6153094,296.7301 c -0.13657,-0.0278 -0.23874,-0.068 -0.27064,-0.10636 -0.0178,-0.0215 -0.009,-0.12712 0.0423,-0.52375 0.0356,-0.27326 0.0691,-0.52312 0.0744,-0.5552 0.009,-0.0525 -0.0298,-0.11716 -0.38293,-0.64274 -0.21600004,-0.32141 -0.40057004,-0.605 -0.41016004,-0.63022 -0.0139,-0.0366 -0.008,-0.0608 0.0276,-0.12089 0.0817,-0.13604 0.54605004,-0.78059 0.57535004,-0.79863 0.0214,-0.0132 0.11421,0.0201 0.36361,0.13024 0.1842,0.0814 0.37172,0.16634 0.41671,0.18885 l 0.0818,0.041 0.005,0.11071 c 0.007,0.14765 -0.0225,0.18411 -0.16896,0.20783 -0.14557,0.0236 -0.29331,0.0225 -0.34208,-0.002 -0.0218,-0.0112 -0.0702,-0.0495 -0.10755,-0.0851 -0.0373,-0.0356 -0.0739,-0.0588 -0.0813,-0.0514 -0.007,0.007 2.2e-4,0.0515 0.017,0.0981 0.0325,0.0904 0.0201,0.13158 -0.0393,0.13158 -0.0169,0 -0.046,0.0112 -0.0649,0.0249 -0.0326,0.0238 -0.0316,0.0264 0.0192,0.0526 0.0294,0.0151 0.19663,0.0768 0.37162,0.13703 0.48756,0.16767 0.61714,0.23386 0.79318,0.40513 0.0813,0.0791 0.1549,0.14376 0.16362,0.14374 0.009,0 0.10471,-0.0696 0.2133,-0.15452 0.10859,-0.085 0.20578,-0.15451 0.21597,-0.15451 0.0276,0 0.001,0.19517 -0.0516,0.37902 -0.0547,0.19107 -0.1441,0.38484 -0.25305,0.54873 l -0.0815,0.1225 v 0.48106 c 0,0.53979 0.008,0.50787 -0.14114,0.56565 -0.20702,0.0802 -0.72523,0.11034 -0.98606,0.0572 z m 0.9863,-2.05607 c -0.0425,-0.0356 -0.0773,-0.0797 -0.0773,-0.0979 0,-0.0459 0.54006,-0.63651 0.58212,-0.63651 0.0452,0 0.23876,0.23466 0.23206,0.28132 -0.006,0.0428 -0.58401,0.51881 -0.62913,0.51827 -0.0168,-2e-4 -0.0653,-0.0294 -0.10778,-0.0652 z m -0.36361,-0.26527 c -0.0796,-0.0459 -0.13181,-0.0879 -0.13181,-0.10599 0,-0.0324 0.54905,-0.74423 0.59316,-0.76905 0.0194,-0.0112 0.0646,0.0221 0.16485,0.12002 0.11694,0.11431 0.13635,0.14173 0.12649,0.17865 -0.006,0.024 -0.10272,0.14587 -0.21405,0.27087 -0.31219,0.35053 -0.34299,0.3818 -0.37602,0.38172 -0.017,-5e-5 -0.0901,-0.0344 -0.16262,-0.0762 z m -0.45452,-0.16442 c -0.0525,-0.0202 -0.0954,-0.0423 -0.0954,-0.0493 0,-0.0112 0.32221,-0.0746 0.37725,-0.0738 0.0431,5.4e-4 0.0219,0.0459 -0.0491,0.10487 -0.0812,0.0674 -0.10093,0.0689 -0.2327,0.0185 z m 0.45928,-0.43657 c 0.0178,-0.11915 -0.01,-0.16589 -0.139,-0.2348 -0.0625,-0.0334 -0.11605,-0.0689 -0.11905,-0.0788 -0.003,-0.01 0.0457,-0.0959 0.10833,-0.1909 0.0763,-0.1158 0.12655,-0.17454 0.15246,-0.17828 0.0496,-0.007 0.35156,0.2589 0.35156,0.30968 0,0.0431 -0.30913,0.45038 -0.34187,0.45038 -0.0179,0 -0.021,-0.0196 -0.0124,-0.0772 z m -0.61779,-0.45123 c -0.17149,-0.077 -0.19469,-0.0956 -0.17758,-0.14254 0.0255,-0.0703 0.31532,-0.43798 0.34508,-0.43793 0.0334,6e-5 0.28743,0.20462 0.32055,0.25813 0.0154,0.0249 -0.005,0.0662 -0.10444,0.21364 -0.1466,0.21672 -0.14423,0.21603 -0.38361,0.1086 z"})],-1);function it(t,e,a,r,c,i){return Object(n["i"])(),Object(n["d"])("svg",rt,[ct])}const ot={};ot.render=it;var st=ot,lt=Object(n["t"])("data-v-d1ee5cf0");Object(n["k"])("data-v-d1ee5cf0");var ut={class:"n-container n-morph n-border ms-fh-events"},ht={key:0},dt={key:1};Object(n["j"])();var bt=lt((function(t,e,a,r,c,i){return Object(n["i"])(),Object(n["d"])("div",ut,[(Object(n["i"])(!0),Object(n["d"])(n["a"],null,Object(n["m"])(i.getFightHistory,(function(t,e){return Object(n["i"])(),Object(n["d"])("div",{key:t.id,class:"ms-fh-event",style:i.colorVal(e)},["monster"===t.type?(Object(n["i"])(),Object(n["d"])("span",ht,Object(n["p"])(i.getMonsterName),1)):(Object(n["i"])(),Object(n["d"])("span",dt,Object(n["p"])(i.getPlayerName),1)),Object(n["f"])(Object(n["p"])(" ")+" hits oponent for "+Object(n["p"])(t.damage)+" points! ",1)],4)})),128))])})),ft=(a("99af"),{methods:{colorVal:function(t){var e=25*t;return e>255&&(e=255),"color: rgba(".concat(e,",").concat(e,",").concat(e,",1)")}},computed:{getFightHistory:function(){return this.$store.getters.getFightHistory},getPlayerName:function(){return this.$store.getters.getPlayerName||"Player"},getMonsterName:function(){return this.$store.getters.getMonsterName||"Monster"}}});a("f898");ft.render=bt,ft.__scopeId="data-v-d1ee5cf0";var pt=ft,mt=Object(n["t"])("data-v-75f1b7a8");Object(n["k"])("data-v-75f1b7a8");var gt={class:"ms-bi-content"};Object(n["j"])();var Ot=mt((function(t,e,a,r,c,i){return Object(n["i"])(),Object(n["d"])("div",gt,[Object(n["s"])(Object(n["g"])("input",{type:"text",class:"n-morph-inset n-border",maxlength:"15",placeholder:"Your name","onUpdate:modelValue":e[1]||(e[1]=function(t){return c.playerName=t}),onInput:e[2]||(e[2]=function(){return i.setName.apply(i,arguments)})},null,544),[[n["q"],c.playerName]])])})),jt={data:function(){return{playerName:""}},methods:{setName:function(){console.log(this.playerName),this.$store.dispatch("setPlayerName",this.playerName)}}};a("c5cf");jt.render=Ot,jt.__scopeId="data-v-75f1b7a8";var vt=jt,yt={data:function(){return{disabledSpecial:!1,endGame:!1,winner:{}}},components:{BasicButton:L,BasicInput:vt,EndGame:K,Header:_,HealthCard:B,HeartIcon:nt,FistIcon:st,FightHistory:pt},methods:{hitMonster:function(){this.$store.dispatch("hitMonster"),this.hitPlayer()},hitMonsterSpecial:function(){this.$store.dispatch("hitMonsterSpecial"),this.$store.dispatch("resetSpecialCharge"),this.hitPlayer()},hitPlayer:function(){this.$store.dispatch("hitPlayer"),this.setNextRound();var t=this.getMonsterHealth,e=this.getPlayerHealth;e<=0&&(this.winner={type:"monster"},this.endGame=!0),t<=0&&e>0&&(this.winner={type:"player"},this.endGame=!0)},healPlayer:function(){this.$store.dispatch("healPlayer"),this.$store.dispatch("resetSpecialCharge")},setNextRound:function(){this.$store.dispatch("nextRound")},resetGame:function(){this.$store.dispatch("resetGame"),this.endGame=!1,this.winner={}}},computed:{getMonsterHealth:function(){return this.$store.getters.getMonsterHealth},getMonsterName:function(){return this.$store.getters.getMonsterName},getMonsterUrl:function(){return c.monster.mUrl},getPlayerHealth:function(){return this.$store.getters.getPlayerHealth},getPlayerName:function(){return this.$store.getters.getPlayerName||"Player"},getPlayerUrl:function(){return c.player.pUrl},isSpecialActive:function(){var t=this.$store.getters.getSpecialCharge;return t<3}}};a("2da9");yt.render=O,yt.__scopeId="data-v-0e8a86d2";var Mt=yt,Pt={name:"App",components:{Home:Mt}};a("9cdc");Pt.render=l;var Ht=Pt;Object(n["c"])(Ht).use(s).mount("#app")},"62e3":function(t,e,a){"use strict";a("473c")},"8f3f":function(t,e,a){},"909b":function(t,e,a){},"9cdc":function(t,e,a){"use strict";a("c701")},"9ea7":function(t,e,a){},"9ee0":function(t,e,a){},a1e0:function(t,e,a){"use strict";a("bd71")},b9d0:function(t,e,a){"use strict";a("909b")},ba3d:function(t,e,a){},bd71:function(t,e,a){},c5cf:function(t,e,a){"use strict";a("1390")},c652:function(t,e,a){"use strict";a("9ea7")},c701:function(t,e,a){},f898:function(t,e,a){"use strict";a("8f3f")}});
//# sourceMappingURL=app.2434e0ec.js.map