(()=>{"use strict";const e=function(){let e=document.querySelector("#main-content");e.innerHTML="";let t=document.createElement("div");t.id="home",e.appendChild(t);let n=document.createElement("div");n.classList.add("homeText"),n.textContent="Experience France's Greatest Coffee";let c=document.createElement("div");c.classList.add("homeText"),c.textContent="Serving Delicious Coffee Since 1995";let d=document.createElement("img");d.src="/src/Assets/coffee-profile2.jpg";let a=document.createElement("div");a.classList.add("homeText"),a.textContent="Order Online Or Visit Us Today",t.append(n,c,d,a)},t=function(){document.querySelector("#main-content").innerHTML=""},n=function(){document.querySelector("#main-content").innerHTML=""};(function(){let c=document.querySelector("#content"),d=document.createElement("header"),a=document.createElement("div");a.id="title";let o=document.createElement("div");o.id="nav";let i=document.createElement("button");i.textContent="Home",i.classList.add("nav-list"),i.addEventListener("click",e);let l=document.createElement("button");l.textContent="Menu",l.classList.add("nav-list"),l.addEventListener("click",t);let r=document.createElement("button");r.textContent="Contact",r.classList.add("nav-list"),r.addEventListener("click",n),o.append(i,l,r),a.textContent="Café l’Espérance",c.appendChild(d),d.append(a,o);let m=document.createElement("div");m.id="main-content",d.insertAdjacentElement("afterend",m);let s=document.createElement("footer"),u=document.createElement("p"),p=document.createElement("a"),E=document.createElement("img");u.textContent="Created by:",E.src="/src/Assets/GitHub-Mark-Light-32px.png",p.href="https://github.com/dtariq1995",p.textContent="Daanyaal Tariq",c.appendChild(s),s.append(u,E,p)})(),e()})();