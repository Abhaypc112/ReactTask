import {configureStore} from '@reduxjs/toolkit'
import listReducer from './dataReducer'

const store = configureStore({
    reducer:{
        texts:listReducer
    }
})

export default store