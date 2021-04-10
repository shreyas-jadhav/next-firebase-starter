import admin from "@/firebase-admin";

// firestore references used for server

// Note:
// These should be used in getStaticProps, getStaticPaths, etc.
// Do not use these for client!
export const docRef = () =>
  admin.firestore().collection("example").doc("yfvafvaf445");
