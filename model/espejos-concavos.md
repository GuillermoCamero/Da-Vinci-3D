---
layout: model
model_title: "Molienda de espejos cóncavos"
model_description: "El modelo consta de un disco montado sobre un bastidor de madera. El disco se apoya verticalmente sobre una superficie cóncava plexiglás (que simula el espejo a pulir), y se inserta en un árbol de transmisión."
---

<script type="module">
       import {loader, scene, animate, camera} from "./scripts/model.js"
       import {showViewerErrorMessage} from "./scripts/error.js"

       loader.load(
              "./models/maquina_vidrios_concavos.glb",
              function (gltf) {
                     const model = gltf.scene;
                     model.position.set(0, 0, 0);
                     model.scale.set(0.01,0.01,0.01);
                     camera.position.set(2, 1, 4);
                     scene.add(model);
                     animate();
              },
              undefined,
              function (e) {
                     showViewerErrorMessage();
                     console.error(e);
              }
       );              
</script>