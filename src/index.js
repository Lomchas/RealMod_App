import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './Router/AppRouter';
import './index.css'
import { Provider } from 'react-redux';
import { Store } from './Redux/Store/Store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={Store}>
        <AppRouter />
    </Provider>
);


