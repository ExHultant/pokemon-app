import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PokemonList from './PokemonList';
import PokemonDetails from './PokemonDetails';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={PokemonList} />
        <Route path="/pokemon/:id" component={PokemonDetails} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
