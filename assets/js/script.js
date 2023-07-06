// Get the current page path
var path = window.location.pathname;
// Extract the page name from the path
var pageName = path.split('/').pop().replace('.html', '');
// Set the dynamic title
document.getElementById("dynamicTitle").innerText = pageName + " | Infracom";