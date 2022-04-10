import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {EffectCube, Autoplay, Pagination, Navigation, Controller} from "swiper";
import "swiper/css/bundle";
import GamingConsoleSlide from "../components/GamingConsoleSlide";
import Head from "next/head";
import Navbar from "../components/Navbar";
import FooterInfo from "../components/FooterInfo";
import {useEffect, useRef, useState} from "react";
import GamingConsoleContent from "../components/GamingConsoleContent";


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

const ModalCarouselOptions = {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
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
};

const modalOffTransitionWait = (modalContent) => {
    const modalContentAnimeTime = getComputedStyle(modalContent).getPropertyValue("transition-duration");
    const modalContentAnimeTimeNum = Math.ceil(parseFloat(modalContentAnimeTime) * 1000);

    setTimeout(() => {
        modalContent.style.position = "";
    }, modalContentAnimeTimeNum);
};

const initializeConsoleModalCarousel = (modalSwipers, modalContent, index) => {
    if (modalSwipers[index].realIndex === undefined) { return; }
    const curActiveSlide = modalSwipers[index].realIndex;
    const curActiveSlideContent = modalContent.querySelector(`.console-modal-body-content:nth-child(${curActiveSlide + 1})`);
    curActiveSlideContent.classList.add("console-modal-body-content-active");
};

const initModalSwipers = () => {
    const modal = document.querySelector(".console-modal-background");
    const modalOpenBtns = document.querySelectorAll(".console-collection-carousel .swiper-slide");
    const modalSwipers = Array.from(document.querySelectorAll(".console-modal-carousel")).map(
        node => { return node.swiper }
    );

    modalOpenBtns.forEach((modalOpenBtn, index) => {
        const modalContent = modal.querySelector(`.console-modal-content:nth-child(${index + 1})`);
        const modalCloseBtn = modalContent.querySelector(".console-modal-closeBtn");
        initializeConsoleModalCarousel(modalSwipers, modalContent, index);

        modalOpenBtn.addEventListener("click", () => {
            modal.classList.add("console-modal-background-active");
            modalContent.classList.add("console-modal-content-active");
            initializeConsoleModalCarousel(modalSwipers, modalContent, index);
            modalContent.style.position = "relative";
        });

        modalCloseBtn.addEventListener("click", () => {
            modal.classList.remove("console-modal-background-active");
            modalContent.classList.remove("console-modal-content-active");
            modalOffTransitionWait(modalContent);
        });

        window.addEventListener("click", (evt) => {
            if (evt.target === modal) {
                modal.classList.remove("console-modal-background-active");
                modalContent.classList.remove("console-modal-content-active");
                modalOffTransitionWait(modalContent);
            }
        });

        modalSwipers[index].on("slideChange", () => {
            modalContent.querySelector(".console-modal-body-content-active").classList.remove("console-modal-body-content-active");
            const newSlideIndex = modalSwipers[index].realIndex;
            const newSlideContent = modalContent.querySelector(`.console-modal-body-content:nth-child(${newSlideIndex + 1})`);
            newSlideContent.classList.add("console-modal-body-content-active");
        });
    });
};

const GamingConsoles = () => {
    SwiperCore.use([Controller, Autoplay, Pagination, Navigation]);
    const SwiperControllers = useRef([]);

    useEffect(() => {
        initModalSwipers();
    }, []);

    return (
        <>
            <Head>
                <title>Gaming Consoles</title>
            </Head>

            <header>
                <Navbar/>
            </header>

            <main>
                <section id="consoles-main-section">
                    <h1>My Collection</h1>
                    <Swiper className={"console-collection-carousel"} {...CardCarouselOptions}>
                        <SwiperSlide>
                            <GamingConsoleSlide title={"Xbox 360 Slim"} src={"Xbox%20360%20Slim/My%20Xbox%20360%20Slim.jpg"}>
                                Xbox 360, Dual Nand, S-RGH with SMC+
                            </GamingConsoleSlide>
                        </SwiperSlide>

                        <div className="swiper-pagination"/>
                        <div className="swiper-button-prev"/>
                        <div className="swiper-button-next"/>
                    </Swiper>

                    <div className="console-modal-background">
                        <div className="console-modal-content">
                            <div className="modal-header">
                                <div/>
                                <div><i className="fas fa-times modal-closeBtn console-modal-closeBtn"/></div>
                            </div>

                            <Swiper className="console-modal-carousel"
                                    {...ModalCarouselOptions}
                                    onSwiper={(swiper) => SwiperControllers.current.push(swiper)}
                            >
                                <SwiperSlide className="swiper-slide">
                                    <img
                                        src="/Gaming%20Console%20Images/Xbox%20360%20Slim/My%20Xbox%20360%20Slim%2016x9.jpg"
                                        alt="My Xbox 360 Slim"/>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <img src="/Gaming%20Console%20Images/Xbox%20360%20Slim/Ace%20V3.jpg"
                                         alt="Ace V3"/>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <img
                                        src="/Gaming%20Console%20Images/Xbox%20360%20Slim/Viper%20Dual%20Nand%20Close-Up.jpg"
                                        alt="Viper Dual Nand"/>
                                </SwiperSlide>

                                <div className="swiper-pagination"/>
                                <div className="swiper-button-prev"/>
                                <div className="swiper-button-next"/>
                            </Swiper>


                            <div className="console-modal-body">
                                <GamingConsoleContent title={"Xbox 360 Slim"}>
                                    This Xbox 360 is fully modded with S-RGH and SMC+ speed-up. It also has dual
                                    nand, which allows it to boot up to the latest firmware or the old NXE
                                    firmware.
                                </GamingConsoleContent>

                                <GamingConsoleContent title={"Ace V3"}>
                                    This chip allows the Xbox 360 to be RGHed, it&apos;s programmed with the S-RGH
                                    method with SMC+ glitch speed-up.
                                </GamingConsoleContent>

                                <GamingConsoleContent title={"Viper Dual Nand V2"}>
                                    With the Viper Dual Nand V2 chip, it allows the console to have another firmware.
                                    I loaded this chip with the old NXE firmware.
                                </GamingConsoleContent>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer>
                <FooterInfo/>
            </footer>
        </>
    );
};

export default GamingConsoles;
