  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-analytics.js";
 import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-auth.js";


  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD4bL2lBuZMegK6WJt99Jko-8EW6ZyDQPo",
    authDomain: "quiz-app-fc216.firebaseapp.com",
    projectId: "quiz-app-fc216",
    storageBucket: "quiz-app-fc216.firebasestorage.app",
    messagingSenderId: "940033175875",
    appId: "1:940033175875:web:f00a9dad3069ad02607ff6",
    measurementId: "G-R8P1SLP2VB"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
   const auth = getAuth(); 

  var sinap = document.getElementById("sinap");
   

    


   sinap .addEventListener("click", function (){ 
    var password =document.getElementById("password").value
   var email =document.getElementById("Email").value
     createUserWithEmailAndPassword(auth, email,password)
      .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    window.location.href="login.html"
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  console.log("hi");
  
});




 







