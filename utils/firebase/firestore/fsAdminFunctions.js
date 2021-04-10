import admin from "@/firebase-admin";
import { docRef } from "@/FS-admin-refs";

const db = admin.firestore(); // mostly for transactions or batches

// Note: Do not use these references for client!
// Only use in getStaticProps / getStaticPaths / etc.
export const getDoc = async () => {
  const doc = await docRef().get();
  if (doc.exists) {
    return doc.data();
  }
  return null;
};
