import Link from "next/link";
import { useEffect, useRef } from "react";
import useMedia from "../hooks/useMedia";
import Style from "../styles/Navbar.module.css";
import Image from "next/image";
import navLogo from "../public/Logo.png";

const smoothScrollToTop = () => {
    document.body.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

const Navbar = () => {
    const navExpandableList1 = useRef(null);
    const navLinkRef = useRef(null);
    const navBurgerRef = useRef(null);
    const navLinks = useRef(null);
    const phoneMedia = useMedia("(max-width: 768px)");

    useEffect(() => {
        navLinks.current = navLinkRef.current.querySelectorAll(`.${Style.navLinks} > li`);
        document.body.classList.remove("lock-scroll");
        document.documentElement.classList.remove("lock-scroll");
    }, []);

    if (phoneMedia && document.body.classList.contains("lock-scroll")) {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    const toggleNavExpandable = (ref) => {
        if (ref.current != null) {
            ref.current.classList.toggle(Style.navExpandableListActive);
        }
    };

    const toggleNavbar = () => {
        if (!navLinkRef.current.classList.contains(Style.navLinksActive)) {
            navLinks.current.forEach((link, index) => {
                link.style.setProperty("animation", `${Style.navLinkFade} 0.5s ease forwards ${index / 7 + 0.5}s`);
            });
        }

        else {
            navLinks.current.forEach(link => {
                link.style.setProperty("animation", "initial");
            });
        }

        navLinkRef.current.classList.toggle(Style.navLinksActive);
        navBurgerRef.current.classList.toggle(Style.navBurgerActive);
        document.body.classList.toggle("lock-scroll");
        document.documentElement.classList.toggle("lock-scroll");

        smoothScrollToTop();
    };

    return (
        <nav>
            <Link href={"/"}>
                <a style={{height: "80%"}}>
                    <Image id="nav-logo" style={{borderRadius: "50%", width: "auto", height: "100%"}} src={navLogo} layout={"raw"} placeholder={"blur"} alt={"Logo"} />
                </a>
            </Link>

            <ul className={Style.navLinks} ref={navLinkRef}>
                <li>
                    <Link href={"/"}><a>HOME</a></Link>
                </li>
                <li>
                    <Link href={"/about"}><a>ABOUT</a></Link>
                </li>
                <li>
                    <Link href={"/works"}><a>WORKS</a></Link>
                </li>
                <li id={"nav-expandable-list-1"} className={Style.navExpandableList} ref={navExpandableList1}>
                    <a href="#" onClick={() => toggleNavExpandable(navExpandableList1)}>HOBBIES</a>

                    <ul>
                        <li>
                            <Link href={"/overwatch"}><a>OVERWATCH</a></Link>
                        </li>
                        <li>
                            <Link href={"/custom-keyboard"}><a>CUSTOM KEYBOARD</a></Link>
                        </li>
                        <li>
                            <Link href={"/gaming-consoles"}><a>GAMING CONSOLES</a></Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link href={"/contact"}><a>CONTACT</a></Link>
                </li>
            </ul>


            <div className={Style.navBurger} ref={navBurgerRef} onClick={toggleNavbar}>
                <div />
                <div />
                <div />
            </div>
        </nav>
    );
};

export default Navbar;
