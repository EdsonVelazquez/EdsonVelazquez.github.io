function pushar(e) {
  if (e.keyCode === 101) {
      if ( lobo.position.x < 7.5 ) lobo.position.x++; }
  else if (e.keyCode === 100) {
      if ( lobo.position.x > -7.5 ) lobo.position.x--; }
  else if (e.keyCode === 102) {
      if ( lobo.position.z < 15 ) lobo.position.z++; }
  else if (e.keyCode === 115) {
      if ( lobo.position.z > -15 ) lobo.position.z--; }
}


//-----------------------------------------------------------------


function setup() {

  THREE.ImageUtils.crossOrigin = '';
  var textura1   = THREE.ImageUtils.loadTexture('https://edsonvelazquez.github.io/Pelo.jpg');
  var textura2   = THREE.ImageUtils.loadTexture('https://edsonvelazquez.github.io/Balon.jpg');
  var textura3   = THREE.ImageUtils.loadTexture('https://edsonvelazquez.github.io/AzulAgua.jpg');
  var textura4   = THREE.ImageUtils.loadTexture('https://edsonvelazquez.github.io/AzulRayado.jpg');
  var textura5   = THREE.ImageUtils.loadTexture('https://edsonvelazquez.github.io/AzulMarino.jpg');
  var material1  = new THREE.MeshLambertMaterial( {map: textura1} );
  var material2  = new THREE.MeshLambertMaterial( {map: textura2} );
  var material3  = new THREE.MeshLambertMaterial( {map: textura3} );
  var material4  = new THREE.MeshLambertMaterial( {map: textura4} );
  var material5  = new THREE.MeshLambertMaterial( {map: textura5} );

var iluminacionRoja = new THREE.PointLight(0xFF0000);
var iluminacionVerde = new THREE.PointLight(0x00FF00);
var iluminacionAzul = new THREE.PointLight(0x0000FF);
var iluminacionBlanca = new THREE.PointLight(0xFFFFFF);

iluminacionRoja.position.y = 60;
iluminacionRoja.position.x = -40;
iluminacionRoja.position.z = -40;

iluminacionVerde.position.y = 60;
iluminacionVerde.position.x = 40;
iluminacionVerde.position.z = -40;

iluminacionAzul.position.y = 60;
iluminacionAzul.position.x = 40;
iluminacionAzul.position.z = 40;

iluminacionBlanca.position.y = 60;
iluminacionBlanca.position.x = -40;
iluminacionBlanca.position.z = 40;

//var escena = new THREE.Scene();
escena = new THREE.Scene();

var materialN = new THREE.MeshNormalMaterial();
//var textura = THREE.ImageUtils.loadTexture('https://EdsonVelazquez.github.io/brick_diffuse.jpg')

ContTextura = 0;


//-----------------------------------------------------------------


//Pelota

pelota = new THREE.Mesh( new THREE.SphereGeometry( 0.5 ),
                         material2 );

pelota2 = new THREE.Mesh( new THREE.SphereGeometry( 0.5 ),
                          material2 );

pelota3 = new THREE.Mesh( new THREE.SphereGeometry( 0.5 ),
                          material2 );

pelota.position.y = 1;

pelota2.position.y = 1;
pelota2.position.x = -4;

pelota3.position.y = 1;
pelota3.position.x = 4;


//-----------------------------------------------------------------


//Estadio

var geometry = new THREE.BoxGeometry( 1, 1, 1 );

for ( i = -7.5; i <= 7.5; i++ ) {
	for ( j = -15; j <= 15; j++ ) {
  		if ( ContTextura === 0 ) {
			cubo = new THREE.Mesh( geometry, material3 );
			ContTextura = 1; }
		else if ( ContTextura === 1 ) {
			cubo = new THREE.Mesh( geometry, material4 );
			ContTextura = 0; }
		cubo.translateX( i );
		cubo.translateZ( j );
		escena.add( cubo );
		cubo.receiveShadow = true;
	}
}

var pared1 = new THREE.BoxGeometry( 16, 3, 1 );
pared1M = new THREE.Mesh( pared1, material5 );
pared1M.translateZ( -16 );
pared1M.translateY( 1 );
escena.add( pared1M );
pared1M.receiveShadow = true;

var pared2 = new THREE.BoxGeometry( 16, 3, 1 );
pared2M = new THREE.Mesh( pared2, material5 );
pared2M.translateZ( 16 );
pared2M.translateY( 1 );
escena.add( pared2M );
pared2M.receiveShadow = true;

var pared3 = new THREE.BoxGeometry( 1, 3, 31 );
pared3M = new THREE.Mesh( pared3, material5 );
pared3M.translateX( 8.5 );
pared3M.translateY( 1 );
escena.add( pared3M );
pared3M.receiveShadow = true;

var pared4 = new THREE.BoxGeometry( 1, 3, 31 );
pared4M = new THREE.Mesh( pared4, material5 );
pared4M.translateX( -8.5 );
pared4M.translateY( 1 );
escena.add( pared4M );
pared4M.receiveShadow = true;


//-----------------------------------------------------------------


//Lobito

var forma = new THREE.Geometry();

//Cuerpo
forma.vertices.push( new THREE.Vector3( -3,  8, -6 ) ); // Vértice 0 A
forma.vertices.push( new THREE.Vector3(  3,  8, -6 ) ); // Vértice 1 B
forma.vertices.push( new THREE.Vector3( -3,  8,  0 ) ); // Vértice 2 C
forma.vertices.push( new THREE.Vector3(  3,  8,  0 ) ); // Vértice 3 D
forma.vertices.push( new THREE.Vector3( -3,  4, -6 ) ); // Vértice 4 E
forma.vertices.push( new THREE.Vector3(  3,  4, -6 ) ); // Vértice 5 F
forma.vertices.push( new THREE.Vector3( -3,  4,  0 ) ); // Vértice 6 G
forma.vertices.push( new THREE.Vector3(  3,  4,  0 ) ); // Vértice 7 H

//Cabeza
forma.vertices.push( new THREE.Vector3( -3, 10,  0 ) ); // Vértice 8  A
forma.vertices.push( new THREE.Vector3(  3, 10,  0 ) ); // Vértice 9  B
forma.vertices.push( new THREE.Vector3( -3, 10,  6 ) ); // Vértice 10 C
forma.vertices.push( new THREE.Vector3(  3, 10,  6 ) ); // Vértice 11 D
forma.vertices.push( new THREE.Vector3( -3,  4,  0 ) ); // Vértice 12 E
forma.vertices.push( new THREE.Vector3(  3,  4,  0 ) ); // Vértice 13 F
forma.vertices.push( new THREE.Vector3( -3,  4,  6 ) ); // Vértice 14 G
forma.vertices.push( new THREE.Vector3(  3,  4,  6 ) ); // Vértice 15 H

//Cola
forma.vertices.push( new THREE.Vector3( -1,  8, -10 ) ); // Vértice 16 A
forma.vertices.push( new THREE.Vector3(  1,  8, -10 ) ); // Vértice 17 B
forma.vertices.push( new THREE.Vector3( -1,  8,  -6 ) ); // Vértice 18 C
forma.vertices.push( new THREE.Vector3(  1,  8,  -6 ) ); // Vértice 19 D
forma.vertices.push( new THREE.Vector3( -1,  6, -10 ) ); // Vértice 20 E
forma.vertices.push( new THREE.Vector3(  1,  6, -10 ) ); // Vértice 21 F
forma.vertices.push( new THREE.Vector3( -1,  6,  -6 ) ); // Vértice 22 G
forma.vertices.push( new THREE.Vector3(  1,  6,  -6 ) ); // Vértice 23 H

//Hocico
forma.vertices.push( new THREE.Vector3( -3,  6,  6 ) ); // Vértice 24 A
forma.vertices.push( new THREE.Vector3(  3,  6,  6 ) ); // Vértice 25 B
forma.vertices.push( new THREE.Vector3( -3,  6,  8 ) ); // Vértice 26 C
forma.vertices.push( new THREE.Vector3(  3,  6,  8 ) ); // Vértice 27 D
forma.vertices.push( new THREE.Vector3( -3,  4,  6 ) ); // Vértice 28 E
forma.vertices.push( new THREE.Vector3(  3,  4,  6 ) ); // Vértice 29 F
forma.vertices.push( new THREE.Vector3( -3,  4,  8 ) ); // Vértice 30 G
forma.vertices.push( new THREE.Vector3(  3,  4,  8 ) ); // Vértice 31 H

//Pata trasera derecha
forma.vertices.push( new THREE.Vector3( -3,  4, -6 ) ); // Vértice 32 A
forma.vertices.push( new THREE.Vector3( -1,  4, -6 ) ); // Vértice 33 B
forma.vertices.push( new THREE.Vector3( -3,  4, -4 ) ); // Vértice 34 C
forma.vertices.push( new THREE.Vector3( -1,  4, -4 ) ); // Vértice 35 D
forma.vertices.push( new THREE.Vector3( -3,  0, -6 ) ); // Vértice 36 E
forma.vertices.push( new THREE.Vector3( -1,  0, -6 ) ); // Vértice 37 F
forma.vertices.push( new THREE.Vector3( -3,  0, -4 ) ); // Vértice 38 G
forma.vertices.push( new THREE.Vector3( -1,  0, -4 ) ); // Vértice 39 H

//Pata trasera izquierda
forma.vertices.push( new THREE.Vector3( 1,  4, -6 ) ); // Vértice 40 A
forma.vertices.push( new THREE.Vector3( 3,  4, -6 ) ); // Vértice 41 B
forma.vertices.push( new THREE.Vector3( 1,  4, -4 ) ); // Vértice 42 C
forma.vertices.push( new THREE.Vector3( 3,  4, -4 ) ); // Vértice 43 D
forma.vertices.push( new THREE.Vector3( 1,  0, -6 ) ); // Vértice 44 E
forma.vertices.push( new THREE.Vector3( 3,  0, -6 ) ); // Vértice 45 F
forma.vertices.push( new THREE.Vector3( 1,  0, -4 ) ); // Vértice 46 G
forma.vertices.push( new THREE.Vector3( 3,  0, -4 ) ); // Vértice 47 H

//Pata delantera derecha
forma.vertices.push( new THREE.Vector3( -3,  4,  0 ) ); // Vértice 48 A
forma.vertices.push( new THREE.Vector3( -1,  4,  0 ) ); // Vértice 49 B
forma.vertices.push( new THREE.Vector3( -3,  4,  2 ) ); // Vértice 50 C
forma.vertices.push( new THREE.Vector3( -1,  4,  2 ) ); // Vértice 51 D
forma.vertices.push( new THREE.Vector3( -3,  0,  0 ) ); // Vértice 52 E
forma.vertices.push( new THREE.Vector3( -1,  0,  0 ) ); // Vértice 53 F
forma.vertices.push( new THREE.Vector3( -3,  0,  2 ) ); // Vértice 54 G
forma.vertices.push( new THREE.Vector3( -1,  0,  2 ) ); // Vértice 55 H

//Pata delantera izquierda
forma.vertices.push( new THREE.Vector3( 1,  4,  0 ) ); // Vértice 56 A
forma.vertices.push( new THREE.Vector3( 3,  4,  0 ) ); // Vértice 57 B
forma.vertices.push( new THREE.Vector3( 1,  4,  2 ) ); // Vértice 58 C
forma.vertices.push( new THREE.Vector3( 3,  4,  2 ) ); // Vértice 59 D
forma.vertices.push( new THREE.Vector3( 1,  0,  0 ) ); // Vértice 60 E
forma.vertices.push( new THREE.Vector3( 3,  0,  0 ) ); // Vértice 61 F
forma.vertices.push( new THREE.Vector3( 1,  0,  2 ) ); // Vértice 62 G
forma.vertices.push( new THREE.Vector3( 3,  0,  2 ) ); // Vértice 63 H

//Oreja derecha
forma.vertices.push( new THREE.Vector3( -3, 12,  2 ) ); // Vértice 64 A
forma.vertices.push( new THREE.Vector3( -1, 12,  2 ) ); // Vértice 65 B
forma.vertices.push( new THREE.Vector3( -3, 12,  4 ) ); // Vértice 66 C
forma.vertices.push( new THREE.Vector3( -1, 12,  4 ) ); // Vértice 67 D
forma.vertices.push( new THREE.Vector3( -3, 10,  2 ) ); // Vértice 68 E
forma.vertices.push( new THREE.Vector3( -1, 10,  2 ) ); // Vértice 69 F
forma.vertices.push( new THREE.Vector3( -3, 10,  4 ) ); // Vértice 70 G
forma.vertices.push( new THREE.Vector3( -1, 10,  4 ) ); // Vértice 71 H

//Oreja izquierda
forma.vertices.push( new THREE.Vector3( 1, 12,  2 ) ); // Vértice 72 A
forma.vertices.push( new THREE.Vector3( 3, 12,  2 ) ); // Vértice 73 B
forma.vertices.push( new THREE.Vector3( 1, 12,  4 ) ); // Vértice 74 C
forma.vertices.push( new THREE.Vector3( 3, 12,  4 ) ); // Vértice 75 D
forma.vertices.push( new THREE.Vector3( 1, 10,  2 ) ); // Vértice 76 E
forma.vertices.push( new THREE.Vector3( 3, 10,  2 ) ); // Vértice 77 F
forma.vertices.push( new THREE.Vector3( 1, 10,  4 ) ); // Vértice 78 G
forma.vertices.push( new THREE.Vector3( 3, 10,  4 ) ); // Vértice 79 H

//Lengua
forma.vertices.push( new THREE.Vector3( -1,  4,  4 ) ); // Vértice 80 A
forma.vertices.push( new THREE.Vector3(  1,  4,  4 ) ); // Vértice 81 B
forma.vertices.push( new THREE.Vector3( -1,  4,  6 ) ); // Vértice 82 C
forma.vertices.push( new THREE.Vector3(  1,  4,  6 ) ); // Vértice 83 D
forma.vertices.push( new THREE.Vector3( -1,  2,  4 ) ); // Vértice 84 E
forma.vertices.push( new THREE.Vector3(  1,  2,  4 ) ); // Vértice 85 F
forma.vertices.push( new THREE.Vector3( -1,  2,  6 ) ); // Vértice 86 G
forma.vertices.push( new THREE.Vector3(  1,  2,  6 ) ); // Vértice 87 H

//Cuerpo
forma.faces.push( new THREE.Face3( 3, 6, 7 ) ); // Cara 0
forma.faces.push( new THREE.Face3( 3, 2, 6 ) ); // Cara 1
forma.faces.push( new THREE.Face3( 2, 4, 6 ) ); // Cara 2
forma.faces.push( new THREE.Face3( 2, 0, 4 ) ); // Cara 3
forma.faces.push( new THREE.Face3( 0, 5, 4 ) ); // Cara 4
forma.faces.push( new THREE.Face3( 0, 1, 5 ) ); // Cara 5
forma.faces.push( new THREE.Face3( 1, 7, 5 ) ); // Cara 6
forma.faces.push( new THREE.Face3( 1, 3, 7 ) ); // Cara 7
forma.faces.push( new THREE.Face3( 1, 2, 3 ) ); // Cara 8
forma.faces.push( new THREE.Face3( 1, 0, 2 ) ); // Cara 9
forma.faces.push( new THREE.Face3( 5, 7, 6 ) ); // Cara 10
forma.faces.push( new THREE.Face3( 5, 6, 4 ) ); // Cara 11

//Cabeza
forma.faces.push( new THREE.Face3( 11, 14, 15 ) ); // Cara 12
forma.faces.push( new THREE.Face3( 11, 10, 14 ) ); // Cara 13
forma.faces.push( new THREE.Face3( 10, 12, 14 ) ); // Cara 14
forma.faces.push( new THREE.Face3( 10,  8, 12 ) ); // Cara 15
forma.faces.push( new THREE.Face3(  8, 13, 12 ) ); // Cara 16
forma.faces.push( new THREE.Face3(  8,  9, 13 ) ); // Cara 17
forma.faces.push( new THREE.Face3(  9, 15, 13 ) ); // Cara 18
forma.faces.push( new THREE.Face3(  9, 11, 15 ) ); // Cara 19
forma.faces.push( new THREE.Face3(  9, 10, 11 ) ); // Cara 20
forma.faces.push( new THREE.Face3(  9,  8, 10 ) ); // Cara 21
forma.faces.push( new THREE.Face3( 13, 15, 14 ) ); // Cara 22
forma.faces.push( new THREE.Face3( 13, 14, 12 ) ); // Cara 23

//Cola
forma.faces.push( new THREE.Face3( 19, 22, 23 ) ); // Cara 24
forma.faces.push( new THREE.Face3( 19, 18, 22 ) ); // Cara 25
forma.faces.push( new THREE.Face3( 18, 20, 22 ) ); // Cara 26
forma.faces.push( new THREE.Face3( 18, 16, 20 ) ); // Cara 27
forma.faces.push( new THREE.Face3( 16, 21, 20 ) ); // Cara 28
forma.faces.push( new THREE.Face3( 16, 17, 21 ) ); // Cara 29
forma.faces.push( new THREE.Face3( 17, 23, 21 ) ); // Cara 30
forma.faces.push( new THREE.Face3( 17, 19, 23 ) ); // Cara 31
forma.faces.push( new THREE.Face3( 17, 18, 19 ) ); // Cara 32
forma.faces.push( new THREE.Face3( 17, 16, 18 ) ); // Cara 33
forma.faces.push( new THREE.Face3( 21, 23, 22 ) ); // Cara 34
forma.faces.push( new THREE.Face3( 21, 22, 20 ) ); // Cara 35

//Hocico
forma.faces.push( new THREE.Face3( 27, 30, 31 ) ); // Cara 36
forma.faces.push( new THREE.Face3( 27, 26, 30 ) ); // Cara 37
forma.faces.push( new THREE.Face3( 26, 28, 30 ) ); // Cara 38
forma.faces.push( new THREE.Face3( 26, 24, 28 ) ); // Cara 39
forma.faces.push( new THREE.Face3( 24, 29, 28 ) ); // Cara 40
forma.faces.push( new THREE.Face3( 24, 25, 29 ) ); // Cara 41
forma.faces.push( new THREE.Face3( 25, 31, 29 ) ); // Cara 42
forma.faces.push( new THREE.Face3( 25, 27, 31 ) ); // Cara 43
forma.faces.push( new THREE.Face3( 25, 26, 27 ) ); // Cara 44
forma.faces.push( new THREE.Face3( 25, 24, 26 ) ); // Cara 45
forma.faces.push( new THREE.Face3( 29, 31, 30 ) ); // Cara 46
forma.faces.push( new THREE.Face3( 29, 30, 28 ) ); // Cara 47

//Pata trasera derecha
forma.faces.push( new THREE.Face3( 35, 38, 39 ) ); // Cara 48
forma.faces.push( new THREE.Face3( 35, 34, 38 ) ); // Cara 49
forma.faces.push( new THREE.Face3( 34, 36, 38 ) ); // Cara 50
forma.faces.push( new THREE.Face3( 34, 32, 36 ) ); // Cara 51
forma.faces.push( new THREE.Face3( 32, 37, 36 ) ); // Cara 52
forma.faces.push( new THREE.Face3( 32, 33, 37 ) ); // Cara 53
forma.faces.push( new THREE.Face3( 33, 39, 37 ) ); // Cara 54
forma.faces.push( new THREE.Face3( 33, 35, 39 ) ); // Cara 55
forma.faces.push( new THREE.Face3( 33, 34, 35 ) ); // Cara 56
forma.faces.push( new THREE.Face3( 33, 32, 34 ) ); // Cara 57
forma.faces.push( new THREE.Face3( 37, 39, 38 ) ); // Cara 58
forma.faces.push( new THREE.Face3( 37, 38, 36 ) ); // Cara 59

//Pata trasera izquierda
forma.faces.push( new THREE.Face3( 43, 46, 47 ) ); // Cara 60
forma.faces.push( new THREE.Face3( 43, 42, 46 ) ); // Cara 61
forma.faces.push( new THREE.Face3( 42, 44, 46 ) ); // Cara 62
forma.faces.push( new THREE.Face3( 42, 40, 44 ) ); // Cara 63
forma.faces.push( new THREE.Face3( 40, 45, 44 ) ); // Cara 64
forma.faces.push( new THREE.Face3( 40, 41, 45 ) ); // Cara 65
forma.faces.push( new THREE.Face3( 41, 47, 45 ) ); // Cara 66
forma.faces.push( new THREE.Face3( 41, 43, 47 ) ); // Cara 67
forma.faces.push( new THREE.Face3( 41, 42, 43 ) ); // Cara 68
forma.faces.push( new THREE.Face3( 41, 40, 42 ) ); // Cara 69
forma.faces.push( new THREE.Face3( 45, 47, 46 ) ); // Cara 70
forma.faces.push( new THREE.Face3( 45, 46, 44 ) ); // Cara 71

//Pata delantera derecha
forma.faces.push( new THREE.Face3( 51, 54, 55 ) ); // Cara 72
forma.faces.push( new THREE.Face3( 51, 50, 54 ) ); // Cara 73
forma.faces.push( new THREE.Face3( 50, 52, 54 ) ); // Cara 74
forma.faces.push( new THREE.Face3( 50, 48, 52 ) ); // Cara 75
forma.faces.push( new THREE.Face3( 48, 53, 52 ) ); // Cara 76
forma.faces.push( new THREE.Face3( 48, 49, 53 ) ); // Cara 77
forma.faces.push( new THREE.Face3( 49, 55, 53 ) ); // Cara 78
forma.faces.push( new THREE.Face3( 49, 51, 55 ) ); // Cara 79
forma.faces.push( new THREE.Face3( 49, 50, 51 ) ); // Cara 80
forma.faces.push( new THREE.Face3( 49, 48, 50 ) ); // Cara 81
forma.faces.push( new THREE.Face3( 53, 55, 54 ) ); // Cara 82
forma.faces.push( new THREE.Face3( 53, 54, 52 ) ); // Cara 83

//Pata delantera izquierda
forma.faces.push( new THREE.Face3( 59, 62, 63 ) ); // Cara 84
forma.faces.push( new THREE.Face3( 59, 58, 62 ) ); // Cara 85
forma.faces.push( new THREE.Face3( 58, 60, 62 ) ); // Cara 86
forma.faces.push( new THREE.Face3( 58, 56, 60 ) ); // Cara 87
forma.faces.push( new THREE.Face3( 56, 61, 60 ) ); // Cara 88
forma.faces.push( new THREE.Face3( 56, 57, 61 ) ); // Cara 89
forma.faces.push( new THREE.Face3( 57, 63, 61 ) ); // Cara 90
forma.faces.push( new THREE.Face3( 57, 59, 63 ) ); // Cara 91
forma.faces.push( new THREE.Face3( 57, 58, 59 ) ); // Cara 92
forma.faces.push( new THREE.Face3( 57, 56, 58 ) ); // Cara 93
forma.faces.push( new THREE.Face3( 61, 63, 62 ) ); // Cara 94
forma.faces.push( new THREE.Face3( 61, 62, 60 ) ); // Cara 95

//Oreja derecha
forma.faces.push( new THREE.Face3( 67, 70, 71 ) ); // Cara 96
forma.faces.push( new THREE.Face3( 67, 66, 70 ) ); // Cara 97
forma.faces.push( new THREE.Face3( 66, 68, 70 ) ); // Cara 98
forma.faces.push( new THREE.Face3( 66, 64, 68 ) ); // Cara 99
forma.faces.push( new THREE.Face3( 64, 69, 68 ) ); // Cara 100
forma.faces.push( new THREE.Face3( 64, 65, 69 ) ); // Cara 101
forma.faces.push( new THREE.Face3( 65, 71, 69 ) ); // Cara 102
forma.faces.push( new THREE.Face3( 65, 67, 71 ) ); // Cara 103
forma.faces.push( new THREE.Face3( 65, 66, 67 ) ); // Cara 104
forma.faces.push( new THREE.Face3( 65, 64, 66 ) ); // Cara 105
forma.faces.push( new THREE.Face3( 69, 71, 70 ) ); // Cara 106
forma.faces.push( new THREE.Face3( 69, 70, 68 ) ); // Cara 107

//Oreja izquierda
forma.faces.push( new THREE.Face3( 75, 78, 79 ) ); // Cara 108
forma.faces.push( new THREE.Face3( 75, 74, 78 ) ); // Cara 109
forma.faces.push( new THREE.Face3( 74, 76, 78 ) ); // Cara 110
forma.faces.push( new THREE.Face3( 74, 72, 76 ) ); // Cara 111
forma.faces.push( new THREE.Face3( 72, 77, 76 ) ); // Cara 112
forma.faces.push( new THREE.Face3( 72, 73, 77 ) ); // Cara 113
forma.faces.push( new THREE.Face3( 73, 79, 77 ) ); // Cara 114
forma.faces.push( new THREE.Face3( 73, 75, 79 ) ); // Cara 115
forma.faces.push( new THREE.Face3( 73, 74, 75 ) ); // Cara 116
forma.faces.push( new THREE.Face3( 73, 72, 74 ) ); // Cara 117
forma.faces.push( new THREE.Face3( 77, 79, 78 ) ); // Cara 118
forma.faces.push( new THREE.Face3( 77, 78, 76 ) ); // Cara 119

//Lengua
forma.faces.push( new THREE.Face3( 83, 86, 87 ) ); // Cara 120
forma.faces.push( new THREE.Face3( 83, 82, 86 ) ); // Cara 121
forma.faces.push( new THREE.Face3( 82, 84, 86 ) ); // Cara 122
forma.faces.push( new THREE.Face3( 82, 80, 84 ) ); // Cara 123
forma.faces.push( new THREE.Face3( 80, 85, 84 ) ); // Cara 124
forma.faces.push( new THREE.Face3( 80, 81, 85 ) ); // Cara 125
forma.faces.push( new THREE.Face3( 81, 87, 85 ) ); // Cara 126
forma.faces.push( new THREE.Face3( 81, 83, 87 ) ); // Cara 127
forma.faces.push( new THREE.Face3( 81, 82, 83 ) ); // Cara 128
forma.faces.push( new THREE.Face3( 81, 80, 82 ) ); // Cara 129
forma.faces.push( new THREE.Face3( 85, 87, 86 ) ); // Cara 130
forma.faces.push( new THREE.Face3( 85, 86, 84 ) ); // Cara 131

forma.computeBoundingSphere();

forma.computeFaceNormals();

//var material = new THREE.MeshNormalMaterial();

//forma.translate(0,4.8,0);
//var lobo = new THREE.Mesh( forma, materialN );
lobo = new THREE.Mesh( forma, material1 );
lobo.scale.set(0.1,0.1,0.1);
lobo.position.z = -10;
lobo.position.y = 0.5;


//-----------------------------------------------------------------


escena.add( iluminacionRoja );
escena.add( iluminacionVerde );
escena.add( iluminacionAzul );
escena.add( iluminacionBlanca );
escena.add( lobo );
escena.add( pelota );
escena.add( pelota2 );
escena.add( pelota3 );

window.addEventListener( 'keypress', pushar, false );

var campoVision = 60;
var relacionAspecto = window.innerWidth/window.innerHeight;
var planoCercano = 1;
var planoLejano = 1000;

//var camara = new THREE.PerspectiveCamera(campoVision,relacionAspecto,planoCercano,planoLejano);
camara = new THREE.PerspectiveCamera(campoVision,relacionAspecto,planoCercano,planoLejano);
camara.position.x = -15; //-15
camara.position.z = 0; //0
camara.position.y = 15; //15  //0.5 para cámara a ras del suelo
camara.rotateY(-Math.PI/2);
camara.rotateX(-Math.PI/4);   //Comentar esta línea para cámara a ras del suelo
//camara.rotateY(-Math.PI/4);
//camara.rotateX(-Math.PI/4);

//var renderizador = new THREE.WebGLRenderer();
renderizador = new THREE.WebGLRenderer();

renderizador.setSize(window.innerWidth,window.innerHeight);

renderizador.shadowMapEnabled = true;
iluminacionRoja.castShadow = true;
iluminacionVerde.castShadow = true;
iluminacionAzul.castShadow = true;
iluminacionBlanca.castShadow = true;
lobo.castShadow = true;
pelota.castShadow = true;
pelota2.castShadow = true;
pelota3.castShadow = true;

document.body.appendChild( renderizador.domElement );
//renderizador.render( escena, camara );

raycaster1 = new THREE.Raycaster( pelota.position, new THREE.Vector3( 0, 0, -1 ) );
raycaster2 = new THREE.Raycaster( pelota.position, new THREE.Vector3( 0, 0, 1 ) );
raycaster3 = new THREE.Raycaster( pelota2.position, new THREE.Vector3( 0, 0, -1 ) );
raycaster4 = new THREE.Raycaster( pelota2.position, new THREE.Vector3( 0, 0, 1 ) );
raycaster5 = new THREE.Raycaster( pelota3.position, new THREE.Vector3( 0, 0, -1 ) );
raycaster6 = new THREE.Raycaster( pelota3.position, new THREE.Vector3( 0, 0, 1 ) );
raycasterPI = new THREE.Raycaster( pelota.position, new THREE.Vector3( 0, 0, -1 ) );
raycasterPD = new THREE.Raycaster( pelota.position, new THREE.Vector3( 0, 0, 1 ) );
raycasterPI2 = new THREE.Raycaster( pelota2.position, new THREE.Vector3( 0, 0, -1 ) );
raycasterPD2 = new THREE.Raycaster( pelota2.position, new THREE.Vector3( 0, 0, 1 ) );
raycasterPI3 = new THREE.Raycaster( pelota3.position, new THREE.Vector3( 0, 0, -1 ) );
raycasterPD3 = new THREE.Raycaster( pelota3.position, new THREE.Vector3( 0, 0, 1 ) );

stepPzF = 0.1;
stepPz = stepPzF;

stepPzF2 = 0.3;
stepPz2 = stepPzF2;

stepPzF3 = 0.5;
stepPz3 = stepPzF3;

}

