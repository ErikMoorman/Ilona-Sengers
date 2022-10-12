var about = document.querySelector("#about");
var gallery = document.querySelector("#gallery");
var coming = document.querySelector("#coming");

about.addEventListener("click", function(){
	window.location.href = "./pages/about.html";
});
gallery.addEventListener("click", function(){
	window.location.href = "./pages/gallery.html";
});
coming.addEventListener("click", function(){
	window.location.href = "./pages/coming.html";
});