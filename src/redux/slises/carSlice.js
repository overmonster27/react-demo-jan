import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {carService} from "../../services";

const initialState = {
    carsList: [],
    carForUpdate: null,
    errors: null,
    loading: null
}
// -----------------------Запит на отримання всіх карів ----------------------------
const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await carService.getAll();
            return data
        } catch (e) {
            return rejectWithValue(e.response.value)
        }
    }
)

// -----------------------Запит на створення одного кара ----------------------------
const createCar = createAsyncThunk(
    'carSlice/create',
    async ({car}, thunkAPI) => {
        try {
            await carService.create(car);
            thunkAPI.dispatch(getAll())
        } catch (e) {
            return thunkAPI(e.response.value)
        }
    }
)

// -----------------------Запит на видалення одного кару по ID ----------------------------
const deleteById = createAsyncThunk(
    'carSlice/deleteById ',
    async ({id}, thunkAPI) => {
        try {
            await carService.deleteById(id)
            thunkAPI.dispatch(getAll())
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.value)
        }
    }
)

// -----------------------Запит на оновлення одного кару ----------------------------
const updateById = createAsyncThunk(
    'carSlice/updateById ',
    async ({id, car}, thunkAPI) => {
        try {
            await carService.updateById(id, car)
            thunkAPI.dispatch(getAll())
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.value)
        }
    }
)


const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        // ----------------------- Редюсер на оновлення одного кару----------------------------
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.carsList = action.payload
                state.loading = false
            })
            .addDefaultCase((state, action) => {
                const [actionStatus] = action.type.split('/').slice(-1)
                state.loading = actionStatus === 'pending';
            })
})

const {reducer: carReducers, actions: {setCarForUpdate}} = carSlice

const carActions = {
    getAll,
    createCar,
    deleteById,
    updateById,
    setCarForUpdate,
}
export {carReducers, carActions};