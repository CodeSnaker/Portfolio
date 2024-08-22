import './index.scss';
import data from '../../data.json';
import { useSelector } from 'react-redux';

const AboutMe = () => {
    const language = useSelector((state) => state.languageSwitch.language);

    const description =
        language === 'en'
            ? data.en.personalInformation.description
            : data.fr.personalInformation.description;

    return (
        <section className='about-me'>
            <h1>{language === 'en' ? 'About me' : 'À propos de moi'}</h1>
            <p>{description}</p>
        </section>
    );
};

export default AboutMe;
