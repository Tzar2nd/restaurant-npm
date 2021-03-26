(()=>{"use strict";function e(){const e=document.getElementsByClassName("main")[0];e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("home");const n=document.createElement("img");return n.src="images/home_icon.jpeg",n.alt="Carla's Cafe",n.classList.add("home-image"),e.appendChild(t("Welcome to Carla's Cafe!")),e.appendChild(t("A warm and welcoming cafe on the Camino de Santiago:)")),e.appendChild(n),e.appendChild(t("Stop by on your way of St James for a cup of coffee!")),e}())}function t(e){const t=document.createElement("p");return t.textContent=e,t}function n(e,t,n){const i=document.createElement("div");i.classList.add("menu-item");const c=document.createElement("div"),o=document.createElement("h2");o.textContent=e;const d=document.createElement("p");d.textContent=t,c.appendChild(o),c.appendChild(d),i.appendChild(c);const a=document.createElement("div");a.classList.add("food-image-container");const p=document.createElement("img");return p.src=`images/${n}`,p.alt=`${e}`,a.appendChild(p),i.appendChild(a),i}function i(){e()}function c(){!function(){const e=document.getElementsByClassName("main")[0];e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("menu");const t=document.createElement("p");return t.textContent="Daily Menu",e.appendChild(t),e.appendChild(n("Recipe1","Description description description","menu1.jpeg")),e.appendChild(n("Recipe1","Description description description","menu2.jpeg")),e.appendChild(n("Recipe1","Description description description","menu3.jpeg")),e.appendChild(n("Recipe1","Description description description","menu4.jpeg")),e.appendChild(n("Recipe1","Description description description","menu5.jpeg")),e.appendChild(n("Recipe1","Description description description","menu6.jpeg")),e.appendChild(n("Recipe1","Description description description","menu7.jpeg")),e.appendChild(n("Recipe1","Description description description","menu8.jpeg")),e.appendChild(n("Recipe1","Description description description","menu9.jpeg")),e.appendChild(n("Recipe1","Description description description","menu10.jpeg")),e}())}()}function o(){!function(){const e=document.getElementsByClassName("main")[0];e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("contact"),e.appendChild(t("You can find us in Santiago!")),e.appendChild(t("tel: +123456789"));const n=document.createElement("div");return n.setAttribute("id","map"),e.appendChild(n),e}()),function(){const e={lat:42.878212,lng:-8.544844},t=document.getElementById("map"),n=new google.maps.Map(t,{zoom:9,center:e});new google.maps.Marker({position:e,map:n})}()}()}!function(){const t=document.getElementById("content");t.appendChild(function(){const e=document.createElement("header");e.classList.add("header");const t=document.createElement("h1");return t.classList.add("cafe-name"),t.textContent="Carla's Cafe",e.appendChild(t),e.appendChild(function(){const e=document.createElement("nav");return[["home",i],["menu",c],["contact",o]].forEach(((t,n)=>{const i=function(e){let t=e[0],n=e[1];const i=document.createElement("button");return i.classList.add("nav-button"),i.textContent=t,i.addEventListener("click",(e=>{n(),function(e){document.querySelectorAll(".nav-button").forEach((t=>{e!==t&&t.classList.remove("active")})),e.classList.add("active")}(i)})),i}(t);e.appendChild(i)})),e}()),e}()),t.appendChild(function(){const e=document.createElement("main");return e.classList.add("main"),e}()),t.appendChild(function(){const e=document.createElement("div");e.classList.add("footer"),e.textContent="Created by Ben Smith as part of the Odin Project: ";const t=document.createElement("a");return t.href="https://github.com/Tzar2nd/restaurant-npm",t.textContent="Github project",e.appendChild(t),e}()),e(),console.log("Load home")}()})();