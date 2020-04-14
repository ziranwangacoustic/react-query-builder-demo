import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import Counter from './pages/Counter';
import TodoList from './pages/TodoList';
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
                <Link to="/counter">Counter</Link>
              </li>
              <li>
                <Link to="/todo-list">Todo List</Link>
              </li>
              <li>
                <Link to="query-builder">Query Builder</Link>
              </li>
            </ul>
          );
        }}
      />
      <Route exact path="/todo-list" component={TodoList} />
      <Route exact path="/counter" component={Counter} />
      <Route exact path="/query-builder" component={QueryBuilder} />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default hot(App);
