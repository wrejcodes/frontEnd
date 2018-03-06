/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import EntriesPage from 'containers/EntriesPage/Loadable';
import ViewDBPage from 'containers/ViewDBPage/Loadable';
import ManageAccounts from 'containers/ManageAccounts/Loadable';
import Profile from 'containers/Profile/Loadable';
import Login from 'containers/Login/Loadable';
import BadPermissions from 'containers/BadPermissions/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import NavBar from 'containers/NavBar/Loadable';

export default function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/entries" component={EntriesPage} />
        <Route path="/database" component={ViewDBPage} />
        <Route path="/profile" component={Profile} />
        <Route path="/login" component={Login} />
        <Route path="/accounts" component={ManageAccounts} />
        <Route path="/denied" component={BadPermissions} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
