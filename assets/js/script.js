// Get the current page path
var path = window.location.pathname;
// Extract the page name from the path
var pageName = path.split('/').pop().replace('.html', '');

if(pageName === "network"){
    pageName = "IT Infrastructure"
}else if(pageName === "security"){
    pageName = "Physical Security"
}else if(pageName === "customerjourney"){
    pageName = "Customer Journey"
}
// Set the dynamic title
document.getElementById("dynamicTitle").innerText = pageName + " | Infracom (infracommunication.com)";


