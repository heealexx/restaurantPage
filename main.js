(()=>{"use strict";function e(){const e=document.createElement("div");return e.textContent="The Chipotle Connesiours Club is the worlds most renowned social club for Chipotle lovers!",e.textContent+="Joining the club (with a discounted price of $199.99), you get special access to club perks.",e.textContent+="These perks include member social events, as well as exclusive deals on Chipotle goods!",e}function t(t){const n=document.querySelector("#rightContent");var o;switch(n.removeChild(n.children[0]),t.target.textContent){case"Home":o=e();break;case"Contact":o=function(){const e=document.createElement("div");return e.textContent="Due to the CCC's exclusivity and secrecy, contacting HQ is a hard task to do.",e.textContent+="What you know about authentic Mexican food?",e.textContent+="Nothing, until you've tried the best!",e}();break;case"Menu":o=document.createElement("div")}n.appendChild(o)}const n=document.querySelector("#content"),o=function(){const e=document.createElement("div");return e.id="left",e}(),c=function(){const t=document.createElement("div");t.id="right",t.append(function(){const e=document.createElement("div");e.id="header",e.textContent="Chipotle Connesours Club";const t=document.createElement("button"),n=document.createElement("button"),o=document.createElement("button");return t.textContent="Home",n.textContent="Contact",o.textContent="Menu",e.append(t,n,o),e}());const n=document.createElement("div");return n.id="rightContent",n.append(e()),t.append(n),t}();n.appendChild(o),n.appendChild(c),document.querySelectorAll("button").forEach((e=>{e.addEventListener("click",t)}))})();