import { Layout } from "@/components";
import { Toaster } from "react-hot-toast";
import AppContextProvider from "@/context/AppContextProvider";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Layout>
        <Toaster/>
        <Component {...pageProps} />
      </Layout>
    </AppContextProvider>
  );
}
