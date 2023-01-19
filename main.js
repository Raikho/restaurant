(()=>{"use strict";const e={create:function(e,t,a){let n=document.createElement(e);for(let e of t)n.classList.add(e);return n.textContent=a,n},createItem:function(e,t,a,n){let d=this.create("div",["card","item"]),c=this.create("div",["itemName"],e);return d.appendChild(c),c=this.create("div",["desc"],t),d.appendChild(c),c=this.create("div",["price"],a),d.appendChild(c),c=this.create("div",["pic"]),c.style.backgroundImage="url('../src/assets/"+n+"')",d.appendChild(c),d}},t={home:{id:"home"},menu:{id:"menu"},contact:{id:"contact"}};for(let[e,a]of Object.entries(t))a.node=document.getElementById(a.id),a.node.addEventListener("click",(()=>{a.node.dataset.selected="true",Object.entries(t).forEach((([e,t])=>{a.id!=t.id&&(t.node.dataset.selected="false")})),n(),d(a)}));const a={};function n(){for(;a.node.hasChildNodes();)a.node.removeChild(a.node.firstChild)}function d(e){for(let t of e.content)a.node.appendChild(t)}a.node=document.getElementById("content"),t.home.content=function(){console.log("Importing home stuff...");const t=[];t.push(e.create("div",["card","title"],"Samosa Hut")),t.push(e.create("div",["card","smaller"],"Samosa Hut is home to the world's best Samosas. Hand crafted with the freshest ingredients, you won't find better Samosas anywhere else!"));let a=e.create("div",["card"],""),n=e.create("div",["heading"],"Hours");a.appendChild(n);let d=["Sunday: 12am - 4pm","Monday: 10am - 8pm","Teusday: 10am - 8pm","Wednesday: 10am - 8pm","Thursday: 10am - 8pm","Friday: 10am - 10pm","Saturday: 10am - 10pm"];for(let t of d)a.appendChild(e.create("li",[],t));return t.push(a),a=e.create("div",["card"]),n=e.create("div",["heading"],"Location"),a.appendChild(n),n=e.create("div",[],"9000 Central Ave, Manhattan, New York"),a.appendChild(n),t.push(a),t}(),t.menu.content=function(){console.log("Importing menu stuff...");const t=[];return t.push(e.create("div",["card","title"],"Menu")),t.push(e.create("div",["card","subtitle"],"Main Dishes")),t.push(e.createItem("Samosa","Filled with potatoes and herbs inside of a cripsy crust","$5","samosa.jpg")),t.push(e.create("div",["card","subtitle"],"Sides")),t.push(e.createItem("Naan","Savory flatbread","$2","naan.jpg")),t.push(e.create("div",["card","subtitle"],"Beverages")),t.push(e.createItem("Chai","A spiced black tea","$4","chai.jpg")),t}(),t.contact.content=function(){console.log("Importing contact  stuff...");const t=[];return t.push(e.create("div",["card","title"],"Contact Us")),t.push(e.create("div",["card"],"Manager")),t.push(e.create("div",["card"],"Chef")),t.push(e.create("div",["card"],"Waiter")),t}(),n(),d(t.menu),console.log(t),console.log(a),console.log(t.home.content)})();