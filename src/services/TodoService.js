import request from './lib/request';

function getAll () {
  return request({
    url:    '/Todo',
    method: 'GET'
  });
}

function get(id) {
  return request({
    url:    `/Todo/${id}`,
    method: 'GET'
  });
}

function remove(id) {
  return request({
    url:    `/Todo/${id}`,
    method: 'DELETE'
  });
}

function reset(id) {
  return request({
    url:    `/Todo/reset`,
    method: 'POST'
  });
}

function add(data) {
  return request({
    url:    `/Todo`,
    method: 'POST',
    data: data
  });
}

function mark(id, data) {
  return request({
    url:    `/Todo/mark/${id}`,
    method: 'PUT',
    data: data
  });
}

const TodoService = {
    getAll,
    get,
    remove,
    reset,
    add,
    mark
}

export default TodoService;