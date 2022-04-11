import Head from "next/head";
import Navbar from "../components/Navbar";
import FooterInfo from "../components/FooterInfo";

const ContactPage = () => {
    return (
        <>
            <Head>
                <title>Contact Me</title>
            </Head>

            <header>
                <Navbar />
            </header>

            <main>
                <div id="contact-container">
                    <form action="https://formsubmit.co/contact@estonli.ca" method="POST">
                        <div id="contact-name">
                            <div className="contact-form-group">
                                <label htmlFor="first-name">First Name</label>
                                <input id="first-name" type="text" name="first-name" required />
                            </div>

                            <div className="contact-form-group">
                                <label htmlFor="last-name">Last Name</label>
                                <input id="last-name" type="text" name="last-name" required />
                            </div>
                        </div>

                        <div className="contact-form-group">
                            <label htmlFor="email">E-Mail</label>
                            <input id="email" type="email" name="email" required />
                        </div>

                        <div className="contact-form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" cols="30" rows="10" required />
                        </div>

                        <input type="hidden" name="_next" value="https://www.estonli.ca/contact-thanks" />
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </main>

            <footer>
                <FooterInfo />
            </footer>
        </>
    );
};

export default ContactPage;
