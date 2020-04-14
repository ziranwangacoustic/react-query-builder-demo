import request from '../utils/request';

export default {
  getTodos() {
    return request('https://jsonplaceholder.typicode.com/todos?_limit=5');
  },
  toggleTodo() {
    return new Promise(resolve => {
      setTimeout(resolve, 300);
    });
  },
};
