// firebase sdk

import { initializeApp }
from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";

import { getAuth }
from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

import { getDatabase }
from "https://www.gstatic.com/firebasejs/12.2.1/firebase-database.js";

//configuracion de tu proyecto firebase

const firebaseConfig = {
	
	apiKey: "AIzaSyABg9u85uX7cdLaX5L0ka4KoP5IBzTmpCo",
	
	authDomain:
	"cine-online-83db3.firebaseapp.com",
	
	projectId:
	"cine-online-83db3",
	
	storageBucket:
	"cine-online-83db3.appspot.com",
	
	messagingSenderId:
	"2287713024477",
	
	appId:
	"1:287713024477:web:1e9fe24ed932c6af8ffe34",
	
	//Reemplaza esta URL por la de firebase 
	databaseURL:
	"https://cine-online-83db3-default-rtdb.firebaseio.com"
	
};

//iniciar firebase

const app =
initializeApp(firebaseConfig);

const db =
getDatabase(app);

// servicios

const auth =
getAuth(app);

//exportar para otros achivos

export {
	app,
	auth,
	db
	
};
