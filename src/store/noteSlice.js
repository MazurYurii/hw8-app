import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    notes: []
};

export const noteSlice = createSlice({
    name: 'notesValue',
    initialState,
    reducers: {
        addNotes: (state, action) => {
            state.notes.push(action.payload);
        }
    }
});

export const {addNotes} = noteSlice.actions;

export const selectNotes = (state) => state.notesValue.notes

export default noteSlice.reducer;