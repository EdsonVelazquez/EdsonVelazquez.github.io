var forma = new THREE.Geometry();

forma.vertices.push( new THREE.Vector3( 4, -6,  0 ) ); // Vértice 0 A
forma.vertices.push( new THREE.Vector3( 4, -2,  0 ) ); // Vértice 1 B
forma.vertices.push( new THREE.Vector3( 4, -6,  6 ) ); // Vértice 2 C
forma.vertices.push( new THREE.Vector3( 4, -2,  6 ) ); // Vértice 3 D

forma.vertices.push( new THREE.Vector3(-4, -6,  0 ) ); // Vértice 4 E
forma.vertices.push( new THREE.Vector3(-4, -2,  0 ) ); // Vértice 5 F
forma.vertices.push( new THREE.Vector3(-4, -6,  6 ) ); // Vértice 6 G
forma.vertices.push( new THREE.Vector3(-4, -2,  6 ) ); // Vértice 7 H

forma.vertices.push( new THREE.Vector3( 4,  2,  0 ) ); // Vértice 8 I
forma.vertices.push( new THREE.Vector3( 4,  6,  0 ) ); // Vértice 9 J
forma.vertices.push( new THREE.Vector3( 4,  2,  6 ) ); // Vértice 10 K
forma.vertices.push( new THREE.Vector3( 4,  6,  6 ) ); // Vértice 11 L

forma.vertices.push( new THREE.Vector3(-4,  2,  0 ) ); // Vértice 12 M
forma.vertices.push( new THREE.Vector3(-4,  6,  0 ) ); // Vértice 13 N
forma.vertices.push( new THREE.Vector3(-4,  2,  6 ) ); // Vértice 14 O
forma.vertices.push( new THREE.Vector3(-4,  6,  6 ) ); // Vértice 15 P

forma.vertices.push( new THREE.Vector3( 4, -2, 18 ) ); // Vértice 16 Q
forma.vertices.push( new THREE.Vector3(-4, -2, 18 ) ); // Vértice 17 R
forma.vertices.push( new THREE.Vector3( 4,  2, 18 ) ); // Vértice 18 S
forma.vertices.push( new THREE.Vector3(-4,  2, 18 ) ); // Vértice 19 T

forma.vertices.push( new THREE.Vector3( 4, -4, 18 ) ); // Vértice 20 U
forma.vertices.push( new THREE.Vector3(-4, -4, 18 ) ); // Vértice 21 V
forma.vertices.push( new THREE.Vector3( 4,  4, 18 ) ); // Vértice 22 W
forma.vertices.push( new THREE.Vector3(-4,  4, 18 ) ); // Vértice 23 X

forma.vertices.push( new THREE.Vector3( 4, -4, 26 ) ); // Vértice 24 Y
forma.vertices.push( new THREE.Vector3(-4, -4, 26 ) ); // Vértice 25 Z
forma.vertices.push( new THREE.Vector3( 4,  4, 26 ) ); // Vértice 26 AA
forma.vertices.push( new THREE.Vector3(-4,  4, 26 ) ); // Vértice 27 BB

forma.faces.push( new THREE.Face3( 3, 0, 1 ) ); // Cara 0
forma.faces.push( new THREE.Face3( 3, 2, 0 ) ); // Cara 1
forma.faces.push( new THREE.Face3( 2, 4, 0 ) ); // Cara 2
forma.faces.push( new THREE.Face3( 2, 6, 4 ) ); // Cara 3
forma.faces.push( new THREE.Face3( 6, 5, 4 ) ); // Cara 4
forma.faces.push( new THREE.Face3( 6, 7, 5 ) ); // Cara 5
forma.faces.push( new THREE.Face3( 7, 1, 5 ) ); // Cara 6
forma.faces.push( new THREE.Face3( 7, 3, 1 ) ); // Cara 7
forma.faces.push( new THREE.Face3( 7, 6, 3 ) ); // Cara 8
forma.faces.push( new THREE.Face3( 3, 6, 2 ) ); // Cara 9
forma.faces.push( new THREE.Face3( 5, 1, 4 ) ); // Cara 10
forma.faces.push( new THREE.Face3( 0, 4, 1 ) ); // Cara 11

