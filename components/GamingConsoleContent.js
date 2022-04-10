const GamingConsoleContent = (props) => {
    return (
        <div className="console-modal-body-content">
            <h2>{props.title}</h2>
            <p>{props.children}</p>
        </div>
    );
};

export default GamingConsoleContent;
