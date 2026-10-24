 import { initializeApp } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-analytics.js";
   import {  getAuth ,signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-auth.js";



const firebaseConfig = {
    apiKey: "AIzaSyC849cMypgKq537XIDd56QuHlX8qfSshbU",
    authDomain: "todo-app-68882.firebaseapp.com",
    databaseURL: "https://todo-app-68882-default-rtdb.firebaseio.com",
    projectId: "todo-app-68882",
    storageBucket: "todo-app-68882.firebasestorage.app",
    messagingSenderId: "724818746666",
    appId: "1:724818746666:web:6b47caed702d04643b9253",
    measurementId: "G-GT4BYC0KB7"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  var login=document.getElementById("login")
  const auth = getAuth(); 

    

  login.addEventListener("click", function (){
   var password =document.getElementById("password").value;
   var email =document.getElementById("Email").value;

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("oky")    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
console.log("pky");
window.location.href="qapp.html"

    } )










    
