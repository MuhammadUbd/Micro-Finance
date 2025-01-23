import { createSlice } from "@reduxjs/toolkit";

const initialState = ({
    blogs: [],
    loading: false,
    error: null,
})

// const uId = self.crypto.randomUUID()
// console.log(uId)
const blogSlice = createSlice({
    name: "blogs",
    initialState,
    reducers: {
        setBlog: (state, { payload }) => {
            state.blogs = [...state.blogs, payload]
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
    }
})

export const { setBlog, setLoading, setError } = blogSlice.actions;
export const blogReducer = blogSlice.reducer;