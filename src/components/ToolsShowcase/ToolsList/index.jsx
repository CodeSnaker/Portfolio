import data from '../../../data.json';
import { useSelector } from 'react-redux';
import './index.scss';

/* The argument category can be of three values: "dev" (default), "frontend", "backend".
   Category changes the icon displayed. */
const ToolsList = ({ category = 'dev' }) => {
    const language = useSelector((state) => state.languageSwitch.language);

    const tools =
        language === 'en' ? data.en.skills.tools : data.fr.skills.tools;

    const list = [];
    let icon = null;
    let title = '';
    switch (category) {
        case 'dev':
            icon = <i className='fa-solid fa-wrench'></i>;
            for (const tool of tools.dev) {
                list.push(
                    <li key={tool} className='tool'>
                        {tool}
                    </li>
                );
            }
            title = language === 'en' ? 'Tools' : 'Outils';
            break;

        case 'frontend':
            icon = <i className='fa-brands fa-html5'></i>;
            for (const tool of tools.frontendAndUI) {
                list.push(
                    <li key={tool} className='tool'>
                        {tool}
                    </li>
                );
            }
            title = 'Frontend';
            break;

        case 'backend':
            icon = <i className='fa-solid fa-database'></i>;
            for (const tool of tools.backend) {
                list.push(
                    <li key={tool} className='tool'>
                        {tool}
                    </li>
                );
            }
            title = 'Backend';
            break;

        default:
            icon = null;
            break;
    }

    return (
        <div className='tools'>
            {icon}
            <h2>{title}</h2>
            <ul className='tools-list'>{list}</ul>
        </div>
    );
};

export default ToolsList;
