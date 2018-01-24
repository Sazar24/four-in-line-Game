import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App.jsx';
import { Provider } from 'react-redux';
import { reduxStore } from './reducers';

ReactDOM.render(
    <Provider store={reduxStore}>
        <App />
    </Provider>,
    document.getElementById('root')
);
