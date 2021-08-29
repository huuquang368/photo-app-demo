import React from 'react';
// import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch } from 'react-router';
import NotFound from 'components/NotFound';
import MainPage from './pages/MainPage';
import AddEditPage from './pages/AddEditPage';

function Photo(props) {
  const match = useRouteMatch();
  console.log('match :>> ', { match });

  return (
    <Switch>
      <Route exact path={match.url} component={MainPage} />
      <Route exact path={`${match.url}/add`} component={AddEditPage} />
      <Route exact path={`${match.url}/:photoId`} component={AddEditPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

Photo.propTypes = {};

export default Photo;
