# [Next.js](https://nextjs.org/) + [Firebase](https://firebase.google.com/docs) Setup 🔥
Full Starter Code for Next.js and Firebase 👤 `next-firebase-auth` + 🗃 Firestore + 🔔 Messaging.

Demo: [https://next-firebase-starter.vercel.app/](https://next-firebase-starter.vercel.app/)
## ✅ Getting Started

1. Edit `.env.local.example` to `.env.local` and fill in your own.

2. Customize the project accordingly. No need to intialize SDKs, or setup Firebase Auth. 

3. Refer `dashboard.js` for protected pages and `login.js` for Login / Register pages.

### 🔑 Setting Custom Auth Providers

* Refer [`firebaseAuth.js`](https://github.com/shreyas-jadhav/next-firebase-starter/blob/main/components/elements/FirebaseAuth.js) file to add more Providers. 

### 📄 Adding users into firestore collection
* Refer - [`firebaseAuth.js` callbacks](https://github.com/shreyas-jadhav/next-firebase-starter/blob/29bc5278439e8fe98c932b067ffc55ca91b48677/components/elements/FirebaseAuth.js#L32)

### 💻 SSR / SSG using Firestore Data
* Use [Admin SDK's Firestore Functions](https://github.com/shreyas-jadhav/next-firebase-starter/blob/main/utils/firebase/firestore/fsAdminFunctions.js) for server operations. 

Note: Do not use these for Client Side.

### 🚚 Absolute Imports
* Refer [jsconfig.json](https://github.com/shreyas-jadhav/next-firebase-starter/blob/29bc5278439e8fe98c932b067ffc55ca91b48677/jsconfig.json#L5) 

### 👩‍🏭 Firebase Cloud Messaging service worker
* Refer [firebase-messaging-sw.js](https://github.com/shreyas-jadhav/next-firebase-starter/blob/main/public/firebase-messaging-sw.js)


## Additional Docs
* `next-firebase-auth` library [documentation](https://github.com/gladly-team/next-firebase-auth) (Great Library ♥)
* [Firebase Official Documentation](https://firebase.google.com/docs/firestore)



## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
