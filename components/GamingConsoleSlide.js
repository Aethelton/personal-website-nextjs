import Image from "next/image";

const GamingConsoleSlide = (props) => {
    return (
        <>
            <Image src={props.src} alt={props.title} className={props.Style.consoleCarouselCardCover} layout={"raw"} placeholder={"blur"} />

            <div className={props.Style.consoleCarouselCardTextBox}>
                <h3 className={props.Style.consoleCarouselText}>{props.children}</h3>
            </div>
        </>
    );
};

export default GamingConsoleSlide;
