import ProjectCard from "../components/ProjectCard";
import Head from "next/head";
import Navbar from "../components/Navbar";
import FooterInfo from "../components/FooterInfo";
import FleckBG from "../components/FleckBG";

import BatmanLastCrusadeImage from "../public/Project Images/Batman Last Crusade Image.png";
import ChessFSEImage from "../public/Project Images/ChessFSE Image.png";
import JimmyImage from "../public/Project Images/Jimmy Image.png";
import MatrixOfHeroesImage from "../public/Project Images/Matrix of Heroes Image.png";
import OverPaintImage from "../public/Project Images/OverPaint Image.png";
import TronImage from "../public/Project Images/Tron Image.png";
import VerticalCarouselImage from "../public/Project Images/Vertical Carousel Image.png";
import DataStructuresImage from "../public/Project Images/Data Structures Image.jpg";
import RetroTaskerImage from "../public/Project Images/Retro Tasker Image.png";

const fleckColours = [
    "hsl(83, 33%, 76%)",
    "hsl(83, 33%, 66%)",
    "hsl(354, 43%, 85%)",
    "hsl(354, 43%, 75%)",
    "hsl(44, 87%, 94%)",
    "hsl(44, 87%, 89%)"
];

const WorksPage = () => {
    return (
        <>
            <Head>
                <title>My Works</title>
            </Head>

            <header>
                <Navbar />
            </header>

            <main style={{display: "flex", backgroundColor: "transparent"}}>
                <div style={{position: "relative", width: "100%", overflow: "hidden"}}>
                    <FleckBG
                        bgColour={"ivory"}
                        fleckSeed={2263408696}
                        fleckCount={2000}
                        fleckBaseSize={7}
                        fleckColours={fleckColours}
                    />

                    <section id="project-container">
                        <ProjectCard
                            title={"Batman: Last Crusade"}
                            src={BatmanLastCrusadeImage}
                            href={"https://github.com/SuperMage03/Batman-Last-Crusade"}
                        >
                            Made for my Grade 11 FSE from Unity. The game is about using grappling and gliding to
                            collect the Riddler&apos;s Trophies. Some assets are from Batman Arkham Game Series by WB
                            Games, used for Educational Purpose only.
                        </ProjectCard>


                        <ProjectCard
                            title={"ChessFSE"}
                            src={ChessFSEImage}
                            href={"https://github.com/SuperMage03/ChessFSE"}
                        >
                            This Chess game is created for my Grade 12 FSE. It has an AI run by Minimax and
                            Alpha-beta pruning algorithm.
                            The game also contains a scoreboard and supports 2 player game as well. Created with
                            Java Swing.
                        </ProjectCard>

                        <ProjectCard
                            title={"Jimmy"}
                            src={JimmyImage}
                            href={"https://github.com/SuperMage03/Jimmy"}
                        >
                            Jimmy is an FPS game I created with my friend Shengbuo for my school&apos;s 7 Week Challenge
                            Game Jam
                            Week. The game&apos;s objective is to shoot your way out of the zombie mazes and defeat the
                            Boss.
                            This game is made with Unity.
                        </ProjectCard>

                        <ProjectCard
                            title={"Matrix of Heroes"}
                            src={MatrixOfHeroesImage}
                            href={"https://github.com/SuperMage03/Matrix-of-Heroes"}
                        >
                            Matrix of Heroes is made from Unity with Shengbuo, Angela, and Lily. We created this
                            game for Defhacks 2020 and won
                            the beginners hack award. This game helps kids learn math and use it to do damage and
                            beat levels. In addition,
                            teachers can track down students&apos; progress.
                        </ProjectCard>

                        <ProjectCard
                            title={"OverPaint"}
                            src={OverPaintImage}
                            href={"https://github.com/SuperMage03/OverPaint"}
                        >
                            This is an Overwatch themed MS Paint like program I built during my Grade 11 Comp Sci
                            Class as a project.
                            It features customizable background, multiple painting tools, stickers, save/load,
                            undo/redo, filters,
                            as well as a built-in music player. This program was made with PyGame.
                        </ProjectCard>

                        <ProjectCard
                            title={"Tron"}
                            src={TronImage}
                            href={"https://github.com/SuperMage03/Tron"}
                        >
                            This is my vision of the classic Arcade game Tron. Built from Java Swing, the game has
                            Single-Player and Multiplayer mode,
                            as well as a built-in scoreboard like the classic one. In addition to the classic
                            gameplay, this version of Tron has explosives
                            and time rewind.
                        </ProjectCard>

                        <ProjectCard
                            title={"Vertical Carousel"}
                            src={VerticalCarouselImage}
                            href={"https://github.com/SuperMage03/Responsive-Vertical-Carousel"}
                        >
                            This is a simple Vertical Carousel Plugin that allows pictures to be looped, and only loads
                            pictures that users can see for optimal performance. It&apos;s also Responsive, you can set the width
                            and height to any value or unit. This plugin is built mainly with JS and some CSS.
                        </ProjectCard>

                        <ProjectCard
                            title={"Java Data Structures"}
                            src={DataStructuresImage}
                            href={"https://github.com/SuperMage03/Data-Structures-from-Scratch"}
                        >
                            This is my adventure to build data structures from scratch. I always wanted to see how
                            each data structure works,
                            as well as why they are good at some stuff and bad at others. This project also helped
                            me understand more about
                            time and space complexity.
                        </ProjectCard>

                        <ProjectCard
                            title={"Retro Tasker"}
                            src={RetroTaskerImage}
                            href={"https://github.com/SuperMage03/Retro-Tasker"}
                        >
                            This is my first web app created for my school&apos;s 7 Week Challenge Web Dev Week. Retro
                            Tasker is created with
                            Express for back-end, HTML/CSS/JS for front-end, and JSNES for NES emulation. The app
                            allows user to create tasks,
                            and check-in on time to earn play times for NES.
                        </ProjectCard>
                    </section>
                </div>


            </main>

            <footer>
                <FooterInfo />
            </footer>
        </>
    );
};

export default WorksPage;
