<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <title>Da Vinci 125 en 3D</title>
    <link rel="stylesheet" href="styles.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100..900&display=swap" rel="stylesheet" />
</head>

<body>
    <div id="container3d"></div>
    <footer id="about">
        <img id="logo" src="images/logo-ok.png" />
        <h1 id="title">Aliante con extremidades articuladas</h1>
        <div id="spacer"></div>
    </footer>
    <script type="module">
        import * as THREE from "three";

        import { OrbitControls } from "three/addons/controls/OrbitControls.js";
        import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";

        import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
        import { DRACOLoader } from "three/examples/jsm/Addons.js";

        let mixer;
        const clock = new THREE.Clock();
        const container = document.getElementById("container3d");

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        container.appendChild(renderer.domElement);

        const pmremGenerator = new THREE.PMREMGenerator(renderer);

        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xbee9e4);
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

        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath("/examples/jsm/libs/draco/");
        loader.setDRACOLoader(dracoLoader);

        loader.load(
            "models/aliante.glb",
            function (gltf) {
                const model = gltf.scene;
                model.position.set(0, 1, 0);
                model.scale.set(0.01, 0.01, 0.01);
                scene.add(model);

                mixer = new THREE.AnimationMixer(model);

                if (gltf.animations.length) {
                    mixer.clipAction(gltf.animations[0]).play();
                }

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
            const delta = clock.getDelta();
            mixer.update(delta);
            controls.update();
            renderer.render(scene, camera);
        }

    </script>
</body>

</html>