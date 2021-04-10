import firebase from "@/firebase-client";

// firestore references used in client functions or components

// Note:
// These should be used in getStaticProps, getStaticPaths, etc.
// Use admin references and functions instead.

export const docRef = firebase.firestore().collection("example").doc("myDoc");

//user from 'users' collection
export const user = (uid) => firebase.firestore().collection("users").doc(uid);

//now time
export const now = firebase.firestore.Timestamp.now();
