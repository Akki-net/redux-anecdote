import React from 'react'
import { useDispatch } from 'react-redux'
import { createOne } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const submitHandler = e => {
        e.preventDefault()
        const content = e.target.content.value
        dispatch(createOne(content))
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