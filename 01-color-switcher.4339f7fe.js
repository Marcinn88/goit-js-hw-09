function e(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}const t=document.querySelector("body button[data-start]"),d=document.querySelector("body button[data-stop]"),o=document.querySelector("body");d.disabled=!0;t.addEventListener("click",(()=>{(()=>{let r=e();o.style.backgroundColor=r,t.disabled=!0,d.disabled=!1})(),timeChanger=setInterval((()=>{let t=e();o.style.backgroundColor=t}),1e3)})),d.addEventListener("click",(()=>{clearInterval(timeChanger),t.disabled=!1,d.disabled=!0}));
//# sourceMappingURL=01-color-switcher.4339f7fe.js.map
