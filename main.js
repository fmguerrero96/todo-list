(()=>{let e=[];const t=document.querySelector(".addProject"),n=document.querySelector(".projectModal"),c=document.querySelector("#submitProject"),o=document.querySelector(".projectsContainer"),r=document.querySelector("#newProject"),a=document.querySelector(".projectContent"),l=(document.querySelector(".taskBtn"),document.querySelector(".taskModal")),d=document.querySelector("#submitTask"),u=document.querySelector("#task"),s=document.querySelector(".cancelTask"),i=document.querySelector(".cancelProject"),m=document.querySelector(".taskContainer"),p=(e,t)=>({name:e,projectArray:t}),v=p("Inbox",[]);e.push(v);const k=document.createElement("div");k.className="projectDiv",k.textContent=v.name,o.appendChild(k);let h=document.createElement("div"),y=document.createElement("button");function f(){count=0;for(let t=0;t<e.length;t++){let n=document.createElement("div");n.className="projectDiv",n.innerHTML=`\n            <div class="customProject">${e[t].name}</div>\n            <button id='${count}' class="deleteProBtn"'>Delete</button> \n        `,o.appendChild(n),count+=1}}function j(){for(let t=0;t<e.length;t++){let n=document.querySelector(".projectTitle").textContent;if(e[t].name===n)return e[t].projectArray}}function C(e){count=0;for(let t=0;t<e.length;t++){let n=document.createElement("div");n.className="newTask",n.id=count,n.innerHTML=`\n        <div class='taskName'>${e[t].name}</div>\n        <button id='${count}' class='done'>Done</button>\n    `,m.appendChild(n),count+=1}}function L(e,t){t.splice(e,1),o.innerHTML="",f()}h.className="projectTitle",h.textContent=v.name,y.className="taskBtn",y.textContent="New Task",a.appendChild(h),a.appendChild(y),t.addEventListener("click",(()=>{n.showModal()})),c.addEventListener("click",(function(t){t.preventDefault(),o.innerHTML="",function(){let t=document.querySelector("#newProject").value;const n=p(t,[]);e.push(n),f()}(),n.close(),r.value=""})),i.addEventListener("click",(e=>{e.preventDefault(),n.close()})),document.addEventListener("click",(e=>{e.target.matches(".customProject")&&(a.innerHTML="",m.innerHTML="",function(e){let t=document.createElement("div"),n=document.createElement("button");t.className="projectTitle",t.textContent=e,n.className="taskBtn",n.textContent="New Task",a.appendChild(t),a.appendChild(n)}(e.target.textContent),C(j()))})),document.addEventListener("click",(e=>{e.target.matches(".taskBtn")&&l.showModal()})),d.addEventListener("click",(function(e){e.preventDefault(),m.innerHTML="",function(e){const t={name:document.querySelector("#task").value};e.push(t),C(j())}(j()),l.close(),u.value=""})),s.addEventListener("click",(e=>{e.preventDefault(),l.close()})),document.addEventListener("click",(t=>{t.target.matches(".deleteProBtn")&&L(t.target.id,e)})),document.addEventListener("click",(e=>{e.target.matches(".done")&&(L(e.target.id,j()),m.innerHTML="",C(j()))}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IHByb2plY3RzQXJyYXkgPSBbXTtcbmNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkUHJvamVjdCcpXG5jb25zdCBwcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdE1vZGFsJylcbmNvbnN0IHN1Ym1pdFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0UHJvamVjdCcpXG5jb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0c0NvbnRhaW5lcicpXG5jb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ld1Byb2plY3QnKVxuY29uc3QgcHJvamVjdENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdENvbnRlbnQnKVxuY29uc3QgdGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrQnRuJylcbmNvbnN0IHRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrTW9kYWwnKVxuY29uc3Qgc3VibWl0VGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXRUYXNrJylcbmNvbnN0IHRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzaycpXG5jb25zdCBjbG9zZVRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FuY2VsVGFzaycpXG5jb25zdCBjbG9zZVByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FuY2VsUHJvamVjdCcpXG5jb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tDb250YWluZXInKVxuXG5jb25zdCBwcm9qZWN0RmFjdG9yeSA9IChuYW1lLCBwcm9qZWN0QXJyYXkpID0+IHtcbiAgICByZXR1cm4ge25hbWUsIHByb2plY3RBcnJheX1cbn07XG5cbmNvbnN0IHRhc2tGYWN0b3J5ID0gKG5hbWUpID0+IHtcbiAgICByZXR1cm4ge25hbWV9XG59O1xuXG5jb25zdCBpbmJveCA9IHByb2plY3RGYWN0b3J5KCdJbmJveCcsIFtdKTtcbnByb2plY3RzQXJyYXkucHVzaChpbmJveClcbmNvbnN0IGluYm94RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmluYm94RGl2LmNsYXNzTmFtZSA9ICgncHJvamVjdERpdicpXG5pbmJveERpdi50ZXh0Q29udGVudCA9IGluYm94Lm5hbWVcbnByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKGluYm94RGl2KVxubGV0IGluYm94VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxubGV0IGluYm94QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbmluYm94VGl0bGUuY2xhc3NOYW1lID0gJ3Byb2plY3RUaXRsZSdcbmluYm94VGl0bGUudGV4dENvbnRlbnQgPSBpbmJveC5uYW1lXG5pbmJveEJ0bi5jbGFzc05hbWUgPSAndGFza0J0bidcbmluYm94QnRuLnRleHRDb250ZW50ID0gJ05ldyBUYXNrJ1xucHJvamVjdENvbnRlbnQuYXBwZW5kQ2hpbGQoaW5ib3hUaXRsZSlcbnByb2plY3RDb250ZW50LmFwcGVuZENoaWxkKGluYm94QnRuKVxuXG5cbmZ1bmN0aW9uIHB1c2hQcm9qZWN0cygpIHtcbiAgICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXdQcm9qZWN0JykudmFsdWVcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gcHJvamVjdEZhY3RvcnkocHJvamVjdCwgW10pXG4gICAgcHJvamVjdHNBcnJheS5wdXNoKG5ld1Byb2plY3QpXG4gICAgZGlzcGxheVByb2plY3RzKClcbn1cblxuZnVuY3Rpb24gZGlzcGxheVByb2plY3RzKCkge1xuICAgIGNvdW50ID0gMFxuICAgIGZvciAobGV0IGkgPTA7IGkgPCBwcm9qZWN0c0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgcHJvamVjdERpdi5jbGFzc05hbWUgPSAncHJvamVjdERpdidcbiAgICAgICAgcHJvamVjdERpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY3VzdG9tUHJvamVjdFwiPiR7cHJvamVjdHNBcnJheVtpXS5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBpZD0nJHtjb3VudH0nIGNsYXNzPVwiZGVsZXRlUHJvQnRuXCInPkRlbGV0ZTwvYnV0dG9uPiBcbiAgICAgICAgYFxuICAgICAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KVxuICAgICAgICBjb3VudCArPSAxXG4gICAgfVxufVxuXG5cbmFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgICBwcm9qZWN0TW9kYWwuc2hvd01vZGFsKClcbn0pXG5cbnN1Ym1pdFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuICAgIHB1c2hQcm9qZWN0cygpXG4gICAgcHJvamVjdE1vZGFsLmNsb3NlKClcbiAgICBwcm9qZWN0LnZhbHVlID0gJydcbn0pXG5cbmNsb3NlUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBwcm9qZWN0TW9kYWwuY2xvc2UoKVxufSlcblxuLyogLS0tLS0tLS0tLS0tLWNsaWNrIGV2ZW50cyBvbiBwcm9qZWN0IHRhYnMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RDb250ZW50KHByb2plY3ROYW1lKXtcbiAgICBsZXQgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBsZXQgdGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgcHJvamVjdFRpdGxlLmNsYXNzTmFtZSA9ICdwcm9qZWN0VGl0bGUnXG4gICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWVcbiAgICB0YXNrQnRuLmNsYXNzTmFtZSA9ICd0YXNrQnRuJ1xuICAgIHRhc2tCdG4udGV4dENvbnRlbnQgPSAnTmV3IFRhc2snXG4gICAgcHJvamVjdENvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKVxuICAgIHByb2plY3RDb250ZW50LmFwcGVuZENoaWxkKHRhc2tCdG4pXG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZT0+e1xuICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKCcuY3VzdG9tUHJvamVjdCcpKXtcbiAgICAgICAgcHJvamVjdENvbnRlbnQuaW5uZXJIVE1MID0gJydcbiAgICAgICAgdGFza0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuICAgICAgICBjcmVhdGVQcm9qZWN0Q29udGVudChlLnRhcmdldC50ZXh0Q29udGVudClcbiAgICAgICAgZGlzcGxheVRhc2tzKGZpbmRBcnJheSgpKVxuICAgIH1cbn0pXG5cbi8qIC0tLS0tLS0tLS0tLS1jbGljayBldmVudHMgb24gdGFzayBidXR0b24tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoJy50YXNrQnRuJykpe1xuICAgICAgICB0YXNrTW9kYWwuc2hvd01vZGFsKClcbiAgICB9XG59KVxuXG5mdW5jdGlvbiBmaW5kQXJyYXkoKXtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzQXJyYXkubGVuZ3RoOyBpKyspe1xuICAgICAgICBsZXQgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RUaXRsZScpLnRleHRDb250ZW50XG4gICAgICAgIGlmKHByb2plY3RzQXJyYXlbaV0ubmFtZSA9PT0gcHJvamVjdFRpdGxlKVxuICAgICAgICByZXR1cm4gcHJvamVjdHNBcnJheVtpXS5wcm9qZWN0QXJyYXlcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHB1c2hUYXNrcyhhcnJheSl7XG4gICAgbGV0IHRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzaycpLnZhbHVlXG4gICAgY29uc3QgbmV3VGFzayA9IHRhc2tGYWN0b3J5KHRhc2spXG4gICAgYXJyYXkucHVzaChuZXdUYXNrKVxuICAgIGRpc3BsYXlUYXNrcyhmaW5kQXJyYXkoKSlcbn1cblxuc3VibWl0VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KXtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGFza0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuICAgIHB1c2hUYXNrcyhmaW5kQXJyYXkoKSlcbiAgICB0YXNrTW9kYWwuY2xvc2UoKVxuICAgIHRhc2sudmFsdWUgPSAnJ1xufSlcblxuY2xvc2VUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIHRhc2tNb2RhbC5jbG9zZSgpXG59KVxuXG4vKiAtLS0tLS0tLS0tLS0tZGlzcGxheWluZyB0YXNrcy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuZnVuY3Rpb24gZGlzcGxheVRhc2tzKGFycmF5KXtcbiAgIGNvdW50ID0gMFxuICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgbGV0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRhc2tEaXYuY2xhc3NOYW1lID0gJ25ld1Rhc2snXG4gICAgdGFza0Rpdi5pZCA9IGNvdW50XG4gICAgdGFza0Rpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9J3Rhc2tOYW1lJz4ke2FycmF5W2ldLm5hbWV9PC9kaXY+XG4gICAgICAgIDxidXR0b24gaWQ9JyR7Y291bnR9JyBjbGFzcz0nZG9uZSc+RG9uZTwvYnV0dG9uPlxuICAgIGBcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEaXYpXG4gICAgY291bnQgKz0gMVxuICAgfVxufVxuLyogLS0tLS0tLS0tLS0tLWRlbGV0aW5nIHByb2plY3RzIGFuZCB0YXNrcy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICBpZiAoZS50YXJnZXQubWF0Y2hlcygnLmRlbGV0ZVByb0J0bicpKXtcbiAgICAgICAgIGRlbGV0ZUl0ZW1zKGUudGFyZ2V0LmlkLCBwcm9qZWN0c0FycmF5KVxuICAgIH1cbn0pXG5cbmZ1bmN0aW9uIGRlbGV0ZUl0ZW1zKGluZGV4LCBhcnJheSl7XG4gICAgYXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuICAgIGRpc3BsYXlQcm9qZWN0cygpO1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKCcuZG9uZScpKXtcbiAgICAgICAgZGVsZXRlSXRlbXMoZS50YXJnZXQuaWQsIGZpbmRBcnJheSgpKVxuICAgICAgICB0YXNrQ29udGFpbmVyLmlubmVySFRNTCA9ICcnXG4gICAgICAgIGRpc3BsYXlUYXNrcyhmaW5kQXJyYXkoKSlcbiAgICB9XG59KSJdLCJuYW1lcyI6WyJwcm9qZWN0c0FycmF5IiwiYWRkUHJvamVjdEJ0biIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInByb2plY3RNb2RhbCIsInN1Ym1pdFByb2plY3RCdG4iLCJwcm9qZWN0c0NvbnRhaW5lciIsInByb2plY3QiLCJwcm9qZWN0Q29udGVudCIsInRhc2tNb2RhbCIsInN1Ym1pdFRhc2tCdG4iLCJ0YXNrIiwiY2xvc2VUYXNrQnRuIiwiY2xvc2VQcm9qZWN0QnRuIiwidGFza0NvbnRhaW5lciIsInByb2plY3RGYWN0b3J5IiwibmFtZSIsInByb2plY3RBcnJheSIsImluYm94IiwicHVzaCIsImluYm94RGl2IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJpbmJveFRpdGxlIiwiaW5ib3hCdG4iLCJkaXNwbGF5UHJvamVjdHMiLCJjb3VudCIsImkiLCJsZW5ndGgiLCJwcm9qZWN0RGl2IiwiaW5uZXJIVE1MIiwiZmluZEFycmF5IiwicHJvamVjdFRpdGxlIiwiZGlzcGxheVRhc2tzIiwiYXJyYXkiLCJ0YXNrRGl2IiwiaWQiLCJkZWxldGVJdGVtcyIsImluZGV4Iiwic3BsaWNlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNob3dNb2RhbCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ2YWx1ZSIsIm5ld1Byb2plY3QiLCJwdXNoUHJvamVjdHMiLCJjbG9zZSIsImUiLCJ0YXJnZXQiLCJtYXRjaGVzIiwicHJvamVjdE5hbWUiLCJ0YXNrQnRuIiwiY3JlYXRlUHJvamVjdENvbnRlbnQiLCJuZXdUYXNrIiwicHVzaFRhc2tzIl0sInNvdXJjZVJvb3QiOiIifQ==