import { createSlice } from "@reduxjs/toolkit";

const initialState = ({
    users: [],
    loading: false,
    error: null,
})

const blogSlice = createSlice({
    name: "blogs",
    initialState,
    reducers: {
        setUser: (state, { payload }) => {
            state.users = payload
            // state.blogs.push(payload)
        },
        deleteUser: (state, { payload }) => {
            state.users = state.users.filter((item) => item?._id !== payload)
        },
        setLoading: (state) => {
            state.loading = true;
        },
        setError: (state, { payload }) => {
            state.users = payload;
        },
    }
})

export const { setUser, deleteUser, setLoading, setError } = blogSlice.actions;
export const blogReducer = blogSlice.reducer;