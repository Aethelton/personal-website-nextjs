import Image from "next/image";

const ProjectCard = (props) => {
    return (
        <article className="project-card">
            <Image src={`/Project%20Images/${props.src}`} alt={props.title} width={1920} height={1080} />
            <h2>{props.title}</h2>
            <p>{props.children}</p>
            <a href={props.href} target="_blank" rel="noreferrer">Check it Out</a>
        </article>
    );
};

export default ProjectCard;
