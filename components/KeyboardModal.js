const KeyboardModal = (props) => {
    return (
        <div className={props.Style.keyboardModal}>
            <div className={props.Style.keyboardModalContent}>
                <div className="modal-header">
                    <div/>
                    <div>
                        <i className={`fas fa-times modal-closeBtn ${props.Style.keyboardModalCloseBtn}`}/>
                    </div>
                </div>

                <div className="keyboard-modal-body">
                    <div className={props.Style.keyboardModalBanner}>
                        <img src={`/Custom%20Keyboard%20Images/${props.src}`} alt={props.title}/>
                        <div className={props.Style.keyboardModalBannerText}>
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
