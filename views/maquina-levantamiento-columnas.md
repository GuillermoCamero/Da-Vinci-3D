---
layout: model
model_title: "Máquina para el levantamiento de columnas"
model_description: "Árgano móvil, útil para el transporte y la erección a mano de columnas y obeliscos."
---

<script type="module">
       import {loader, scene, animate, camera} from "../../public/scripts/model.js"
       import {showViewerErrorMessage} from "../../public/scripts/error.js"

       loader.load(
              "/models/***.glb",
              function (gltf) {
                     const model = gltf.scene;
                     model.position.set(0, 0, 0);
                     model.scale.set(0.01, 0.01, 0.01);
                     camera.position.set(5, 0, 6);
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