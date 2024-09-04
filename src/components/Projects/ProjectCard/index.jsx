import './index.scss';

const ProjectCard = ({ dataObject }) => {
    let link = '';

    if (dataObject.pageLink) {
        link = dataObject.pageLink;
    } else {
        link = dataObject.githubLink;
    }

    return (
        <div className='project-container'>
            <div className='project-text'>
                <h2>{dataObject.name}</h2>
                <p>{dataObject.description}</p>
            </div>
            <a href={link} className='project-card' target='_blank'>
                <img src={dataObject.thumbnail} />
            </a>
        </div>
    );
};

export default ProjectCard;
