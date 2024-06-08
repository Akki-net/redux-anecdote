import { createSlice } from '@reduxjs/toolkit'
let searchText = ""

// const filterReducer = (state = searchText, action) => {
//     switch (action.type) {
//         case 'SEARCH_TEXT':
//             if (action.payload.text == "")
//                 return searchText
//             return new RegExp(`${action.payload.text}`, "ig")
//         default:
//             return state
//     }
// }

// export const setFilter = text => {
//     return {
//         type: 'SEARCH_TEXT',
//         payload: {
//             text
//         }
//     }
// }

const dotSlice = createSlice({
    name: 'filter',
    initialState: searchText,
    reducers: {
        setFilter(state, action) {
            state = action.payload
            // return new RegExp(state, "ig")
            return state.toLowerCase()
        }
    }
})

export const { setFilter } = dotSlice.actions
export default dotSlice.reducer

// export default filterReducer