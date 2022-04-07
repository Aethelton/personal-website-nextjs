import styles from "../styles/styles.module.css"

const HomePage = () => {
    return <div>
        <header>
            <nav>
                <a href="index.html" style="height: 80%;">
                    <img src="../public/Logo.png" alt="Logo" id="nav-logo" style="border-radius: 50%; height: 100%;" />
                </a>

                <ul className="nav-links">
                    <li><a href="index.html">HOME</a></li>
                    <li><a href="about.html">ABOUT</a></li>
                    <li><a href="works.html">WORKS</a></li>
                    <li id="nav-expandable-list-1" className="nav-expandable-list">
                        <a href="#" onClick="toggleNavExpandable('#nav-expandable-list-1')">HOBBIES</a>

                        <ul>
                            <li><a href="overwatch.html">OVERWATCH</a></li>
                            <li><a href="custom-keyboard.html">CUSTOM KEYBOARD</a></li>
                            <li><a href="gaming-consoles.html">GAMING CONSOLES</a></li>
                        </ul>
                    </li>
                    <li><a href="contact.html">CONTACT</a></li>
                </ul>


                <div className="nav-burger" onClick="toggleNavbar()">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </nav>
        </header>

        <main>
            <section>
                <div id="homepage-container">
                    <h1 style="color: var(--darkPeachColour)">Welcome!</h1>
                    <div>
                        <span>Hello,</span>
                        <span>I'm Eston</span>
                    </div>
                    <div>
                        <div>I Love&nbsp;</div>
                        <div className="homepage-cube">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">Making Games</div>
                                <div className="swiper-slide">Creating Websites</div>
                                <div className="swiper-slide">Playing Overwatch</div>
                                <div className="swiper-slide">Customizing Electronics</div>
                                <div className="swiper-slide">Building Keyboards</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <footer>
            <div className="footer-icons">
                <a href="mailto: contact@estonli.ca"><i className="fas fa-envelope"></i></a>
                <a href="https://github.com/SuperMage03" target="_blank"><i className="fab fa-github"></i></a>
                <a href="https://www.youtube.com/channel/UCenqEx0Lw5mRrT_IvjHX7Bg" target="_blank"><i
                    className="fab fa-youtube"></i></a>
                <a href="https://devpost.com/SuperMage03" target="_blank"><img src="Images/Devpost%20Icon.svg"
                                                                               alt="Devpost Icon" id="devpost-icon"></a>
            </div>
            <div className="footer-info">
                <p>Copyright © 2021 Eston Li</p>
            </div>
        </footer>

        <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>

        <script>
            const swiper = new Swiper('.homepage-cube', {
            loop: true,
            effect: "cube",
            cubeEffect: {
            shadow: false,
            slideShadows: false,
        },
            autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
            direction: 'vertical',
            mousewheelControl: true,
            slidesPerView: 1,
            grabCursor: true,
        });
        </script>
    </div>
}

export default HomePage;
