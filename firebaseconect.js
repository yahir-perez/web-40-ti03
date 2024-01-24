import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAf-oCp8WseeuMUeFpLo1s-7FMJ_yXX-Z4",
  authDomain: "web40-dc38a.firebaseapp.com",
  projectId: "web40-dc38a",
  storageBucket: "web40-dc38a.appspot.com",
  messagingSenderId: "219351058253",
  appId: "1:219351058253:web:4718d38a0cefe94ecdd904",
  measurementId: "G-PVH376VG71"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export class ManageAccount {
  register(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((_) => {
        window.location.href = "login.html";
        // Mostrar alerta de registro exitoso
        alert("Registro exitoso. Serás redirigido a la página de inicio de sesión.");
      })
      .catch((error) => {
        console.error(error.message);
            // Mostrar alerta de error de registro
            alert("Correo ya utilizado: ");
      });
  }

  authenticate(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        window.location.href = "lobby.html";
        // Alerta de inicio de sesión exitoso
        alert("Has iniciado sesión correctamente. Serás redirigido a la página principal.");
      })
      .catch((error) => {
        console.error(error); // Registra el objeto de error completo en la consola
        // Muestra un mensaje de error genérico para el inicio de sesión
        alert("Error al iniciar sesión. Verifica tus credenciales e intenta nuevamente.");
      });
  }
  
  signOut() {
    signOut(auth)
      .then((_) => {
        window.location.href = "lobby.html";
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
}
