(()=>{let e=[];const t=document.querySelector(".addProject"),n=document.querySelector(".projectModal"),c=document.querySelector("#submitProject"),o=document.querySelector(".projectsContainer"),r=document.querySelector("#newProject"),a=document.querySelector(".projectContent"),l=(document.querySelector(".taskBtn"),document.querySelector(".taskModal")),d=document.querySelector("#submitTask"),u=document.querySelector("#task"),s=document.querySelector(".cancelTask"),i=document.querySelector(".cancelProject"),m=document.querySelector(".taskContainer"),p=(document.querySelector(".deleteProBtn"),document.querySelector(".done"),(e,t)=>({name:e,projectArray:t})),v=p("inbox",[]);e.push(v);const k=document.createElement("div");k.className="customProject",k.textContent=v.name,o.appendChild(k);let y=document.createElement("div"),h=document.createElement("button");function q(){count=0;for(let t=0;t<e.length;t++){let n=document.createElement("div");n.className="projectDiv",n.innerHTML=`\n            <div class="customProject">${e[t].name}</div>\n            <button id='${count}' class="deleteProBtn"'>Delete</button> \n        `,o.appendChild(n),count+=1}}function S(){for(let t=0;t<e.length;t++){let n=document.querySelector(".projectTitle").textContent;if(e[t].name===n)return e[t].projectArray}}function f(e){count=0;for(let t=0;t<e.length;t++){let n=document.createElement("div");n.className="newTask",n.id=count,n.innerHTML=`\n        <div class='taskName'>${e[t].name}</div>\n        <button id='${count}' class='done'>Done</button>\n    `,m.appendChild(n),count+=1}}function j(e,t){t.splice(e,1),o.innerHTML="",q()}y.className="projectTitle",y.textContent=v.name,h.className="taskBtn",h.textContent="New Task",a.appendChild(y),a.appendChild(h),t.addEventListener("click",(()=>{n.showModal()})),c.addEventListener("click",(function(t){t.preventDefault(),o.innerHTML="",function(){let t=document.querySelector("#newProject").value;const n=p(t,[]);e.push(n),q()}(),n.close(),r.value=""})),i.addEventListener("click",(e=>{e.preventDefault(),n.close()})),document.addEventListener("click",(e=>{e.target.matches(".customProject")&&(a.innerHTML="",m.innerHTML="",function(e){let t=document.createElement("div"),n=document.createElement("button");t.className="projectTitle",t.textContent=e,n.className="taskBtn",n.textContent="New Task",a.appendChild(t),a.appendChild(n)}(e.target.textContent),f(S()))})),document.addEventListener("click",(e=>{e.target.matches(".taskBtn")&&l.showModal()})),d.addEventListener("click",(function(e){e.preventDefault(),m.innerHTML="",function(e){const t={name:document.querySelector("#task").value};e.push(t),f(S())}(S()),l.close(),u.value=""})),s.addEventListener("click",(e=>{e.preventDefault(),l.close()})),document.addEventListener("click",(t=>{t.target.matches(".deleteProBtn")&&j(t.target.id,e)})),document.addEventListener("click",(e=>{e.target.matches(".done")&&(j(e.target.id,S()),m.innerHTML="",f(S()))}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzFCRyxFQUFhRixLQUNqQixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBwcm9qZWN0c0FycmF5ID0gW107XG5jb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFByb2plY3QnKVxuY29uc3QgcHJvamVjdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RNb2RhbCcpXG5jb25zdCBzdWJtaXRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdFByb2plY3QnKVxuY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHNDb250YWluZXInKVxuY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXdQcm9qZWN0JylcbmNvbnN0IHByb2plY3RDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RDb250ZW50JylcbmNvbnN0IHRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza0J0bicpXG5jb25zdCB0YXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza01vZGFsJylcbmNvbnN0IHN1Ym1pdFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0VGFzaycpXG5jb25zdCB0YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2snKVxuY29uc3QgY2xvc2VUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbmNlbFRhc2snKVxuY29uc3QgY2xvc2VQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbmNlbFByb2plY3QnKVxuY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrQ29udGFpbmVyJylcbmNvbnN0IGRlbGV0ZVByb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGVQcm9CdG4nKVxuY29uc3QgZG9uZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb25lJylcblxuY29uc3QgcHJvamVjdEZhY3RvcnkgPSAobmFtZSwgcHJvamVjdEFycmF5KSA9PiB7XG4gICAgcmV0dXJuIHtuYW1lLCBwcm9qZWN0QXJyYXl9XG59O1xuXG5jb25zdCB0YXNrRmFjdG9yeSA9IChuYW1lKSA9PiB7XG4gICAgcmV0dXJuIHtuYW1lfVxufTtcblxuY29uc3QgaW5ib3ggPSBwcm9qZWN0RmFjdG9yeSgnaW5ib3gnLCBbXSk7XG5wcm9qZWN0c0FycmF5LnB1c2goaW5ib3gpXG5jb25zdCBpbmJveERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5pbmJveERpdi5jbGFzc05hbWUgPSAoJ2N1c3RvbVByb2plY3QnKVxuaW5ib3hEaXYudGV4dENvbnRlbnQgPSBpbmJveC5uYW1lXG5wcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbmJveERpdilcbmxldCBpbmJveFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmxldCBpbmJveEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG5pbmJveFRpdGxlLmNsYXNzTmFtZSA9ICdwcm9qZWN0VGl0bGUnXG5pbmJveFRpdGxlLnRleHRDb250ZW50ID0gaW5ib3gubmFtZVxuaW5ib3hCdG4uY2xhc3NOYW1lID0gJ3Rhc2tCdG4nXG5pbmJveEJ0bi50ZXh0Q29udGVudCA9ICdOZXcgVGFzaydcbnByb2plY3RDb250ZW50LmFwcGVuZENoaWxkKGluYm94VGl0bGUpXG5wcm9qZWN0Q29udGVudC5hcHBlbmRDaGlsZChpbmJveEJ0bilcblxuXG5mdW5jdGlvbiBwdXNoUHJvamVjdHMoKSB7XG4gICAgbGV0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3UHJvamVjdCcpLnZhbHVlXG4gICAgY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3RGYWN0b3J5KHByb2plY3QsIFtdKVxuICAgIHByb2plY3RzQXJyYXkucHVzaChuZXdQcm9qZWN0KVxuICAgIGRpc3BsYXlQcm9qZWN0cygpXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0cygpIHtcbiAgICBjb3VudCA9IDBcbiAgICBmb3IgKGxldCBpID0wOyBpIDwgcHJvamVjdHNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHByb2plY3REaXYuY2xhc3NOYW1lID0gJ3Byb2plY3REaXYnXG4gICAgICAgIHByb2plY3REaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImN1c3RvbVByb2plY3RcIj4ke3Byb2plY3RzQXJyYXlbaV0ubmFtZX08L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gaWQ9JyR7Y291bnR9JyBjbGFzcz1cImRlbGV0ZVByb0J0blwiJz5EZWxldGU8L2J1dHRvbj4gXG4gICAgICAgIGBcbiAgICAgICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdERpdilcbiAgICAgICAgY291bnQgKz0gMVxuICAgIH1cbn1cblxuXG5hZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgcHJvamVjdE1vZGFsLnNob3dNb2RhbCgpXG59KVxuXG5zdWJtaXRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgcHJvamVjdHNDb250YWluZXIuaW5uZXJIVE1MID0gJydcbiAgICBwdXNoUHJvamVjdHMoKVxuICAgIHByb2plY3RNb2RhbC5jbG9zZSgpXG4gICAgcHJvamVjdC52YWx1ZSA9ICcnXG59KVxuXG5jbG9zZVByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgcHJvamVjdE1vZGFsLmNsb3NlKClcbn0pXG5cbi8qIC0tLS0tLS0tLS0tLS1jbGljayBldmVudHMgb24gcHJvamVjdCB0YWJzLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0Q29udGVudChwcm9qZWN0TmFtZSl7XG4gICAgbGV0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbGV0IHRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHByb2plY3RUaXRsZS5jbGFzc05hbWUgPSAncHJvamVjdFRpdGxlJ1xuICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lXG4gICAgdGFza0J0bi5jbGFzc05hbWUgPSAndGFza0J0bidcbiAgICB0YXNrQnRuLnRleHRDb250ZW50ID0gJ05ldyBUYXNrJ1xuICAgIHByb2plY3RDb250ZW50LmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSlcbiAgICBwcm9qZWN0Q29udGVudC5hcHBlbmRDaGlsZCh0YXNrQnRuKVxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGU9PntcbiAgICBpZiAoZS50YXJnZXQubWF0Y2hlcygnLmN1c3RvbVByb2plY3QnKSl7XG4gICAgICAgIHByb2plY3RDb250ZW50LmlubmVySFRNTCA9ICcnXG4gICAgICAgIHRhc2tDb250YWluZXIuaW5uZXJIVE1MID0gJydcbiAgICAgICAgY3JlYXRlUHJvamVjdENvbnRlbnQoZS50YXJnZXQudGV4dENvbnRlbnQpXG4gICAgICAgIGRpc3BsYXlUYXNrcyhmaW5kQXJyYXkoKSlcbiAgICB9XG59KVxuXG4vKiAtLS0tLS0tLS0tLS0tY2xpY2sgZXZlbnRzIG9uIHRhc2sgYnV0dG9uLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKCcudGFza0J0bicpKXtcbiAgICAgICAgdGFza01vZGFsLnNob3dNb2RhbCgpXG4gICAgfVxufSlcblxuZnVuY3Rpb24gZmluZEFycmF5KCl7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c0FycmF5Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgbGV0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0VGl0bGUnKS50ZXh0Q29udGVudFxuICAgICAgICBpZihwcm9qZWN0c0FycmF5W2ldLm5hbWUgPT09IHByb2plY3RUaXRsZSlcbiAgICAgICAgcmV0dXJuIHByb2plY3RzQXJyYXlbaV0ucHJvamVjdEFycmF5XG4gICAgfVxufVxuXG5mdW5jdGlvbiBwdXNoVGFza3MoYXJyYXkpe1xuICAgIGxldCB0YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2snKS52YWx1ZVxuICAgIGNvbnN0IG5ld1Rhc2sgPSB0YXNrRmFjdG9yeSh0YXNrKVxuICAgIGFycmF5LnB1c2gobmV3VGFzaylcbiAgICBkaXNwbGF5VGFza3MoZmluZEFycmF5KCkpXG59XG5cbnN1Ym1pdFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCl7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIHRhc2tDb250YWluZXIuaW5uZXJIVE1MID0gJydcbiAgICBwdXNoVGFza3MoZmluZEFycmF5KCkpXG4gICAgdGFza01vZGFsLmNsb3NlKClcbiAgICB0YXNrLnZhbHVlID0gJydcbn0pXG5cbmNsb3NlVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB0YXNrTW9kYWwuY2xvc2UoKVxufSlcblxuLyogLS0tLS0tLS0tLS0tLWRpc3BsYXlpbmcgdGFza3MtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbmZ1bmN0aW9uIGRpc3BsYXlUYXNrcyhhcnJheSl7XG4gICBjb3VudCA9IDBcbiAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspe1xuICAgIGxldCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0YXNrRGl2LmNsYXNzTmFtZSA9ICduZXdUYXNrJ1xuICAgIHRhc2tEaXYuaWQgPSBjb3VudFxuICAgIHRhc2tEaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPSd0YXNrTmFtZSc+JHthcnJheVtpXS5uYW1lfTwvZGl2PlxuICAgICAgICA8YnV0dG9uIGlkPScke2NvdW50fScgY2xhc3M9J2RvbmUnPkRvbmU8L2J1dHRvbj5cbiAgICBgXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGl2KVxuICAgIGNvdW50ICs9IDFcbiAgIH1cbn1cbi8qIC0tLS0tLS0tLS0tLS1kZWxldGluZyBwcm9qZWN0cyBhbmQgdGFza3MtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoJy5kZWxldGVQcm9CdG4nKSl7XG4gICAgICAgICBkZWxldGVJdGVtcyhlLnRhcmdldC5pZCwgcHJvamVjdHNBcnJheSlcbiAgICB9XG59KVxuXG5mdW5jdGlvbiBkZWxldGVJdGVtcyhpbmRleCwgYXJyYXkpe1xuICAgIGFycmF5LnNwbGljZShpbmRleCwgMSk7XG4gICAgcHJvamVjdHNDb250YWluZXIuaW5uZXJIVE1MID0gJydcbiAgICBkaXNwbGF5UHJvamVjdHMoKTtcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICBpZiAoZS50YXJnZXQubWF0Y2hlcygnLmRvbmUnKSl7XG4gICAgICAgIGRlbGV0ZUl0ZW1zKGUudGFyZ2V0LmlkLCBmaW5kQXJyYXkoKSlcbiAgICAgICAgdGFza0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuICAgICAgICBkaXNwbGF5VGFza3MoZmluZEFycmF5KCkpXG4gICAgfVxufSkiXSwibmFtZXMiOlsicHJvamVjdHNBcnJheSIsImFkZFByb2plY3RCdG4iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwcm9qZWN0TW9kYWwiLCJzdWJtaXRQcm9qZWN0QnRuIiwicHJvamVjdHNDb250YWluZXIiLCJwcm9qZWN0IiwicHJvamVjdENvbnRlbnQiLCJ0YXNrTW9kYWwiLCJzdWJtaXRUYXNrQnRuIiwidGFzayIsImNsb3NlVGFza0J0biIsImNsb3NlUHJvamVjdEJ0biIsInRhc2tDb250YWluZXIiLCJwcm9qZWN0RmFjdG9yeSIsIm5hbWUiLCJwcm9qZWN0QXJyYXkiLCJpbmJveCIsInB1c2giLCJpbmJveERpdiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJ0ZXh0Q29udGVudCIsImFwcGVuZENoaWxkIiwiaW5ib3hUaXRsZSIsImluYm94QnRuIiwiZGlzcGxheVByb2plY3RzIiwiY291bnQiLCJpIiwibGVuZ3RoIiwicHJvamVjdERpdiIsImlubmVySFRNTCIsImZpbmRBcnJheSIsInByb2plY3RUaXRsZSIsImRpc3BsYXlUYXNrcyIsImFycmF5IiwidGFza0RpdiIsImlkIiwiZGVsZXRlSXRlbXMiLCJpbmRleCIsInNwbGljZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJzaG93TW9kYWwiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidmFsdWUiLCJuZXdQcm9qZWN0IiwicHVzaFByb2plY3RzIiwiY2xvc2UiLCJlIiwidGFyZ2V0IiwibWF0Y2hlcyIsInByb2plY3ROYW1lIiwidGFza0J0biIsImNyZWF0ZVByb2plY3RDb250ZW50IiwibmV3VGFzayIsInB1c2hUYXNrcyJdLCJzb3VyY2VSb290IjoiIn0=