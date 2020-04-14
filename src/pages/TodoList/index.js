import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTodos, toggleTodo } from '../../redux/modules/todos';

function Todos({ todos, dispatch }) {
  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map(t => (
          <li key={t.id}>
            {t.title} - <span>{t.completed ? '\u2705' : '\u274c'}</span>
            <button type="button" onClick={() => dispatch(toggleTodo(t.id))}>
              {t.isFetching ? 'Loading...' : 'Toggle'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

Todos.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = ({ todos }) => ({
  todos: Object.values(todos.data),
});

export default connect(mapStateToProps)(Todos);
