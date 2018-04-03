import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Redirect, Route } from 'react-router-dom';
import _ from 'lodash';

const RouteManager = ({ defaultRoute, match, routes }) => (
  <Switch>
    {_.map(routes, (route, index) => {
      const composeRouteKey = `${route.path}-${index}`;
      const path = `${match.url}/${route.path}`;
      return <Route key={composeRouteKey} path={path} component={route.component} />;
    })}
    <Redirect
      from="/"
      to={`${match.url}/${defaultRoute.path}`}
      component={defaultRoute.component}
    />
  </Switch>
);

RouteManager.propTypes = {
  defaultRoute: PropTypes.shape().isRequired,
  match: PropTypes.shape().isRequired,
  routes: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default RouteManager;
