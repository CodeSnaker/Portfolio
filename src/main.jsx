import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, Router } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </Router>
    </React.StrictMode>
);
