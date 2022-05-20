const GamingConsoleContent = (props) => {
    return (
        <div className={props.Style.consoleModalBodyContent}>
            <h2>{props.title}</h2>
            <p>{props.children}</p>
        </div>
    );
};

export default GamingConsoleContent;
