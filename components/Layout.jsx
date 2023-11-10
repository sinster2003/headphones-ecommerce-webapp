import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
        <Head>
            <title>Phoenix Audio</title>
        </Head>
        <header>
            <Navbar/>
        </header>
        <main style={{minHeight: "70vh"}}>
            {children}
        </main>
        <footer>
            <Footer/>
        </footer>
    </div>
  )
}

export default Layout;