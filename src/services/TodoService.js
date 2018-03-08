import request from './lib/request';

function add(data) {
  return request({
    url:    `/Todo`,
    method: 'POST',
    data: data
  });
}

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

function mark(id, data) {
  return request({
    url:    `/Todo/mark/${id}`,
    method: 'PUT',
    data: data
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

function update(id, data) {
  return request({
    url:    `/Todo/${id}`,
    method: 'PUT',
    data: data
  });
}



const TodoService = {
  add,
  getAll,
  get,
  mark,
  remove,
  reset,    
  update
}

export default TodoService;