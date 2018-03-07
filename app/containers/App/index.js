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
import Registration from 'containers/Registration/Loadable';
import BadPermissions from 'containers/BadPermissions/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import NavBar from 'containers/NavBar/Loadable';

export default function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/entries" component={EntriesPage} />
        <Route exact path="/database" component={ViewDBPage} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/accounts" component={ManageAccounts} />
        <Route exact path="/denied" component={BadPermissions} />
        <Route exact path="/registration" component={Registration} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
