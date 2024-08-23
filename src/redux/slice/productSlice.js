import { createSlice } from "@reduxjs/toolkit";



const productSlice =createSlice({
    name:'product',
    initialState:[],
    reducers:{
        addToProduct :(state,action)=>{
            state.push(action.payload)
        },
        removeToProduct :(state,action)=>{
          return  state.filter(item=>item.id!=action.payload)
        }
    }
})

export const {addToProduct,removeToProduct}=productSlice.actions
export default productSlice.reducer