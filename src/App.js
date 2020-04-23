import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import Demo from './pages/Demo';
import QueryBuilder from './pages/QueryBuilder';

function App() {
  return (
    <BrowserRouter>
      <Route
        exact
        path="/"
        render={() => {
          return (
            <ul>
              <li>
                <Link to="/demo">Demo</Link>
              </li>
              <li>
                <Link to="query-builder">Query Builder</Link>
              </li>
            </ul>
          );
        }}
      />
      {/* <Route exact path="/todo-list" component={TodoList} /> */}
      <Route exact path="/demo" component={Demo} />
      <Route exact path="/query-builder" component={QueryBuilder} />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default hot(App);
