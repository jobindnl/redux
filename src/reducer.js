import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import logger from "redux-logger"

const initialState = [
  {
    id: 0,
    desc: 'take out trash'
  }
]

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DELETE':
      return [
        ...state.filter(todo => todo.id !== action.payload)
      ]
    case 'ADD':
      return [
        ...state,
        {
          id: action.payload.id,
          desc: action.payload.desc
        }
      ]
    default:
      return state
  }
}

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(logger)))