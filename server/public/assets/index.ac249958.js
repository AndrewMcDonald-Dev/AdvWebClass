import{d as f,o as r,c as d,a as s,t as m,r as b,w as j,b as x,v as C,e as U,f as R,g as N,h as O,u as l,i as u,j as h,p as E,k as A,l as _,m as V,F as I,n as B,q as $,R as v,s as M,x as W}from"./vendor.3d1c9552.js";const q=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}};q();const H="modulepreload",P={},F="/",D=function(e,n){return!n||n.length===0?e():Promise.all(n.map(o=>{if(o=`${F}${o}`,o in P)return;P[o]=!0;const t=o.endsWith(".css"),i=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${i}`))return;const c=document.createElement("link");if(c.rel=t?"stylesheet":H,t||(c.as="script",c.crossOrigin=""),c.href=o,document.head.appendChild(c),t)return new Promise((p,T)=>{c.addEventListener("load",p),c.addEventListener("error",T)})})).then(()=>e())},J={class:"section"},z={class:"title"},g=f({props:{title:{type:String,default:"Hello World"}},setup(a){const e=a;return(n,o)=>(r(),d("div",J,[s("h1",z,m(e.title),1)]))}});var k=(a,e)=>{const n=a.__vccOpts||a;for(const[o,t]of e)n[o]=t;return n};const G={},K={class:"section"},Y=s("h1",{class:"title"},"Home Page",-1),Q=[Y];function X(a,e){return r(),d("div",K,Q)}var Z=k(G,[["render",X]]);const ss={class:"section"},ts={class:"columns"},es={class:"column is-half is-offset-one-quarter"},os={class:"card"},ns=["onSubmit"],as=s("h1",{class:"title"},"Login",-1),is={class:"field"},cs={class:"control has-icons-left has-icons-right"},ls=s("span",{class:"icon is-small is-left"},[s("i",{class:"fas fa-envelope"})],-1),rs=s("span",{class:"icon is-small is-right"},[s("i",{class:"fas fa-check"})],-1),ds={class:"field"},us={class:"control has-icons-left"},_s=s("span",{class:"icon is-small is-left"},[s("i",{class:"fas fa-lock"})],-1),ps=s("div",{class:"field"},[s("p",{class:"control"},[s("button",{class:"button is-success"}," Login ")])],-1),hs=f({setup(a){const{Login:e}=L(),n=b(""),o=b("");function t(){e(n.value,o.value)}return(i,c)=>(r(),d("div",ss,[s("div",ts,[s("div",es,[s("div",os,[s("form",{class:"card-content",onSubmit:j(t,["prevent"])},[as,s("div",is,[s("p",cs,[x(s("input",{class:"input",type:"email",placeholder:"Email","onUpdate:modelValue":c[0]||(c[0]=p=>n.value=p)},null,512),[[C,n.value]]),ls,rs])]),s("div",ds,[s("p",us,[x(s("input",{class:"input",type:"password",placeholder:"Password","onUpdate:modelValue":c[1]||(c[1]=p=>o.value=p)},null,512),[[C,o.value]]),_s])]),ps],40,ns)])])])]))}}),ms=[{path:"/",component:Z},{path:"/about",component:g,props:{title:"About Page!"}},{path:"/contact",component:g,props:{title:"Contact Page!"}},{path:"/login",component:hs},{path:"/signup",component:g,props:{title:"Signup Page!"}},{path:"/wall",component:()=>D(()=>import("./Wall.181a5d11.js"),["assets/Wall.181a5d11.js","assets/Wall.a0b51b7e.css","assets/vendor.3d1c9552.js"])},{path:"/hidden",component:g,props:{title:"You reached the hidden Page!"}}],y=U({history:R(),routes:ms,linkActiveClass:"is-active"});y.beforeEach((a,e)=>{const n=L();n.destinationUrl==null&&a.path!="/login"&&(n.destinationUrl=a.path),console.log({to:a});const o=["/messages","/wall","/feed","/hidden"];if(console.log({protectedUrls:o}),o.includes(a.path)&&(console.log("requires login"),!n.user))return"/login"});const w=N("messages",{state:()=>({notifications:[]}),actions:{close(a){this.notifications.splice(a,1)}}}),fs="http://localhost:3004/api/",vs=(a,e,n,o)=>{let t={method:n||"GET",headers:o||{"Content-Type":"application/json",Accept:"application/json"}};return e&&(t={method:n||"POST",headers:o||{"Content-Type":"application/json",Accept:"application/json"},cache:"no-cache",body:JSON.stringify(e)}),fetch(fs+a,t).then(i=>i.json())},L=N("session",{state:()=>({user:null,destinationUrl:null}),actions:{async Login(a,e){var o;const n=w();try{const t=await this.api("users/login",{email:a,password:e});t&&(n.notifications.push({type:"success",message:`Welcome back ${t.firstName}!`}),this.user=t,y.push((o=this.destinationUrl)!=null?o:"/wall"))}catch(t){n.notifications.push({type:"danger",message:t.message}),console.table(n.notifications)}},Logout(){this.user=null,y.push("/login")},async api(a,e,n,o){var i;const t=w();try{const c=await vs(a,e,n,o);if((i=c.errors)==null?void 0:i.length)throw{message:c.errors.join("")};return await c.data}catch(c){t.notifications.push({type:"danger",message:c.message})}}}});const S=a=>(E("data-v-68b95cd2"),a=a(),A(),a),gs={key:0,class:"buttons"},bs=S(()=>s("strong",null,"Sign up",-1)),$s=_(" Log in "),ys={key:1,class:"buttons"},ws={class:"avatar"},ks=["src"],Ls=_(),Ss=S(()=>s("br",null,null,-1)),xs=S(()=>s("strong",null,"Log out",-1)),Cs=[xs],Ps=f({setup(a){const{user:e,Logout:n}=L();return(o,t)=>{const i=O("router-link");return l(e)?(r(),d("div",ys,[s("div",ws,[s("img",{src:l(e).pic},null,8,ks),s("div",null,[s("strong",null,m(l(e).firstName)+" "+m(l(e).lastName),1),Ls,Ss,s("i",null,m(l(e).email),1)])]),s("a",{class:"button is-primary",onClick:t[0]||(t[0]=c=>l(n)())},Cs)])):(r(),d("div",gs,[u(i,{class:"button is-primary",to:"/signup"},{default:h(()=>[bs]),_:1}),u(i,{class:"button is-light",to:"/login"},{default:h(()=>[$s]),_:1})]))}}});var Ns=k(Ps,[["__scopeId","data-v-68b95cd2"]]);const Os=a=>(E("data-v-10e4a0c4"),a=a(),A(),a),Es=Os(()=>s("span",{class:"icon"},[s("i",{class:"fas fa-bell"})],-1)),As={key:0,class:"tag is-danger"},Is={class:"navbar-dropdown"},Ts=["onClick"],js=f({setup(a){const e=w(),n=b(!1);return(o,t)=>(r(),d("div",{class:$(["navbar-item has-dropdown",{"is-active":n.value}])},[s("a",{class:"navbar-link",onClick:t[0]||(t[0]=i=>n.value=!n.value)},[Es,l(e).notifications.length?(r(),d("span",As,m(l(e).notifications.length),1)):V("",!0)]),s("div",Is,[(r(!0),d(I,null,B(l(e).notifications,(i,c)=>(r(),d("div",{class:$(`notification is-light is-${i.type}`)},[s("button",{class:"delete",onClick:p=>l(e).close(c)},null,8,Ts),_(" "+m(i.message),1)],2))),256))])],2))}});var Us=k(js,[["__scopeId","data-v-10e4a0c4"]]);const Rs={class:"navbar is-info",role:"navigation","aria-label":"main navigation"},Vs={class:"container"},Bs={class:"navbar-brand"},Ms=s("a",{class:"navbar-item",href:"https://bulma.io"},[s("img",{src:"https://bulma.io/images/bulma-logo.png",width:"112",height:"28"})],-1),Ws=s("span",{"aria-hidden":"true"},null,-1),qs=s("span",{"aria-hidden":"true"},null,-1),Hs=s("span",{"aria-hidden":"true"},null,-1),Fs=[Ws,qs,Hs],Ds={class:"navbar-start"},Js=_(" Home "),zs=_(" Wall "),Gs={class:"navbar-item has-dropdown is-hoverable"},Ks=s("a",{class:"navbar-link"}," More ",-1),Ys={class:"navbar-dropdown"},Qs=_(" About "),Xs=s("a",{class:"navbar-item"}," Jobs ",-1),Zs=_(" Contact "),st=s("hr",{class:"navbar-divider"},null,-1),tt=s("a",{class:"navbar-item"}," Report an issue ",-1),et={class:"navbar-end"},ot={class:"navbar-item"},nt=s("div",{class:"navbar-item"},[s("a",{class:"bd-tw-button button","data-social-network":"Twitter","data-social-action":"tweet","data-social-target":"https://bulma.io",target:"_blank",href:"https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&hashtags=bulmaio&url=https://bulma.io&via=jgthms"},[s("span",{class:"icon"},[s("i",{class:"fab fa-twitter"})]),s("span",null," Tweet ")])],-1),at=f({setup(a){const e=b(!1);return(n,o)=>(r(),d("nav",Rs,[s("div",Vs,[s("div",Bs,[Ms,s("a",{role:"button",class:$(["navbar-burger",{"is-active":e.value}]),"aria-label":"menu","aria-expanded":"false",onClick:o[0]||(o[0]=t=>e.value=!e.value)},Fs,2)]),s("div",{class:$(["navbar-menu",{"is-active":e.value}])},[s("div",Ds,[u(l(v),{class:"navbar-item",to:"/"},{default:h(()=>[Js]),_:1}),u(l(v),{class:"navbar-item",to:"/Wall"},{default:h(()=>[zs]),_:1}),s("div",Gs,[Ks,s("div",Ys,[u(l(v),{class:"navbar-item",to:"/about"},{default:h(()=>[Qs]),_:1}),Xs,u(l(v),{class:"navbar-item",to:"/contact"},{default:h(()=>[Zs]),_:1}),st,tt])])]),s("div",et,[s("div",ot,[u(Ns)]),u(Us),nt])],2)])]))}}),it={class:"container"},ct=f({setup(a){return(e,n)=>{const o=O("router-view");return r(),d(I,null,[u(at),s("div",it,[u(o)])],64)}}});M(ct).use(y).use(W()).mount("#app");export{vs as a};