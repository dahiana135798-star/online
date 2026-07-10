import { db } from "./firebase-config.js";

import {
	ref,
	push,
	onChildAdded
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-database.js";

//Referencia

const participantesRef =
ref(db, "participantes");

//Registrar participante

function registrarParticipantes(){
	
	const usuario =
	document.getElementById("usuario");
	
	if(usuario.value.trim() === ""){
		alert("Debes escribir tu nombre");
		return;
		
	}
	
	push(participantesRef,{
		
		nombre: usuario.value, // usar 'usuario' para ser consistente
		fecha: Date.now()
		
	});
	
}

// Mostrar participantes

onChildAdded(participantesRef,(data)=>{
	
	const participantes =
	data.val();
	
	const lista =
	document.getElementById("listaParticipantes");
	
	if(!lista){
		
		return;
		
	}
	
	const li =
	document.createElement("li");
	
	li.textContent =
	participantes.nombre;
	
	lista.appendChild(li);
	
});

//Registrar al guardar el perfil

const btnGuardarPerfil =
document.getElementById("btnGuardarPerfil");

if(btnGuardarPerfil){
	
	btnGuardarPerfil.addEventListener(
	    "click",
		registrarParticipantes
	);
	
}
