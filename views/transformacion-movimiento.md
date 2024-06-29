---
layout: model
model_title: "Máquina para transformar un movimiento alterado en uno continuo"
model_description: "Martinete transforma el movimiento de ir y venir de una palanca en el movimiento rotatorio de un tambor, sobre el cual se puede envolver la soga enganchada a un peso para elevar."
---

<script type="module">
       import {loader, scene, animate, camera} from "../../public/scripts/model.js"
       import {showViewerErrorMessage} from "../../public/scripts/error.js"

       loader.load(
              "/models/transformador_movimiento.glb",
              function (gltf) {
                     const model = gltf.scene;
                     model.position.set(2, 0, 0);
                     model.scale.set(5,5,5);
                     camera.position.set(0, 0, 6);
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