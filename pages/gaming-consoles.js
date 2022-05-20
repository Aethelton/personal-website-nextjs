import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {EffectCube, Autoplay, Pagination, Navigation, Controller} from "swiper";
import "swiper/css/bundle";
import GamingConsoleSlide from "../components/GamingConsoleSlide";
import Head from "next/head";
import Navbar from "../components/Navbar";
import FooterInfo from "../components/FooterInfo";
import {useEffect, useRef, useState} from "react";
import GamingConsoleContent from "../components/GamingConsoleContent";
import Style from "../styles/GamingConsole.module.css";

import xbox360SlimCardCover from "../public/Gaming Console Images/Xbox 360 Slim/My Xbox 360 Slim.jpg";
import xbox360SlimCarouselPic1 from "../public/Gaming Console Images/Xbox 360 Slim/My Xbox 360 Slim 16x9.jpg";
import xbox360SlimCarouselPic2 from "../public/Gaming Console Images/Xbox 360 Slim/Ace V3.jpg";
import xbox360SlimCarouselPic3 from "../public/Gaming Console Images/Xbox 360 Slim/Viper Dual Nand Close-Up.jpg";
import Image from "next/image";


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
    const curActiveSlideContent = modalContent.querySelector(`.${Style.consoleModalBodyContent}:nth-child(${curActiveSlide + 1})`);
    curActiveSlideContent.classList.add(Style.consoleModalBodyContentActive);
};

const initModalSwipers = () => {
    const modal = document.querySelector(`.${Style.consoleModalBackground}`);
    const modalOpenBtns = document.querySelectorAll(`.${Style.consoleCollectionCarousel} .swiper-slide`);
    const modalSwipers = Array.from(document.querySelectorAll(`.${Style.consoleModalCarousel}`)).map(
        node => { return node.swiper }
    );

    modalOpenBtns.forEach((modalOpenBtn, index) => {
        const modalContent = modal.querySelector(`.${Style.consoleModalContent}:nth-child(${index + 1})`);
        const modalCloseBtn = modalContent.querySelector(`.${Style.consoleModalCloseBtn}`);
        initializeConsoleModalCarousel(modalSwipers, modalContent, index);

        modalOpenBtn.addEventListener("click", () => {
            modal.classList.add(Style.consoleModalBackgroundActive);
            modalContent.classList.add(Style.consoleModalContentActive);
            initializeConsoleModalCarousel(modalSwipers, modalContent, index);
            modalContent.style.position = "relative";
            document.body.style.overflowY = "hidden";
        });

        modalCloseBtn.addEventListener("click", () => {
            modal.classList.remove(Style.consoleModalBackgroundActive);
            modalContent.classList.remove(Style.consoleModalContentActive);
            document.body.style.overflowY = "initial";
            modalOffTransitionWait(modalContent);
        });

        window.addEventListener("click", (evt) => {
            if (evt.target === modal) {
                modal.classList.remove(Style.consoleModalBackgroundActive);
                modalContent.classList.remove(Style.consoleModalContentActive);
                document.body.style.overflowY = "initial";
                modalOffTransitionWait(modalContent);
            }
        });

        modalSwipers[index].on("slideChange", () => {
            modalContent.querySelector(`.${Style.consoleModalBodyContentActive}`).classList.remove(Style.consoleModalBodyContentActive);
            const newSlideIndex = modalSwipers[index].realIndex;
            const newSlideContent = modalContent.querySelector(`.${Style.consoleModalBodyContent}:nth-child(${newSlideIndex + 1})`);
            newSlideContent.classList.add(Style.consoleModalBodyContentActive);
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
                <section className={Style.consolesMainSection}>
                    <h1>My Collection</h1>
                    <Swiper className={Style.consoleCollectionCarousel} {...CardCarouselOptions}>
                        <SwiperSlide>
                            <GamingConsoleSlide title={"Xbox 360 Slim"} src={xbox360SlimCardCover} Style={Style}>
                                Xbox 360, Dual Nand, S-RGH with SMC+
                            </GamingConsoleSlide>
                        </SwiperSlide>

                        <div className="swiper-pagination"/>
                        <div className="swiper-button-prev"/>
                        <div className="swiper-button-next"/>
                    </Swiper>

                    <div className={Style.consoleModalBackground}>
                        <div className={Style.consoleModalContent}>
                            <div className="modal-header">
                                <div/>
                                <div><i className={`fas fa-times modal-closeBtn ${Style.consoleModalCloseBtn}`}/></div>
                            </div>

                            <Swiper className={Style.consoleModalCarousel}
                                    {...ModalCarouselOptions}
                                    onSwiper={(swiper) => SwiperControllers.current.push(swiper)}
                            >
                                <SwiperSlide className="swiper-slide">
                                    <Image src={xbox360SlimCarouselPic1} alt="My Xbox 360 Slim" layout={"responsive"} placeholder={"blur"} />
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <Image src={xbox360SlimCarouselPic2} alt="Ace V3" layout={"responsive"} placeholder={"blur"} />
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <Image src={xbox360SlimCarouselPic3} alt="Viper Dual Nand" layout={"responsive"} placeholder={"blur"} />
                                </SwiperSlide>

                                <div className="swiper-pagination"/>
                                <div className="swiper-button-prev"/>
                                <div className="swiper-button-next"/>
                            </Swiper>


                            <div className={Style.consoleModalBody}>
                                <GamingConsoleContent title={"Xbox 360 Slim"} Style={Style}>
                                    This Xbox 360 is fully modded with S-RGH and SMC+ speed-up. It also has dual
                                    nand, which allows it to boot up to the latest firmware or the old NXE
                                    firmware.
                                </GamingConsoleContent>

                                <GamingConsoleContent title={"Ace V3"} Style={Style}>
                                    This chip allows the Xbox 360 to be RGHed, it&apos;s programmed with the S-RGH
                                    method with SMC+ glitch speed-up.
                                </GamingConsoleContent>

                                <GamingConsoleContent title={"Viper Dual Nand V2"} Style={Style}>
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
