import  { db }
from "./firebase-config.js";

import {
    ref,
	push,
	onChildAdded
	
}
from "https://www.gstatic.com/firebasejs/12.2.1/firebase-database.js";

//Referencia del chat

const chatRef =
ref(db, "chat");

//boton enviar

const btnEnviar =
document.getElementById("btnEnviar");

if(btnEnviar){
	
btnEnviar.addEventListener(
"click",
enviarMensaje
);

}

//Enviar mensaje

function enviarMensaje(){
	
	const mensajeInput =
	document.getElementById("mensaje");
	
	const texto =
	mensajeInput.value;
	
	if(texto.trim() === ""){
		return;
		
	}
	
	const usuario= document.getElementById("usuario").value || "Anonimo";
	
	push(chatRef, {
		
		usuario: "usuario",
		mensaje: texto,
		fecha: Date.now()
		
	});
	
	mensajeInput.value = "";
	
}

//mostrar mensaje en tiempo real

onChildAdded(chatRef, (data)=>{
	
	const chatBox =
	document.getElementById("chatBox");
	
	const mensaje =
	data.val();
	
	const div =
	document.createElement("div");
	
	div.classList.add("message");
	
	div.innerHTML =
	`
	<strong>${mensaje.usuario}</strong>:
	${mensaje.mensaje.replace(/</g, "&lt;")}
    `;
    
    chatBox.appendChild(div);

    chatBox.scrollTop =
	chatBox.scrollHeight;
	
});
