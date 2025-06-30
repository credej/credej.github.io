class Header extends HTMLElement {

  connectedCallback() {
    this.innerHTML = `
      <nav id="navbar" class="navbar-fixed transition-transform z-50 fade-in">
         <div class="navbar">
            <div class="my-8 breadcrumb-container flex items-center justify-between">
               <div class="flex flex-start">
                  <a href="../../../index.html" class="breadcrumb">
                     <div class="breadcrumb-home">j's work</div>
                  </a>
      <!--
                  <a href="#" class="breadcrumb">
                     <div class=breadcrumb-section">-> parent breadcrumb&nbsp;</div>
                  </a>
                  <a href="#" class="breadcrumb">
                     <div class=breadcrumb-section">-> current page</div>
                  </a>
      -->
               </div>

               <div class="flex flex-end">
                  <button id="menu-btn" class="flex items-center text-gray-700 neon">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                      </svg>
                  </button>
               </div>
            </div>

            <!---------- MOBILE NAV BAR ---------->
            <div id="mobile-menu" class="hidden fade-in">
               <header class="site-head">
                  <div id="navigation" class="flex">

                     <div class="site-head-menu flex w-1/3 grow">
                        <div class="site-head-menu-columns w-full">
                           <div class="site-head-menu-column">
                              <div class="site-head-menu-title-container">
                                 <span class="material-symbols-outlined text-yellow-500 icon-menu">public</span>
                                 <h2 class="site-head-menu-title">Software UI/UX</h2>
                              </div>
                              <div class=site-head-menu-list>
                                 <a href="/pages/software/cybergrad/index.html" target=_self>Cybersecurity Training</a>
                                 <a class="comingSoon" href="/pages/software/scrolld/index.html" target=_self>Red Team Operation Management</a>
                                 <a class="comingSoon" href="/pages/software/scc/index.html" target=_self>Online Collectibles Store</a>
                                 <a class="comingSoon" href="/pages/software/senitron/index.html" target=_self>Inventory Tracking</a>
                                 <a class="comingSoon" href="/pages/software/dtek/index.html" target=_self>Counterfeit Detection</a>
                              </div>
                           </div>
                           <div class="site-head-menu-column w-full">
                              <div class="site-head-menu-title-container">
                                 <span class="material-symbols-outlined text-yellow-500 icon-menu">draw</span>
                                 <h2 class="site-head-menu-title cursor-default">Design</h2>
                              </div>
                              <div class=site-head-menu-list>
                                 <a href="/pages/design/arch/index.html" target=_self>Architecture</a>
                                 <a href="/pages/design/graphics/index.html" target=_self>Graphic Design</a>
                                 <a href="/pages/design/web/index.html" target=_self>Web Design</a>
                                 <a href="/pages/design/sketch/index.html" target=_self>Sketching</a>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div class="site-head-menu flex w-1/3 grow text-center">
                        <div class="site-head-menu-columns w-full">
                           <div class="site-head-menu-column">
                              <div class="site-head-menu-title-container justify-center">
                                 <span class="material-symbols-outlined text-yellow-500 icon-menu">satellite_alt</span>
                                 <h2 class="site-head-menu-title">Gadgets <em>(Coming soon!)</em></h2>
                              </div>
                              <div class="site-head-menu-list">
                                 <a class="comingSoon" href="/pages/gadgets/computer/index.html" target=_self>Computers & Gaming Rigs</a>
                                 <a class="comingSoon" href="/pages/gadgets/keyboard/index.html" target=_self>Keyboards & Mice</a>
                                 <a class="comingSoon" href="/pages/gadgets/clockworkpi/indexxx.html" target=_self>Phones & Tablets</a>
                                 <a class="comingSoon" href="/pages/gadgets/everydaycarry/indexxx.html" target=_self>Other Devices</a>
                                 <a class="comingSoon" href="/pages/gadgets/everydaycarry/indexxx.html" target=_self>Everyday Carry</a>
                              </div>
                           </div>
                           <div class="site-head-menu-column">
                              <div class="site-head-menu-title-container justify-center">
                                 <span class="material-symbols-outlined text-yellow-500 icon-menu">handyman</span>
                                 <h2 class="site-head-menu-title">DIY <em>(Coming soon!)</em></h2>
                              </div>
                              <div class="site-head-menu-list">
                                 <a class="comingSoon" href="/pages/diy/hardmoneynode/indexxx.html" target=_self>Command Line Interface</a>
                                 <a class="comingSoon" href="/pages/diy/pihole/indexxx.html" target=_self>Decentralized Tech</a>
                                 <a class="comingSoon" href="/pages/diy/nostr/indexxx.html" target=_self>Hacking at Home</a>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div class="site-head-menu flex w-1/3 grow flex-end text-right">
                        <div class="site-head-menu-columns w-full">
                           <div class="site-head-menu-column w-full">
                              <div class="site-head-menu-title-container justify-end">
                                 <span class="material-symbols-outlined text-yellow-500 icon-menu">map</span>
                                 <h2 class="site-head-menu-title">Travel <em>(Coming soon!)</em></h2>
                              </div>
                              <div class=site-head-menu-list>
                                 <a class="comingSoon" href="/pages/travel/japan/osaka/indexxx.html" target=_self>Upcoming: Tokyo, Japan</a>
                                 <a class="comingSoon" href="/pages/travel/japan/index.html" target=_self>Upcoming: Madeira, Portugal</a>
                                 <a class="comingSoon" href="/pages/travel/japan/index.html" target=_self>Santa Catalina Island, CA</a>
                                 <a class="comingSoon" href="/pages/travel/japan/index.html" target=_self>Lake Havasu, AZ</a>
                                 <a class="comingSoon" href="/pages/travel/spain/index.html" target=_self>New York, NY</a>
                              </div>
                           </div>
                           <div class="site-head-menu-column w-full">
                              <div class="site-head-menu-title-container justify-end">
                                 <span class="material-symbols-outlined text-yellow-500 icon-menu">bookmarks</span>
                                 <h2 class="site-head-menu-title">Other Stuff</h2>
                              </div>
                              <div class=site-head-menu-list>
                                <a href="/pages/otherstuff/bookmarks/index.html" target=_self>Bookmarks</a>
                                <a href="/pages/otherstuff/quotes/index.html" target=_self>Quotes</a>
                                <a href="/pages/otherstuff/goodeats/index.html" target=_self>Good Eats</a>
                                <a href="/pages/otherstuff/test/index.html" target=_self><span style="color:#000; padding-right: 0">Test Page</span></a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </header>
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
         const menuBtn = document.getElementById("menu-btn");
         const mobileMenu = document.getElementById("mobile-menu");

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
