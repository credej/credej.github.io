class HeadLinks extends HTMLElement {

  connectedCallback() {
    this.innerHTML = `
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script src="/components/themes.js" type="text/javascript" defer></script>
      <link rel="shortcut icon" type="image/png" href="favicon.png" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/iconoir-icons/iconoir@main/css/iconoir.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      
      <link href="https://api.fontshare.com/v2/css?f[]=array@400&f[]=satoshi@300,700,901&f[]=clash-display@300&f[]=telma@900&f[]=author@601&f[]=alpino@500,900&f[]=comico@400&f[]=melodrama@500&f[]=boxing@400&f[]=kola@400&f[]=rx-100@400&f[]=literata@800&f[]=kihim@400&f[]=jet-brains-mono@300&f[]=roundo@500&display=swap" rel="stylesheet">
      <!-- end replace -->
    `;
  }
  constructor() {
    super();

  }
}

customElements.define('head-links', HeadLinks);
