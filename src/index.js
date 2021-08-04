import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase'

import './index.css';

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import App from './App';

firebase.initializeApp({
    apiKey: "AIzaSyCQSiGwuwvYANheJuTUXS3uPg16r7LAzCs",
    authDomain: "fir-auth-24449.firebaseapp.com",
    projectId: "fir-auth-24449"
})

ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider>
            <ColorModeScript initialColorMode="dark" />
                <App />
        </ChakraProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
