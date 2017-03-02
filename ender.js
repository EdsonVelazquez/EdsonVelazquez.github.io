var forma = new THREE.Geometry();

//Pie derecho
forma.vertices.push( new THREE.Vector3(  1,  0, -3 ) ); // Vértice 0 A
forma.vertices.push( new THREE.Vector3(  1,  0, -1 ) ); // Vértice 1 B
forma.vertices.push( new THREE.Vector3(  1,  8, -3 ) ); // Vértice 2 C
forma.vertices.push( new THREE.Vector3(  1,  8, -1 ) ); // Vértice 3 D
forma.vertices.push( new THREE.Vector3( -1,  0, -3 ) ); // Vértice 4 E
forma.vertices.push( new THREE.Vector3( -1,  0, -1 ) ); // Vértice 5 F
forma.vertices.push( new THREE.Vector3( -1,  8, -3 ) ); // Vértice 6 G
forma.vertices.push( new THREE.Vector3( -1,  8, -1 ) ); // Vértice 7 H

//Pie izquierdo
forma.vertices.push( new THREE.Vector3(  1,  0,  1 ) ); // Vértice 8  A
forma.vertices.push( new THREE.Vector3(  1,  0,  3 ) ); // Vértice 9  B
forma.vertices.push( new THREE.Vector3(  1,  8,  1 ) ); // Vértice 10 C
forma.vertices.push( new THREE.Vector3(  1,  8,  3 ) ); // Vértice 11 D
forma.vertices.push( new THREE.Vector3( -1,  0,  1 ) ); // Vértice 12 E
forma.vertices.push( new THREE.Vector3( -1,  0,  3 ) ); // Vértice 13 F
forma.vertices.push( new THREE.Vector3( -1,  8,  1 ) ); // Vértice 14 G
forma.vertices.push( new THREE.Vector3( -1,  8,  3 ) ); // Vértice 15 H

//Cuerpo
forma.vertices.push( new THREE.Vector3(  2,  8, -3 ) ); // Vértice 16 A
forma.vertices.push( new THREE.Vector3(  2,  8,  3 ) ); // Vértice 17 B
forma.vertices.push( new THREE.Vector3(  2, 14, -3 ) ); // Vértice 18 C
forma.vertices.push( new THREE.Vector3(  2, 14,  3 ) ); // Vértice 19 D
forma.vertices.push( new THREE.Vector3( -2,  8, -3 ) ); // Vértice 20 E
forma.vertices.push( new THREE.Vector3( -2,  8,  3 ) ); // Vértice 21 F
forma.vertices.push( new THREE.Vector3( -2, 14, -3 ) ); // Vértice 22 G
forma.vertices.push( new THREE.Vector3( -2, 14,  3 ) ); // Vértice 23 H

//Cabeza
forma.vertices.push( new THREE.Vector3(  3, 14, -3 ) ); // Vértice 24 A
forma.vertices.push( new THREE.Vector3(  3, 14,  3 ) ); // Vértice 25 B
forma.vertices.push( new THREE.Vector3(  3, 21, -3 ) ); // Vértice 26 C
forma.vertices.push( new THREE.Vector3(  3, 21,  3 ) ); // Vértice 27 D
forma.vertices.push( new THREE.Vector3( -3, 14, -3 ) ); // Vértice 28 E
forma.vertices.push( new THREE.Vector3( -3, 14,  3 ) ); // Vértice 29 F
forma.vertices.push( new THREE.Vector3( -3, 21, -3 ) ); // Vértice 30 G
forma.vertices.push( new THREE.Vector3( -3, 21,  3 ) ); // Vértice 31 H

