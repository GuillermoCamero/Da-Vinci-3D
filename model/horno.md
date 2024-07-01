---
layout: model
model_title: "Horno a llama dirigida"
model_description: "Horno para la fundición de metales en crisol no expuestos a la llama directa. La boca por donde entra el aire destinada a dar movimiento al fuego se abre en la base del horno, en relación con el crisol más elevado."
---

<script type="module">
       import {loader, scene, animate, camera} from "./scripts/model.js"
       import {showViewerErrorMessage} from "./scripts/error.js"

       loader.load(
              "./models/***.glb",
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