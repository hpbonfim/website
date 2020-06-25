import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/404'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
