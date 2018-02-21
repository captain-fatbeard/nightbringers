import React from 'react';
import ReactDOM from 'react-dom';

import Masthead from './components/Masthead';
import Content from './components/Content';
import './styles/App.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div>
        <Masthead />
    </div>
    , document.getElementById('root')
);

registerServiceWorker();
