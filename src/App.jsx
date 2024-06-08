import { useSelector, useDispatch } from 'react-redux'
import { castVote, createNew } from './reducers/anecdoteReducer'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
    dispatch(castVote(id))
  }

  const submitHandler = e => {
    e.preventDefault()
    dispatch(createNew(e.target.content.value))
    e.target.content.value = ""
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={submitHandler}>
        <div><input name="content" /></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App