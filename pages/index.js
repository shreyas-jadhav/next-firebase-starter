import Head from "next/head";
import Link from "next/link";
import enableMessaging from "@/messaging/enableMessaging";

export default function Home({ data }) {
  //{data} is from getStaticProps() exported below.
  return (
    <div>
      <Head>
        <title>Next + Firebase</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container px-5 mx-auto py-20">
        <h1 className="text-6xl font-extrabold text-center">
          <a
            href="https://nextjs.org"
            className="hover:underline text-blue-500"
          >
            Next.js
          </a>{" "}
          +{" "}
          <a
            href="https://firebase.google.com/"
            className="hover:underline"
            style={{ color: "#ffa611" }}
          >
            Firebase
          </a>{" "}
          🔥
        </h1>
        <hr className="my-5 text-gray" />

        <article className="text-3xl mb-20 text-center">
          <h6>Full Setup for Next.js and Firebase</h6>
          <strong>👤 Auth + 📃 Firestore + 💌 Messaging</strong>
        </article>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <article className="bg-navy border-2 border-purple-500 p-5 rounded-lg shadow-md  md:col-span-1 col-span-12">
            <h1 className="text-2xl font-bold text-center text-gray">
              Test Pages
            </h1>
            <hr className="my-3 text-gray" />
            <ul>
              <li className="mb-2">
                👤{" "}
                <Link href="/login">
                  <a className="hover:underline text-blue">Authenticate User</a>
                </Link>
              </li>
              <li className="mb-2">
                🔒{" "}
                <Link href="/dashboard">
                  <a className="hover:underline text-blue">Protected Page</a>
                </Link>
              </li>
            </ul>

            <button
              className="bg-coral p-2 rounded shadow font-extrabold text-navy"
              onClick={enableMessaging}
            >
              📩 Enable Messaging
            </button>
          </article>
          <div className="text-center text-2xl p-4 col-span-12 md:col-span-2">
            <article className="text-left">
              Check out my{" "}
              <strong>
                <a
                  href="https://github.com/shreyas-jadhav/next-firebase-starter"
                  style={{ color: "#6f42c1" }}
                >
                  GitHub Repository
                </a>
              </strong>{" "}
              for more!
              <br />
              <div className="overflow-auto my-2">
                <object
                  type="image/svg+xml"
                  data="https://gh-card.dev/repos/shreyas-jadhav/next-firebase-starter.svg?fullname=&link_target=_top"
                ></object>
              </div>
            </article>
            <article>
              <a href="https://www.buymeacoffee.com/Shreyas">
                <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=Shreyas&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff" />
              </a>
            </article>
          </div>
        </div>

        <hr className="my-20" />
        <h1 className="text-center font-extrabold text-5xl">Quick Links</h1>
        <hr className="my-3 text-gray" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-4 border border-gray rounded-md shadow-md hover:shadow-xl transition-shadow duration-300 md:col-span-1">
            <a href="https://nextjs.org/docs">
              <h3 className="text-2xl font-bold ">
                <code>next-firebase-auth</code> Documentation &rarr;
              </h3>
              <p>
                Simple Firebase authentication for all Next.js rendering
                strategies.
              </p>
            </a>

            <img src="https://gh-card.dev/repos/gladly-team/next-firebase-auth.svg" />
          </div>

          <div className="p-4 border border-gray rounded-md shadow-md hover:shadow-xl transition-shadow duration-300 md:col-span-1">
            <a href="https://firebase.google.com/docs/">
              <h3 className="text-2xl font-bold">
                Firebase Documentation &rarr;
              </h3>
              <p className="text-gray-500">
                Descriptive how-to content with both high-level introductions
                and step-by-step workflows for using Firebase products.
              </p>
              <img src="https://firebase.google.com/downloads/brand-guidelines/PNG/logo-standard.png" />
            </a>
          </div>

          <div className="p-4 border justify-items-center border-gray rounded-md shadow-md hover:shadow-xl transition-shadow duration-300 md:col-span-1">
            <a href="https://firebase.google.com/docs/">
              <h3 className="text-2xl font-bold">
                Next.js Documentation &rarr;
              </h3>
              <p className="text-gray-500">
                Get started with Next.js in the official documentation, and
                learn more about all the features!
              </p>
              <img src="/vercel.svg" className="" />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  //Note: Do not use client functions here!

  //getDoc function is from Admin SDK.
  const data = await import("@/FS-admin-functions").then(({ getDoc }) =>
    getDoc()
  );

  return {
    props: { data }, // will be passed to the page component as props
  };
}
