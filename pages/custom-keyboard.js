import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import FooterInfo from "../components/FooterInfo";
import KeyboardCard from "../components/KeyboardCard";
import KeyboardModal from "../components/KeyboardModal";
import KeyboardModalStyle from "../styles/KeyboardModal.module.css";

import tofu60Switch from "../public/Custom Keyboard Images/Tofu60/My Tofu60 Switches.jpg";
import tofu60CardCover from "../public/Custom Keyboard Images/Tofu60/My Tofu60.jpg";
import tofu60ModalHeader from "../public/Custom Keyboard Images/Tofu60/My Tofu60 16x9.jpg";


const initializeKeyboardModal = () => {
    const modalOpenBtns = document.querySelectorAll(".keyboard-modal-openBtn");

    modalOpenBtns.forEach(modalOpenBtn => {
        const modal = modalOpenBtn.closest("article").querySelector(`.${KeyboardModalStyle.keyboardModal}`);
        const modalCloseBtn = modal.querySelector(`.${KeyboardModalStyle.keyboardModalCloseBtn}`);

        modalOpenBtn.addEventListener("click", () => {
            modal.classList.add(KeyboardModalStyle.keyboardModalActive);
        });

        modalCloseBtn.addEventListener("click", () => {
            modal.classList.remove(KeyboardModalStyle.keyboardModalActive);
        });

        window.addEventListener("click", (evt) => {
            if (evt.target === modal) {
                modal.classList.remove(KeyboardModalStyle.keyboardModalActive);
            }
        });
    });
};


const CustomKeyboardPage = () => {
    useEffect(() => {
        initializeKeyboardModal();
    }, []);

    return (
        <>
            <Head>
                <title>Custom Keyboard</title>
            </Head>

            <header>
                <Navbar />
            </header>

            <main>
                <section id="keyboard-main-section">
                    <h1>My Keyboard</h1>
                    <div>
                        <article id="tofu60-article">
                            <KeyboardCard title={"Tofu60"} src={tofu60CardCover}>
                                My first ever build, a Tofu60 with 1976 colour wave.
                                Light to press yet tactile, comfortable to type and not fatiguing to game with.
                            </KeyboardCard>

                            <KeyboardModal title={"Tofu60"} src={tofu60ModalHeader} Style={KeyboardModalStyle}>
                                <div className="tofu60-intro">
                                    <h2>Intro</h2>
                                    <p>
                                        I have followed the custom keyboard for a while before I finally decided
                                        to build one myself.
                                        All keyboards I&apos;ve own prior to my Tofu60 are very annoying to type
                                        with
                                        and rattly, but most importantly
                                        they were all light and cheap.
                                    </p>
                                </div>
                                <div className="tofu60-build-experience">
                                    <h2>Build Experience</h2>
                                    <p>
                                        Since this is my first custom keyboard build, there were some tricky
                                        stuff like having a consistent
                                        amount of dielectric grease for each switch. But for the most part, it
                                        went really well.
                                    </p>

                                    <h3>Case</h3>
                                    <p>
                                        I chose to go with the Tofu60 case from KBDfans. This case is all
                                        aluminum, feels sturdy and heavy.
                                        One of the most popular beginner case, it&apos;s also compact with only
                                        60%
                                        the size of a full size keyboard.
                                        In addition, I added some foam to the case to dampen the sound.
                                    </p>

                                    <h3>Switch</h3>
                                    <div id="tofu60-switch-content">
                                        <p>
                                            I always loved keyboards with tactility but not loud and clicky,
                                            this is why I used Zealio V2 as the switch of my first build.
                                            <br/><br/>
                                            I went with the 62g spring version because it&apos;s light to code
                                            with and not too fatiguing when gaming.
                                            <br/><br/>
                                            The switch is also applied with Trbisosy 3204 for better
                                            smoothness, it&apos;s also filmed with Deskey films to reduce
                                            housing wobble for better sounding.
                                        </p>
                                        <div className={"tofu60-switch-image"}>
                                            <Image src={tofu60Switch} alt={"Tofu60 Switches"} layout={"fill"} objectFit={"cover"} placeholder={"blur"} />
                                        </div>
                                    </div>

                                    <h3>Plate</h3>
                                    <p>
                                        I went with a brass plate because brass plate makes the keyboard sound
                                        more clacky and that&apos;s what I&apos;m going for.
                                        I also cut some neoprene foam strips and adhere them on the plate to
                                        dampen the sound a bit more.
                                    </p>

                                    <h3>PCB</h3>
                                    <p>
                                        For PCB, I went with the DZ60, this PCB is very versatile and cheap,
                                        with support of many key layouts as well as easy key programming.
                                        The only downside is that the keys has to be soldered on, which means I
                                        have to unsolder switches if I want to replace them.
                                        But, I have a lot of experience with soldering from fixing gaming
                                        consoles so that wasn&apos;t a big deal for me.
                                    </p>
                                </div>
                            </KeyboardModal>
                        </article>
                    </div>
                </section>
            </main>

            <footer>
                <FooterInfo />
            </footer>
        </>
    );
};

export default CustomKeyboardPage;
