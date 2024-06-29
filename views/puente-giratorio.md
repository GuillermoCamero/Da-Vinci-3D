---
layout: model
model_title: "Puente giratorio con perfil parabólico"
model_description: "Modelo de un puente campal de grande alcance y de rápida instalación. 
Los órganos de maniobra permiten hacer girar el puente alrededor de un perno vertical."
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