class Header extends HTMLElement {

  connectedCallback() {
    this.innerHTML = `
      <nav id="navbar" class="fade-in">
         <div class="navbar">

            <!---------- MENU COMPACT ---------->

            <div class="menu-closed">
               <div class="menu-logo flex flex-start">
                  <a href="/index.html" class="navbar-home">
                     <!-- 
                     <i class="iconoir-arcade"></i>
                     <i class="iconoir-face-id"></i>-->
                     <i class="iconoir-asterisk"></i>
                     <!--<p>work & other stuff</p>-->
                  </a>
      
                  <!-- <a href="#" class="breadcrumb">
                     <div class=breadcrumb-section">-> parent breadcrumb&nbsp;</div>
                  </a>
                  <a href="#" class="breadcrumb">
                     <div class=breadcrumb-section">-> current page</div>
                  </a> -->
      
               </div>

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
            </div>

            <!---------- EXPANDED MENU 1 ---------->

            <div id="menu-expanded" class="menu-expanded hidden fade-in">

               <div class="menu">
                  <div class="menu-column">
                     <div class="menu-category">
                        <div class="menu-category-title">
                           <i class="iconoir-flash-solid"></i>
                           <h2>Software UI/UX</h2>
                        </div>
                        <div class="menu-list">
                           <a href="/pages/software/cybergrad/index.html" target=_self>Cybersecurity Training</a>
                           <a class="comingSoon" href="/pages/software/scrolld/index.html" target=_self>Red Team Operation Management</a>
                           <a class="comingSoon" href="/pages/software/scc/index.html" target=_self>Online Collectibles Store</a>
                           <a class="comingSoon" href="/pages/software/senitron/index.html" target=_self>Inventory Tracking</a>
                           <a class="comingSoon" href="/pages/software/dtek/index.html" target=_self>Counterfeit Detection</a>
                        </div>
                     </div>

                     <div class="menu-category">
                        <div class="menu-category-title">
                           <i class="iconoir-design-nib"></i>
                           <h2 class="">Design</h2>
                        </div>
                        <div class="menu-list">
                           <a href="/pages/design/arch/index.html" target=_self>Architecture</a>
                           <a href="/pages/design/web/index.html" target=_self>Graphic & Web</a>
                           <a href="/pages/design/sketch/index.html" target=_self>Sketching</a>
                        </div>
                     </div>
                  </div>
               </div>

               <!---------- EXPANDED MENU 2 ---------->

               <div class="menu">
                  <div class="menu-column">
                     <div class="menu-category">
                        <div class="menu-category-title justify-center">
                           <i class="iconoir-cpu"></i>
                           <h2>Gadgets <em>(Coming soon!)</em></h2>
                        </div>
                     </div>
                     <div class="menu-category-list">
                        <div class="menu-list">
                           <a href="/pages/gadgets/computers/index.html" target=_self>Computers</a>
                           <a class="comingSoon" href="/pages/gadgets/keyboard/index.html" target=_self>Keyboards & Mice</a>
                           <a class="comingSoon" href="/pages/gadgets/clockworkpi/indexxx.html" target=_self>Gaming Rigs</a>
                           <a class="comingSoon" href="/pages/gadgets/everydaycarry/indexxx.html" target=_self>Other Devices</a>
                           <a class="comingSoon" href="/pages/gadgets/everydaycarry/indexxx.html" target=_self>Everyday Carry</a>
                        </div>
                     </div>
                     <div class="menu-category">
                        <div class="menu-category-title justify-center">
                           <i class="iconoir-terminal-tag"></i>
                           <h2>DIY <em>(Coming soon!)</em></h2>
                        </div>
                     </div>
                     <div class="menu-category-list">
                        <div class="menu-list">
                           <a class="comingSoon" href="/pages/diy/hardmoneynode/indexxx.html" target=_self>Command Line Interface</a>
                           <a class="comingSoon" href="/pages/diy/pihole/indexxx.html" target=_self>Decentralized Tech</a>
                           <a class="comingSoon" href="/pages/diy/nostr/indexxx.html" target=_self>Hacking at Home</a>
                        </div>
                     </div>
                  </div>
               </div>

               <!---------- EXPANDED MENU 3 ---------->

               <div class="menu">
                  <div class="menu-column">
                     <div class="menu-category">
                        <div class="menu-category-title justify-end">
                           <i class="iconoir-telegram"></i>
                           <h2>Travel <em>(Coming soon!)</em></h2>
                        </div>
                     </div>
                     <div class="menu-category-list-right">
                        <div class=menu-list>
                           <a class="comingSoon" href="/pages/travel/japan/osaka/indexxx.html" target=_self>Upcoming: Tokyo, Japan</a>
                           <a class="comingSoon" href="/pages/travel/japan/index.html" target=_self>Upcoming: Madeira, Portugal</a>
                           <a class="comingSoon" href="/pages/travel/japan/index.html" target=_self>Santa Catalina Island, CA</a>
                           <a class="comingSoon" href="/pages/travel/japan/index.html" target=_self>Lake Havasu, AZ</a>
                           <a class="comingSoon" href="/pages/travel/spain/index.html" target=_self>New York, NY</a>
                        </div>
                     </div>
                     <div class="menu-category">
                        <div class="menu-category-title justify-end">
                           <i class="iconoir-asterisk"></i>
                           <h2>Other Stuff</h2>
                        </div>
                     <div class="menu-category-list-right">
                        <div class="menu-list">
                          <a href="/pages/otherstuff/bookmarks/index.html" target=_self>Bookmarks</a>
                          <a href="/pages/otherstuff/quotes/index.html" target=_self>Quotes</a>
                          <a href="/pages/otherstuff/goodeats/index.html" target=_self>Good Eats</a><!-- 
                          <a href="/pages/otherstuff/test/index.html" target=_self><span style="color:#000; padding-right: 0">Test Page</span></a> -->
                        </div>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </nav>
   </div>
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
