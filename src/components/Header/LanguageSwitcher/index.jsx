import { useSelector, useDispatch } from 'react-redux';
import { toggle } from './languageSwitchSlice';
import './index.scss';

const LanguageSwitcher = () => {
    const language = useSelector((state) => state.languageSwitch.language);
    const dispatch = useDispatch();

    return (
        <table className='language-switch' onClick={() => dispatch(toggle())}>
            <th
                className={
                    'language-switch-icon fr ' +
                    (language === 'fr' ? 'active' : '')
                }
            >
                fr
            </th>
            <th
                className={
                    'language-switch-icon en ' +
                    (language === 'en' ? 'active' : '')
                }
            >
                en
            </th>
        </table>
    );
};

export default LanguageSwitcher;
