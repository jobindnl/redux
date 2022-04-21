const initialState = [
  {
    id: 0,
    desc: 'take out trash'
  }
]

export const reducer = (state = initialState, action) => {
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
