import React from 'react'
import { useDispatch } from 'react-redux'
import { asObject, createNew } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import { create } from '../services/anecdotes'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const submitHandler = async e => {
        e.preventDefault()
        const content = e.target.content.value
        const newAnec = await create(asObject(content))
        dispatch(createNew(newAnec))
        dispatch(setNotification(`a new anecedote "${content}" created`))
        setTimeout(() => {
            dispatch(setNotification(null))
        }, 3000)
        // dispatch({ type: 'anecdotes/createNew', payload: e.target.content.value })
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