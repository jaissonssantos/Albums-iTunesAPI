import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Artist from './pages/Artist';
import Albums from './pages/Albums';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/artist" component={Artist} />
                <Route
                    path="/albums/:artistId/:collectionId"
                    component={Albums}
                />
            </Switch>
        </BrowserRouter>
    );
}
