import { db } from "./firebase-config.js";

import {
	ref,
	push,
	set,
	onValue
}from "https://www.gstatic.com/firebasejs/12.2.1/firebase-database.js";

// Configuracion STUN
const configuration = {
	iceServers: [
	{ 
	    urls: "stun:stun.l.google.com:19302"
	}
	]
	
};

let peerConnection;
let localStream;

// Elementos
const btnLlamada = document.getElementById("btnLlamada");
const videoLocal = document.getElementById("videoLocal");
const videoRemoto = document.getElementById("videoRemoto");

// Referencia en firebase
const llamadaRef = ref(db, "llamada");

// Crear llamada
if(btnLlamada){
	
	btnLlamada.addEventListener("click", iniciarLlamada);
	
}

async function iniciarLlamada() {
	
	peerConnection = new RTCPeerConnection(configuration);
	
	localStream = await navigator.mediaDevices.getUserMedia({
		video: true,
		audio: true
	});
	
	videoLocal.srcObject = localStream;
	
	localStream.getTracks().forEach(track => {
		peerConnection.addTrack(track, localStream);
	});
	
	const remoteStream = new MediaStream();
	
	videoRemoto.srcObject = remoteStream;
	
	peerConnection.ontrack = (event) => {
		
		event.streams[0].getTracks().forEach(track => {
			
			remoteStream.addTrack(track);
			
		});
		
	};
	
// Crear la oferta (offer)

const oferta = await peerConnection.createOffer();

await peerConnection.setLocalDescription(oferta);

await set(ref(db, "llamada/oferta"), {
	type: oferta.type,
	sdp: oferta.sdp
});

}

// Escuchar la respuesta (Answer)

onValue(ref(db, "llamada/respuesta"), async (snapshot) => {
	
    const respuesta = snapshot.val();

    if (!respuesta) {
	return;
}

if (!peerConnection.currentRemoteDescription) {
	
	await peerConnection.setRemoteDescription(
	    new RTCSessionDescription(respuesta)
		);
		
    }
		
});

// Enviar ICE Candidates a firebase

peerConnection.onicecandidate = async (event) => {
	
	if(event.candidate) {
		
		await push(
		    ref(db, "llamada/candidates"),
		    event.candidate.toJSON()
		);
		
	}
	
};

//Recibir ICE Candidates

onValue(ref(db, "llamada/candidates"), (snapshot) => {
	
	if (!snapshot.exists()) {
		return;
	}
	
	snapshot.forEach((child) => {
		
		const candidate = child.val();
		
		peerConnection.addIceCandidate(
		    new RTCIceCandidate(candidate)
			);
			
	});
	
});