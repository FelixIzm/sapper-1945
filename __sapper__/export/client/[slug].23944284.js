import{S as t,i as s,s as a,a as e,e as n,t as i,g as o,c as r,b as l,d as c,f as h,h as u,k as p,l as d,y as f,n as m}from"./index.0127214d.js";function x(t){let s,a,x,g,j,k,v=t[0].title+"",y=t[0].html+"";return document.title=s=t[0].title,{c(){a=e(),x=n("h1"),g=i(v),j=e(),k=n("div"),this.h()},l(t){a=o(t),x=r(t,"H1",{});var s=l(x);g=c(s,v),s.forEach(h),j=o(t),k=r(t,"DIV",{class:!0}),l(k).forEach(h),this.h()},h(){u(k,"class","content svelte-dkhkxh")},m(t,s){p(t,a,s),p(t,x,s),d(x,g),p(t,j,s),p(t,k,s),k.innerHTML=y},p(t,[a]){1&a&&s!==(s=t[0].title)&&(document.title=s),1&a&&v!==(v=t[0].title+"")&&f(g,v),1&a&&y!==(y=t[0].html+"")&&(k.innerHTML=y)},i:m,o:m,d(t){t&&h(a),t&&h(x),t&&h(j),t&&h(k)}}}async function g({params:t,query:s}){const a=await this.fetch(`blog/${t.slug}.json`),e=await a.json();if(200===a.status)return{post:e};this.error(a.status,e.message)}function j(t,s,a){let{post:e}=s;return t.$set=(t=>{"post"in t&&a(0,e=t.post)}),[e]}export default class extends t{constructor(t){super(),s(this,t,j,x,a,{post:0})}}export{g as preload};
