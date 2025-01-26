import { createSlice } from "@reduxjs/toolkit";

const initialState = ({
    blogs: [],
    loading: false,
    error: null,
})

const blogSlice = createSlice({
    name: "blogs",
    initialState,
    reducers: {
        setBlog: (state, { payload }) => {
            state.blogs = payload
            // state.blogs.push(payload)
        },
        deleteBlog: (state, { payload }) => {
            state.blogs = state.blogs.filter((item) => item?._id !== payload)
        },
        setLoading: (state) => {
            state.loading = true;
        },
        setError: (state, { payload }) => {
            state.error = payload;
        },
        // setUser: (state, { payload }) => {
        //     state.blogs = payload
        //     // state.blogs.push(payload)
        // },
    }
})

export const { setBlog, setLoading, setError } = blogSlice.actions;
export const blogReducer = blogSlice.reducer;