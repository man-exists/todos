import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import App from './App'

function Router() {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/">
                    <App />
                </Route>
            </Switch>
        </HashRouter>
    )
}

export default Router
