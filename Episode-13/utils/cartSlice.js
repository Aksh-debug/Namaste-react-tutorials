import { current } from "@reduxjs/toolkit/dist";

const { createSlice } = require("@reduxjs/toolkit");


const cartSlice=createSlice({
    name:"Carts",
    initialState:{
        items:[]
    },
    reducers:{
        addItem : (state,action)=>{
            // mutating (changing) the state over here
            state.items.push(action.payload)
        },
        removeItem : (state,action)=>{
            state.items.splice(state.items.findIndex((arrow)=>arrow.card.info.id===action.payload.card.info.id),1)
        },
        clearCart : (state)=>{
            state.items.length=0;
        }

    }
});

console.log(cartSlice);

export const {addItem,removeItem,clearCart} = cartSlice.actions;

export default cartSlice.reducer;