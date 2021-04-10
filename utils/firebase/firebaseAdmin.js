import * as admin from "firebase-admin";
import serviceAccount from "../../service.json";
// path to downloaded service account json or use environment variables
// refer firebase docs for more info :
// https://firebase.google.com/docs/admin/setup#initialize-sdk

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      //   type: "service_account",
      //   project_id: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      //   private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
      //   private_key: process.env.FIREBASE_PRIVATE_KEY,
      //   client_email: process.env.FIREBASE_CLIENT_EMAIL,
      //   client_id: process.env.FIREBASE_CLIENT_ID,
      //   auth_uri: process.env.FIREBASE_AUTH_URI,
      //   token_uri: process.env.FIREBASE_TOKEN_URI,
      //   auth_provider_x509_cert_url:
      //     process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
      //   client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL,
      // }),
      databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    });
  } catch (e) {
    console.log("Failed to initialize App: " + e);
  }
}

export default admin;
