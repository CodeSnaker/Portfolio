import { useSelector, useDispatch } from 'react-redux';
import { toggle } from './languageSwitchSlice';
import './index.scss';

const LanguageSwitcher = () => {
    const language = useSelector((state) => state.languageSwitch.language);
    const dispatch = useDispatch();

    return (
        <table className='language-switch' onClick={() => dispatch(toggle())}>
            <tbody>
                <tr>
                    <td
                        className={
                            'language-switch-icon fr ' +
                            (language === 'fr' ? 'active' : '')
                        }
                    >
                        fr
                    </td>
                    <td
                        className={
                            'language-switch-icon en ' +
                            (language === 'en' ? 'active' : '')
                        }
                    >
                        en
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default LanguageSwitcher;
