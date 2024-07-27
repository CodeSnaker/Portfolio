import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './index.scss';

const Header = () => {
    const currentLocation = useLocation();
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
        <StyledHeader className={scrollDir}>
            <nav>
                <a href='#skills'>Compétences</a>
            </nav>
        </StyledHeader>
    );
};

export default Header;
