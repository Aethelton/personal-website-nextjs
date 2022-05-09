import Head from "next/head";
import Image from "next/image";
import FooterInfo from "../components/FooterInfo";
import Navbar from "../components/Navbar";
import Link from "next/link";
import FleckBG from "../components/FleckBG";
import Style from "../styles/About.module.css";
import portraitPic from "../public/About Me Picture.jpg";

const fleckColours = [
    "hsl(83, 33%, 76%)",
    "hsl(83, 33%, 70%)",
    "hsl(354, 43%, 85%)",
    "hsl(354, 43%, 80%)",
    "hsl(44, 87%, 94%)",
    "hsl(44, 87%, 89%)"
];

const AboutPage = () => {
    return (
        <>
            <Head>
                <title>About Me</title>
            </Head>

            <header>
                <Navbar />
            </header>

            <main style={{display: "flex", backgroundColor: "transparent"}}>
                <div style={{position: "relative", width: "100%", overflow: "hidden"}}>
                    <FleckBG
                        bgColour={"ivory"}
                        fleckSeed={3}
                        fleckCount={2000}
                        fleckBaseSize={5}
                        fleckColours={fleckColours}
                    />

                    <div>
                        <h1 className={Style.aboutMeHeader}>Hi There!</h1>

                        <section className={Style.aboutMeSection}>
                            <div className={Style.myPortrait}>
                                <Image
                                    src={portraitPic}
                                    alt={"My Portrait"}
                                    layout={"responsive"}
                                />
                            </div>

                            <div className={Style.dividerLine} />
                            <p>
                                Hi, I&apos;m a student from Windsor, Ontario that loves Programming and Video Games.
                                <br/><br/>
                                I have experience in many fields of Programming such as Game Development, Web
                                Development, and Competitive Programming.
                                <br/><br/>
                                I enjoy making games with fun features and physics that is inspired by concepts from
                                other games that I find cool. For example, gliding and grappling from Batman Arkham
                                Game Series.
                                <br/><br/>
                                In my free time I like to play <Link href="/overwatch"><a>Overwatch</a></Link> for
                                competitive gaming, build <Link href="/custom-keyboard"><a>Custom Keyboards</a></Link>,
                                and fixing <Link href="/gaming-consoles"><a>Gaming Consoles</a></Link> and sell it on
                                eBay for some money.
                            </p>
                        </section>
                    </div>
                </div>
            </main>


            <footer>
                <FooterInfo />
            </footer>
        </>
    );
};

export default AboutPage;
