import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCube, Autoplay } from "swiper";
import "swiper/css/bundle";
import Head from "next/head";
import Navbar from "../components/Navbar";
import FooterInfo from "../components/FooterInfo";

const SwiperConfig = {
    loop: true,
    effect: "cube",
    cubeEffect: {
        shadow: false,
        slideShadows: false,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    direction: "vertical",
    slidesPerView: 1,
    grabCursor: true,
};

const HomePage = () => {
    SwiperCore.use([Autoplay, EffectCube]);

    return (
        <>
            <Head>
                <title>Eston Li</title>
            </Head>

            <header>
                <Navbar />
            </header>

            <main>
                <section>
                    <div id={"homepage-container"}>
                        <h1 style={{color: "var(--darkPeachColour)"}}>Welcome!</h1>
                        <div>
                            <span>Hello, </span>
                            <span>I&apos;m Eston</span>
                        </div>
                        <div>
                            <div>I Love&nbsp;</div>
                            <Swiper className="homepage-cube" {...SwiperConfig}>
                                <SwiperSlide>Making Games</SwiperSlide>
                                <SwiperSlide>Creating Websites</SwiperSlide>
                                <SwiperSlide>Playing Overwatch</SwiperSlide>
                                <SwiperSlide>Customizing Electronics</SwiperSlide>
                                <SwiperSlide>Building Keyboards</SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </section>
            </main>

            <footer>
                <FooterInfo />
            </footer>
        </>
    );
}

export default HomePage;
