class Header extends HTMLElement {

  connectedCallback() {
    this.innerHTML = `
      <nav id="navbar" class="fade-in">
         <div class="navbar">

            <div class="navbar-menu flex flex-start">
               <button id="menu-button" class="navbar-menu">
                  <i class="iconoir-menu"></i>
               </button>
            </div>

            <div class="navbar-logo flex">
               <a href="/index.html" class="effect-glitch">
                  <div id="hover-element"><h1>work<span class="navbar-logo-spacer">@</span>ndotherstuff:~ $ <span class="navbar-logo-cursor"></span></h1></div>
                  <audio id="hover-sound" src="/mp3/zap.mp3" preload="auto"></audio>
               </a>
            </div>

            <button id="navbar-theme-toggle">
               <svg class="cs-sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480" style="enable-background:new 0 0 480 480" xml:space="preserve"><path d="M459.782 347.328c-4.288-5.28-11.488-7.232-17.824-4.96-17.76 6.368-37.024 9.632-57.312 9.632-97.056 0-176-78.976-176-176 0-58.4 28.832-112.768 77.12-145.472 5.472-3.712 8.096-10.4 6.624-16.832S285.638 2.4 279.078 1.44C271.59.352 264.134 0 256.646 0c-132.352 0-240 107.648-240 240s107.648 240 240 240c84 0 160.416-42.688 204.352-114.176 3.552-5.792 3.04-13.184-1.216-18.496z"/></svg>
               <img class="cs-moon" aria-hidden="true" src="https://csimg.nyc3.digitaloceanspaces.com/Contact-Page/sun.svg" decoding="async" alt="sun" width="12" height="12">
            </button>

         </div>
         
         <div id="menu-expanded" class="hidden fade-in">

            <div class="menu-expanded">
               <div class="menu-category-container">
                  <div class="menu-category">
                     <div class="menu-category-title">
                        <i class="iconoir-laptop-dev-mode white"></i>
                        <h2>Software UI/UX</h2>
                     </div>
                     <div class="menu-list blue">
                        <a href="/pages/software/cybergrad/index.html" target=_self>Cybersecurity Training</a>
                        <a href="/pages/software/redteam/index.html" target=_self>Red Team Operation Management</a>
                        <a href="/pages/software/collectibles/index.html" target=_self>Online Collectibles Store</a>
                        <a href="/pages/software/inventory/index.html" target=_self>Inventory Tracking</a>
                        <a href="/pages/software/counterfeit/index.html" target=_self>Counterfeit Detection</a>
                     </div>
                  </div>
               </div>
               <div class="menu-category-container">
                  <div class="menu-category">
                     <div class="menu-category-title">
                        <i class="iconoir-edit-pencil white"></i>
                        <h2>Design</em></h2>
                     </div>
                     <div class="menu-list green">
                        <a href="/pages/design/arch/index.html" target=_self>Architecture</a>
                        <a href="/pages/design/graphicsweb/index.html" target=_self>Graphics & Web</a>
                        <a href="/pages/design/artwork/index.html" target=_self>Artwork</a>
                     </div>
                  </div>
               </div>
               <div class="menu-category-container">
                  <div class="menu-category">
                     <div class="menu-category-title">
                        <i class="iconoir-cpu white"></i>
                        <h2>Gadgets</h2>
                     </div>
                     <div class="menu-list red">
                        <a href="/pages/gadgets/computers/index.html" target=_self>Computers</a>
                        <a href="/pages/gadgets/keyboardmice/index.html" target=_self>Keyboards & Mice</a>
                        <a href="/pages/gadgets/keyboardmice/index.html" target=_self>Gaming Rigs</a>
                        <a href="/pages/gadgets/keyboardmice/index.html" target=_self>Other Devices</a>
                        <a href="/pages/gadgets/keyboardmice/index.html" target=_self>Everyday Carry</a>
                     </div>
                  </div>
               </div>
            </div>

            <div class="menu-expanded">
               <div class="menu-category-container">
                  <div class="menu-category">
                     <div class="menu-category-title">
                        <i class="iconoir-tools white"></i>
                        <h2>DIY</h2>
                     </div>
                     <div class="menu-list orange">
                        <a href="/pages/diy/cli/index.html" target=_self>Command Line Interface</a>
                        <a href="/pages/diy/freedomtech/index.html" target=_self>Decentralized Tech</a>
                     </div>
                  </div>
               </div>
               <div class="menu-category-container">
                  <div class="menu-category">
                     <div class="menu-category-title">
                        <i class="iconoir-telegram white"></i>
                        <h2>Good Eats</h2>
                     </div>
                     <div class="menu-list yellow">
                       <a href="/pages/otherstuff/goodeats/index.html" target=_self>Recipe Book</a>
                       <a href="/pages/otherstuff/remedies/index.html" target=_self>Home Remedies</a>
                       <a href="/pages/otherstuff/fooddeals/index.html" target=_self>Food Deals</a>
                     </div>
                  </div>
               </div>
               <div class="menu-category-container">
                  <div class="menu-category">
                     <div class="menu-category-title">
                        <i class="iconoir-bookmark-book white"></i>
                        <h2>Other Stuff</h2>
                     </div>
                     <div class="menu-list purple">
                       <a href="/pages/otherstuff/bookmarks/index.html" target=_self>Bookmarks</a>
                       <a href="/pages/otherstuff/quotes/index.html" target=_self>Quotes</a>
                       <a style="opacity: 0.05;" href="/pages/otherstuff/test/index.html" target=_self>Test 1</a>
                       <a style="opacity: 0.05;" href="/pages/otherstuff/test/index-2.html" target=_self>Test 2</a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </nav>

      <!-- <div class="footer-construction">
         <p>Site Under Construction!</p>
      </div> -->

    `
  }
  
  constructor() {
    super();
      document.addEventListener('DOMContentLoaded', function() {

         // Mobile Menu Toggle
         const menuBtn = document.getElementById("menu-button");
         const mobileMenu = document.getElementById("menu-expanded");

         menuBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
         });

         menuBtn.addEventListener("mouseout", () => {
            mobileMenu.classList.toggle("show");
         });
      }, false);
  }
}

customElements.define('header-component', Header);