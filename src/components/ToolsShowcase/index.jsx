import ToolsList from './ToolsList';
import './index.scss';
import { useSelector } from 'react-redux';

const ToolsShowcase = () => {
    const language = useSelector((state) => state.languageSwitch.language);

    return (
        <section className='tools-showcase'>
            <h2 className='tools-title'>
                {language === 'en' ? 'Tools' : 'Outils'}
            </h2>
            <div className='toolslists-container'>
                <ToolsList category='frontend' />
                <ToolsList category='backend' />
                <ToolsList category='dev' />
            </div>
        </section>
    );
};

export default ToolsShowcase;
