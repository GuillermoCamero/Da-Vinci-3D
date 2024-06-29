---
layout: model
model_title: "Puente de Gálata"
model_description: "Proyecto de un puente con una sola arcada para unir Costantinopoli a Pera, y en particular con el barrio de Gálata. Ancho 40 brazos, alto desde el agua 70 brazos, largo 600 brazos (400 sobre el mar y 200 sobre la tierra) el puente hubiera debido hacer de sí mismo espaldas para superar un trecho de mar de más de 200 metros."
---

<script type="module">
       import {loader, scene, animate, camera} from "../../public/scripts/model.js"
       import {showViewerErrorMessage} from "../../public/scripts/error.js"

       loader.load(
              "/models/puente.glb",
              function (gltf) {
                     const model = gltf.scene;
                     model.position.set(0, 0, 0);
                     model.scale.set(10,10,10);
                     camera.position.set(10, 7, 0);
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