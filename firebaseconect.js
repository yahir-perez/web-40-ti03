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
    // Check if the password meets the minimum length requirement
    if (password.length < 6) {
      // Display an alert if the password is too short
      alert("La contraseña debe tener al menos 6 caracteres.");
      return; // Stop the registration process
    }
  
    // Create user with email and password
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Redirect to login page after successful registration
        window.location.href = "login.html";
        // Display successful registration alert
        alert("Registro exitoso. Serás redirigido a la página de inicio de sesión.");
      })
      .catch((error) => {
        // Check if the error is due to an existing email
        if (error.code === "auth/email-already-in-use") {
          // Display alert for existing email
          alert("Correo electrónico ya registrado. Intenta con otro.");
        } else {
          // Display generic error alert for other registration failures
          console.error(error.message);
          alert("Error en el registro: " + error.message);
        }
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
      .then(() => {
        window.location.href = "lobby.html";
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
}
