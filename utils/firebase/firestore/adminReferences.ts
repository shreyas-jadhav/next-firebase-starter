import admin from "../firebaseAdmin";

// firestore references used for server

// Note:
// These should be used in getStaticProps, getStaticPaths, etc.
// Do not use these for client!
export const postDocRef = (id: string) =>
  admin.firestore().collection(`posts`).doc(id);
