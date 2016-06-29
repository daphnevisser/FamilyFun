import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import SearchPage from './components/search_page';
import DetailPage from './components/detail_page';


export default (
    <Route path="/" component={App}>
        <IndexRoute component={SearchPage} />
        <Route path="/cake/:id" component={DetailPage} />
    </Route>
);
