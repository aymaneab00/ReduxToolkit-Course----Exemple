import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice(
{
    name:'counter',
    initialState : {
        compteur:0
    },
    reducers : {
        increment : (state,action)=>{
state.compteur +=1
        },
        decrement : (state,action)=>{
state.compteur -=1
        },
        initialiser : (state,action)=>{
state.compteur =0
        }
    }
}

)
export const {increment,decrement,initialiser}=CounterSlice.actions
export default CounterSlice.reducer