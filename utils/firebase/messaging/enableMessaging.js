import firebase from "@/firebase-client";
import localforage from "localforage";
//enables messaging
const enableMessaging = async () => {
  if (typeof window !== "undefined") {
    await import("firebase/messaging");
    if (firebase.messaging.isSupported()) {
      try {
        if ((await localforage.getItem("fcm_token")) !== null) {
          return false;
        }
        await Notification.requestPermission();
        console.log(firebase.apps);
        const token = await firebase.messaging().getToken({
          vapidKey:
            "BCwi4AOH8ZBDf_PRDRrrheGXbHl64C34hbKxV_4QKiIjeGR2tD_BTmH5MF6MhccxGLZeGU_8wiKzoqIN-TLUZTQ",
        });
        localforage.setItem("fcm_token", token);
        console.log("fcm_token", token);
      } catch (error) {
        console.log(error);
        throw "Unknown error occurred";
      }
    } else {
      throw "Not Supported";
    }
  }
};

export default enableMessaging;
