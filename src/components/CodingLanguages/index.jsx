import data from '../../data.json';
import ProgressBar from './ProgressBar';
import { useSelector } from 'react-redux';
import './index.scss';

const CodingLanguages = () => {
    const language = useSelector((state) => state.languageSwitch.language);

    const codingLanguages =
        language === 'en'
            ? data.en.skills.codingLanguages
            : data.fr.skills.codingLanguages;

    const bars = [];
    for (const codingLanguage of codingLanguages) {
        bars.push(
            <ProgressBar
                key={codingLanguage.name}
                name={codingLanguage.name}
                progress={codingLanguage.level}
            />
        );
    }

    return (
        <section className='coding-languages-section'>
            <h2>
                {language === 'en'
                    ? 'Language mastery'
                    : 'Maîtrise des langages'}
            </h2>
            <div className='progress-bars'>{bars}</div>
        </section>
    );
};

export default CodingLanguages;
