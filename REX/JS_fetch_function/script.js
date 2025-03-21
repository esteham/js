function loadComponent(id, file)
{
	fetch(file).then(response=>response.text()).then(data=>{

		document.getElementById(id).innerHTML = data;
	}).catch(error=>console.log("Error loading" +file, error));
}

window.onload = function()
{
	loadComponent("header","components/header.html");
	loadComponent("navbar","components/navbar.html");
	loadComponent("sidebar","components/sidebar.html");
	loadComponent("search","components/search.html");
	loadComponent("footer","components/footer.html");
};