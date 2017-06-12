function setup() {
  THREE.ImageUtils.crossOrigin = '';
  var textura1   = THREE.ImageUtils.loadTexture('https://edsonvelazquez.github.io/Pelo.jpg');
  var textura2   = THREE.ImageUtils.loadTexture('https://edsonvelazquez.github.io/Pelo2.jpg');
  var material1  = new THREE.MeshLambertMaterial( {map: textura1} );
  var material2  = new THREE.MeshLambertMaterial( {map: textura2} );
  var forma     = new THREE.BoxGeometry( 1, 4, 9 );
  malla         = new THREE.Mesh( forma, material1 );
  
  var LuzPuntual = new THREE.PointLight(0xFFFFFF);
  LuzPuntual.position.x = 10;
  LuzPuntual.position.y = 10;
  LuzPuntual.position.z = 10;
  
  escena = new THREE.Scene();
  escena.add(malla);
  escena.add(LuzPuntual);
  
  camara = new THREE.PerspectiveCamera();
  camara.position.z = 10;
  
  renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerHeight*.95, window.innerHeight*.95 );
  document.body.appendChild( renderer.domElement );
}

function loop() {
  requestAnimationFrame( loop );
  
  malla.rotation.x += 0.01;
  malla.rotation.y += 0.01;
  
  renderer.render( escena, camara );
}

var camara, escena, renderer, malla;
setup();
loop();
