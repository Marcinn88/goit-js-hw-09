!function(){function t(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}var e=document.querySelector("body button[data-start]"),n=document.querySelector("body button[data-stop]"),o=document.querySelector("body");n.disabled=!0;e.addEventListener("click",(function(){var a;a=t(),o.style.backgroundColor=a,e.disabled=!0,n.disabled=!1,timeChanger=setInterval((function(){var e=t();o.style.backgroundColor=e}),1e3)})),n.addEventListener("click",(function(){clearInterval(timeChanger),e.disabled=!1,n.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.7e7cac87.js.map