//Brazo derecho
forma.vertices.push( new THREE.Vector3(  7, 12, -5 ) ); // Vértice 32 A
forma.vertices.push( new THREE.Vector3(  7, 12, -3 ) ); // Vértice 33 B
forma.vertices.push( new THREE.Vector3(  7, 14, -5 ) ); // Vértice 34 C
forma.vertices.push( new THREE.Vector3(  7, 14, -3 ) ); // Vértice 35 D
forma.vertices.push( new THREE.Vector3( -1, 12, -5 ) ); // Vértice 36 E
forma.vertices.push( new THREE.Vector3( -1, 12, -3 ) ); // Vértice 37 F
forma.vertices.push( new THREE.Vector3( -1, 14, -5 ) ); // Vértice 38 G
forma.vertices.push( new THREE.Vector3( -1, 14, -3 ) ); // Vértice 39 H

//Brazo izquierdo
forma.vertices.push( new THREE.Vector3(  7, 12,  3 ) ); // Vértice 40 A
forma.vertices.push( new THREE.Vector3(  7, 12,  5 ) ); // Vértice 41 B
forma.vertices.push( new THREE.Vector3(  7, 14,  3 ) ); // Vértice 42 C
forma.vertices.push( new THREE.Vector3(  7, 14,  5 ) ); // Vértice 43 D
forma.vertices.push( new THREE.Vector3( -1, 12,  3 ) ); // Vértice 44 E
forma.vertices.push( new THREE.Vector3( -1, 12,  5 ) ); // Vértice 45 F
forma.vertices.push( new THREE.Vector3( -1, 14,  3 ) ); // Vértice 46 G
forma.vertices.push( new THREE.Vector3( -1, 14,  5 ) ); // Vértice 47 H

