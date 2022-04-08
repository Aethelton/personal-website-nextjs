import Head from "next/head";
import FooterInfo from "../components/FooterInfo";
import Navbar from "../components/Navbar";
import Link from "next/link";

const AboutPage = () => {
    return (
        <>
            <Head>
                <title>About Me</title>
            </Head>

            <header>
                <Navbar />
            </header>

            <main>
                <h1 id="about-me-header">Hi There!</h1>

                <section id="about-me-section">
                    <img src="/About%20Me%20Picture.jpg" alt="My Portrait" />
                    <div/>
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
            </main>

            <footer>
                <FooterInfo />
            </footer>
        </>
);
};

export default AboutPage;
