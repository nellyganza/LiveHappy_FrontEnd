import React from 'react';
import { Switch, Route,Redirect } from 'react-router-dom';
import Example from '../pages/Example';
import landingPage from '../pages/landingPage'
import singleEventPage from '../pages/singleEventPage';


const Routers = ()=>{
    return(
    <Switch>
        <Route exact path="/" component={landingPage}/>
        <Route exact path="/event" component={singleEventPage}/>
    </Switch>
    )
}

export default Routers;