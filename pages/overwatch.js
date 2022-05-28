import Head from "next/head";
import Navbar from "../components/Navbar";
import FooterInfo from "../components/FooterInfo";
import {useEffect, useRef} from "react";
import Style from "../styles/Overwatch.module.css";


class OWProfile {
    constructor(data) {
        this.name = "SuperMage";
        this.icon = data["icon"];
        this.border = data["levelIcon"];
        this.level = data["level"];
        this.wins = data["gamesWon"];
        this.tank = new Role("tank", data);
        this.damage = new Role("damage", data);
        this.support = new Role("support", data);
    }
}

class Role {
    constructor(role, data) {
        const roleIndex = {"tank": 0, "damage": 1, "support": 2};
        this.role = role;

        try {
            this.roleIcon = data["ratings"][roleIndex[role]]["roleIcon"];
            this.rankIcon = data["ratings"][roleIndex[role]]["rankIcon"];
            this.sr = data["ratings"][roleIndex[role]]["level"];
        } catch (e) {
            this.roleIcon = null;
            this.rankIcon = null;
            this.sr = null;
        }
    }
}

const addHeader = (parentNode, headerType, innerText, className = "") => {
    const newNode = document.createElement(headerType);
    newNode.className = className;
    newNode.innerText = innerText;
    parentNode.appendChild(newNode);
    return newNode;
};

const addImg = (parentNode, src, alt, className = "") => {
    const newNode = document.createElement("img");
    newNode.className = className;
    newNode.src = src;
    newNode.alt = alt;
    parentNode.appendChild(newNode);
    return newNode;
};

const addDiv = (parentNode, bgImg = "", innerText = "", className = "") => {
    const newNode = document.createElement("div");
    newNode.className = className;
    newNode.innerText = innerText;
    newNode.style.backgroundImage = bgImg !== "" ? `url(${bgImg})` : "none";
    parentNode.appendChild(newNode);
    return newNode;
};


const displayOWProfile = (data) => {
    const myOWProfile = new OWProfile(data);
    const owStatsContainer = document.querySelector(`.${Style.owStatsContent}`);

    // Adds to the Stats Container
    addImg(owStatsContainer, myOWProfile.icon, "Player Icon", Style.owProfileIcon);
    addHeader(owStatsContainer, "h1", myOWProfile.name, Style.owUsername);
    addHeader(owStatsContainer, "h3", myOWProfile.wins + " Games Won", Style.owGamesWon);
    addDiv(owStatsContainer, myOWProfile.border, myOWProfile.level, Style.owLevel);

    const srContainer = addDiv(owStatsContainer, "", "", Style.owSrContainer);

    // Adds to Main SR Container
    const individualSRContainers = {
        tank: addDiv(srContainer, "", "", Style.owIndividualRoleSrContainer),
        damage: addDiv(srContainer, "", "", Style.owIndividualRoleSrContainer),
        support: addDiv(srContainer, "", "", Style.owIndividualRoleSrContainer)
    };

    // Adds to individual SR Containers
    for (const [role, containerNode] of Object.entries(individualSRContainers)) {
        if (myOWProfile[role].sr !== null) {
            addImg(containerNode, myOWProfile[role].roleIcon, `${role} Role Icon`, Style.owRoleIcon);
            addImg(containerNode, myOWProfile[role].rankIcon, `${role} Rank Icon`, Style.owRankIcon);
            addHeader(containerNode, "h4", myOWProfile[role].sr, Style.owRoleSrText);
        } else {
            containerNode.style.display = "none";
        }
    }
}

export const getServerSideProps = async () => {
    // Fetch data from external API
    const res = await fetch("https://ovrstat.com/stats/pc/SuperMage-149910", {
        method: 'GET',
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
    });
    const data = await res.json();

    // This is if I want to implement default Overwatch Rank Stats if I'm not placed
    // if (data["ratings"] === null) {
    //     data["ratings"] = [{}, {}, {}];
    //     data["ratings"][0]["roleIcon"] = "/Default%20Overwatch%20Assets/tank_icon.png";
    //     data["ratings"][1]["roleIcon"] = "/Default%20Overwatch%20Assets/damage_icon.png";
    //     data["ratings"][2]["roleIcon"] = "/Default%20Overwatch%20Assets/support_icon.png";
    //
    //     data["ratings"][0]["rankIcon"] = "/Default%20Overwatch%20Assets/masters_icon.png";
    //     data["ratings"][1]["rankIcon"] = "/Default%20Overwatch%20Assets/masters_icon.png";
    //     data["ratings"][2]["rankIcon"] = "/Default%20Overwatch%20Assets/masters_icon.png";
    // }

    // Pass data to the page via props
    return { props: {data} };
};

const OverwatchArrow = () => {
    document.documentElement.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
};

const OverwatchPage = ({data}) => {
    const loadedRef = useRef(false);

    useEffect(() => {
        if (!loadedRef.current) {
            displayOWProfile(data);
            loadedRef.current = true;
        }
    }, [data]);

    return (
        <>
            <Head>
                <title>Overwatch</title>
            </Head>

            <header>
                <Navbar/>
            </header>

            <main>
                <section className={Style.owStatsContainer}>
                    <div className={Style.owStatsBg}/>
                    <div className={Style.owStatsContent}/>
                    <i className={`fas fa-angle-down ${Style.owDropdownArrow}`} onClick={OverwatchArrow}/>
                </section>
            </main>

            <footer>
                <FooterInfo/>
            </footer>
        </>
    );
};

export default OverwatchPage;
