import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import FooterInfo from "../components/FooterInfo";
import emailIcon from "../public/Mail Sent Icon.png";


const ButtonStyle = {
    width: "7rem", height: "3rem", borderRadius: "7%", marginBottom: "25px"
};

const HeaderStyle = {
    fontFamily: "var(--primaryFont), 'sans-serif'", color: "var(--velvetColour)", padding: "4vh 0 15px 0"
};

const ParagraphStyle = {
    fontFamily: "var(--secondaryFont), 'sans-serif'", color: "var(--pinkColour)", marginBottom: "25px"
};

const ContactThanksPage = () => {
    return (
        <>
            <Head>
                <title>Thank You!</title>
            </Head>

            <header>
                <Navbar/>
            </header>

            <main style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <Image
                        src={emailIcon}
                        alt={"Mail Sent Icon"}
                        style={{height: "23vh", minHeight: "125px", width: "auto", objectFit: "contain"}}
                        layout={"raw"}
                    />

                    <h2 style={HeaderStyle}>
                        Thank You for Reaching Out!
                    </h2>
                    <p style={ParagraphStyle}>
                        Follow-up will occur within 24 hours
                    </p>

                    <Link href={"/"}>
                        <a style={ButtonStyle} className="darkPeachButton">To Home</a>
                    </Link>
                </div>
            </main>

            <footer>
                <FooterInfo/>
            </footer>
        </>
    );
};

export default ContactThanksPage;
