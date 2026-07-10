import { db } from "./firebase-config.js";

import {
	ref,
	push,
	onChildAdded
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-database.js";

// Referencia de salas en Firebase
const salasRef = ref(db, "salas");

// Crear sala
function crearSala() {
	const nombreSala =
	document.getElementById("nombreSala");

	if (!nombreSala || nombreSala.value.trim() === "") {
		alert("Escribe un nombre para crear la sala");
		return;
	}

	push(salasRef, {
		nombre: nombreSala.value.trim(),
		fecha: new Date().toLocaleString()
	});

	nombreSala.value = "";
}

// Mostrar salas guardadas y nuevas salas en tiempo real
onChildAdded(salasRef, (data) => {
	const sala = data.val();

	const listaSalas =
	document.getElementById("listaSalas");

	const listaParticipantes =
	document.getElementById("listaParticipantes");

	const infoSala =
	document.getElementById("infoSala");

	if (listaSalas) {
		const itemSala = document.createElement("li");
		itemSala.textContent = sala.nombre;
		listaSalas.appendChild(itemSala);
	}

	if (infoSala) {
		infoSala.innerHTML = `
			<strong>Sala:</strong> ${sala.nombre}<br>
			<strong>Creada:</strong> ${sala.fecha}
		`;
	}
});

// Buscar boton
const botonSala =
document.getElementById("btnCrearSala");

if (botonSala) {
	botonSala.addEventListener("click", crearSala);
}
