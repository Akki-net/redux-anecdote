let searchText = ""

const filterReducer = (state = searchText, action) => {
    switch(action.type) {
        case 'SEARCH_TEXT':
            if(action.payload.text == "")
                return searchText
            return new RegExp(`${action.payload.text}`, "ig")
        default :
            return state
    }
}

export const setFilter = text => {
    return {
        type: 'SEARCH_TEXT',
        payload: {
            text
        }
    }
}

export default filterReducer