import './index.scss';
import Tag from './Tag';

const ProjectCard = ({ dataObject }) => {
    let link = '';

    if (dataObject.pageLink) {
        link = dataObject.pageLink;
    } else {
        link = dataObject.githubLink;
    }

    let tags = [];

    for (const projectTag of dataObject.tags) {
        tags.push(
            <Tag
                text={projectTag}
                key={`${dataObject.name.split().join('')}-${projectTag}`}
            />
        );
    }

    return (
        <div className='project-container'>
            <div className='project-text'>
                <h2>{dataObject.name}</h2>
                <p>{dataObject.description}</p>
                <div className='project-tags'>{tags}</div>
            </div>
            <a href={link} className='project-card' target='_blank'>
                <img src={dataObject.thumbnail} />
            </a>
        </div>
    );
};

export default ProjectCard;