forma.faces.push( new THREE.Face3(11, 8, 9 ) ); // Cara 12
forma.faces.push( new THREE.Face3(11,10, 8 ) ); // Cara 13
forma.faces.push( new THREE.Face3(10,12, 8 ) ); // Cara 14
forma.faces.push( new THREE.Face3(10,14,12 ) ); // Cara 15
forma.faces.push( new THREE.Face3(14,13,12 ) ); // Cara 16
forma.faces.push( new THREE.Face3(14,15,13 ) ); // Cara 17
forma.faces.push( new THREE.Face3(15, 9,13 ) ); // Cara 18
forma.faces.push( new THREE.Face3(15,11, 9 ) ); // Cara 19
forma.faces.push( new THREE.Face3(15,14,11 ) ); // Cara 20
forma.faces.push( new THREE.Face3(11,14,10 ) ); // Cara 21
forma.faces.push( new THREE.Face3(13, 9,12 ) ); // Cara 22
forma.faces.push( new THREE.Face3( 8,12, 9 ) ); // Cara 23

forma.faces.push( new THREE.Face3(18, 3,10 ) ); // Cara 24
forma.faces.push( new THREE.Face3(18,16, 3 ) ); // Cara 25
forma.faces.push( new THREE.Face3(16, 7, 3 ) ); // Cara 26
forma.faces.push( new THREE.Face3(16,17, 7 ) ); // Cara 27
forma.faces.push( new THREE.Face3(17,14, 7 ) ); // Cara 28
forma.faces.push( new THREE.Face3(17,19,14 ) ); // Cara 29
forma.faces.push( new THREE.Face3(19,10,14 ) ); // Cara 30
forma.faces.push( new THREE.Face3(19,18,10 ) ); // Cara 31
forma.faces.push( new THREE.Face3(19,17,18 ) ); // Cara 32
forma.faces.push( new THREE.Face3(18,17,16 ) ); // Cara 33
forma.faces.push( new THREE.Face3(14,10, 7 ) ); // Cara 34
forma.faces.push( new THREE.Face3( 3, 7,10 ) ); // Cara 35

forma.faces.push( new THREE.Face3(26,20,22 ) ); // Cara 36
forma.faces.push( new THREE.Face3(26,24,20 ) ); // Cara 37
forma.faces.push( new THREE.Face3(24,21,20 ) ); // Cara 38
forma.faces.push( new THREE.Face3(24,25,21 ) ); // Cara 39
forma.faces.push( new THREE.Face3(25,23,21 ) ); // Cara 40
forma.faces.push( new THREE.Face3(25,27,23 ) ); // Cara 41
forma.faces.push( new THREE.Face3(27,22,23 ) ); // Cara 42
forma.faces.push( new THREE.Face3(27,26,22 ) ); // Cara 43
forma.faces.push( new THREE.Face3(27,25,26 ) ); // Cara 44
forma.faces.push( new THREE.Face3(26,25,24 ) ); // Cara 45
forma.faces.push( new THREE.Face3(23,22,21 ) ); // Cara 46
forma.faces.push( new THREE.Face3(20,21,22 ) ); // Cara 47

forma.computeBoundingSphere();

forma.computeFaceNormals();

var material = new THREE.MeshNormalMaterial();

var malla = new THREE.Mesh( forma, material );
malla.rotateX(Math.PI/4);
malla.rotateZ(Math.PI/8);

var escena = new THREE.Scene();
escena.add( malla );

var camara = new THREE.PerspectiveCamera();
camara.position.z = 100;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, 
                      window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