/*
//Pie derecho
forma.faces.push( new THREE.Face3( 3, 0, 1 ) ); // Cara 0
forma.faces.push( new THREE.Face3( 3, 2, 0 ) ); // Cara 1
forma.faces.push( new THREE.Face3( 2, 4, 0 ) ); // Cara 2
forma.faces.push( new THREE.Face3( 2, 6, 4 ) ); // Cara 3
forma.faces.push( new THREE.Face3( 6, 5, 4 ) ); // Cara 4
forma.faces.push( new THREE.Face3( 6, 7, 5 ) ); // Cara 5
forma.faces.push( new THREE.Face3( 7, 1, 5 ) ); // Cara 6
forma.faces.push( new THREE.Face3( 7, 3, 1 ) ); // Cara 7
forma.faces.push( new THREE.Face3( 7, 2, 3 ) ); // Cara 8
forma.faces.push( new THREE.Face3( 7, 6, 2 ) ); // Cara 9
forma.faces.push( new THREE.Face3( 5, 1, 0 ) ); // Cara 10
forma.faces.push( new THREE.Face3( 5, 0, 4 ) ); // Cara 11

//Pie izquierdo
forma.faces.push( new THREE.Face3( 11,  8,  9 ) ); // Cara 12
forma.faces.push( new THREE.Face3( 11, 10,  8 ) ); // Cara 13
forma.faces.push( new THREE.Face3( 10, 12,  8 ) ); // Cara 14
forma.faces.push( new THREE.Face3( 10, 14, 12 ) ); // Cara 15
forma.faces.push( new THREE.Face3( 14, 13, 12 ) ); // Cara 16
forma.faces.push( new THREE.Face3( 14, 15, 13 ) ); // Cara 17
forma.faces.push( new THREE.Face3( 15,  9, 13 ) ); // Cara 18
forma.faces.push( new THREE.Face3( 15, 11,  9 ) ); // Cara 19
forma.faces.push( new THREE.Face3( 15, 10, 11 ) ); // Cara 20
forma.faces.push( new THREE.Face3( 15, 14, 10 ) ); // Cara 21
forma.faces.push( new THREE.Face3( 13,  9,  8 ) ); // Cara 22
forma.faces.push( new THREE.Face3( 13,  8, 12 ) ); // Cara 23

//Cuerpo
forma.faces.push( new THREE.Face3( 19, 16, 17 ) ); // Cara 24
forma.faces.push( new THREE.Face3( 19, 18, 16 ) ); // Cara 25
forma.faces.push( new THREE.Face3( 18, 20, 16 ) ); // Cara 26
forma.faces.push( new THREE.Face3( 18, 22, 20 ) ); // Cara 27
forma.faces.push( new THREE.Face3( 22, 21, 20 ) ); // Cara 28
forma.faces.push( new THREE.Face3( 22, 23, 21 ) ); // Cara 29
forma.faces.push( new THREE.Face3( 23, 17, 21 ) ); // Cara 30
forma.faces.push( new THREE.Face3( 23, 19, 17 ) ); // Cara 31
forma.faces.push( new THREE.Face3( 23, 18, 19 ) ); // Cara 32
forma.faces.push( new THREE.Face3( 23, 22, 18 ) ); // Cara 33
forma.faces.push( new THREE.Face3( 21, 17, 16 ) ); // Cara 34
forma.faces.push( new THREE.Face3( 21, 16, 20 ) ); // Cara 35

//Cabeza
forma.faces.push( new THREE.Face3( 27, 24, 25 ) ); // Cara 36
forma.faces.push( new THREE.Face3( 27, 26, 24 ) ); // Cara 37
forma.faces.push( new THREE.Face3( 26, 28, 24 ) ); // Cara 38
forma.faces.push( new THREE.Face3( 26, 30, 28 ) ); // Cara 39
forma.faces.push( new THREE.Face3( 30, 29, 28 ) ); // Cara 40
forma.faces.push( new THREE.Face3( 30, 31, 29 ) ); // Cara 41
forma.faces.push( new THREE.Face3( 31, 25, 29 ) ); // Cara 42
forma.faces.push( new THREE.Face3( 31, 27, 25 ) ); // Cara 43
forma.faces.push( new THREE.Face3( 31, 26, 27 ) ); // Cara 44
forma.faces.push( new THREE.Face3( 31, 30, 26 ) ); // Cara 45
forma.faces.push( new THREE.Face3( 29, 25, 24 ) ); // Cara 46
forma.faces.push( new THREE.Face3( 29, 24, 28 ) ); // Cara 47

//Brazo derecho
forma.faces.push( new THREE.Face3( 35, 32, 33 ) ); // Cara 48
forma.faces.push( new THREE.Face3( 35, 34, 32 ) ); // Cara 49
forma.faces.push( new THREE.Face3( 34, 36, 32 ) ); // Cara 50
forma.faces.push( new THREE.Face3( 34, 38, 36 ) ); // Cara 51
forma.faces.push( new THREE.Face3( 38, 37, 36 ) ); // Cara 52
forma.faces.push( new THREE.Face3( 38, 39, 37 ) ); // Cara 53
forma.faces.push( new THREE.Face3( 39, 33, 37 ) ); // Cara 54
forma.faces.push( new THREE.Face3( 39, 35, 33 ) ); // Cara 55
forma.faces.push( new THREE.Face3( 39, 34, 35 ) ); // Cara 56
forma.faces.push( new THREE.Face3( 39, 38, 34 ) ); // Cara 57
forma.faces.push( new THREE.Face3( 37, 33, 32 ) ); // Cara 58
forma.faces.push( new THREE.Face3( 37, 32, 36 ) ); // Cara 59

//Brazo izquierdo
forma.faces.push( new THREE.Face3( 43, 40, 41 ) ); // Cara 60
forma.faces.push( new THREE.Face3( 43, 42, 40 ) ); // Cara 61
forma.faces.push( new THREE.Face3( 42, 44, 40 ) ); // Cara 62
forma.faces.push( new THREE.Face3( 42, 46, 44 ) ); // Cara 63
forma.faces.push( new THREE.Face3( 46, 45, 44 ) ); // Cara 64
forma.faces.push( new THREE.Face3( 46, 47, 45 ) ); // Cara 65
forma.faces.push( new THREE.Face3( 47, 41, 45 ) ); // Cara 66
forma.faces.push( new THREE.Face3( 47, 43, 41 ) ); // Cara 67
forma.faces.push( new THREE.Face3( 47, 42, 43 ) ); // Cara 68
forma.faces.push( new THREE.Face3( 47, 46, 42 ) ); // Cara 69
forma.faces.push( new THREE.Face3( 45, 41, 40 ) ); // Cara 70
forma.faces.push( new THREE.Face3( 45, 40, 44 ) ); // Cara 71
*/

