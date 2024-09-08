import './index.scss';

const Tag = ({ text }) => {
    let color = '';
    switch (text) {
        case 'Html':
            color = 'red';
            break;

        case 'CSS':
            color = 'yellow-green';
            break;

        case 'SCSS':
            color = 'yellow-green';
            break;

        case 'Javascript':
            color = 'yellow';
            break;

        case 'React':
            color = 'turquoise';

        case 'NodeJS':
            color = 'green';
            break;

        case 'MongoDB':
            color = 'light-green';
            break;

        case 'Mongoose':
            color = 'light-green';
            break;

        case 'Debugging':
            color = 'black';
            break;

        case 'SEO':
            color = 'black';
            break;

        default:
            color = 'white';
            break;
    }

    return <div className={`tag ${color}`}>{text}</div>;
};

export default Tag;
