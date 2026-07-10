//Elementos

const btnGuardarPerfil =
document.getElementById("btnGuardarPerfil");

if(btnGuardarPerfil){
	
	btnGuardarPerfil.addEventListener(
	    "click",
		guardarPerfil
		
	);
	
}

function guardarPerfil(){
	
	const usuario =
	document.getElementById("usuario");
	
	const correo =
	document.getElementById("correo");
	
	if(usuario.value.trim() === "" || correo.value.trim() === ""){
		
		alert("Completa todos los datos.");
		
		return;
		
	}
	
	const perfil = {
		
		usuario: usuario.value,
		correo: correo.value
		
	};
	
	localStorage.setItem(
	    "perfil",
		JSON.stringify(perfil)
	);
	
	alert("Perfil guardado correctamente.");
	
}

// Cargar perfil al abrir la pagina

window.addEventListener("load", ()=>{
	
	const datos =
	localStorage.getItem("perfil");
	
	if(datos){
		
		const perfil =
		JSON.parse(datos);
		
		document.getElementById("usuario").value =
		perfil.usuario;
		
		document.getElementById("correo").value =
		perfil.correo;
		
	}
	
});
