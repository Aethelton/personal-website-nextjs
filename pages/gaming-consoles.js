import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {EffectCube, Autoplay, Pagination, Navigation} from "swiper";
import "swiper/css/bundle";
import GamingConsoleSlide from "../components/GamingConsoleSlide";
import Head from "next/head";
import Navbar from "../components/Navbar";
import FooterInfo from "../components/FooterInfo";


const CardCarouselOptions = {
    direction: 'horizontal',
    loop: false,
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
};

const GamingConsoles = () => {
    SwiperCore.use([Autoplay, Pagination, Navigation]);

    return (
        <>
            <Head>
                <title>Gaming Consoles</title>
            </Head>

            <header>
                <Navbar />
            </header>

            <main>
                <section id="consoles-main-section">
                    <h1>My Collection</h1>
                    <Swiper className={"console-collection-carousel"} {...CardCarouselOptions}>
                        <GamingConsoleSlide title={"Xbox 360 Slim"} src={"Xbox%20360%20Slim/My%20Xbox%20360%20Slim.jpg"}>
                            Xbox 360, Dual Nand, S-RGH with SMC+
                        </GamingConsoleSlide>

                        {/*<SwiperSlide>*/}
                        {/*    <img src={`/Gaming%20Console%20Images/Xbox%20360%20Slim/My%20Xbox%20360%20Slim.jpg`} alt={"Xbox 360 Slim"}/>*/}
                        {/*    <div>*/}
                        {/*        <h3 className="console-carousel-text">{"Xbox 360, Dual Nand, S-RGH with SMC+"}</h3>*/}
                        {/*    </div>*/}
                        {/*</SwiperSlide>*/}
                        <div className="swiper-pagination" />
                        <div className="swiper-button-prev" />
                        <div className="swiper-button-next" />
                    </Swiper>
                </section>
            </main>

            <footer>
                <FooterInfo />
            </footer>
        </>
    );
};

export default GamingConsoles;
