import ToolsList from './ToolsList';
import './index.scss';
import { useSelector } from 'react-redux';

const ToolsShowcase = () => {
    const language = useSelector((state) => state.languageSwitch.language);

    return (
        <section className='tools-showcase'>
            <h1>
                {language === 'en'
                    ? 'Tools that I have used'
                    : "Outils que j'ai déjà utilisé"}
            </h1>
            <div className='toolslists-container'>
                <ToolsList category='frontend' />
                <ToolsList category='backend' />
                <ToolsList category='dev' />
            </div>
        </section>
    );
};

export default ToolsShowcase;
