
const canvas = document.querySelector('#interactable1');

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
// import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three-orbitcontrols@2.110.3/OrbitControls.min.js';
// import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three-gltf-extensions@0.0.15/+esm';

var scene, camera, renderer;

scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(50, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);

// Renderer
renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#interactable1'),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(canvas.clientWidth, canvas.clientHeight );

// Set background transparent
renderer.setClearAlpha(0);

// Set the Lights
const ambientLight = new THREE.AmbientLight(0xFFFFFF, 1);
scene.add(ambientLight);

const light = new THREE.HemisphereLight(0xFFFFFF, 0xFFFFFF, 1);
scene.add(light);

const pointLight = new THREE.PointLight(0xFFFFFF, 5, 100);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);


// Car + GLTF Loader
var loader = new GLTFLoader();

var car;

loader.load('./3d/car.gltf', function(gltf){
  car = gltf.scene;
  car.position.setY(-0.7);
  scene.add(car);
});


//Cube

// const geometry = new THREE.BoxGeometry(3.8, 3.8, 3.8);
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const material = new THREE.MeshNormalMaterial();
// var cube = new THREE.Mesh(geometry, material);

// cube.position.x = 0;
// cube.position.y = 0;
// cube.position.z = 0;

// scene.add(cube);

// Set Camera Position
camera.position.z = 3;
camera.position.y = 2.5;
camera.position.x = 3;
camera.enabledampening = true;

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


/* Second frame */
// Delete when reactified

const canvas2 = document.querySelector('#interactable2');

var scene2, camera2, renderer2;

scene2 = new THREE.Scene();
camera2 = new THREE.PerspectiveCamera(50, canvas2.clientWidth / canvas2.clientHeight, 0.1, 1000);

// Renderer
renderer2 = new THREE.WebGLRenderer({
  canvas: document.querySelector('#interactable2'),
});
renderer2.setPixelRatio(window.devicePixelRatio);
renderer2.setSize(canvas.clientWidth, canvas.clientHeight );

// Set background transparent
renderer2.setClearAlpha(0);

// Set the Lights
const ambientLight2 = new THREE.AmbientLight(0xFFFFFF, 1);
scene2.add(ambientLight2);

const light2 = new THREE.HemisphereLight(0xFFFFFF, 0xFFFFFF, 1);
scene2.add(light2);

const pointLight2 = new THREE.PointLight(0xFFFFFF, 5, 100);
pointLight2.position.set(5, 5, 5);
scene2.add(pointLight2);


// Car + GLTF Loader
var loader2 = new GLTFLoader();

var car2;

loader2.load('./3d/car.gltf', function(gltf){
  car2 = gltf.scene;
  car2.position.setY(-0.7);
  scene2.add(car2);
});

// Set Camera Position
camera2.position.z = 3;
camera2.position.y = 2.5;
camera2.position.x = 3;
camera2.enabledampening = true;

// Controls
const controls2 = new OrbitControls(camera2, renderer2.domElement);

// Animation
function animate2() {
    requestAnimationFrame(animate2);

    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;

    renderer2.render(scene2, camera2);
}

animate2();