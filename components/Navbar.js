import Link from "next/link";
import { useEffect, useRef } from "react";
import useMedia from "../hooks/useMedia";


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
        navLinks.current = navLinkRef.current.querySelectorAll(".nav-links > li");
    }, []);

    if (phoneMedia) {
        if (document.body.classList.contains("lock-scroll")) {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
    }

    const toggleNavExpandable = (ref) => {
        if (ref.current != null) {
            ref.current.classList.toggle("nav-expandable-list-active");
        }
    };

    const toggleNavbar = () => {
        if (!navLinkRef.current.classList.contains("nav-links-active")) {
            navLinks.current.forEach((link, index) => {
                link.style.setProperty("animation", `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`);
            });
        }

        else {
            navLinks.current.forEach(link => {
                link.style.setProperty("animation", "initial");
            });
        }

        navLinkRef.current.classList.toggle("nav-links-active");
        navBurgerRef.current.classList.toggle("nav-burger-active");
        document.body.classList.toggle("lock-scroll");

        smoothScrollToTop();
    };

    return (
        <nav>
            <Link href={"/"}>
                <a style={{height: "80%"}}>
                    <img id="nav-logo" style={{borderRadius: "50%", height: "100%"}} src="/Logo.png" alt="Logo" />
                </a>
            </Link>

            <ul className={"nav-links"} ref={navLinkRef}>
                <li>
                    <Link href={"/"}><a>HOME</a></Link>
                </li>
                <li>
                    <Link href={"/about"}><a>ABOUT</a></Link>
                </li>
                <li>
                    <Link href={"/works"}><a>WORKS</a></Link>
                </li>
                <li id={"nav-expandable-list-1"} className={"nav-expandable-list"} ref={navExpandableList1}>
                    <a href="#" onClick={() => toggleNavExpandable(navExpandableList1)}>HOBBIES</a>

                    <ul>
                        <li>
                            <Link href={"/overwatch"}><a href="overwatch.html">OVERWATCH</a></Link>
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


            <div className={"nav-burger"} ref={navBurgerRef} onClick={toggleNavbar}>
                <div />
                <div />
                <div />
            </div>
        </nav>
    );
};

export default Navbar;
