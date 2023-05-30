import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: "",
    list: [
        {
            id: 1,
            status: true,
            text: "Learn JavaScript"
        },
        {
            id: 2,
            status: false,
            text: "Learn React"
        },
        {
            id: 3,
            status: false,
            text: "Have a life!"
        }
    ],
    completed: [
        {
            id: 1,
            status: true,
            text: "Learn JavaScript"
        }
    ],
    unCompleted: [
        {
            id: 2,
            status: false,
            text: "Learn React"
        },
        {
            id: 3,
            status: false,
            text: "Have a life!"
        }
    ]
}

export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        add: (state, action) => {

        },
        remove: (state, action) => {

        },
        removeAll: (state, action) => {

        }
    }
})

export default todoSlice.reducer;

export const { add, remove, removeAll } = todoSlice.actions;
