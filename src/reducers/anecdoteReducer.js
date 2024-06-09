import { createSlice, current } from "@reduxjs/toolkit"
import { create, getAll, update } from "../services/anecdotes"
import { setNotification } from "./notificationReducer"

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

export const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)
// const initialState = []

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'CAST_VOTE':
//       return state.map(s => s.id === action.payload.id
//         ? { ...s, votes: s.votes + 1 } : s)
//     case 'NEW_ANEC':
//       return [...state, action.payload]
//     default:
//       return state
//   }
// }

// export const castVote = id => {
//   return {
//     type: 'CAST_VOTE',
//     payload: { id }
//   }
// }

// export const createNew = anecdote => {
//   return {
//     type: 'NEW_ANEC',
//     payload: asObject(anecdote)
//   }
// }

const anecSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    castVote(state, action) {
      return state.map(s => s.id === action.payload.id
        ? action.payload.updatedAnec : s)
    },
    createNew(state, action) {
      const newAnec = action.payload
      state.push(newAnec)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})


export const { castVote, createNew, setAnecdotes } = anecSlice.actions
export default anecSlice.reducer

export const initialization = () => {
  return async dispatch => {
    const anecdotes = await getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createOne = content => {
  return async dispatch => {
    const newAnec = await create(asObject(content))
    dispatch(createNew(newAnec))
    dispatch(setNotification(`a new anecedote "${content}" created`))
    setTimeout(() => {
      dispatch(setNotification(null))
    }, 3000)
  }
}

export const updateOne = (id, obj) => {
  return async dispatch => {
    const updatedAnec = await update(id, obj)
    dispatch(castVote({ id, updatedAnec }))
    dispatch(setNotification(`a vote is casted for "${updatedAnec.content}"`))
    setTimeout(() => {
      dispatch(setNotification(null))
    }, 3000)
  }
}