import React, { useState } from 'react'
import { addTodo, deleteTodo } from './types'
import { connect } from 'react-redux'

const MapComponent = (props) => {
  const [input, setInput] = useState('')
  const [idCounter, setIdCounter] = useState(1)

  const submitTodo = (e) => {
    e.preventDefault()
    props.add(idCounter, input)
    setIdCounter((prev) => prev + 1)
    setInput('')
  }

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleDelete = (e) => {
    props.delete(e)
  }

  return (
    <div>
      <h1>
        Todo:
      </h1>
      <form onSubmit={submitTodo}>
        <input type="text" onChange={handleChange} value={input} />
        <button type="submit">Submit</button>
      </form>
      {
        props.todo.map(e => {
          return (
            <p key={e.id}>
              {e.desc} 
              <button onClick={() => handleDelete(e.id)}>Delete</button> 
            </p>
          )
        })
      }
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    add: (id, desc) => dispatch(addTodo(id, desc)),
    delete: (id) => dispatch(deleteTodo(id))
  }
}

const mapStateToProps = state => {
  return {
    todo: state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapComponent)