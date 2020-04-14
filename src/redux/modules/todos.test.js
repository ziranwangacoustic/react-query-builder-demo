import reducer, {
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
  GET_TODOS_FAILURE,
  getTodos,
} from './todos';

const initialState = {
  data: {},
  isFetching: false,
};

describe('todos module', () => {
  test('getTodos returns correct action', () => {
    expect(getTodos()).toEqual({ type: GET_TODOS_REQUEST });
  });

  test('reducer returns correct initial state', () => {
    expect(reducer(undefined, { type: '@@INIT' })).toEqual({
      data: {},
      isFetching: false,
    });
  });

  test('reducer returns correct state for GET_TODOS_REQUEST', () => {
    expect(reducer(initialState, { type: GET_TODOS_REQUEST })).toEqual({
      ...initialState,
      isFetching: true,
    });
  });

  test('reducer returns correct state for GET_TODOS_SUCCESS', () => {
    const todos = [{ id: 1, title: 'Item 1' }, { id: 2, title: 'Item 2' }];
    expect(reducer(initialState, { type: GET_TODOS_SUCCESS, todos })).toEqual({
      ...initialState,
      data: todos.reduce((obj, todo) => {
        // eslint-disable-next-line no-param-reassign
        obj[todo.id] = todo;
        return obj;
      }, {}),
      isFetching: false,
    });
  });

  test('reducer returns correct state for GET_TODOS_FAILURE', () => {
    expect(reducer(initialState, { type: GET_TODOS_FAILURE })).toEqual({
      ...initialState,
      isFetching: false,
    });
  });
});
