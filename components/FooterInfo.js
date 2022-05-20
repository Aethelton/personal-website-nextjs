import Script from "next/script";
import Style from "../styles/Footer.module.css";

const FooterInfo = () => {
    return (
        <>
            <div className={Style.footerIcons}>
                <a href="mailto: contact@estonli.ca"><i className="fas fa-envelope"/></a>
                <a href="https://github.com/SuperMage03" target="_blank" rel="noreferrer"><i className="fab fa-github"/></a>
                <a href="https://www.youtube.com/channel/UCenqEx0Lw5mRrT_IvjHX7Bg" target="_blank" rel="noreferrer">
                    <i className="fab fa-youtube"/>
                </a>
                <a href="https://devpost.com/SuperMage03" target="_blank" rel="noreferrer">
                    <img className={Style.devpostIcon} alt='Devpost Icon' src='/Devpost Icon.svg'/>
                </a>
            </div>

            <div className={Style.footerInfo}>
                <p>Copyright © 2022 Eston Li</p>
            </div>

            <Script src="https://kit.fontawesome.com/c83ef652df.js" crossOrigin="anonymous" />
        </>
    );
};

export default FooterInfo;
