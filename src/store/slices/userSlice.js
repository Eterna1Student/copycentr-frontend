import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    auth: false,
    user: null
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
        }
    },
})

export const {setAuth } = userSlice.actions

export default userSlice.reducer