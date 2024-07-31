import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import LanguageSwitcher from './LanguageSwitcher/index';
import './index.scss';

const Header = () => {
    const language = useSelector((state) => state.languageSwitch.language);
    const [scrollDir, setScrollDir] = useState('scrolling-up');

    useEffect(() => {
        const threshold = 0;
        let lastScrollY = window.scrollY;
        let ticking = false;

        const updateScrollDir = () => {
            const scrollY = window.scrollY;

            if (Math.abs(scrollY - lastScrollY) < threshold) {
                ticking = false;
                return;
            }
            setScrollDir(
                scrollY > lastScrollY ? 'scrolling-down' : 'scrolling-up'
            );
            lastScrollY = scrollY > 0 ? scrollY : 0;
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                /*
                    Ensure that we calculate the new offset after the page is rendered wholly after scrolling,
                    And then, with the ticking flag, we will ensure we are just running
                    our event listener callback once in each requestAnimationFrame 
                */
                window.requestAnimationFrame(updateScrollDir);
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, [scrollDir]);

    return (
        <header className={scrollDir}>
            <nav>
                <a href='#skills'>
                    {language === 'en' ? 'Skills' : 'Compétences'}
                </a>
            </nav>
            <LanguageSwitcher />
        </header>
    );
};

export default Header;
