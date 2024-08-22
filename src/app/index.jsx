import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header/index';
import Home from '../pages/Home';
import { useSelector, useDispatch } from 'react-redux';
import {
    setFr,
    setEn,
} from '../components/Header/LanguageSwitcher/languageSwitchSlice';
import { useEffect } from 'react';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const successCallback = (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            fetch(
                `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyAfuUueTfiWJ-gNruqJiSHvD-k_-9oXvjo&language=en&result_type=country`
            )
                .then((response) => response.json())
                .then((validResponse) => {
                    console.log(validResponse);
                    if (
                        validResponse.results[0].address_components[0]
                            .short_name === 'FR'
                    ) {
                        dispatch(setFr());
                    } else {
                        dispatch(setEn());
                    }

                    console.log(validResponse);
                })
                .catch((err) => {
                    console.log('fetch error');
                    dispatch(setFr());
                });
            console.log('Success Callback');
        };

        const errorCallback = (errPosition) => {
            console.log('error callback');
            dispatch(setFr());
        };

        if (navigator.geolocation) {
            console.log('Geolocation active');

            navigator.geolocation.getCurrentPosition(
                successCallback,
                errorCallback
            );
        }
    }, []);

    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='*' />
            </Routes>
        </Router>
    );
};

export default App;
