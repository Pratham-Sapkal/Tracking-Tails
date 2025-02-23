import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";

const auth = getAuth();
signInAnonymously(auth)
  .then(() => {
    console.log("Signed in anonymously");
  })
  .catch((error) => {
    console.error("Error signing in:", error);
  });