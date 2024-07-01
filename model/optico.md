---
layout: model
model_title: "Modelo Óptico"
model_description: "Con este dispositivo, Leonardo explicó el funcionamiento del ojo humano y los problemas ópticos del mismo"
---

<script type="module">
       import {loader, scene, animate, camera} from "./scripts/model.js"
       import {showViewerErrorMessage} from "./scripts/error.js"

       loader.load(
              "./models/modelo_optico.glb",
              function (gltf) {
                     const model = gltf.scene;
                     model.position.set(0, 0, 0);
                     model.scale.set(0.01, 0.01, 0.01);
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