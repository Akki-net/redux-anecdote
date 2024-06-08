import React from 'react'
import { useDispatch } from 'react-redux'
import { createNew } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const submitHandler = e => {
        e.preventDefault()
        dispatch(createNew(e.target.content.value))
        e.target.content.value = ""
    }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={submitHandler}>
                <div><input name="content" /></div>
                <button>create</button>
            </form>
        </div>
    )
}

export default AnecdoteForm