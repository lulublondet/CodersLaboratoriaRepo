window.addEventListener("load",cargar)
	function cargar(){
		var li = document.querySelectorAll("li");
			li.forEach(function(e){
				e.style.display = "inline"
			})
		}

var select = document.querySelector("select");
select.addEventListener("change", muestra);

	function muestra() {
		var option = select.querySelectorAll("option");
		var li = document.querySelectorAll("li");
		var classe = select.value;
			li.forEach(function(e){
				if(classe == e.className || classe=="Todas"){
					e.style.display = "inline"}
				else{e.style.display = "none";}
			})
		}




