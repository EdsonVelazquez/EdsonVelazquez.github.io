function setup() {
  THREE.ImageUtils.crossOrigin = '';
  var textura1   = THREE.ImageUtils.loadTexture('https://edsonvelazquez.github.io/pelo.jpg');
  var textura2   = THREE.ImageUtils.loadTexture('https://edsonvelazquez.github.io/pelo2.jpg');
  var textura3   = THREE.ImageUtils.loadTexture('https://edsonvelazquez.github.io/TexturaMadera2.jpg');
  var material1  = new THREE.MeshLambertMaterial( {map: textura1} );
  var material2  = new THREE.MeshLambertMaterial( {map: textura2} );
  var material3  = new THREE.MeshLambertMaterial( {map: textura3} );

  escena = new THREE.Scene();

  //-----------------------------------------------------------------

  var geometry = new THREE.BoxGeometry( 1, 1, 1 );

  for ( i = -4.5; i <= 4.5; i++ ) {
  	for ( j = -4.5; j <= 4.5; j++ ) {
  		cubo = new THREE.Mesh( geometry, material3 );
		cubo.translateX( i );
		cubo.translateZ( j );
		escena.add( cubo );
		cubo.receiveShadow = true;
 	}
  }

  //-----------------------------------------------------------------
  
  var LuzPuntual = new THREE.PointLight(0xFFFFFF);
  LuzPuntual.position.x = 10;
  LuzPuntual.position.y = 10;
  LuzPuntual.position.z = 10;
  
  escena.add(LuzPuntual);
  
  camara = new THREE.PerspectiveCamera();
  camara.position.z = 10;
  
  renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerHeight*.95, window.innerHeight*.95 );
  document.body.appendChild( renderer.domElement );
}

function loop() {
  requestAnimationFrame( loop );
  
  renderer.render( escena, camara );
}

var camara, escena, renderer, cubo;
setup();
loop();
