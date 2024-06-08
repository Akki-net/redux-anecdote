import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { castVote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
    const anecdotes = useSelector(state => {
        if(state.filter == '')
            return state.anecdotes
        return state.anecdotes.filter(anec => state.filter.test(anec.content) && anec)
    }).sort((a, b) => b.votes - a.votes)
    const dispatch = useDispatch()
    const vote = (id) => {
        dispatch(castVote(id))
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
        </div>
    )
}

export default AnecdoteList