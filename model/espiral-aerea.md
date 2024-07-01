---
layout: model
model_title: "Espiral Aérea"
model_description: "Este instrumento hecho a espiral es considerado por muchos el predecesor del moderno helicóptero. Leonardo dice que dado vuelta con presteza, se hace la hembra en el aire y subirá a lo alto. Cuatro hombres hubieran debido apoyar los pies en la plataforma central y, haciendo fuerza con las manos sobre las barras respectivas, hacer volar el árbol con su hélice de 10 metros de diámetro.

Cod. B. F. 83 v.
"
---

<script type="module">
       import {loader, scene, animate, camera} from "./scripts/model.js"
       import {showViewerErrorMessage} from "./error.js"

       loader.load(
              "./models/espiral_aerea.glb",
              function (gltf) {
                     const model = gltf.scene;
                     model.position.set(0, -1, 0);
                     model.scale.set(1,1,1);
                     camera.position.set(7, 4, 2);
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