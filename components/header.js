class Header extends HTMLElement {

  connectedCallback() {
    this.innerHTML = `
      <nav id="navbar" class="fade-in">
         <div class="menu-closed">
            <div class="menu-icon flex flex-end">
               <button id="menu-button" class="navbar-home flex items-center text-gray-700 neon">
                  <i class="iconoir-menu"></i>
                  <!-- <i class="iconoir-dice-two"></i>
                  <i class="iconoir-dice-one"></i> -->
                  <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                       <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                  </svg> -->
               </button>
            </div>

            <div class="menu-logo flex flex-start">
               <a href="/index.html" class="navbar-home effect-game-over">
                  <h1 id="hover-element">work + other stuff</h1>
                  <audio id="hover-sound" src="/mp3/zap.mp3" preload="auto"></audio>
               </a>
   
               <!-- <a href="#" class="breadcrumb">
                  <div class=breadcrumb-section">-> parent breadcrumb&nbsp;</div>
               </a>
               <a href="#" class="breadcrumb">
                  <div class=breadcrumb-section">-> current page</div>
               </a> --> 
            </div>

            <button id="dark-mode-toggle">
               <!--Moon is an inline SVG so you can edit the color if needed-->
               <svg class="cs-sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480" style="enable-background:new 0 0 480 480" xml:space="preserve"><path d="M459.782 347.328c-4.288-5.28-11.488-7.232-17.824-4.96-17.76 6.368-37.024 9.632-57.312 9.632-97.056 0-176-78.976-176-176 0-58.4 28.832-112.768 77.12-145.472 5.472-3.712 8.096-10.4 6.624-16.832S285.638 2.4 279.078 1.44C271.59.352 264.134 0 256.646 0c-132.352 0-240 107.648-240 240s107.648 240 240 240c84 0 160.416-42.688 204.352-114.176 3.552-5.792 3.04-13.184-1.216-18.496z"/></svg>
               <img class="cs-moon" aria-hidden="true" src="https://csimg.nyc3.digitaloceanspaces.com/Contact-Page/sun.svg" decoding="async" alt="sun" width="12" height="12">
            </button>

         </div>
         
         <div id="menu-expanded" class="hidden fade-in">

         <div class="menu-expanded">
            <div class="menu-category-container">
               <div class="menu-category">
                  <div class="menu-category-title">
                     <i class="iconoir-cpu"></i>
                     <h2>Software UI/UX</h2>
                  </div>
                  <div class="menu-list">
                     <a href="/pages/software/cybergrad/index.html" target=_self>Cybersecurity Training</a>
                     <a href="/pages/software/scrolld/index.html" target=_self>Red Team Operation Management</a>
                     <a href="/pages/software/scc/index.html" target=_self>Online Collectibles Store</a>
                     <a href="/pages/software/senitron/index.html" target=_self>Inventory Tracking</a>
                     <a href="/pages/software/dtek/index.html" target=_self>Counterfeit Detection</a>
                  </div>
               </div>
            </div>
            <div class="menu-category-container">
               <div class="menu-category">
                  <div class="menu-category-title">
                     <i class="iconoir-terminal-tag"></i>
                     <h2>Design</em></h2>
                  </div>
                  <div class="menu-list">
                     <a href="/pages/design/arch/index.html" target=_self>Architecture</a>
                     <a href="/pages/design/web/index.html" target=_self>Graphic & Web</a>
                     <a href="/pages/design/sketch/index.html" target=_self>Sketching</a>
                  </div>
               </div>
            </div>
            <div class="menu-category-container">
               <div class="menu-category">
                  <div class="menu-category-title">
                     <i class="iconoir-cpu"></i>
                     <h2>Gadgets</h2>
                  </div>
                  <div class="menu-list">
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
                     <i class="iconoir-terminal-tag"></i>
                     <h2>DIY <em>(Coming soon!)</em></h2>
                  </div>
                  <div class="menu-list">
                     <a href="/pages/gadgets/keyboardmice/index.html" target=_self>Command Line Interface</a>
                     <a href="/pages/diy/nostr/index.html" target=_self>Decentralized Tech</a>
                     <a href="/pages/gadgets/keyboardmice/index.html" target=_self>Hacking at Home</a>
                  </div>
               </div>
               <div class="menu-category">
                  <div class="menu-category-title">
                     <i class="iconoir-telegram"></i>
                     <h2>Travel <em>(Coming soon!)</em></h2>
                  </div>
                  <div class=menu-list>
                     <a href="/pages/travel/japan/osaka/indexxx.html" target=_self>Upcoming: Tokyo, Japan</a>
                     <a href="/pages/travel/japan/index.html" target=_self>Upcoming: Madeira, Portugal</a>
                     <a href="/pages/travel/japan/index.html" target=_self>Santa Catalina Island, CA</a>
                     <a href="/pages/travel/japan/index.html" target=_self>Lake Havasu, AZ</a>
                     <a href="/pages/otherstuff/test/index.html" target=_self>New York, NY</a>
                  </div>
               </div>
               <div class="menu-category">
                  <div class="menu-category-title">
                     <i class="iconoir-asterisk"></i>
                     <h2>Other Stuff</h2>
                  </div>
                  <div class="menu-list">
                    <a href="/pages/otherstuff/bookmarks/index.html" target=_self>Bookmarks</a>
                    <a href="/pages/otherstuff/quotes/index.html" target=_self>Quotes</a>
                    <a href="/pages/otherstuff/goodeats/index.html" target=_self>Good Eats</a><!-- 
                    <a href="/pages/otherstuff/test/index.html" target=_self><span style="color:#000; padding-right: 0">Test Page</span></a> -->
                  </div>
               </div>
            </div>
         </div>
      </nav>
      <!--
      <div class="footer-construction">
         <p>Site Under Construction!</p>
      </div>
      -->
    `;
  }
  constructor() {
    super();
      document.addEventListener('DOMContentLoaded', function() {
         // // alert("enter at your own risk");
         // let prevScrollPos = window.pageYOffset;
         // const navbar = document.getElementById("navbar");

         // // Auto-hide Navbar on scroll
         // window.onscroll = function () {
         //    let currentScrollPos = window.pageYOffset;
         //    if (prevScrollPos > currentScrollPos) {
         //        navbar.style.transform = "translateY(0)";
         //    } else {
         //        navbar.style.transform = "translateY(-100%)";
         //    }
         //    prevScrollPos = currentScrollPos;
         // };

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