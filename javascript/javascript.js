window.onload = function() {
	
	var textoOculto = document.getElementById("textoOculto");
	var botonMostrar = document.getElementById("mostrar");
	var botonOcultar = document.getElementById("ocultar");

	document.getElementById("mostrar").onclick = function(parar1) {
		textoOculto.style.display="block";
		botonMostrar.style.display="none";
		botonOcultar.style.display="block";
		var parar1 = parar1||window.event;
		parar1.preventDefault();
	}

	document.getElementById("ocultar").onclick = function(parar2) {
		textoOculto.style.display="none";
		botonOcultar.style.display="none";
		botonMostrar.style.display="block";
		var parar2 = parar2||window.event;
		parar2.preventDefault();
	}	

}