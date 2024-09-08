import './index.scss';

const Footer = () => {
    return (
        <footer>
            <ul className='contacts'>
                <li className='email'>
                    <a href='mailto:mattheyvintar@gmail.com'>
                        mattheyvintar@gmail.com
                    </a>
                </li>
                <li className='telephone'>06.20.06.57.47</li>
                <li className='linkedin' style={{ display: 'none' }}>
                    LinkedIn
                </li>
                <li className='github'>
                    <a href='https://github.com/CodeSnaker/'>Github</a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