//Pie derecho
forma.faces.push( new THREE.Face3( 3, 1, 0 ) ); // Cara 0
forma.faces.push( new THREE.Face3( 3, 0, 2 ) ); // Cara 1
forma.faces.push( new THREE.Face3( 2, 0, 4 ) ); // Cara 2
forma.faces.push( new THREE.Face3( 2, 4, 6 ) ); // Cara 3
forma.faces.push( new THREE.Face3( 6, 4, 5 ) ); // Cara 4
forma.faces.push( new THREE.Face3( 6, 5, 7 ) ); // Cara 5
forma.faces.push( new THREE.Face3( 7, 5, 1 ) ); // Cara 6
forma.faces.push( new THREE.Face3( 7, 1, 3 ) ); // Cara 7
forma.faces.push( new THREE.Face3( 7, 3, 2 ) ); // Cara 8
forma.faces.push( new THREE.Face3( 7, 2, 6 ) ); // Cara 9
forma.faces.push( new THREE.Face3( 5, 0, 1 ) ); // Cara 10
forma.faces.push( new THREE.Face3( 5, 4, 0 ) ); // Cara 11

//Pie izquierdo
forma.faces.push( new THREE.Face3( 11,  9,  8 ) ); // Cara 12
forma.faces.push( new THREE.Face3( 11,  8, 10 ) ); // Cara 13
forma.faces.push( new THREE.Face3( 10,  8, 12 ) ); // Cara 14
forma.faces.push( new THREE.Face3( 10, 12, 14 ) ); // Cara 15
forma.faces.push( new THREE.Face3( 14, 12, 13 ) ); // Cara 16
forma.faces.push( new THREE.Face3( 14, 13, 15 ) ); // Cara 17
forma.faces.push( new THREE.Face3( 15, 13,  9 ) ); // Cara 18
forma.faces.push( new THREE.Face3( 15,  9, 11 ) ); // Cara 19
forma.faces.push( new THREE.Face3( 15, 11, 10 ) ); // Cara 20
forma.faces.push( new THREE.Face3( 15, 10, 14 ) ); // Cara 21
forma.faces.push( new THREE.Face3( 13,  8,  9 ) ); // Cara 22
forma.faces.push( new THREE.Face3( 13, 12,  8 ) ); // Cara 23

//Cuerpo
forma.faces.push( new THREE.Face3( 19, 17, 16 ) ); // Cara 24
forma.faces.push( new THREE.Face3( 19, 16, 18 ) ); // Cara 25
forma.faces.push( new THREE.Face3( 18, 16, 20 ) ); // Cara 26
forma.faces.push( new THREE.Face3( 18, 20, 22 ) ); // Cara 27
forma.faces.push( new THREE.Face3( 22, 20, 21 ) ); // Cara 28
forma.faces.push( new THREE.Face3( 22, 21, 23 ) ); // Cara 29
forma.faces.push( new THREE.Face3( 23, 21, 17 ) ); // Cara 30
forma.faces.push( new THREE.Face3( 23, 17, 19 ) ); // Cara 31
forma.faces.push( new THREE.Face3( 23, 19, 18 ) ); // Cara 32
forma.faces.push( new THREE.Face3( 23, 18, 22 ) ); // Cara 33
forma.faces.push( new THREE.Face3( 21, 16, 17 ) ); // Cara 34
forma.faces.push( new THREE.Face3( 21, 20, 16 ) ); // Cara 35

