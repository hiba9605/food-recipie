import { configureStore } from "@reduxjs/toolkit";
import recipeSlice from './slices/recipeSlice'

 const Recipietore=configureStore({
    reducer:{
       
        RecipieReducer:recipeSlice

    }

})
export default Recipietore