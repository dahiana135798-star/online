const btnEnviar =
document.getElementById("btnEnviar");

if(btnEnviar){

btnEnviar.addEventListener("click", enviarMensaje);

}

function enviarMensaje(){
	
	const mensaje =
	document.getElementById("mensaje");
	
	const chatBox =
	document.getElementById("chatBox");
	
	if(mensaje.value.trim() === ""){
		
		return;
		
	}
	
	const nuevoMensaje =
	document.createElement("div");
	
	nuevoMensaje.classList.add("message");
	
	nuevoMensaje.innerHTML =
	"<strong>Usuario:</strong> " +
	mensaje.value.replace(/</g, "&lt;").replace(/>/g, "&gt;");
	
	chatBox.appendChild(nuevoMensaje);
	
	chatBox.scrollTop =
	chatBox.scrollHeight;
	
	mensaje.value = "";

}
