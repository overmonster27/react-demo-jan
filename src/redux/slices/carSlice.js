import {createAsyncThunk} from "@reduxjs/toolkit";

import {carService} from "../../services";

import {createSlice} from "@reduxjs/toolkit";

let initialState = {
    cars: [],
    carFormUpdate: null,
    errors: null,
    loading: null
};

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_, thunkAPI) => {
        try {
            const {data} = await carService.getAllL();
            return data

        } catch (e) {
            return thunkAPI.rejectWithValue(e.respond.data)
        }
    });

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {},
    extraReducers: {}
});

const {reducer: carReducer} = carSlice

const carActions = {
    getAll
};

export {carReducer, carActions}




