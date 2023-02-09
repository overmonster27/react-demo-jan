import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {carService} from "../../services";

let initialState = {
    cars: [],
    carForUpdate: null,
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
            return thunkAPI.rejectWithValue(e.response.data)
        }
    });


const create = createAsyncThunk(
    'carSlice/create',
    async ({car}, thunkAPI) => {
        try {
            await carService.create(car)
            thunkAPI.dispatch(getAll())
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);
const deleteById = createAsyncThunk(
    'carSlice/delete',
    async ({id}, thunkAPI) => {
        try {
            await carService.deleteById(id)
            thunkAPI.dispatch(getAll())
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const updateById = createAsyncThunk(
    "carSlice/delete",
    async ({id, car}, thunkAPI) => {
        try {
            await carService.updateById(id, car)
            thunkAPI.dispatch(getAll())

        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload
                state.loading = false
            })
            .addDefaultCase((state, action) => {
                const [actionStatus] = action.type.split('/').slice(-1);
                state.loading = actionStatus === 'pending';
            })
    }
});

const {reducer: carReducer, actions: {setCarForUpdate}} = carSlice

const carActions = {
    getAll,
    create,
    deleteById,
    updateById,
    setCarForUpdate
};

export {carReducer, carActions}