//Cabeza
forma.faces.push( new THREE.Face3( 27, 25, 24 ) ); // Cara 36
forma.faces.push( new THREE.Face3( 27, 24, 26 ) ); // Cara 37
forma.faces.push( new THREE.Face3( 26, 24, 28 ) ); // Cara 38
forma.faces.push( new THREE.Face3( 26, 28, 30 ) ); // Cara 39
forma.faces.push( new THREE.Face3( 30, 28, 29 ) ); // Cara 40
forma.faces.push( new THREE.Face3( 30, 29, 31 ) ); // Cara 41
forma.faces.push( new THREE.Face3( 31, 29, 25 ) ); // Cara 42
forma.faces.push( new THREE.Face3( 31, 25, 27 ) ); // Cara 43
forma.faces.push( new THREE.Face3( 31, 27, 26 ) ); // Cara 44
forma.faces.push( new THREE.Face3( 31, 26, 30 ) ); // Cara 45
forma.faces.push( new THREE.Face3( 29, 24, 25 ) ); // Cara 46
forma.faces.push( new THREE.Face3( 29, 28, 24 ) ); // Cara 47

//Brazo derecho
forma.faces.push( new THREE.Face3( 35, 33, 32 ) ); // Cara 48
forma.faces.push( new THREE.Face3( 35, 32, 34 ) ); // Cara 49
forma.faces.push( new THREE.Face3( 34, 32, 36 ) ); // Cara 50
forma.faces.push( new THREE.Face3( 34, 36, 38 ) ); // Cara 51
forma.faces.push( new THREE.Face3( 38, 36, 37 ) ); // Cara 52
forma.faces.push( new THREE.Face3( 38, 37, 39 ) ); // Cara 53
forma.faces.push( new THREE.Face3( 39, 37, 33 ) ); // Cara 54
forma.faces.push( new THREE.Face3( 39, 33, 35 ) ); // Cara 55
forma.faces.push( new THREE.Face3( 39, 35, 34 ) ); // Cara 56
forma.faces.push( new THREE.Face3( 39, 34, 38 ) ); // Cara 57
forma.faces.push( new THREE.Face3( 37, 32, 33 ) ); // Cara 58
forma.faces.push( new THREE.Face3( 37, 36, 32 ) ); // Cara 59

//Brazo izquierdo
forma.faces.push( new THREE.Face3( 43, 41, 40 ) ); // Cara 60
forma.faces.push( new THREE.Face3( 43, 40, 42 ) ); // Cara 61
forma.faces.push( new THREE.Face3( 42, 40, 44 ) ); // Cara 62
forma.faces.push( new THREE.Face3( 42, 44, 46 ) ); // Cara 63
forma.faces.push( new THREE.Face3( 46, 44, 45 ) ); // Cara 64
forma.faces.push( new THREE.Face3( 46, 45, 47 ) ); // Cara 65
forma.faces.push( new THREE.Face3( 47, 45, 41 ) ); // Cara 66
forma.faces.push( new THREE.Face3( 47, 41, 43 ) ); // Cara 67
forma.faces.push( new THREE.Face3( 47, 43, 42 ) ); // Cara 68
forma.faces.push( new THREE.Face3( 47, 42, 46 ) ); // Cara 69
forma.faces.push( new THREE.Face3( 45, 40, 41 ) ); // Cara 70
forma.faces.push( new THREE.Face3( 45, 44, 40 ) ); // Cara 71

forma.computeBoundingSphere();

forma.computeFaceNormals();

var material = new THREE.MeshNormalMaterial();

var malla = new THREE.Mesh( forma, material );
malla.rotateY(Math.PI*7/4);
malla.rotateZ(Math.PI*14/8);

var escena = new THREE.Scene();
escena.add( malla );

var camara = new THREE.PerspectiveCamera();
camara.position.z = 100;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, 
                      window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
