const addTodo = (id, desc) => {
  return {
    type: 'ADD',
    payload: {
      id,
      desc
    }
  }
}
const deleteTodo = (id) => {
  return {
    type: 'DELETE',
    payload: id
  }
}

export { addTodo, deleteTodo }