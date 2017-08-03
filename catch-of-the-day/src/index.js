import React from 'react';
import {render} from 'react-dom';
import './css/style.css';

import StorePicker from './components/StorePicker';
import App from './components/app';
import Header from './components/Header';

render(<App/>, document.querySelector('#main'));