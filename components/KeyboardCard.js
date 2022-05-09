import Image from "next/image";
import Style from "../styles/KeyboardCard.module.css";

const KeyboardCard = (props) => {
    return (
        <div className={Style.keyboardCard}>
            <Image src={props.src} alt={props.title} placeholder={"blur"} />
            <h2>{props.title}</h2>
            <p>{props.children}</p>
            <button className="keyboard-modal-openBtn">READ MORE »</button>
        </div>
    );
};

export default KeyboardCard;
