class HeadLinks extends HTMLElement {

  connectedCallback() {
    this.innerHTML = `
      <meta name=viewport content="width=device-width,initial-scale=1">
      <link rel="shortcut icon" type="image/png" href="favicon.png" />
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Boldonse&family=Cutive+Mono&family=Doto:wght@100..900&family=Lusitana:wght@400;700&family=Reddit+Mono:wght@200..900&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&family=Tiny5&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/iconoir-icons/iconoir@main/css/iconoir.css" />
      <script src="/components/themes.js" type="text/javascript" defer></script>
    `;
  }
  constructor() {
    super();

  }
}

customElements.define('head-links', HeadLinks);
