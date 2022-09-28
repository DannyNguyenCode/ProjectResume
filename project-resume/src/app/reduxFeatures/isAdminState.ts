import {createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface IsAdminState{
    isAdmin: boolean | any,
}

const initialState: IsAdminState={
    isAdmin: 0,
}


export const isAdminState = createSlice({
    name:'isadmin',
    initialState,
    reducers:{
        setIsAdmin:(state,action:PayloadAction<number|any>)=>{
            if(action.payload === 0){
                state.isAdmin = false
            }else{
                state.isAdmin = true
            }
         
        }
    }
})

export const {setIsAdmin}= isAdminState.actions

export const getIsAdminState = (state:RootState)=>state.isAdminState

export default isAdminState.reducer