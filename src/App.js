import React, { Component } from "react";
import Routers from './Routes/Routers'
import { BrowserRouter as Router } from 'react-router-dom'

import { createBrowserHistory } from "history";

const history = createBrowserHistory();

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <Routers />
            </Router>
        )
    }
}
export default App;
