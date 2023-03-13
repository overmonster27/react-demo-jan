import React from 'react';
import ReactDOM from 'react-dom/client';
import {setupStore} from "./redux";
import {Provider} from "react-redux";

import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));

const store = setupStore();

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
);
