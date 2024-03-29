import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
//O Switch faz com que apenas uma rota seja executada por momento

import Login from './pages/Login/index.jsx';
import Home from './pages/HomePage/index.jsx';
import SignUp from './pages/SignUp/index.jsx';
import InfoClient from './pages/InfoClient/index.jsx';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component = {Home} />
                <Route path="/login" component = {Login} />
                <Route path="/signup" component = {SignUp} />
                <Route path="/info" component = {InfoClient} />
            </Switch>
        </BrowserRouter>
    );
}
