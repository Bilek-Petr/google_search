(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();const a=document.querySelector(".search-results"),u=document.querySelector(".save-button"),i=()=>{a.innerHTML="<p>No results found or an error occurred.</p>",u.style.display="none"},d=()=>{a.innerHTML=""},p=()=>{u.style.display="block"},f=e=>{if(!e||!e.organic_results){i();return}c.length=0,c.push(...e.organic_results),d(),e.organic_results.forEach(h),p()},h=e=>{const t=document.createElement("div");t.classList.add("result"),t.innerHTML=`
        <h1>${e.title}</h1>
        <p>${e.snippet}</p>
    `,a.appendChild(t)},m=void 0,y=document.querySelector(".search__form"),g=document.querySelector(".save-button");let c=[];const v=e=>(e.preventDefault(),document.querySelector("#search").value.trim()),L=async e=>{const t=`http://api.serpstack.com/search?access_key=${m}&query=${e}`;try{const r=await fetch(t);if(!r.ok)throw new Error(`Fetching failed: ${r.status}`);return await r.json()}catch(r){console.error("Error fetching data:",r)}},b=()=>{const e=new Blob([JSON.stringify(c,null,2)],{type:"application/json"}),t=URL.createObjectURL(e),r=document.createElement("a");r.href=t,r.download="search_results.json",document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(t)};y.addEventListener("submit",async e=>{const t=v(e),r=await L(t);f(r)});g.addEventListener("click",b);
