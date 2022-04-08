const KeyboardCard = (props) => {
    return (
        <div className="keyboard-card">
            <img src={`/Custom%20Keyboard%20Images/${props.src}`} alt={props.title} />
            <h2>{props.title}</h2>
            <p>{props.children}</p>
            <button className="keyboard-modal-openBtn">READ MORE »</button>
        </div>
    );
};

export default KeyboardCard;
