import Head from "next/head";
import Navbar from "../components/Navbar";
import FooterInfo from "../components/FooterInfo";
import FleckBG from "../components/FleckBG";

const fleckColours = [
    "hsl(83, 33%, 76%)",
    "hsl(83, 33%, 66%)",
    "hsl(354, 43%, 85%)",
    "hsl(354, 43%, 75%)",
    "hsl(44, 87%, 94%)",
    "hsl(44, 87%, 89%)"
];

const FleckTemplate = () => {
    return (
        <>
            <Head>
                <title>Test</title>
            </Head>

            <header>
                <Navbar/>
            </header>

            <main style={{display: "flex", backgroundColor: "transparent"}}>
                <div style={{position: "relative", width: "100%", overflow: "hidden"}}>
                    <FleckBG
                        bgColour={"ivory"}
                        fleckSeed={123449}
                        fleckCount={2000}
                        fleckBaseSize={5}
                        fleckColours={fleckColours}
                    />

                    {/* Content In Here!!!!! */}
                    <div>

                    </div>
                </div>
            </main>


            <footer>
                <FooterInfo/>
            </footer>
        </>
    );
};

export default FleckTemplate;
