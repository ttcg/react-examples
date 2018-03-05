import request from './lib/request';

function getAll () {
  return request({
    url:    '/Todo',
    method: 'GET'
  });
}

function get(id) {
  return request({
    url:    `/message/${id}`,
    method: 'GET'
  });
}


const TodoService = {
    getAll,
    get
}

export default TodoService;