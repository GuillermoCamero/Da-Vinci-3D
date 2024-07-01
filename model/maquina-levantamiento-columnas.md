---
layout: model
model_title: "Máquina para el levantamiento de columnas"
model_description: "Árgano móvil, útil para el transporte y la erección a mano de columnas y obeliscos."
---

<script type="module">
       import {loader, scene, animate, camera} from "./scripts/model.js"
       import {showViewerErrorMessage} from "./scripts/error.js"

       loader.load(
              "./models/levanta_columnas.glb",
              function (gltf) {
                     const model = gltf.scene;
                     model.position.set(0, -1, 0);
                     model.scale.set(5, 5, 5);
                     camera.position.set(12, 9, 10);
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