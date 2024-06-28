import { viewerElem } from "./globals.js";

function isInFullscreen() {
       const document = window.document;
       return (document.fullscreenElement && document.fullscreenElement !== null) ||
              (document.webkitFullscreenElement && document.webkitFullscreenElement !== null) ||
              (document.mozFullScreenElement && document.mozFullScreenElement !== null) ||
              (document.msFullscreenElement && document.msFullscreenElement !== null);
}

function enterFullscreen(element) {
       if (element.requestFullscreen) {
              element.requestFullscreen();
       } else if (element.webkitFullscreenEnabled) {
              element.webkitRequestFullscreen();
       } else if (element.mozFullScreenEnabled) {
              element.mozRequestFullScreen();
       } else if (element.msFullscreenEnabled) {
              element.msRequestFullscreen();
       }
}

function exitFullscreen() {
       if (document.exitFullscreen) {
              document.exitFullscreen();
       } else if (document.webkitExitFullscreen) {
              document.webkitExitFullscreen();
       } else if (document.mozCancelFullScreen) {
              document.mozCancelFullScreen();
       } else if (document.msExitFullscreen) {
              document.msExitFullscreen();
       }
}

function toggleFullscreen(elementToFullscreen) {
       if (!isInFullscreen()) {
              enterFullscreen(elementToFullscreen);
       }
       else {
              exitFullscreen();
       }
}

const viewerFullscreenToggle = document.getElementById("viewer-toggle-fullscreen");
viewerFullscreenToggle.addEventListener("click", () => {
       toggleFullscreen(viewerElem);
}, false);

viewerElem.addEventListener("click", () => {
       toggleFullscreen(viewerElem);
}, false);