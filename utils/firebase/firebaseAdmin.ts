import admin from "firebase-admin";
// https://firebase.google.com/docs/admin/setup#initialize-sdk

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert({
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      }),

      databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    });
  } catch (e) {
    console.log("Failed to initialize App: " + e);
  }
}

export default admin.app();
