import ProjectCard from './ProjectCard';
import data from '../../data.json';
import { useSelector } from 'react-redux';
import './index.scss';

const Projects = () => {
    const language = useSelector((state) => state.languageSwitch.language);

    const projects = language === 'en' ? data.en.projects : data.fr.projects;

    let projectCards = [];

    for (const project of projects) {
        projectCards.push(<ProjectCard dataObject={project} />);
    }

    return (
        <section className='projects' id='projects'>
            <h1>{language === 'en' ? 'Projects' : 'Projets'}</h1>
            {projectCards}
        </section>
    );
};

export default Projects;
