(()=>{"use strict";function t(){console.log("hello from home.js")}function e(){console.log("menu clicked"),loadMenu()}function n(){console.log("contact clicked"),loadContact()}console.log("hello world"),function(){const c=document.getElementById("content");c.appendChild(function(){const c=document.createElement("header");c.classList.add("header");const o=document.createElement("h1");return o.classList.add("cafe-name"),o.textContent="Carla's Cafe",c.appendChild(o),c.appendChild(function(){const c=document.createElement("nav");return[["home",t],["menu",e],["contact",n]].forEach(((t,e)=>{const n=function(t){let e=t[0],n=t[1];const c=document.createElement("button");return c.classList.add("nav-button"),c.textContent=e,c.addEventListener("click",(t=>{n(),function(t){document.querySelectorAll(".nav-button").forEach((e=>{t!==e&&e.classList.remove("active")})),t.classList.add("active")}(c)})),c}(t);c.appendChild(n)})),c}()),c}()),c.appendChild(function(){const t=document.createElement("main");return t.classList.add("main"),t.textContent="Main",t}())}()})();