class HeadLinks extends HTMLElement {

  connectedCallback() {
    this.innerHTML = `
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <script src="components/header-min.js" type="text/javascript" defer></script>
      <script src="/components/themes.js" type="text/javascript" defer></script>
      <link rel="shortcut icon" type="image/png" href="favicon.png"/>

      <!-- iconoir fonts -->
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/iconoir-icons/iconoir@main/css/iconoir.css"/>
    `;
  }
  constructor() {
    super();

  }
}

customElements.define('head-links', HeadLinks);
