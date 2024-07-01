---
layout: model
model_title: "Aleante con extremidades articuladas"
model_description: "La posición del volador en el aleante de Leonardo está estudiada en forma de que él se pueda mantener en equilibrio por medio de movimientos oportunos de la parte inferior del cuerpo, como en los aliantes usados 4 siglos después por Otto Lilienthal. Las alas que imitan la de los murciélagos, aparecen fijas en la parte central mientras la parte externa se puede doblar por medio de un cable de mando que lo une con la respectiva manija."
---

<script type="module">
       import {loader, scene, animate, camera} from "./scripts/model.js"
       import {showViewerErrorMessage} from "./scripts/error.js"

       loader.load(
              "./models/aliante.glb",
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