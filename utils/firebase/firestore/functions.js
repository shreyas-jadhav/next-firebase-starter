import firebase from "@/firebase-client";
import "firebase/firestore";
import { docRef, user, now } from "@/FS-client-refs";

const db = firebase.firestore(); // mostly for transactions or batches

// functions accessed from components

export const getAllDocs = async (params) => {
  // access a reference
  // get data
  // process data
  // return to components
};

//example
export const getDocByID = async (id) => {
  const data = await docRef(id)
    .get()
    .then((doc) => {
      if (doc.exists) Promise.resolve(doc.data());
      else return Promise.reject("No such document");
    });
  return data;
};

// saved registered user;s in user's collection
// check FirebaseAuth.js for this function
export const registerUser = async (uid) => {
  await user(uid).set({ registered: now });
};
