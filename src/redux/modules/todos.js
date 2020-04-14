import { all, call, put, takeLatest } from 'redux-saga/effects';
import todoApi from '../../api/todoApi';

export const GET_TODOS_REQUEST = 'react-todo-list/todos/GET_TODOS_REQUEST';
export const GET_TODOS_SUCCESS = 'react-todo-list/todos/GET_TODOS_SUCCESS';
export const GET_TODOS_FAILURE = 'react-todo-list/todos/GET_TODOS_FAILURE';

export const TOGGLE_TODO_REQUEST = 'react-todo-list/todos/TOGGLE_TODO_REQUEST';
export const TOGGLE_TODO_SUCCESS = 'react-todo-list/todos/TOGGLE_TODO_SUCCESS';
export const TOGGLE_TODO_FAILURE = 'react-todo-list/todos/TOGGLE_TODO_FAILURE';

export const initialState = {
  data: {},
  isFetching: false,
};

export const getTodos = () => ({ type: GET_TODOS_REQUEST });
function* getTodosAsync() {
  try {
    const todos = yield call(todoApi.getTodos);
    yield put({ type: GET_TODOS_SUCCESS, todos });
  } catch (error) {
    // console.log(error);
  }
}

export const toggleTodo = id => ({ type: TOGGLE_TODO_REQUEST, id });
function* toggleTodoAsync(action) {
  try {
    yield call(todoApi.toggleTodo, action.id);
    yield put({ type: TOGGLE_TODO_SUCCESS, id: action.id });
  } catch (error) {
    // console.log(error)
  }
}

export function* todosSaga() {
  yield all([
    takeLatest(GET_TODOS_REQUEST, getTodosAsync),
    takeLatest(TOGGLE_TODO_REQUEST, toggleTodoAsync),
  ]);
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_TODOS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case GET_TODOS_SUCCESS:
      return {
        ...state,
        data: {
          ...state.data,
          ...action.todos.reduce((obj, todo) => {
            // eslint-disable-next-line no-param-reassign
            obj[todo.id] = todo;
            return obj;
          }, {}),
        },
        isFetching: false,
      };
    case GET_TODOS_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    case TOGGLE_TODO_REQUEST:
      return {
        ...state,
        data: {
          ...state.data,
          [action.id]: {
            ...state.data[action.id],
            isFetching: true,
          },
        },
      };
    case TOGGLE_TODO_SUCCESS:
      return {
        ...state,
        data: {
          ...state.data,
          [action.id]: {
            ...state.data[action.id],
            completed: !state.data[action.id].completed,
            isFetching: false,
          },
        },
      };
    default:
      return state;
  }
}