function loop() {

  obstaculo1 = raycaster1.intersectObject( lobo );
  obstaculo2 = raycaster2.intersectObject( lobo );
  obstaculo3 = raycaster3.intersectObject( lobo );
  obstaculo4 = raycaster4.intersectObject( lobo );
  obstaculo5 = raycaster5.intersectObject( lobo );
  obstaculo6 = raycaster6.intersectObject( lobo );
  obstaculoPI = raycasterPI.intersectObject( pared1M );
  obstaculoPD = raycasterPD.intersectObject( pared2M );
  obstaculoPI2 = raycasterPI2.intersectObject( pared1M );
  obstaculoPD2 = raycasterPD2.intersectObject( pared2M );
  obstaculoPI3 = raycasterPI3.intersectObject( pared1M );
  obstaculoPD3 = raycasterPD3.intersectObject( pared2M );

  if ( obstaculoPI.length > 0 && (obstaculoPI[0].distance <= 0.5) )
    stepPz = stepPzF;
  else if ( obstaculoPD.length > 0 && (obstaculoPD[0].distance <= 0.5) )
    stepPz = -stepPzF;
  else if ( obstaculo1.length > 0 && (obstaculo1[0].distance <= 0.5) )
    stepPz = stepPzF;
  else if ( obstaculo2.length > 0 && (obstaculo2[0].distance <= 0.5) )
    stepPz = -stepPz;
  else if ( obstaculoPI2.length > 0 && (obstaculoPI2[0].distance <= 0.8) )
    stepPz2 = stepPzF2;
  else if ( obstaculoPD2.length > 0 && (obstaculoPD2[0].distance <= 0.8) )
    stepPz2 = -stepPzF2;
  else if ( obstaculo3.length > 0 && (obstaculo3[0].distance <= 0.8) )
    stepPz2 = stepPzF2;
  else if ( obstaculo4.length > 0 && (obstaculo4[0].distance <= 0.8) )
    stepPz2 = -stepPz2;
  else if ( obstaculoPI3.length > 0 && (obstaculoPI3[0].distance <= 1) )
    stepPz3 = stepPzF3;
  else if ( obstaculoPD3.length > 0 && (obstaculoPD3[0].distance <= 1) )
    stepPz3 = -stepPzF3;
  else if ( obstaculo5.length > 0 && (obstaculo5[0].distance <= 1) )
    stepPz3 = stepPzF3;
  else if ( obstaculo6.length > 0 && (obstaculo6[0].distance <= 1) )
    stepPz3 = -stepPz3;

  pelota.position.z += stepPz;
  pelota2.position.z += stepPz2;
  pelota3.position.z += stepPz3;

  raycaster1.set( pelota.position, new THREE.Vector3( 0, 0, -1 ) );
  raycaster2.set( pelota.position, new THREE.Vector3( 0, 0, 1 ) );
  raycaster3.set( pelota2.position, new THREE.Vector3( 0, 0, -1 ) );
  raycaster4.set( pelota2.position, new THREE.Vector3( 0, 0, 1 ) );
  raycaster5.set( pelota3.position, new THREE.Vector3( 0, 0, -1 ) );
  raycaster6.set( pelota3.position, new THREE.Vector3( 0, 0, 1 ) );
  raycasterPI.set( pelota.position, new THREE.Vector3( 0, 0, -1 ) );
  raycasterPD.set( pelota.position, new THREE.Vector3( 0, 0, 1 ) );
  raycasterPI2.set( pelota2.position, new THREE.Vector3( 0, 0, -1 ) );
  raycasterPD2.set( pelota2.position, new THREE.Vector3( 0, 0, 1 ) );
  raycasterPI3.set( pelota3.position, new THREE.Vector3( 0, 0, -1 ) );
  raycasterPD3.set( pelota3.position, new THREE.Vector3( 0, 0, 1 ) );
  
  renderizador.render( escena, camara );
  requestAnimationFrame( loop );
}

var lobo, pelota, pelota2, pelota3;
var pared1M, pared2M, pared3M, pared4M;
var camara, renderizador, escena, cubo, ContTextura;
var stepPzF, stepPz;
var raycaster1, raycaster2;
var obstaculo1, obstaculo2;
var raycasterPI, raycasterPD;
var obstaculoPI, obstaculoPI;

setup();
loop();
