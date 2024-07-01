export function showViewerErrorMessage() {
       const errorMessage = document.getElementById("no-model-err");
       const fsButton = document.getElementById("viewer-fs-toggle");
       errorMessage.style.display = "block";
       fsButton.style.display = "none";
}