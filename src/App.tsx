import React from 'react';
import {Root, Routes} from 'react-static';
import {Router} from '@reach/router';

import LoadingScreen from 'components/LoadingScreen';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-multi-carousel/lib/styles.css';
import 'styles/styles.scss';

import Favicon from 'react-favicon';
import FavIcon from './assets/favicon.png'

// Displays loading screen before routing to the index page - go to any invalid address to get to the 404 page
function App() {
    return (
        <Root>
            <Favicon url={FavIcon}/>
            <React.Suspense fallback={<LoadingScreen/>}>
                <Router>
                    <Routes path="*"/>
                </Router>
            </React.Suspense>
        </Root>
    )
}

export default App
