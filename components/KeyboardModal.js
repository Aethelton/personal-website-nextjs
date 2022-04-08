const KeyboardModal = (props) => {
    return (
        <div className="keyboard-modal">
            <div className="keyboard-modal-content">
                <div className="modal-header">
                    <div/>
                    <div>
                        <i className="fas fa-times modal-closeBtn keyboard-modal-closeBtn"/>
                    </div>
                </div>

                <div className="keyboard-modal-body">
                    <div className="keyboard-banner">
                        <img src={`/Custom%20Keyboard%20Images/${props.src}`} alt={props.title}/>
                        <div className="keyboard-banner-text">
                            <h3>Keyboard Showcase</h3>
                            <h1>{props.title}</h1>
                        </div>
                    </div>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default KeyboardModal;
