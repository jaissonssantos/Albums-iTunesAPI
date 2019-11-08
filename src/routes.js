import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Songs from './pages/Songs';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route
                    path="/songs/:artistId/:collectionId"
                    component={Songs}
                />
            </Switch>
        </BrowserRouter>
    );
}
