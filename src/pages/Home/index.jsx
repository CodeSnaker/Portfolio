import Projects from '../../components/Projects';
import CodingLanguages from '../../components/CodingLanguages';
import ToolsShowcase from '../../components/ToolsShowcase';
import AboutMe from '../../components/AboutMe';
import NameAndTitle from '../../components/NameAndTitle';
import './index.scss';

const Home = () => {
    return (
        <>
            <NameAndTitle />
            <AboutMe />
            <CodingLanguages />
            <ToolsShowcase />
            <Projects />
        </>
    );
};

export default Home;
