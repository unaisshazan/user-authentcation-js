// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Dispaly box refrence
let loginDpRef = document.getElementById('loginsuccess');

var firebaseConfig = {
  apiKey: "AIzaSyAUhb1WDvoHBX0w7xqdqv1iP_BpB5DXKkg",
    authDomain: "signupform-464da.firebaseapp.com",
    projectId: "signupform-464da",
    storageBucket: "signupform-464da.appspot.com",
    messagingSenderId: "494073995052",
    appId: "1:494073995052:web:3761cb66878400c2de9689",
    measurementId: "G-FQG0LNKDTP"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
function signUp() {
  var email = document.getElementById('email');
  var password = document.getElementById('password');
  const promise = auth.createUserWithEmailAndPassword(
    email.value,
    password.value
  );
  promise.catch((e) => alert(e.message));
  alert('User SignUp');
}
function signIn() {
  var email = document.getElementById('email');
  var password = document.getElementById('password');
  const promise = auth.signInWithEmailAndPassword(email.value, password.value);
  promise.catch((e) => alert(e.message));
}

function signOut() {
  const promise = auth.signOut();
  promise.catch((e) => alert(e.message));
  window.location.href="index.html"

}

auth.onAuthStateChanged(function (user) {
  if (user) {
    loginDpRef.style.display = 'block';
    loginDpRef.innerHTML = ` <center>
    <h1>You are login</h1>
    <p>Welcome ${user.email}</p>
  </center>`;
  } else {
    loginDpRef.style.display = 'block';
    loginDpRef.innerHTML = ` <center>
    <h1>User is signed Out</h1>
    
  </center>`;
  }
});
