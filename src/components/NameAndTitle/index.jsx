import { useSelector } from 'react-redux';
import data from '../../data.json';
import './index.scss';

const NameAndTitle = () => {
    const language = useSelector((state) => state.languageSwitch.language);
    const subtitle =
        language === 'en'
            ? data.en.personalInformation.title
            : data.fr.personalInformation.title;

    return (
        <section className='name-and-title'>
            <h1>Alexis Matthey-Vintar</h1>
            <h2>{subtitle}</h2>
        </section>
    );
};

export default NameAndTitle;
