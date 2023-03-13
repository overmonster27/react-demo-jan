import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {commentsService} from "../../services/commentService";

const initialState = {
    comments: [],
    errors: null,
    loading: null,
    selectedComment: ''
}

const getAll = createAsyncThunk(
    'commentSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await commentsService.getAll();

            return data
        } catch (e) {
            return rejectWithValue(e.response.value)
        }
    }
)

const commentSlice = createSlice({
    name: 'commentsSlice',
    initialState,
    reducers: {
        setSelectedComment: (state, action) => {
            state.selectedComment = action.payload
        }
    },
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.loading = false
            state.comments = action.payload
        })
        .addCase(getAll.rejected, (state, action) => {
            state.loading = false
            state.comments = action.payload
        })
        .addCase(getAll.pending, (state, action) => {
            state.loading = true
        })
})

const {reducer: commentReducer, actions: {setSelectedComment}} = commentSlice;

const commentActions = {
    setSelectedComment,
    getAll
}

export {commentActions, commentReducer};



