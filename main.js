(()=>{let e=[];const t=document.querySelector(".addProject"),c=document.querySelector(".projectModal"),o=document.querySelector("#submitProject"),n=document.querySelector(".projectsContainer"),r=document.querySelector("#newProject"),u=(e,t)=>({name:e,projectArray:t}),l=u("inbox",[]);e.push(l),t.addEventListener("click",(()=>{c.showModal()})),o.addEventListener("click",(function(t){t.preventDefault(),n.innerHTML="",function(){let t=document.querySelector("#newProject").value;const c=u(t,[]);e.push(c),e.forEach((e=>{let t=document.createElement("div");t.className="customProject",t.textContent=e.name,n.appendChild(t)}))}(),c.close(),r.value=""}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiTUFBQSxJQUFJQSxFQUFnQixHQUNwQixNQUFNQyxFQUFnQkMsU0FBU0MsY0FBYyxlQUN2Q0MsRUFBZUYsU0FBU0MsY0FBYyxpQkFDdENFLEVBQW1CSCxTQUFTQyxjQUFjLGtCQUMxQ0csRUFBb0JKLFNBQVNDLGNBQWMsc0JBQzNDSSxFQUFVTCxTQUFTQyxjQUFjLGVBR2pDSyxFQUFpQixDQUFDQyxFQUFNQyxLQUNuQixDQUFDRCxPQUFNQyxpQkFPWkMsRUFBUUgsRUFBZSxRQUFTLElBQ3RDUixFQUFjWSxLQUFLRCxHQW1CbkJWLEVBQWNZLGlCQUFpQixTQUFTLEtBQ3BDVCxFQUFhVSxXQUFVLElBRzNCVCxFQUFpQlEsaUJBQWlCLFNBQVMsU0FBU0UsR0FDaERBLEVBQU1DLGlCQUNOVixFQUFrQlcsVUFBWSxHQXRCbEMsV0FDSSxJQUFJVixFQUFVTCxTQUFTQyxjQUFjLGVBQWVlLE1BQ3BELE1BQU1DLEVBQWFYLEVBQWVELEVBQVMsSUFDM0NQLEVBQWNZLEtBQUtPLEdBS25CbkIsRUFBY29CLFNBQVFDLElBQ2xCLElBQUlDLEVBQWFwQixTQUFTcUIsY0FBYyxPQUN4Q0QsRUFBV0UsVUFBWSxnQkFDdkJGLEVBQVdHLFlBQWNKLEVBQVFaLEtBQ2pDSCxFQUFrQm9CLFlBQVlKLEVBQVUsR0FQaEQsQ0FrQklLLEdBQ0F2QixFQUFhd0IsUUFDYnJCLEVBQVFXLE1BQVEsRUFDcEIsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgcHJvamVjdHNBcnJheSA9IFtdO1xuY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRQcm9qZWN0JylcbmNvbnN0IHByb2plY3RNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0TW9kYWwnKVxuY29uc3Qgc3VibWl0UHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXRQcm9qZWN0JylcbmNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzQ29udGFpbmVyJylcbmNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3UHJvamVjdCcpXG5cblxuY29uc3QgcHJvamVjdEZhY3RvcnkgPSAobmFtZSwgcHJvamVjdEFycmF5KSA9PiB7XG4gICAgcmV0dXJuIHtuYW1lLCBwcm9qZWN0QXJyYXl9XG59O1xuXG5jb25zdCB0YXNrRmFjdG9yeSA9IChuYW1lKSA9PiB7XG4gICAgcmV0dXJuIHtuYW1lfVxufTtcblxuY29uc3QgaW5ib3ggPSBwcm9qZWN0RmFjdG9yeSgnaW5ib3gnLCBbXSk7XG5wcm9qZWN0c0FycmF5LnB1c2goaW5ib3gpXG5cblxuZnVuY3Rpb24gcHVzaFByb2plY3RzKCkge1xuICAgIGxldCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ld1Byb2plY3QnKS52YWx1ZVxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBwcm9qZWN0RmFjdG9yeShwcm9qZWN0LCBbXSlcbiAgICBwcm9qZWN0c0FycmF5LnB1c2gobmV3UHJvamVjdClcbiAgICBkaXNwbGF5UHJvamVjdHMoKVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdHMoKSB7XG4gICAgcHJvamVjdHNBcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBsZXQgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHByb2plY3REaXYuY2xhc3NOYW1lID0gKCdjdXN0b21Qcm9qZWN0JylcbiAgICAgICAgcHJvamVjdERpdi50ZXh0Q29udGVudCA9IGVsZW1lbnQubmFtZVxuICAgICAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KVxuICAgIH0pO1xufVxuXG5hZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgcHJvamVjdE1vZGFsLnNob3dNb2RhbCgpXG59KVxuXG5zdWJtaXRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgcHJvamVjdHNDb250YWluZXIuaW5uZXJIVE1MID0gJydcbiAgICBwdXNoUHJvamVjdHMoKVxuICAgIHByb2plY3RNb2RhbC5jbG9zZSgpXG4gICAgcHJvamVjdC52YWx1ZSA9ICcnXG59KSJdLCJuYW1lcyI6WyJwcm9qZWN0c0FycmF5IiwiYWRkUHJvamVjdEJ0biIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInByb2plY3RNb2RhbCIsInN1Ym1pdFByb2plY3RCdG4iLCJwcm9qZWN0c0NvbnRhaW5lciIsInByb2plY3QiLCJwcm9qZWN0RmFjdG9yeSIsIm5hbWUiLCJwcm9qZWN0QXJyYXkiLCJpbmJveCIsInB1c2giLCJhZGRFdmVudExpc3RlbmVyIiwic2hvd01vZGFsIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImlubmVySFRNTCIsInZhbHVlIiwibmV3UHJvamVjdCIsImZvckVhY2giLCJlbGVtZW50IiwicHJvamVjdERpdiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJ0ZXh0Q29udGVudCIsImFwcGVuZENoaWxkIiwicHVzaFByb2plY3RzIiwiY2xvc2UiXSwic291cmNlUm9vdCI6IiJ9