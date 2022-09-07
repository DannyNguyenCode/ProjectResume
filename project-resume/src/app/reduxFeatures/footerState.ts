import {createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface FooterState{
    value:number | any
}

const initialState: FooterState={
    value: null,
}


export const footerState = createSlice({
    name:'footer',
    initialState,
    reducers:{
        onClickFooterIcons:(state,action:PayloadAction<number|any>)=>{
            state.value = action.payload
        }
    }
})

export const {onClickFooterIcons}= footerState.actions

export const getFooterState = (state:RootState)=>state.footerState.value

export default footerState.reducer