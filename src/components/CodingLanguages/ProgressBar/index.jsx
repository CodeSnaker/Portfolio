import './index.scss';

const ProgressBar = ({ name, progress, color = 'red' }) => {
    return (
        <div className='progress-bar'>
            <p className='bar-name'>{name}</p>
            <div className='bars'>
                <div className='background-bar'></div>
                <div
                    className='progress'
                    style={{
                        width: progress,
                        backgroundColor: color,
                    }}
                ></div>
            </div>
            <p className='percent'>{progress}</p>
        </div>
    );
};

export default ProgressBar;
