import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    auth: null,
    user: null,
    load: false,
    error: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuth: (state, action) => {
            state.auth = action.payload
        },
        setUser: (state, action) => {
            state.user = action.payload
        },
        setLoad: (state, action) => {
            state.load = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        },
    },
})

export const {setAuth } = userSlice.actions

export default userSlice.reducer