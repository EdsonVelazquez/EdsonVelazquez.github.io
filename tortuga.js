var Cabeza = new THREE.SphereGeometry( 1 );

var Caparazon = new THREE.SphereGeometry( 2, 8, 6, Math.PI/2, Math.PI*3/2 );

var PataFI = new THREE.CylinderGeometry(.4, .25, .8);
var PataFD = new THREE.CylinderGeometry(.4, .25, .8);
var PataTI = new THREE.CylinderGeometry(.4, .25, .8);
var PataTD = new THREE.CylinderGeometry(.4, .25, .8);

Cabeza.translate(1.8,1,0);

PataTI.translate(-0.75, -0.4, -0.75);
PataTD.translate(-0.75, -0.4,  0.75);
PataFI.translate( 0.75, -0.4, -0.75);
PataFD.translate( 0.75, -0.4,  0.75);

var CabezaM = new THREE.Mesh(Cabeza);

var CaparazonM = new THREE.Mesh(Caparazon);

var PataTIM = new THREE.Mesh(PataTI);
var PataTDM = new THREE.Mesh(PataTD);
var PataFIM = new THREE.Mesh(PataFI);
var PataFDM = new THREE.Mesh(PataFD);

var Tortuga = new THREE.Geometry();

Tortuga.merge(CabezaM.geometry, CabezaM.matrix);

Tortuga.merge(CaparazonM.geometry, CaparazonM.matrix);

Tortuga.merge(PataTIM.geometry, PataTIM.matrix);
Tortuga.merge(PataTDM.geometry, PataTDM.matrix);
Tortuga.merge(PataFIM.geometry, PataFIM.matrix);
Tortuga.merge(PataFDM.geometry, PataFDM.matrix);

var material = new THREE.MeshNormalMaterial();
var TortugaM = new THREE.Mesh(Tortuga, material);
TortugaM.rotateY(Math.PI/2);
//TortugaM.rotateY(Math.PI/4);
//TortugaM.rotateX(Math.PI/8);

var escena = new THREE.Scene();
escena.add(TortugaM);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 50;

renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
