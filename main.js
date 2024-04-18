import * as THREE from "three";

import Stats from "three/addons/libs/stats.module.js";

import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";

import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const clock = new THREE.Clock();
const container = document.getElementById("container3d");

const stats = new Stats();
container.appendChild(stats.dom);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

const pmremGenerator = new THREE.PMREMGenerator(renderer);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xbfe3dd);
scene.environment = pmremGenerator.fromScene(
  new RoomEnvironment(renderer),
  0.04
).texture;

const camera = new THREE.PerspectiveCamera(
  70,
  window.innerWidth / window.innerHeight,
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

const loader = new GLTFLoader();

loader.load(
  "models/espiral_aerea.glb",
  function (gltf) {
    const model = gltf.scene;
    model.position.set(0, 1, 0);
    model.scale.set(0.01, 0.01, 0.01);
    scene.add(model);

    animate();
  },
  undefined,
  function (e) {
    console.error(e);
  }
);

window.onresize = function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
};

function animate() {
  requestAnimationFrame(animate);

  controls.update();

  stats.update();

  renderer.render(scene, camera);
}
