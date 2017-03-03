var Cabeza = new THREE.SphereGeometry(4);

var CuerpoFrente = new THREE.SphereGeometry(2);
var CuerpoMedio = new THREE.SphereGeometry(2);
var CuerpoAtras = new THREE.SphereGeometry(2);

var PataFrente1 = new THREE.CylinderGeometry(.25, .25, 2);
var PataFrente2 = new THREE.CylinderGeometry(.25, .25, 2);
var PataFrente3 = new THREE.CylinderGeometry(.25, .25, 2);
var PataFrente4 = new THREE.CylinderGeometry(.25, .25, 2);

var PataMedio1 = new THREE.CylinderGeometry(.25, .25, 2);
var PataMedio2 = new THREE.CylinderGeometry(.25, .25, 2);
var PataMedio3 = new THREE.CylinderGeometry(.25, .25, 2);
var PataMedio4 = new THREE.CylinderGeometry(.25, .25, 2);

var PataAtras1 = new THREE.CylinderGeometry(.25, .25, 2);
var PataAtras2 = new THREE.CylinderGeometry(.25, .25, 2);
var PataAtras3 = new THREE.CylinderGeometry(.25, .25, 2);
var PataAtras4 = new THREE.CylinderGeometry(.25, .25, 2);

CuerpoFrente.translate(0,-4,-2);
CuerpoMedio.translate(0,-4,-5.5);
CuerpoAtras.translate(0,-4,-9);

PataFrente1.translate(1,-6,-1);
PataFrente2.translate(-1,-6,-1);
PataFrente3.translate(1,-6,-3);
PataFrente4.translate(-1,-6,-3);

PataMedio1.translate(1,-6,-4.5);
PataMedio2.translate(-1,-6,-4.5);
PataMedio3.translate(1,-6,-6.5);
PataMedio4.translate(-1,-6,-6.5);

PataAtras1.translate(1,-6,-8);
PataAtras2.translate(-1,-6,-8);
PataAtras3.translate(1,-6,-10);
PataAtras4.translate(-1,-6,-10);

var CabezaM = new THREE.Mesh(Cabeza);

var CuerpoFrenteM = new THREE.Mesh(CuerpoFrente);
var CuerpoMedioM = new THREE.Mesh(CuerpoMedio);
var CuerpoAtrasM = new THREE.Mesh(CuerpoAtras);

var PataFrente1M = new THREE.Mesh(PataFrente1);
var PataFrente2M = new THREE.Mesh(PataFrente2);
var PataFrente3M = new THREE.Mesh(PataFrente3);
var PataFrente4M = new THREE.Mesh(PataFrente4);

var PataMedio1M = new THREE.Mesh(PataMedio1);
var PataMedio2M = new THREE.Mesh(PataMedio2);
var PataMedio3M = new THREE.Mesh(PataMedio3);
var PataMedio4M = new THREE.Mesh(PataMedio4);

var PataAtras1M = new THREE.Mesh(PataAtras1);
var PataAtras2M = new THREE.Mesh(PataAtras2);
var PataAtras3M = new THREE.Mesh(PataAtras3);
var PataAtras4M = new THREE.Mesh(PataAtras4);

var Oruga = new THREE.Geometry();

Oruga.merge(CabezaM.geometry, CabezaM.matrix);

Oruga.merge(CuerpoFrenteM.geometry, CuerpoFrenteM.matrix);
Oruga.merge(CuerpoMedioM.geometry, CuerpoMedioM.matrix);
Oruga.merge(CuerpoAtrasM.geometry, CuerpoAtrasM.matrix);

Oruga.merge(PataFrente1M.geometry, PataFrente1M.matrix);
Oruga.merge(PataFrente2M.geometry, PataFrente2M.matrix);
Oruga.merge(PataFrente3M.geometry, PataFrente3M.matrix);
Oruga.merge(PataFrente4M.geometry, PataFrente4M.matrix);

Oruga.merge(PataMedio1M.geometry, PataMedio1M.matrix);
Oruga.merge(PataMedio2M.geometry, PataMedio2M.matrix);
Oruga.merge(PataMedio3M.geometry, PataMedio3M.matrix);
Oruga.merge(PataMedio4M.geometry, PataMedio4M.matrix);

Oruga.merge(PataAtras1M.geometry, PataAtras1M.matrix);
Oruga.merge(PataAtras2M.geometry, PataAtras2M.matrix);
Oruga.merge(PataAtras3M.geometry, PataAtras3M.matrix);
Oruga.merge(PataAtras4M.geometry, PataAtras4M.matrix);

var material = new THREE.MeshNormalMaterial();
var OrugaM = new THREE.Mesh(Oruga, material);
OrugaM.rotateY(Math.PI/2);
//OrugaM.rotateY(Math.PI/4);
//OrugaM.rotateX(Math.PI/8);

var escena = new THREE.Scene();
escena.add(OrugaM);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 100;

renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
