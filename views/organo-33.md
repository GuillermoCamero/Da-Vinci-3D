---
layout: model
model_title: "Mortero con 33 cañones"
model_description: "Da la posibilidad de disparar 3 series de 11 tiros consecutivos, con un intervalo igual al tiempo necesario para prender una después de la otra carga de tiro. 
Una sencilla rotación del ajuste triangular permite la continuidad del tiro."
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