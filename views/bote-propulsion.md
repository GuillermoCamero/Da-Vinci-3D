---
layout: model
model_title: "Bote con propulsión a ruedas"
model_description: "En el folio 12650 r. del Código Windsor aparece el motor, el orden y el largo de las palancas y contra palancas que dependen la una de la otra en el bote. Las palas motrices hubieran debido tener el largo de un brazo y medio, menos de 90 cm. Según los cálculos de Leonardo haciendo cumplir a la rueda del primer movimiento 50 vueltas por minuto se obtendría que el bote navegara a la velocidad de 50 millas por hora."
---

<script type="module">
       import {loader, scene, animate, camera} from "../../public/scripts/model.js"
       import {showViewerErrorMessage} from "../../public/scripts/error.js"

       loader.load(
              "/models/barco.glb",
              function (gltf) {
                     const model = gltf.scene;
                     model.position.set(0, 0, 0);
                     model.scale.set(0.05, 0.05,0.05);
                     camera.position.set(7, 4, 0);
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