// variables
let localStream;
let remoteStream;

//Elementos
const btnCamara = document.getElementById("btnCamara");
const btnMicrofono = document.getElementById("btnMicrofono");
const btnLlamada = document.getElementById("btnLlamada");

const videoLocal = document.getElementById("videoLocal");
const videoRemoto = document.getElementById("videoRemoto");

//Activar camara
if(btnnCamara){
	btnCamara.addEventListener("click", activarCamara);
}

async function activarCamara(){
	
	try{
		
		localStream = await navigator.mediaDevices.getUserMedia({
			video: true,
		audio: true
		});
		
		videoLocal.srcObject = localStream;
		
		alert("Camara activada");
		
	} catch (error) {
		
		console.error(error);
		
		alert("No se pudo acceder a la camara.");
		
	}
	
}

//Activar a desactivar microfono
if (btnMicrofono){
	btnMicrofono.addEventListener("click", toggleMicrofono);
	
}

function toggleMicrofono(){
	
	if(!localStream){
		
		alert("Primero activa la camara.");
		return;
		
	}
	
	localStream.getAudioTracks().forEach(track => {
		
		track.enabled = !track.enabled;
		
	});
	
}

// boton de llamada
if(btnLlamada){
	
	btnLlamada.addEventListener("click",iniciarLlamada);
	
}

function iniciarLlamada(){
	
	if(!localStream){
		
		alert("Primero activa la camara.");
		return;
		
	}
	
	alert("La conexion webRTC se agregara en el siguiente paso.");
	
}
