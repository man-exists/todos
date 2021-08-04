import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import Router from './Router';

ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider>
            <ColorModeScript initialColorMode="dark" />
                <Router />
        </ChakraProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
