import { createSlice } from '@reduxjs/toolkit'

let info = null

const infoSlice = createSlice({
    name: 'notification',
    initialState: info,
    reducers: {
        setNotification(state, action) {
            state = action.payload
            return state
        }
    }
})

export const { setNotification } = infoSlice.actions
export default infoSlice.reducer