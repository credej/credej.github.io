class Footer extends HTMLElement {

  connectedCallback() {
    this.innerHTML = `
      <h1>hello world</h1>
      <script src='https://devildrey33.github.io/ObjetoCanvas/JS/three.min.js'></script>
      <link rel='stylesheet' href='https://devildrey33.github.io/ObjetoCanvas/CSS/ObjetoCanvas.css'></link><script src='https://devildrey33.github.io/ObjetoCanvas/JS/ObjetoCanvas.js'></script></script>

    `;
  }
     constructor() {
       super();
      /* Plantilla para crear banners animados en devildrey33.es */
      // Constructor
      var Banner_WormHole = function() {
          
          // Llamo al constructor del ObjetoBanner
          if (ObjetoCanvas.call(this, { 
              'Tipo'          : 'THREE',
              'Ancho'         : 'Auto',
              'Alto'          : 'Auto',
              'Entorno'       : 'Normal',
              'Idioma'        : 'en',
              'MostrarFPS'    : true,
              'Pausar'        : true,             // Pausa el canvas si la pestaña no tiene el foco del teclado
              'ElementoRaiz'  : '',
              'CapturaEjemplo': "WormHole.png"                // Captura de pantalla para el ejemplo a "WormHole.png" se le añadirá "https://devildrey33.es/Web/Graficos/250x200_"
          }) === false) { return false; }
      };

      Banner_WormHole.prototype = Object.assign( Object.create(ObjetoCanvas.prototype) , {
          constructor     : Banner_WormHole, 
          // Datos de la animación [requerido]
          Nombre          : "WormHole",
          IdeaOriginal    : "devildrey33",
          URL             : "/Lab/Ejemplos/BannerTest/WormHole.html",
          NombreURL       : "Lab : WormHole",    
          // Función que se llama al redimensionar el documento
          Redimensionar   : function()     { },
          // Función que se llama al hacer scroll en el documento    
          Scroll          : function()     { },
          // Función que se llama al mover el mouse por el canvas    
          
          Iniciar         : function() {
              this.Escena = new THREE.Scene();

              this.Camara = new THREE.PerspectiveCamera(75, this.Ancho / this.Alto, 0.5, 1000);
              // Preparo la camara
              this.Camara.position.set( 0, 0, 500 );
              this.Escena.add(this.Camara);
              this.H = 0;
              this.H2 = 0.05;

              this.TexturasCargadas = 0;
              this.TotalTexturas = 2;
              this.Tunel   = [];   // array de tuneles 
              this.Textura = []; // array de texturas


              this.TexturaCargada = function(Num, Textura) {
                  Textura.wrapT = Textura.wrapS = THREE.RepeatWrapping;
                  Textura.repeat.set( 1, 2 );
                  this.Tunel[Num] = new THREE.Mesh(
                      new THREE.CylinderGeometry( (Num * 10) + 50, (Num * 10) + 50, 1000, 16, 32, true ),
                      new THREE.MeshBasicMaterial({ 
                          color: 0x666666,
                          transparent: true,
                          alphaMap: Textura,
                          side: THREE.BackSide,
                          opacity: (Num === 0) ? 0.3 : 1 // El primer tubo es translucido con humo, el segundo es solido con rayos
                      })
                  );
                  this.Tunel[Num].rotation.x = 90 * (Math.PI / 180);  // 45 grados
                  this.Tunel[Num].position.z = 128 - Num;             // Por alguna razón que no entiendo, si la Z del segundo tubo es mayor o igual que la Z del primer tubo, el segundo tubo no se ve...
                  this.Escena.add(this.Tunel[Num]);
                  this.Textura[Num] = Textura;        

                  this.TexturasCargadas ++;
                  // La textura se ha cargado, retiro la ventana que avisa al usuario de la carga.
                  if (this.TexturasCargadas === this.TotalTexturas) { this.Cargando(false); }
              };
              var Cargador = new THREE.TextureLoader();
              Cargador.crossOrigin = "";
              Cargador.load('https://cdn.rawgit.com/devildrey33/devildrey33/ddb01d71/Web/Graficos/Banner_WormHole11.jpg', this.TexturaCargada.bind(this, 0) );    
              var Cargador2 = new THREE.TextureLoader();
              Cargador2.crossOrigin = "";
              Cargador2.load('https://cdn.rawgit.com/devildrey33/devildrey33/ddb01d71/Web/Graficos/Banner_WormHole1.2.jpg', this.TexturaCargada.bind(this, 1) );

              this.Camara.lookAt(this.Escena.position);    
          },
          
          // Función que pinta cada frame de la animación
          Pintar          : function() {    
              if (typeof(this.Tunel[0]) !== 'undefined') {
                  this.H += 0.001;
                  if (this.H > 1) { this.H = 0; }
                  this.Tunel[0].material.color.setHSL(this.H, 0.7, 0.7);

                  // Rotación del tunel
                  this.Tunel[0].rotation.y += 0.02;
                  // Textura infinita avanzando y rotando
      //            this.Textura.offset.z += 0.01;
                  this.Textura[0].offset.y -= 0.014;
              }

              if (typeof(this.Tunel[1]) !== 'undefined') {
                  // Color del tunel
                  this.H2 += 0.001;
                  if (this.H2 > 1) { this.H2 = 0; }
                  this.Tunel[1].material.color.setHSL(this.H2, 0.7, 0.7);

                  // Rotación del tunel
                  this.Tunel[1].rotation.y -= 0.017;
                  // Textura infinita avanzando y rotando
                  this.Textura[1].offset.y -= 0.019;
              }        
              this.Context.render(this.Escena, this.Camara);
          }
      });
      var Canvas = new Banner_WormHole;
     }
   }

customElements.define('component-wormhole', Footer);

