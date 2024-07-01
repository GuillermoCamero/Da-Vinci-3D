import * as THREE from "three";

import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';

import { viewerElem, canvas } from "./globals";

const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(viewerElem.offsetWidth, viewerElem.offsetHeight, false);
renderer.gammaFactor = 2.2;
renderer.outputEncoding = THREE.sRGBEncoding;

viewer.appendChild(renderer.domElement);

const pmremGenerator = new THREE.PMREMGenerator(renderer);

export const scene = new THREE.Scene();
scene.background = new THREE.Color(0x191919);
scene.environment = pmremGenerator.fromScene(new RoomEnvironment(scene)).texture;

export const camera = new THREE.PerspectiveCamera(
       50,
       viewer.offsetWidth / viewer.offsetHeight,
       0.1,
       2000
);
camera.position.set(5, 2, 8);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0.5, 0);
controls.update();
controls.enablePan = false;
controls.enableDamping = true;
controls.mouseButtons = {
       LEFT: THREE.MOUSE.ROTATE,
       MIDDLE: THREE.MOUSE.ROTATE,
       RIGHT: THREE.MOUSE.PAN,
};

const loadingManager = new THREE.LoadingManager(() => {
       const loadingScreen = document.getElementById('loader');
       loadingScreen.style.display = "none";
});

const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath("../lib/draco/gltf/");
dracoLoader.preload();

export const loader = new GLTFLoader(loadingManager);
loader.setDRACOLoader(dracoLoader);

export function animate() {
       requestAnimationFrame(animate);
       controls.update();
       renderer.render(scene, camera);
}

window.addEventListener("resize", function () {
       camera.aspect = viewerElem.offsetWidth / viewerElem.offsetHeight;
       camera.updateProjectionMatrix();

       renderer.setSize(viewerElem.offsetWidth, viewerElem.offsetHeight);
}, false);