import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header/index';
import Home from '../pages/Home';
import { Provider } from 'react-redux';
import { store } from './store';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='*' />
                </Routes>
            </Router>
        </Provider>
    );
};

export default App;
