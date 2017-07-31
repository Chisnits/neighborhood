import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home/Home';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render(
<BrowserRouter>
    <Switch>
        <Route path="/" component={ Home } />
    </Switch>
</BrowserRouter>, 
document.getElementById('root'));
registerServiceWorker();
