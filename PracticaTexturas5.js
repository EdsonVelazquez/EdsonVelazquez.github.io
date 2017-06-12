function setup() {
  THREE.ImageUtils.crossOrigin = '';
  var textura1   = THREE.ImageUtils.loadTexture('https://edsonvelazquez.github.io/Pelo.jpg');
  var textura2   = THREE.ImageUtils.loadTexture('https://edsonvelazquez.github.io/Pelo2.jpg');
  var textura3   = THREE.ImageUtils.loadTexture('https://edsonvelazquez.github.io/AzulAgua.jpg');
  var textura4   = THREE.ImageUtils.loadTexture('https://edsonvelazquez.github.io/AzulRayado.jpg');
  var material1  = new THREE.MeshLambertMaterial( {map: textura1} );
  var material2  = new THREE.MeshLambertMaterial( {map: textura2} );
  var material3  = new THREE.MeshLambertMaterial( {map: textura3} );
  var material4  = new THREE.MeshLambertMaterial( {map: textura4} );

  escena = new THREE.Scene();
  ContTextura = 0;

  //-----------------------------------------------------------------

  var geometry = new THREE.BoxGeometry( 1, 1, 1 );

  for ( i = -4.5; i <= 4.5; i++ ) {
  	for ( j = -4.5; j <= 4.5; j++ ) {
  		if ( ContTextura === 0 ) {
			cubo = new THREE.Mesh( geometry, material3 );
			ContTextura = 1; }
		if ( ContTextura === 1 ) {
			cubo = new THREE.Mesh( geometry, material4 );
			ContTextura = 0; }
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
  
  var campoVision = 60;
  var relacionAspecto = window.innerWidth/window.innerHeight;
  var planoCercano = 1;
  var planoLejano = 1000;

  //camara = new THREE.PerspectiveCamera();
  camara = new THREE.PerspectiveCamera(campoVision,relacionAspecto,planoCercano,planoLejano);
  camara.position.x = -12;
  camara.position.z = 12;
  camara.position.y = 17;
  camara.rotateY(-Math.PI/4);
  camara.rotateX(-Math.PI/4);
  
  renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );
}

function loop() {
  requestAnimationFrame( loop );
  
  renderer.render( escena, camara );
}

var camara, escena, renderer, cubo, ContTextura;
setup();
loop();
