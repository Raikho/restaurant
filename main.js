(()=>{"use strict";const e={home:{id:"home"},menu:{id:"menu"},contact:{id:"contact"}};for(let[t,o]of Object.entries(e))o.node=document.getElementById(o.id),o.node.addEventListener("click",(()=>{o.node.dataset.selected="true",Object.entries(e).forEach((([e,t])=>{o.id!=t.id&&(t.node.dataset.selected="false")})),n(),d(o)}));const t={};function n(){for(;t.node.hasChildNodes();)t.node.removeChild(t.node.firstChild)}function d(e){for(let n of e.content)t.node.appendChild(n)}t.node=document.getElementById("content"),e.home.content=function(){console.log("Importing home stuff...");const e=[];let t=document.createElement("div");t.classList.add("card","title"),t.textContent="Samosa Hut",e.push(t),t=document.createElement("div"),t.classList.add("card"),t.textContent="Samosa Hut has the best Samosas!",e.push(t),t=document.createElement("div"),t.classList.add("card");let n=document.createElement("div");n.classList.add("heading"),n.textContent="Hours",t.appendChild(n);let d=["Sunday: 12am - 4pm","Monday: 10am - 8pm","Teusday: 10am - 8pm","Wednesday: 10am - 8pm","Thursday: 10am - 8pm","Friday: 10am - 10pm","Saturday: 10am - 10pm"];for(let e of d)t.appendChild(document.createElement("li")),t.lastChild.textContent=e;return e.push(t),t=document.createElement("div"),t.classList.add("card"),n=document.createElement("div"),n.classList.add("heading"),n.textContent="Location",t.appendChild(n),n=document.createElement("div"),n.textContent="9000 Central Ave, Manhattan, New York",t.appendChild(n),e.push(t),e}(),e.menu.content=function(){console.log("Importing menu stuff...");const e=[];let t=document.createElement("div");return t.classList.add("card","title"),t.textContent="Menu",e.push(t),e}(),e.contact.content=function(){console.log("Importing contact  stuff...");const e=[];let t=document.createElement("div");return t.classList.add("card","title"),t.textContent="Contact Us",e.push(t),t=document.createElement("div"),t.classList.add("card"),t.textContent="Manager",e.push(t),t=document.createElement("div"),t.classList.add("card"),t.textContent="Chef",e.push(t),t=document.createElement("div"),t.classList.add("card"),t.textContent="Waiter",e.push(t),e}(),n(),d(e.home),console.log(e),console.log(t),console.log(e.home.content)})();