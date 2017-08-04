import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home/Home';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Directory from './components/Directory/Directory';
import Calender from './components/Calender/Calender';

ReactDOM.render(
<BrowserRouter>
    <div>
        <Route component={ Header } />
            <Switch>
                <Route exact path="/" component={ Home } /> 
                <Route path="/directory" component={ Directory } />
                <Route path="/calender" component={ Calender } />
            </Switch>
    </div>
</BrowserRouter>, 
document.getElementById('root'));
registerServiceWorker();
