import { useSelector, useDispatch } from 'react-redux';
import { toggle } from './languageSwitchSlice';
import './index.scss';

const LanguageSwitcher = () => {
    const language = useSelector((state) => state.languageSwitch.language);
    const dispatch = useDispatch();

    return (
        <div className='language-switch' onClick={() => dispatch(toggle())}>
            <div
                className={
                    'language-switch-icon fr ' +
                    (language === 'fr' ? 'active' : '')
                }
                style={
                    language === 'fr'
                        ? { color: 'yellow', 'text-decoration': 'underline' }
                        : {}
                }
            >
                fr
            </div>
            <div
                className={
                    'language-switch-icon en ' +
                    (language === 'en' ? 'active' : '')
                }
                style={
                    language === 'en'
                        ? { color: 'yellow', 'text-decoration': 'underline' }
                        : {}
                }
            >
                en
            </div>
        </div>
    );
};

export default LanguageSwitcher;
