import "../styles/globals.css";
import initAuth from "@/auth";

initAuth();

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
