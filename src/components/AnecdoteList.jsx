import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateOne } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
    let anecdotes = useSelector(state => {
        if (state.filter == '')
            return state.anecdotes
        return state.anecdotes.filter(anec => anec.content.toLowerCase().includes(state.filter) && anec)
    })
    anecdotes = [...anecdotes].sort((a, b) => b.votes - a.votes)
    const dispatch = useDispatch()
    const vote = (id, anecdote) => {
        const updatedAnec = { ...anecdote, votes: anecdote.votes + 1 }
        dispatch(updateOne(id, updatedAnec))
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
                        <button onClick={() => vote(anecdote.id, anecdote)}>vote</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AnecdoteList