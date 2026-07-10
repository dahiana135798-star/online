// Variables

let localStream;

//Elementos

const btnCamara =
document.getElementById(
"btnCamara"
);

const btnMicrofono =
document.getElementById(
"btnMicrofono"
);

const videoLocal =
document.getElementById(
"videoLocal"
);

//Activar camara

if(btnCamara){
	
btnCamara.addEventListener(
"click",
activarCamara
);

}

async function activarCamara(){
	
	try{
		
		localStream =
		await navigator.mediaDevices
		.getUserMedia({
			
			video:true,
			audio:true
			
		});
		
		videoLocal.srcObject =
		localStream;
		
	}
	
	catch(error){
		
		console.error(error);
		
		alert(
		"No se puede acceder a la camara"
		);
		
	}
	
}

//Activar / desactivar microfono

if(btnMicrofono){
	
btnMicrofono.addEventListener(
"click",
toggleMicrofono
);

}

function toggleMicrofono(){
	
	if(!localStream){
		
		alert(
		"Primero activa la cámara"
		);
		
		return;
		
	}
	
	const audioTracks =
	localStream.getAudioTracks();
	
	audioTracks.forEach(track=>{
		
		track.enabled =
		!track.enabled;
		
	});
	
}
console.log("webrtc.js cargado");