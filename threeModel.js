// // const canvas = document.querySelector('.threeDCanvas');
// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// var scene, camera, renderer, cube;

// function init() {

//     scene = new THREE.Scene();
//     camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//     renderer = new THREE.WebGLRenderer({
//         canvas: document.querySelector('.threeDCanvas'),
//     });
//     renderer.setSize( canvas.innerWidth, canvas.innerHeight );

//     document.body.appendChild( renderer.domElement );

//     const geometry = new THREE.BoxGeometry(1, 1, 1);
//     const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

//     cube = new THREE.Mesh(geometry, material);

//     scene.add(cube);

//     camera.position.z = 1;
//     camera.position.y = 3;

//     camera-lookAt(0, 0, 0);



// }

// function animate() {
//     window.requestAnimationFrame(animate);

//     // cube.rotation.x += 0.01;
//     // cube.rotation.y += 0.01;

//     renderer.render(scene, camera);
// }

// animate();