class Footer extends HTMLElement {

  connectedCallback() {
    this.innerHTML = `
            <button id="dark-mode-toggle">
                <!--Moon is an inline SVG so you can edit the color if needed-->
                <svg class="cs-moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480" style="enable-background:new 0 0 480 480" xml:space="preserve"><path d="M459.782 347.328c-4.288-5.28-11.488-7.232-17.824-4.96-17.76 6.368-37.024 9.632-57.312 9.632-97.056 0-176-78.976-176-176 0-58.4 28.832-112.768 77.12-145.472 5.472-3.712 8.096-10.4 6.624-16.832S285.638 2.4 279.078 1.44C271.59.352 264.134 0 256.646 0c-132.352 0-240 107.648-240 240s107.648 240 240 240c84 0 160.416-42.688 204.352-114.176 3.552-5.792 3.04-13.184-1.216-18.496z"/></svg>
                <img class="cs-sun" aria-hidden="true" src="https://csimg.nyc3.digitaloceanspaces.com/Contact-Page/sun.svg" decoding="async" alt="sun" width="15" height="15">
            </button>
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


      function enableDarkMode() {
         document.body.classList.add('dark-mode');
         localStorage.setItem('theme', 'dark');
      }
      function disableDarkMode() {
         document.body.classList.remove('dark-mode');
         localStorage.setItem('theme', 'light');
      }

      function detectColorScheme() {
         let theme = 'light';

         if (localStorage.getItem('theme')) {
            theme = localStorage.getItem('theme');
         }
         else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            theme = 'dark';
         }

         theme === 'dark' ? enableDarkMode() : disableDarkMode();
      }

      detectColorScheme();

      document.getElementById('dark-mode-toggle').addEventListener('click', () => {
         localStorage.getItem('theme') === 'light' ? enableDarkMode() : disableDarkMode();
      });

  }
}

customElements.define('footer-component', Footer);

