(this.webpackJsonpcorewarssimple=this.webpackJsonpcorewarssimple||[]).push([[0],{108:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),i=a(8),r=a.n(i),o=(a(80),a(81),a(24)),c=a(30),l=(a(82),a(7)),m=a(6),h=a(10),u=a(9),b=a(11),d=(a(48),function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark",style:{backgroundColor:"#873AD4"}},n.a.createElement("div",{className:"container-fluid"},n.a.createElement(o.b,{className:"navbar-brand",to:"/"},n.a.createElement("h3",null,"Corewars.Tech")),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarResponsive"},n.a.createElement("ul",{className:"navbar-nav ml-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{href:"../downloads/hype.txt",className:"nav-link",download:!0},n.a.createElement("button",{type:"button",className:"btn btn-outline-light"},"Instructions \u2b07\ufe0f"))),n.a.createElement("li",{className:"nav-item"},n.a.createElement(o.b,{className:"nav-link",to:"/play/"},n.a.createElement("button",{type:"button",className:"btn btn-outline-light"},"Leaderboard \ud83d\udcc8\ufe0f "))),n.a.createElement("li",{className:"nav-item"},n.a.createElement(o.b,{className:"nav-link",to:"/play/new/"},n.a.createElement("button",{type:"button",className:"btn btn-outline-light"},"Play \u27a1\ufe0f")))))))}}]),t}(s.PureComponent));function _(){return n.a.createElement("p",{className:"align-bottom text-center text-secondary"},"Built with \u2764\ufe0f by Adi & Eamon.")}function p(){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12"},n.a.createElement("h1",null,"Welcome to the Corewars.tech webapp alpha!"))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-6"},n.a.createElement("h3",null,"Thanks for checking us out!"),n.a.createElement("p",null,"We're still in a super early dev stage, and are super open to feedback, comments, and concerns. Thanks for your patience & support!"),n.a.createElement("br",null),n.a.createElement(o.b,{to:"/play/"},n.a.createElement("button",{type:"button",className:"btn btn-outline-success mb-2 mr-sm-2"},"Leaderboard  \ud83d\udcc8  ")),n.a.createElement("a",{href:"../downloads/hype.txt",download:!0},n.a.createElement("button",{type:"button",className:"btn btn-outline-success ml-2 mb-2 mr-sm-2"},"Instructions \u2b07\ufe0f")),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null))))}var v=a(41),y=a.n(v),f=function(e){return n.a.createElement("tr",null,n.a.createElement("td",null,e.warrior.name),n.a.createElement("td",null,e.warrior.commandList.length),n.a.createElement("td",null,e.warrior.date.substring(0,10)))},g=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(h.a)(this,Object(u.a)(t).call(this))).state={warriors:[]},e}return Object(b.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log(this.state.warriors),y.a.get("http://localhost:3000/play/").then((function(t){e.setState({warriors:t.data})})).catch((function(e){return console.log(e)})),console.log(this.state.warriors)}},{key:"warriorListFunc",value:function(){this.state.warriors.map((function(e){return n.a.createElement(f,{warrior:e})}))}},{key:"render",value:function(){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-6"},n.a.createElement("h3",null,"Leaderboard  \ud83d\udcc8  "),n.a.createElement("table",{className:"table shadow"},n.a.createElement("thead",{className:"thead-light"},n.a.createElement("tr",null,n.a.createElement("th",null,"Name"),n.a.createElement("th",null,"Length"),n.a.createElement("th",null,"Date created"))),n.a.createElement("tbody",null,this.warriorListFunc())))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-6"},n.a.createElement("h3",null,"Build your Warrior!"),n.a.createElement(o.b,{to:"/play/new/"},n.a.createElement("button",{type:"button",className:"btn btn-outline-success"},"Create a Warrior!")))))}}]),t}(s.Component),k=a(15),E=a(42),O=function(){function e(t,a,s,n,i,r){for(Object(l.a)(this,e);t<0;)t+=r;for(this.a=t%r;a<0;)a+=r;this.b=a%r,this.a_am=s,this.b_am=n,this.mod=i,this.memory_size=r,this.index=0,this.player_id=-1}return Object(m.a)(e,[{key:"init",value:function(e,t){this.index=e,this.player_id=t}},{key:"get_true_index",value:function(e,t,a){switch(t){case"#":return this.index;case"$":return(this.index+e)%this.memory_size;case"@":case"<":case">":return((s=(this.index+e)%this.memory_size)+a[s].b)%this.memory_size;case"*":case"{":case"}":var s;return((s=(this.index+e)%this.memory_size)+a[s].a)%this.memory_size;default:return-1}}},{key:"pre",value:function(e,t,a){switch(t){case"<":0===a[this.index+e].b?a[this.index+e].b=this.memory_size:a[this.index+e].b-=1;break;case"{":0===a[this.index+e].a?a[this.index+e].a=this.memory_size:a[this.index+e].a-=1}}},{key:"post",value:function(e,t,a){switch(t){case"}":a[this.index+e].a=(a[this.index+e].a+1)%this.memory_size;break;case">":a[this.index+e].b=(a[this.index+e].b+1)%this.memory_size}}},{key:"call",value:function(e,t,a,s){this.pre(this.a,this.a_am,e),this.pre(this.b,this.b_am,e);var n=this._call(e,t,a,s),i=Object(E.a)(n,3),r=i[0],o=i[1],c=i[2];return this.post(this.a,this.a_am,e),this.post(this.b,this.b_am,e),[r,o,c]}},{key:"_call",value:function(e,t,a,s){}}]),e}(),j=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"values",value:function(){return{name:"Add",a:this.a,b:this.b,a_am:this.a_am,b_am:this.b_am,mod:this.mod}}},{key:"_add",value:function(e,t){return(t+e)%this.memory_size}},{key:"_call",value:function(e,t,a,s){var n=this.get_true_index(this.a,this.a_am,e),i=this.get_true_index(this.b,this.b_am,e);switch(this.mod){case"A":e[i].a=this._add(e[n].a,e[i].a);break;case"B":e[i].b=this._add(e[n].b,e[i].b);break;case"AB":e[i].b=this._add(e[n].a,e[i].b);break;case"BA":e[i].a=this._add(e[n].b,e[i].a);break;case"F":case"I":e[i].a=this._add(e[n].a,e[i].a),e[i].b=this._add(e[n].b,e[i].b);break;case"X":var r=[e[n].a,e[n].b],o=r[0],c=r[1],l=[e[i].a,e[i].b],m=l[0],h=l[1];e[i].a=this._add(c,m),e[i].b=this._add(o,h)}return t[a]=(t[a]+1)%this.memory_size,[e,t,a+=1]}}]),t}(O),N=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"values",value:function(){return{name:"Blank",a:this.a,b:this.b,a_am:this.a_am,b_am:this.b_am,mod:this.mod}}},{key:"_call",value:function(e,t,a,s){return t.splice(a,1),[e,t,a+=1]}}]),t}(O),w=function(e){function t(e,a,s,n,i,r,o){var c;return Object(l.a)(this,t),(c=Object(h.a)(this,Object(u.a)(t).call(this,e,a,s,n,i,r,o)))._flag=!1,c}return Object(b.a)(t,e),Object(m.a)(t,[{key:"values",value:function(){return{name:"Divide",a:this.a,b:this.b,a_am:this.a_am,b_am:this.b_am,mod:this.mod}}}]),Object(m.a)(t,[{key:"_div",value:function(e,t,a,s){return 0!==e||this._flag?t/e>>0:(a.splice(s,1),this._flag=!0,t)}},{key:"_call",value:function(e,t,a,s){var n=this.get_true_index(this.a,this.a_am,e),i=this.get_true_index(this.b,this.b_am,e);switch(this.mod){case"A":e[i].a=this._div(e[n].a,e[i].a,t,a);break;case"B":e[i].b=this._div(e[n].b,e[i].b,t,a);break;case"AB":e[i].b=this._div(e[n].a,e[i].b,t,a);break;case"BA":e[i].a=this._div(e[n].b,e[i].a,t,a);break;case"F":case"I":e[i].a=this._div(e[n].a,e[i].a,t,a),e[i].b=this._div(e[n].b,e[i].b,t,a);break;case"X":var r=[e[n].a,e[n].b],o=r[0],c=r[1],l=[e[i].a,e[i].b],m=l[0],h=l[1];e[i].a=this._div(c,m,t,a),e[i].b=this._div(o,h,t,a)}return this._flag||(t[a]=(t[a]+1)%this.memory_size),this._flag=!1,[e,t,a+=1]}}]),t}(O),C=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"values",value:function(){return{name:"DecJumpNZ",a:this.a,b:this.b,a_am:this.a_am,b_am:this.b_am,mod:this.mod}}},{key:"_cond",value:function(e,t,a,s){t[a]=e?s:(t[a]+1)%this.memory_size}},{key:"_call",value:function(e,t,a,s){var n=this.get_true_index(this.a,this.a_am,e),i=this.get_true_index(this.b,this.b_am,e);switch(this.mod){case"A":case"BA":e[i].a-=1,e[i].a<0&&(e[i].a+=this.memory_size),this._cond(0!==e[i].a,t,a,n);break;case"B":case"AB":e[i].b-=1,e[i].b<0&&(e[i].b+=this.memory_size),this._cond(0!==e[i].b,t,a,n);break;case"I":case"X":case"F":e[i].a-=1,e[i].b-=1,e[i].a<0&&(e[i].a+=this.memory_size),e[i].b<0&&(e[i].b+=this.memory_size),this._cond(0!==e[i].a||0!==e[i].b,t,a,n)}return[e,t,a+=1]}}]),t}(O),x=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"values",value:function(){return{name:"JumpNZ",a:this.a,b:this.b,a_am:this.a_am,b_am:this.b_am,mod:this.mod}}},{key:"_cond",value:function(e,t,a,s){t[a]=e?s:(t[a]+1)%this.memory_size}},{key:"_call",value:function(e,t,a,s){var n=this.get_true_index(this.a,this.a_am,e),i=this.get_true_index(this.b,this.b_am,e);switch(this.mod){case"A":case"BA":this._cond(0!==e[i].a,t,a,n);break;case"B":case"AB":this._cond(0!==e[i].b,t,a,n);break;case"I":case"X":case"F":this._cond(0!==e[i].a||0!==e[i].b,t,a,n)}return[e,t,a+=1]}}]),t}(O),B=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"values",value:function(){return{name:"Jump",a:this.a,b:this.b,a_am:this.a_am,b_am:this.b_am,mod:this.mod}}},{key:"_call",value:function(e,t,a,s){var n=this.get_true_index(this.a,this.a_am,e);return t[a]=n,[e,t,a+=1]}}]),t}(O),M=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"values",value:function(){return{name:"JumpZ",a:this.a,b:this.b,a_am:this.a_am,b_am:this.b_am,mod:this.mod}}},{key:"_cond",value:function(e,t,a,s){t[a]=e?s:(t[a]+1)%this.memory_size}},{key:"_call",value:function(e,t,a,s){var n=this.get_true_index(this.a,this.a_am,e),i=this.get_true_index(this.b,this.b_am,e);switch(this.mod){case"A":case"BA":this._cond(0===e[i].a,t,a,n);break;case"B":case"AB":this._cond(0===e[i].b,t,a,n);break;case"I":case"X":case"F":this._cond(0===e[i].a&&0===e[i].b,t,a,n)}return[e,t,a+=1]}}]),t}(O),S=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"values",value:function(){return{name:"Modulus",a:this.a,b:this.b,a_am:this.a_am,b_am:this.b_am,mod:this.mod}}},{key:"_mod",value:function(e,t,a,s){return 0!==e||this._flag?t%e:(a.splice(s,1),this._flag=!0,t)}},{key:"_call",value:function(e,t,a,s){var n=this.get_true_index(this.a,this.a_am,e),i=this.get_true_index(this.b,this.b_am,e);switch(this.mod){case"A":e[i].a=this._mod(e[n].a,e[i].a,t,a);break;case"B":e[i].b=this._mod(e[n].b,e[i].b,t,a);break;case"AB":e[i].b=this._mod(e[n].a,e[i].b,t,a);break;case"BA":e[i].a=this._mod(e[n].b,e[i].a,t,a);break;case"F":case"I":e[i].a=this._mod(e[n].a,e[i].a,t,a),e[i].b=this._mod(e[n].b,e[i].b,t,a);break;case"X":var r=[e[n].a,e[n].b],o=r[0],c=r[1],l=[e[i].a,e[i].b],m=l[0],h=l[1];e[i].a=this._mod(c,m,t,a),e[i].b=this._mod(o,h,t,a)}return this._flag||(t[a]=(t[a]+1)%this.memory_size),this._flag=!1,[e,t,a+=1]}}]),t}(O),A=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"values",value:function(){return{name:"Copy",a:this.a,b:this.b,a_am:this.a_am,b_am:this.b_am,mod:this.mod}}},{key:"_call",value:function(e,t,a,s){var n=this.get_true_index(this.a,this.a_am,e),i=this.get_true_index(this.b,this.b_am,e);switch(this.mod){case"A":e[i].a=e[n].a;break;case"B":e[i].b=e[n].b;break;case"AB":e[i].b=e[n].a;break;case"BA":e[i].a=e[n].b;break;case"I":var r=e[n];e[i]=Object.assign(Object.create(Object.getPrototypeOf(r)),r),e[i].index=i,e[i].player_id=s;break;case"F":e[i].a=e[n].a,e[i].b=e[n].b;break;case"X":var o=[e[n].a,e[n].b],c=o[0],l=o[1];e[i].a=l,e[i].b=c}return t[a]=(t[a]+1)%this.memory_size,[e,t,a+=1]}}]),t}(O),z=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"values",value:function(){return{name:"Multiply",a:this.a,b:this.b,a_am:this.a_am,b_am:this.b_am,mod:this.mod}}},{key:"_mul",value:function(e,t){return t*e%this.memory_size}},{key:"_call",value:function(e,t,a,s){var n=this.get_true_index(this.a,this.a_am,e),i=this.get_true_index(this.b,this.b_am,e);switch(this.mod){case"A":e[i].a=this._mul(e[n].a,e[i].a);break;case"B":e[i].b=this._mul(e[n].b,e[i].b);break;case"AB":e[i].b=this._mul(e[n].a,e[i].b);break;case"BA":e[i].a=this._mul(e[n].b,e[i].a);break;case"F":case"I":e[i].a=this._mul(e[n].a,e[i].a),e[i].b=this._mul(e[n].b,e[i].b);break;case"X":var r=[e[n].a,e[n].b],o=r[0],c=r[1],l=[e[i].a,e[i].b],m=l[0],h=l[1];e[i].a=this._mul(c,m),e[i].b=this._mul(o,h)}return t[a]=(t[a]+1)%this.memory_size,[e,t,a+=1]}}]),t}(O),I=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"values",value:function(){return{name:"SkipE",a:this.a,b:this.b,a_am:this.a_am,b_am:this.b_am,mod:this.mod}}},{key:"_compare_commands",value:function(e,t){return Object.getPrototypeOf(e)===Object.getPrototypeOf(t)&&(e.a===t.a&&e.b===t.b&&e.mod===t.mod&&(e.a_am===t.a_am&&e.b_am===t.b_am))}},{key:"_compare",value:function(e,t,a){t[a]=e?(t[a]+2)%this.memory_size:(t[a]+1)%this.memory_size}},{key:"_call",value:function(e,t,a,s){var n=this.get_true_index(this.a,this.a_am,e),i=this.get_true_index(this.b,this.b_am,e);switch(this.mod){case"A":this._compare(e[n].a===e[i].a,t,a);break;case"B":this._compare(e[n].b===e[i].b,t,a);break;case"AB":this._compare(e[n].a===e[i].b,t,a);break;case"BA":this._compare(e[n].b===e[i].a,t,a);break;case"F":var r=e[n].a===e[i].a&&e[n].b===e[i].b;this._compare(r,t,a);break;case"I":r=this._compare_commands(e[n],e[i]);this._compare(r,t,a);break;case"X":r=e[n].a===e[i].b&&e[n].b===e[i].a;this._compare(r,t,a)}return[e,t,a+=1]}}]),t}(O),P=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"values",value:function(){return{name:"SkipL",a:this.a,b:this.b,a_am:this.a_am,b_am:this.b_am,mod:this.mod}}},{key:"_compare",value:function(e,t,a){t[a]=e?(t[a]+2)%this.memory_size:(t[a]+1)%this.memory_size}},{key:"_call",value:function(e,t,a,s){var n=this.get_true_index(this.a,this.a_am,e),i=this.get_true_index(this.b,this.b_am,e);switch(this.mod){case"A":this._compare(e[n].a<e[i].a,t,a);break;case"B":this._compare(e[n].b<e[i].b,t,a);break;case"AB":this._compare(e[n].a<e[i].b,t,a);break;case"BA":this._compare(e[n].b<e[i].a,t,a);break;case"I":case"F":var r=e[n].a<e[i].a&&e[n].b<e[i].b;this._compare(r,t,a);break;case"X":r=e[n].a<e[i].b&&e[n].b<e[i].a;this._compare(r,t,a)}return[e,t,a+=1]}}]),t}(O),L=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"values",value:function(){return{name:"SkipNE",a:this.a,b:this.b,a_am:this.a_am,b_am:this.b_am,mod:this.mod}}},{key:"_compare_commands",value:function(e,t){return Object.getPrototypeOf(e)!==Object.getPrototypeOf(t)||(e.a!==t.a||e.b!==t.b||e.mod!==t.mod||(e.a_am!==t.a_am||e.b_am!==t.b_am))}},{key:"_compare",value:function(e,t,a){t[a]=e?(t[a]+2)%this.memory_size:(t[a]+1)%this.memory_size}},{key:"_call",value:function(e,t,a,s){var n=this.get_true_index(this.a,this.a_am,e),i=this.get_true_index(this.b,this.b_am,e);switch(this.mod){case"A":this._compare(e[n].a!==e[i].a,t,a);break;case"B":this._compare(e[n].b!==e[i].b,t,a);break;case"AB":this._compare(e[n].a!==e[i].b,t,a);break;case"BA":this._compare(e[n].b!==e[i].b,t,a);break;case"F":var r=e[n].a!==e[i].a||e[n].b!==e[i].b;this._compare(r,t,a);break;case"I":r=this._compare_commands(e[n],e[i]);this._compare(r,t,a);break;case"X":r=e[n].a!==e[i].b||e[n].b!==e[i].a;this._compare(r,t,a)}return[e,t,a+=1]}}]),t}(O),D=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"values",value:function(){return{name:"Split",a:this.a,b:this.b,a_am:this.a_am,b_am:this.b_am,mod:this.mod}}},{key:"_call",value:function(e,t,a,s){var n=this.get_true_index(this.a,this.a_am,e);return t.splice(a+1,0,n),t[a]=(t[a]+1)%this.memory_size,[e,t,a+=2]}}]),t}(O),J=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"values",value:function(){return{name:"Subtract",a:this.a,b:this.b,a_am:this.a_am,b_am:this.b_am,mod:this.mod}}},{key:"_sub",value:function(e,t){var a=t-e;return a<0&&(a+=this.memory_size),a}},{key:"_call",value:function(e,t,a,s){var n=this.get_true_index(this.a,this.a_am,e),i=this.get_true_index(this.b,this.b_am,e);switch(this.mod){case"A":e[i].a=this._sub(e[n].a,e[i].a);break;case"B":e[i].b=this._sub(e[n].b,e[i].b);break;case"AB":e[i].b=this._sub(e[n].a,e[i].b);break;case"BA":e[i].a=this._sub(e[n].b,e[i].a);break;case"F":case"I":e[i].a=this._sub(e[n].a,e[i].a),e[i].b=this._sub(e[n].b,e[i].b);break;case"X":var r=[e[n].a,e[n].b],o=r[0],c=r[1],l=[e[i].a,e[i].b],m=l[0],h=l[1];e[i].a=this._sub(c,m),e[i].b=this._sub(o,h)}return t[a]=(t[a]+1)%this.memory_size,[e,t,a+=1]}}]),t}(O),$=a(66),F=a(65),T=Math.floor(24),X=Math.floor((800-25*T)/2),Z=Math.floor((600-25*T)/2),W=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;console.log("Rendered");var t,a=this.props,s=a.index,i=a.player_id,r=Math.floor(s/25),o=s%25;switch(i){case 0:t="red";break;case 1:t="blue";break;default:t="#eeeeee"}return n.a.createElement("div",{className:"Cell padding-0",onMouseEnter:function(){return e.props.onHover(s),console.log("indexA: "+e.props.indexA),console.log("indexB: "+e.props.indexB),void console.log("index: "+s)},style:{left:"".concat(T*r+X,"px"),top:"".concat(T*o+Z,"px"),width:"".concat(T,"px"),height:"".concat(T,"px"),backgroundColor:"".concat(t)}})}}]),t}(s.PureComponent),H=(a(104),a(64)),q=a.n(H),R=(a(107),function(e){return n.a.createElement("div",null,n.a.createElement("button",{className:"dropdown-item",type:"button",value:e.warrior}," name: ",e.warrior.name," | length: ",e.warrior.commandList.length))}),Y=function(e){return e.easyModeProp?n.a.createElement("div",null,n.a.createElement("h5",null,"Cell Info\ud83d\udc49",e.hoverProp.name,"  (  ",e.hoverProp.a,"  ,  ",e.hoverProp.b,"  )")):n.a.createElement("div",null,n.a.createElement("h5",null,"Cell Info\ud83d\udc49",e.hoverProp.name,".",e.hoverProp.mod,"    (  ",e.hoverProp.a_am,"  ",e.hoverProp.a,"  ,  ",e.hoverProp.b_am,"  ",e.hoverProp.b,"  )"))},G=function(e){function t(e){var a;Object(l.a)(this,t);var s=(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).init(625);a.onChangePlayer1Code=a.onChangePlayer1Code.bind(Object(k.a)(a)),a.onChangeHover=a.onChangeHover.bind(Object(k.a)(a)),a.onMouseToggle=a.onMouseToggle.bind(Object(k.a)(a)),a.displayButtons=a.displayButtons.bind(Object(k.a)(a));var n=[new A(0,1,"$","$","I",625)],i=e.p2code,r=a.make_players(s,[n,i]);return a.state={raw_code:[n,i],player1Code:n,memory_size:625,memory:s,players:r,game_length:2e3,final_length:0,done:null,current_step:1,current_player:0,in_game:!1,warriors:e.warriorList,hoverInfo:{},hoverIndex:null,easyMode:e.easyModeBool,debugMode:e.debugModeBool},a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"onChangeHover",value:function(e){var t=this.state.memory[e].values();this.setState({hoverInfo:t,hoverIndex:e})}},{key:"onMouseToggle",value:function(){console.log("Mouse Toggled")}},{key:"onChangePlayer1Code",value:function(e){var t=this.state.raw_code.map((function(e){return Object.assign(Object.create(Object.getPrototypeOf(e)),e)}));t[0]=e.target.value,this.setState({raw_code:t,players:this.make_players(this.state.memory,t),player1code:e.target.value})}},{key:"init",value:function(e){for(var t=[],a=0;a<e;a++)t.push(new N(0,0,"$","$","",e)),t[t.length-1].init(a,-1);return t}},{key:"check_memory",value:function(e,t,a){for(var s=0;s<a;s++)if(-1!==e[(t+s)%e.length].player_id)return!1;return!0}},{key:"set_code",value:function(e,t,a){for(var s=Math.floor(Math.random()*(e.length-1));!this.check_memory(e,s,t.length);)s=Math.floor(Math.random()*(e.length-1));for(var n=0;n<t.length;n++){var i=(s+n)%e.length;e[i]=t[n],e[i].init(i,a)}return s}},{key:"make_players",value:function(e,t){for(var a=[],s=0;s<t.length;s++){var n={processes:[this.set_code(e,t[s],s)],current:0};a.push(n)}return a}},{key:"step",value:function(e,t){var a=this.state.memory,s=t[e],n=s.processes,i=s.current,r=n[i],o=Object(F.a)(n),c=i,l=a[r].call(a,o,c,e),m=Object(E.a)(l,3),h=m[0],u=m[1],b=m[2],d={processes:u,current:b%=u.length},_=t.map((function(e){return Object($.a)({},e)}));return _[e]=d,[h,_]}},{key:"forward",value:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],a=this.state,s=a.current_step,n=a.current_player,i=a.players,r=a.game_length,o=a.in_game,c=0===n?1:0;if(console.log(i),s===r)this.end(-1,r);else if(0===i[n].processes.length)this.end(c,s);else if(o){var l=this.step(n,i),m=Object(E.a)(l,2),h=m[0],u=m[1];this.setState({current_step:s+1,current_player:c,players:u,memory:h}),t&&setTimeout((function(){e.forward()}),0)}}},{key:"start",value:function(){var e=this,t=this.make_players(this.state.memory,this.state.raw_code);this.setState({players:t}),this.state.in_game||this.setState({in_game:!0},(function(){e.forward()}))}},{key:"startOne",value:function(){var e=this.make_players(this.state.memory,this.state.raw_code);this.setState({players:e}),this.forward()}},{key:"end",value:function(e,t){this.setState({done:e,final_length:t,in_game:!1})}},{key:"quickEnd",value:function(){this.setState({done:null,final_length:0,in_game:!1,memory:this.init(this.state.memory_size)})}},{key:"quickEndThink",value:function(){this.setState({done:null,final_length:0,in_game:!1})}},{key:"warriorListFunc",value:function(){this.state.warriors.map((function(e){return n.a.createElement(R,{warrior:e})}))}},{key:"displayButtons",value:function(){return this.state.debugMode,n.a.createElement("div",null,n.a.createElement("button",{className:"btn btn-outline-success mb-2 mr-sm-2",onClick:this.start.bind(this)},"\ud83c\udfc3\u200d"),n.a.createElement("button",{className:"btn btn-outline-danger ml-2 mb-2 mr-sm-2",onClick:this.quickEndThink.bind(this)},"\ud83e\udd14 \u274c"),n.a.createElement("button",{className:"btn btn-outline-danger ml-2 mb-2 mr-sm-2",onClick:this.quickEnd.bind(this)},"\u274c"))}},{key:"componentWillReceiveProps",value:function(e){var t=this.init(625);this.onChangePlayer1Code=this.onChangePlayer1Code.bind(this),this.onChangeHover=this.onChangeHover.bind(this),this.onMouseToggle=this.onMouseToggle.bind(this);var a=[new A(0,1,"$","$","I",625)],s=e.p2code;console.log(a),console.log(s);var n=this.make_players(t,[a,s]);this.setState({raw_code:[a,s],player1Code:a,memory_size:625,memory:t,players:n,game_length:2e3,final_length:0,done:null,current_step:1,current_player:0,in_game:!1,warriors:e.warriorList,hoverInfo:{},hoverIndex:null,easyMode:e.easyModeBool,debugMode:e.debugModeBool})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"col-6 mb-2"},n.a.createElement(q.a,{options:this.state.warriors,onChange:this.onChangePlayer1Code,placeholder:"Select Opponent \u2694\ufe0f"})),n.a.createElement("div",{className:"row mt-2"},this.displayButtons(),n.a.createElement("div",{className:"card shadow rounded ml-2"},n.a.createElement("div",{className:"card-body"},n.a.createElement(Y,{hoverProp:this.state.hoverInfo,easyModeProp:this.state.easyMode})))),n.a.createElement("br",null),n.a.createElement("div",{className:"col-12 padding-0"},n.a.createElement("div",{className:"Board",style:{height:600,width:800}},this.state.memory.map((function(t){return n.a.createElement(W,{height:600,width:800,player_id:t.player_id,index:t.index,key:t.index,indexA:(e.state.hoverIndex+e.state.hoverInfo.a)%e.state.memory_size,indexB:(e.state.hoverIndex+e.state.hoverInfo.a)%e.state.memory_size,onHover:e.onChangeHover})})))))}}]),t}(s.Component),K=a(144),Q=a(143),U=a(145),V=a(146),ee=a(141),te=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).onSubmit=a.onSubmit.bind(Object(k.a)(a)),a.onSave=a.onSave.bind(Object(k.a)(a)),a.onDeleteCommand=a.onDeleteCommand.bind(Object(k.a)(a)),a.onChangeName=a.onChangeName.bind(Object(k.a)(a)),a.onChangea=a.onChangea.bind(Object(k.a)(a)),a.onChangeb=a.onChangeb.bind(Object(k.a)(a)),a.onChangea_am=a.onChangea_am.bind(Object(k.a)(a)),a.onChangeb_am=a.onChangeb_am.bind(Object(k.a)(a)),a.onChangemod=a.onChangemod.bind(Object(k.a)(a)),a.onChangeCmd=a.onChangeCmd.bind(Object(k.a)(a)),a.onChangeMode=a.onChangeMode.bind(Object(k.a)(a)),a.displayInput=a.displayInput.bind(Object(k.a)(a)),a.onChangeDebugMode=a.onChangeDebugMode.bind(Object(k.a)(a)),a.state={name:"",commandList:[],warriors:[],cmd:"",a:"",b:"",a_am:"",b_am:"",mod:"",easyMode:!0,debugMode:!0},a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;y.a.get("http://localhost:3000/play/new/").then((function(t){t.data.length>0&&e.setState({warriors:t.data})})).catch((function(e){return console.log(e)}))}},{key:"onChangeName",value:function(e){this.setState({name:e.target.value})}},{key:"onChangea",value:function(e){this.setState({a:e.target.value})}},{key:"onChangeb",value:function(e){this.setState({b:e.target.value})}},{key:"onChangea_am",value:function(e){this.setState({a_am:e.target.value})}},{key:"onChangeb_am",value:function(e){this.setState({b_am:e.target.value})}},{key:"onChangemod",value:function(e){this.setState({mod:e.target.value})}},{key:"onChangeCmd",value:function(e){this.setState({cmd:e.target.value})}},{key:"onChangeMode",value:function(e){this.setState({easyMode:e.target.checked})}},{key:"onChangeDebugMode",value:function(e){this.setState({debugMode:e.target.checked})}},{key:"onDeleteCommand",value:function(e){var t=this.state.commandList.map((function(e){return Object.assign(Object.create(Object.getPrototypeOf(e)),e)}));t.splice(e,1),this.setState({commandList:t})}},{key:"onSave",value:function(e){e.preventDefault();var t={name:this.state.name,commandList:this.state.commandList};console.log(t),y.a.post("http://localhost:3000/play/new/",t).then((function(e){return console.log(e.data)})),window.location="/play/"}},{key:"onSubmitName",value:function(e){e.preventDefault()}},{key:"onSubmit",value:function(e){e.preventDefault();var t=this.state.commandList.map((function(e){return Object.assign(Object.create(Object.getPrototypeOf(e)),e)}));if(this.state.easyMode)switch(this.state.cmd){case"Copy":t.push(new A(this.state.a,this.state.b,"$","$","I",625));break;case"Add":t.push(new j(this.state.a,this.state.b,"$","$","AB",625));break;case"Blank":t.push(new N(this.state.a,this.state.b,"$","$","F",625));break;case"Jump":t.push(new B(this.state.a,this.state.b,"$","$","B",625));break;case"JumpZ":t.push(new M(this.state.a,this.state.b,"$","$","B",625));break;case"Subtract":t.push(new J(this.state.a,this.state.b,"$","$","AB",625));break;default:console.log("Command : "+this.state.cmd+" not recognized.")}else switch(this.state.cmd){case"Copy":t.push(new A(this.state.a,this.state.b,this.state.a_am,this.state.b_am,this.state.mod,625));break;case"Add":t.push(new j(this.state.a,this.state.b,this.state.a_am,this.state.b_am,this.state.mod,625));break;case"Blank":t.push(new N(this.state.a,this.state.b,this.state.a_am,this.state.b_am,this.state.mod,625));break;case"Divide":t.push(new w(this.state.a,this.state.b,this.state.a_am,this.state.b_am,this.state.mod,625));break;case"DecJumpNZ":t.push(new C(this.state.a,this.state.b,this.state.a_am,this.state.b_am,this.state.mod,625));break;case"JumpNZ":t.push(new x(this.state.a,this.state.b,this.state.a_am,this.state.b_am,this.state.mod,625));break;case"Jump":t.push(new B(this.state.a,this.state.b,this.state.a_am,this.state.b_am,this.state.mod,625));break;case"JumpZ":t.push(new M(this.state.a,this.state.b,this.state.a_am,this.state.b_am,this.state.mod,625));break;case"SkipL":t.push(new P(this.state.a,this.state.b,this.state.a_am,this.state.b_am,this.state.mod,625));break;case"SkipNE":t.push(new L(this.state.a,this.state.b,this.state.a_am,this.state.b_am,this.state.mod,625));break;case"Split":t.push(new D(this.state.a,this.state.b,this.state.a_am,this.state.b_am,this.state.mod,625));break;case"Subtract":t.push(new J(this.state.a,this.state.b,this.state.a_am,this.state.b_am,this.state.mod,625));break;case"Modulus":t.push(new S(this.state.a,this.state.b,this.state.a_am,this.state.b_am,this.state.mod,625));break;case"Multiply":t.push(new z(this.state.a,this.state.b,this.state.a_am,this.state.b_am,this.state.mod,625));break;case"SkipE":t.push(new I(this.state.a,this.state.b,this.state.a_am,this.state.b_am,this.state.mod,625));break;default:console.log("Command : "+this.state.cmd+" not recognized.")}this.setState({commandList:t,cmd:"",a:"",b:"",a_am:"",b_am:"",mod:""})}},{key:"displayInput",value:function(){return this.state.easyMode?n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"form-group col-3"},n.a.createElement(U.a,{id:"selectCommand"},"Command"),n.a.createElement(ee.a,{labelId:"selectCommand",id:"selectCommand",value:this.state.cmd,onChange:this.onChangeCmd,className:"form-control"},n.a.createElement(V.a,{value:"Blank"},"Blank"),n.a.createElement(V.a,{value:"Copy"},"Copy"),n.a.createElement(V.a,{value:"Add"},"Add"),n.a.createElement(V.a,{value:"Subtract"},"Subtract"),n.a.createElement(V.a,{value:"Jump"},"Jump"),n.a.createElement(V.a,{value:"JumpZ"},"JumpZ"))),n.a.createElement("div",{className:" col-1 "}),n.a.createElement("div",{className:"form-group col-2"},n.a.createElement(Q.a,{className:"form-control",variant:"outlined",label:"A",value:this.state.a,onChange:this.onChangea})),n.a.createElement("div",{className:" col-1 "}),n.a.createElement("div",{className:"form-group col-2"},n.a.createElement(Q.a,{className:"form-control",variant:"outlined",label:"B",value:this.state.b,onChange:this.onChangeb}))):n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"form-group col-2 padding-1"},n.a.createElement("input",{required:!0,className:"form-control input-group-sm",type:"text",placeholder:"Cmd",value:this.state.cmd,onChange:this.onChangeCmd})),n.a.createElement("div",{className:"form-group col-1 padding-0"},n.a.createElement("input",{type:"text",className:"form-control input-group-sm",value:this.state.mod,onChange:this.onChangemod})),n.a.createElement("div",{className:"form-group col-1 padding-0"}),n.a.createElement("div",{className:"form-group col-1 padding-0"},n.a.createElement("input",{type:"text",className:"form-control input-group-sm",value:this.state.a_am,onChange:this.onChangea_am})),n.a.createElement("div",{className:"form-group col-1 padding-0"},n.a.createElement("input",{type:"text",required:!0,className:"form-control input-group-sm",placeholder:"A",value:this.state.a,onChange:this.onChangea})),n.a.createElement("div",{className:"form-group col-1 padding-0"}),n.a.createElement("div",{className:"form-group col-1 padding-0"},n.a.createElement("input",{type:"text",className:"form-control input-group-sm",value:this.state.b_am,onChange:this.onChangeb_am})),n.a.createElement("div",{className:"form-group col-1 padding-0"},n.a.createElement("input",{type:"text",required:!0,className:"form-control input-group-sm",placeholder:"B",value:this.state.b,onChange:this.onChangeb})))}},{key:"render",value:function(){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("br",null),n.a.createElement("div",{className:"col-6"},n.a.createElement("h1",null,"Create a New Warrior")),n.a.createElement("div",{className:"col-6"},n.a.createElement("h3",{className:"float-right"},"Beginner Mode",n.a.createElement(K.a,{checked:this.state.easyMode,onChange:this.onChangeMode,value:"easyMode",color:"primary",inputProps:{"aria-label":"primary checkbox"}}),"Debug Mode",n.a.createElement(K.a,{checked:this.state.debugMode,onChange:this.onChangeDebugMode,value:"debugMode",color:"primary",inputProps:{"aria-label":"primary checkbox"}}))),n.a.createElement("br",null)),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement("form",{onSubmit:this.onSubmitName,className:"form-inline"},n.a.createElement(Q.a,{className:"form-control ml-2 mb-2 mr-sm-2",size:"small",variant:"outlined",label:"Name Your Warrior \ud83c\udf6d ",value:this.state.name,onChange:this.onChangeName}),n.a.createElement("button",{type:"submit",className:"btn btn-outline-success float-right mb-2 mr-sm-2"},"\u2714\ufe0f")),n.a.createElement("div",{className:"card shadow rounded"},n.a.createElement("div",{className:"card-body"},n.a.createElement("h4",{className:"card-title ml-2"},this.state.name,"'s Commands "),function(e,t,a){if(0!==e.length)return a?n.a.createElement("div",null,e.map((function(e,a){return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-body"},n.a.createElement("h4",null,e.values().name,"  (  ",e.values().a,"  ,  ",e.values().b,"  )",n.a.createElement("button",{type:"button",onClick:function(){t(a)},className:"btn btn-outline-danger float-right"},"\ud83d\uddd1\ufe0f"))))}))):n.a.createElement("div",null,e.map((function(e,a){return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-body"},n.a.createElement("h4",null,e.values().name,".",e.values().mod,"    (  ",e.values().a_am,"  ",e.values().a,"  ,  ",e.values().b_am,"  ",e.values().b,"  )",n.a.createElement("button",{type:"button",onClick:function(){t(a)},className:"btn btn-outline-danger float-right"},"\ud83d\uddd1\ufe0f"))))})))}(this.state.commandList,this.onDeleteCommand,this.state.easyMode))),n.a.createElement("br",null),n.a.createElement("div",{className:"card shadow rounded"},n.a.createElement("div",{className:"card-body"},n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("h4",{className:"card-title ml-2"},"Add a Command"),n.a.createElement("br",null),this.displayInput(),n.a.createElement("button",{type:"submit",className:"btn btn-outline-success float-right mt-2 "},"\u2714\ufe0f")))),n.a.createElement("br",null),n.a.createElement("button",{type:"button",onClick:this.onSave,className:"btn btn-outline-success float-right"},"Totally Finished? Save \u2714\ufe0f"),n.a.createElement("br",null),n.a.createElement("br",null),function(e,t){if(e||t)return n.a.createElement("div",{className:"card shadow rounded"},n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title ml-2 mt-2"},"Command Options"),n.a.createElement("div",{className:"card-text"},n.a.createElement("button",{className:"btn btn-outline-info ml-2 mb-2 mr-sm-2"},"Copy"),n.a.createElement("button",{className:"btn btn-outline-info ml-2 mb-2 mr-sm-2"},"Blank")),n.a.createElement("div",{className:"card-text"},n.a.createElement("button",{className:"btn btn-outline-info ml-2 mb-2 mr-sm-2"},"Add"),n.a.createElement("button",{className:"btn btn-outline-info ml-2 mb-2 mr-sm-2"},"Subtract"),n.a.createElement("button",{className:"btn btn-outline-info ml-2 mb-2 mr-sm-2"},"Multiply"),n.a.createElement("button",{className:"btn btn-outline-info ml-2 mb-2 mr-sm-2"},"Divide"),n.a.createElement("button",{className:"btn btn-outline-info ml-2 mb-2 mr-sm-2"},"Modulus")),n.a.createElement("div",{className:"card-text"},n.a.createElement("button",{className:"btn btn-outline-info ml-2 mb-2 mr-sm-2"},"Jump"),n.a.createElement("button",{className:"btn btn-outline-info ml-2 mb-2 mr-sm-2"},"JumpZ"),n.a.createElement("button",{className:"btn btn-outline-info ml-2 mb-2 mr-sm-2"},"JumpNZ"),n.a.createElement("button",{className:"btn btn-outline-info ml-2 mb-2 mr-sm-2"},"DecJumpNZ")),n.a.createElement("div",{className:"card-text"},n.a.createElement("button",{className:"btn btn-outline-info ml-2 mb-2 mr-sm-2"},"Split"),n.a.createElement("button",{className:"btn btn-outline-info ml-2 mb-2 mr-sm-2"},"SkipE"),n.a.createElement("button",{className:"btn btn-outline-info ml-2 mb-2 mr-sm-2"},"SkipNE"),n.a.createElement("button",{className:"btn btn-outline-info ml-2 mb-2 mr-sm-2"},"SkipL"))))}(this.state.debugMode,this.state.easyMode)),n.a.createElement("div",{className:"col-md-6"},n.a.createElement(G,{warriorList:this.state.warriors,p2code:this.state.commandList,easyModeBool:this.state.easyMode,debugModeBool:this.state.debugMode}))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-9"},n.a.createElement("br",null))))}}]),t}(s.Component);var ae=function(){return n.a.createElement(o.a,null,n.a.createElement("div",{className:"container"},n.a.createElement(d,null),n.a.createElement(c.a,{exact:!0,path:"/",component:p}),n.a.createElement(c.a,{exact:!0,path:"/play",component:g}),n.a.createElement(c.a,{path:"/play/new",component:te}),n.a.createElement(_,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(ae,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},48:function(e,t,a){},75:function(e,t,a){e.exports=a(108)},80:function(e,t,a){},81:function(e,t,a){}},[[75,1,2]]]);
//# sourceMappingURL=main.9b929588.chunk.js.map