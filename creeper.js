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

forma.faces.push( new THREE.Face3( 3, 1, 0 ) ); // Cara 0
forma.faces.push( new THREE.Face3( 3, 0, 2 ) ); // Cara 1
forma.faces.push( new THREE.Face3( 2, 0, 4 ) ); // Cara 2
forma.faces.push( new THREE.Face3( 2, 4, 6 ) ); // Cara 3
forma.faces.push( new THREE.Face3( 6, 4, 5 ) ); // Cara 4
forma.faces.push( new THREE.Face3( 6, 5, 7 ) ); // Cara 5
forma.faces.push( new THREE.Face3( 7, 5, 1 ) ); // Cara 6
forma.faces.push( new THREE.Face3( 7, 1, 3 ) ); // Cara 7
forma.faces.push( new THREE.Face3( 7, 3, 6 ) ); // Cara 8
forma.faces.push( new THREE.Face3( 3, 2, 6 ) ); // Cara 9
forma.faces.push( new THREE.Face3( 5, 4, 1 ) ); // Cara 10
forma.faces.push( new THREE.Face3( 0, 1, 4 ) ); // Cara 11

/*forma.faces.push( new THREE.Face3( 0, 0, 0 ) ); // Cara 12
forma.faces.push( new THREE.Face3( 0, 0, 0 ) ); // Cara 13
forma.faces.push( new THREE.Face3( 0, 0, 0 ) ); // Cara 14
forma.faces.push( new THREE.Face3( 0, 0, 0 ) ); // Cara 15
forma.faces.push( new THREE.Face3( 0, 0, 0 ) ); // Cara 16
forma.faces.push( new THREE.Face3( 0, 0, 0 ) ); // Cara 17
forma.faces.push( new THREE.Face3( 0, 0, 0 ) ); // Cara 18
forma.faces.push( new THREE.Face3( 0, 0, 0 ) ); // Cara 19
forma.faces.push( new THREE.Face3( 0, 0, 0 ) ); // Cara 20
forma.faces.push( new THREE.Face3( 0, 0, 0 ) ); // Cara 21
forma.faces.push( new THREE.Face3( 0, 0, 0 ) ); // Cara 22
forma.faces.push( new THREE.Face3( 0, 0, 0 ) ); // Cara 23*/

forma.computeBoundingSphere();

forma.computeFaceNormals();

var material = new THREE.MeshNormalMaterial();

var malla = new THREE.Mesh( forma, material );
//malla.rotateX(Math.PI/4);

var escena = new THREE.Scene();
escena.add( malla );

var camara = new THREE.PerspectiveCamera();
camara.position.z = 100;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, 
                      window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
