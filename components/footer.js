class Footer extends HTMLElement {

  connectedCallback() {
    this.innerHTML = `
      <nav id="footer" class="footer">
         <a href="../index.html">back to top</a>
         <div class="footer-caution">
            <span class="text-flashing text-clifford mx-5">[PROCEED WITH CAUTION]<span>
         </div>
      </nav>
   </div>
    `;
  }
  constructor() {
    super();

  }
}

customElements.define('footer-component', Footer);
