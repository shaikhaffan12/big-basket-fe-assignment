import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../State/State";
import * as action from "../Actions/Action";

const product = createSlice({
    name: 'product',
    initialState: initialState,

    reducers: {
        filterData: action.filterData,
        setDataChanged: action.setDataChanged,
        setCount: action.setCount,
        setSearchData: action.setSearchData,

    }
})

export default product.reducer;
export const {filterData, setDataChanged, setCount, setSearchData} = product.actions