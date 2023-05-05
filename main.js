
const canvas = document.querySelector('#bg');

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
// import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three-orbitcontrols@2.110.3/OrbitControls.min.js';
// import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three-gltf-extensions@0.0.15/+esm';

var scene, camera, renderer, cube;

scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(50, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);

// Renderer
renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(canvas.clientWidth, canvas.clientHeight );


// canvas.width = 900;

// scene.background = new THREE.Color(0x000000);

renderer.setClearAlpha(0.0);

// document.body.appendChild( renderer.domElement );

// Geometry
const geometry = new THREE.BoxGeometry(3.8, 3.8, 3.8);
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const material = new THREE.MeshNormalMaterial({ color: 0x00ff00 });

const ambientLight = new THREE.AmbientLight(0xFFFFFF, 1);
scene.add(ambientLight);

const light = new THREE.HemisphereLight(0xFFFFFF, 0xFFFFFF, 1);
scene.add(light);
const pointLight = new THREE.PointLight(0xFFFFFF, 5, 100);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);


//Car + GLTF Loader
var loader = new GLTFLoader();

var car;

loader.load('./public/3d/car.gltf', function(gltf){
  car = gltf.scene;
  car.position.setY(-0.7);
  scene.add(car);
});


//Cube
// cube = new THREE.Mesh(geometry, material);

// cube.position.x = 0;
// cube.position.y = 0;
// cube.position.z = 0;

// scene.add(cube);

// Camera
camera.position.z = 3;
camera.position.y = 2.5;
camera.position.x = 3;

// camera.lookAt(car.position);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);



// Animation
function animate() {
    requestAnimationFrame(animate);

    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();