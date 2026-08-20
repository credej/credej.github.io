class HeadLinks extends HTMLElement {

  connectedCallback() {
    this.innerHTML = `
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <script src="/components/themes.js" type="text/javascript" defer></script>
      <link rel="shortcut icon" type="image/png" href="favicon.png"/>

      <!-- iconoir fonts -->
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/iconoir-icons/iconoir@main/css/iconoir.css"/>

      <!-- google fonts -->
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=Doto:wght@100..900&family=Geostar+Fill&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Press+Start+2P&family=Redacted+Script:wght@300;400;700&family=Reddit+Mono:wght@200..900&family=Tiny5&display=swap" rel="stylesheet">
      
      <!-- fontshare fonts -->
      <link href="https://api.fontshare.com/v2/css?f[]=array@400&f[]=satoshi@300,700,901&f[]=clash-display@300&f[]=telma@900&f[]=author@601&f[]=alpino@500,900&f[]=comico@400&f[]=melodrama@500&f[]=boxing@400&f[]=kola@400&f[]=rx-100@400&f[]=literata@800&f[]=kihim@400&f[]=jet-brains-mono@300&f[]=roundo@500&display=swap" rel="stylesheet">
    `;
  }
  constructor() {
    super();

  }
}

customElements.define('head-links', HeadLinks);
