class HeadLinks extends HTMLElement {

  connectedCallback() {
    this.innerHTML = `
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script src="/components/themes.js" type="text/javascript" defer></script>
      <link rel="shortcut icon" type="image/png" href="favicon.png" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/iconoir-icons/iconoir@main/css/iconoir.css" />
      <!-- replace with open source -->
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Agdasima:wght@400;700&family=Alumni+Sans+Pinstripe:ital@0;1&family=Barriecito&family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=Cutive+Mono&family=Doto:wght@100..900&family=Fugaz+One&family=Lexend+Exa:wght@100..900&family=Lusitana:wght@400;700&family=Reddit+Mono:wght@200..900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css2?family=Antonio:wght@100..700&family=Big+Shoulders:opsz,wght@10..72,100..900&family=Boldonse&family=Geostar&family=Martian+Mono:wght@100..800&family=Oswald:wght@200..700&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&family=Tiny5&display=swap" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css2?family=Anton&family=Boldonse&family=Geostar+Fill&family=Libre+Barcode+39+Text&family=PT+Mono&family=Press+Start+2P&family=Redacted&family=Redacted+Script:wght@300;400;700&family=Russo+One&family=Tektur:wght@400..900&display=swap" rel="stylesheet">
      <link href="https://api.fontshare.com/v2/css?f[]=array@400&display=swap" rel="stylesheet">
      <!-- end replace -->
    `;
  }
  constructor() {
    super();

  }
}

customElements.define('head-links', HeadLinks);
