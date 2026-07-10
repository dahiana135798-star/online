// Lista de salas creadas
let salas = [];

//Crear sala 
function crearSala() {
	
	const nombreSala =
	document.getElementById("nombreSala");
	
	const listaParticipantes =
	document.getElementById("listaParticipantes");
	
	const listaSalas =
    document.getElementById("listaSalas");
	
    const infoSala =
	document.getElementById("infoSala");
	
	if (!nombreSala || nombreSala.value.trim() === "") {
		
		alert("Escribe un nombre para crear la sala");
		return;
		
	}

	const sala = {
		nombre: nombreSala.value,
		fecha: new Date().toLocaleString()
	};
	
	salas.push(sala);

//Mostrar informacion de la sala creada
    infoSala.innerHTML = `
        <strong>Sala:</strong> ${sala.nombre}<br>
        <strong>Creada:</strong> ${sala.fecha}
    `;
     // A gregar sala a la lista de salas
    const itemSala = document.createElement("li");
    itemSala.textContent = sala.nombre;
    listaSalas.appendChild(itemSala);
    
	//Agregar sala tambien a la lista de participantes
    const itemParticipante = document.createElement("li");
    itemParticipante.textContent = sala.nombre;
    listaParticipantes.appendChild(itemParticipante);
   
	//Limpiar el input
	nombreSala.value = "";
	
}

//Buscar boton
const botonSala =
document.getElementById("btnCrearSala");

if(botonSala){
	
	botonSala.addEventListener(
	 "click",
	 crearSala
	);
	
}
