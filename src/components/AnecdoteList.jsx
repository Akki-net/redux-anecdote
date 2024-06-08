import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { castVote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
    let anecdotes = useSelector(state => {
        if (state.filter == '')
            return state.anecdotes
        return state.anecdotes.filter(anec => anec.content.toLowerCase().includes(state.filter) && anec)
    })
    anecdotes = [...anecdotes].sort((a, b) => b.votes - a.votes)
    const dispatch = useDispatch()
    const vote = (id) => {
        dispatch(castVote(id))
        const myAnec = anecdotes.find(anec => anec.id == id)
        dispatch(setNotification(`a vote is casted for "${myAnec.content}"`))
        setTimeout(() => {
            dispatch(setNotification(null))
        }, 3000)
        // dispatch({ type: 'anecdotes/castVote', payload: id })
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