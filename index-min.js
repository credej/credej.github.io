const handleFirstTab=e=>{"Tab"===e.key&&(document.body.classList.add("user-is-tabbing"),window.removeEventListener("keydown",handleFirstTab),window.addEventListener("mousedown",handleMouseDownOnce))},handleMouseDownOnce=()=>{document.body.classList.remove("user-is-tabbing"),window.removeEventListener("mousedown",handleMouseDownOnce),window.addEventListener("keydown",handleFirstTab)};window.addEventListener("keydown",handleFirstTab);const backToTopButton=document.querySelector(".back-to-top");let isBackToTopRendered=!1,alterStyles=e=>{backToTopButton.style.visibility=e?"visible":"hidden",backToTopButton.style.opacity=e?1:0,backToTopButton.style.transform=e?"scale(1)":"scale(0)"};window.addEventListener("scroll",(()=>{window.scrollY>700?(isBackToTopRendered=!0,alterStyles(isBackToTopRendered)):(isBackToTopRendered=!1,alterStyles(isBackToTopRendered))}));