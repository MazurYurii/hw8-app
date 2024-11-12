import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import noteReducer from './noteSlice';

export const store = configureStore({
    reducer: {
        counterValue: counterReducer,
        notesValue: noteReducer
    }
});