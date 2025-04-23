// src/redux/bookSlice.js
import { createSlice } from '@reduxjs/toolkit'

const bookSlice = createSlice({
    name: 'books',
    initialState: {
        allBooks: [],
        searchResults: [],
    },
    reducers: {
        setAllBooks: (state, action) => {
            state.allBooks = action.payload
        },
        setSearchResults: (state, action) => {
            state.searchResults = action.payload
        }
    }
})

export const { setAllBooks, setSearchResults } = bookSlice.actions
export default bookSlice.reducer
