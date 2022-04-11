import Head from "next/head";
import Navbar from "../components/Navbar";
import FooterInfo from "../components/FooterInfo";
import css from "../styles/Contact.module.css";
import { useEffect } from "react";

const ContactPage = () => {
    useEffect(() => {
        const app = new Application({
            view: document.getElementById("pixi-canvas"),
            resolution: window.devicePixelRatio || 1,
            autoDensity: true,
            backgroundColor: 0x6495ed,
            width: 640,
            height: 480
        });
    }, [])

    return (
        <>
            <Head>
                <title>Test</title>
            </Head>

            <header>
                <Navbar/>
            </header>

            <main>
                <canvas id={"pixi-canvas"} />
            </main>

            <footer>
                <FooterInfo/>
            </footer>
        </>
    );
};

export default ContactPage;
