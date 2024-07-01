const sidebarMenu = document.getElementById("side-navigation");
const sidebarOpen = document.getElementById("sidebar-open");
const sidebarClose = document.getElementById("sidebar-close");

function toggleSidebarMenu() {
       if (sidebarMenu.style.display == "block") {
              sidebarMenu.style.display = "none";
       }
       else {
              sidebarMenu.style.display = "block";
       }
}

sidebarOpen.addEventListener("click", toggleSidebarMenu);
sidebarClose.addEventListener("click", toggleSidebarMenu);