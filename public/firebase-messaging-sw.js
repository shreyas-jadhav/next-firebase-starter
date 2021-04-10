importScripts("https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyDvq5ObFhjgjyXjvZo8ofEgUsJR9Mcpswk",
  authDomain: "queue-token-system.firebaseapp.com",
  projectId: "queue-token-system",
  storageBucket: "queue-token-system.appspot.com",
  messagingSenderId: "476512680884",
  appId: "1:476512680884:web:3a212e117ceff976fcd0e1",
  measurementId: "G-742SXBXVE7",
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler((payload) =>
  console.log("payload", payload)
);
