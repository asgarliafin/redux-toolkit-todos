import { createSlice } from '@reduxjs/toolkit';

const BASE_URL = "http://localhost:3000/api";

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
    numberOfCompleted: 1,
    numbserOfUnCompleted: 2,
    option: "All",
    allStatus: true
};

const calculateCount = (list) => {
    const completed = list.filter(({ status }) => status).length;
    const unCompleted = list.filter(({ status }) => !status).length;
    return {
        completed,
        unCompleted,
    };
};


export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        updateInput: (state, { payload }) => {
            state.value = payload;
        },
        addTodo: (state, { payload }) => {
            const id = state.list.at(-1).id + 1;
            state.list.push({
                id,
                status: false,
                text: state.value
            });
            state.value = "";
            state.numberOfCompleted = calculateCount(state.list).completed;
            state.numbserOfUnCompleted = calculateCount(state.list).unCompleted;
        },
        deleteTodo: (state, { payload }) => {
            state.list = state.list.filter(item => item.id !== payload.id);

            state.numberOfCompleted = calculateCount(state.list).completed;
            state.numbserOfUnCompleted = calculateCount(state.list).unCompleted;

        },
        deleteCompleted: (state) => {
            state.list = state.list.filter(({ status }) => !status);
            state.numberOfCompleted = 0;
        },
        setTodoStatus: (state, { payload }) => {
            state.list.find(({ id }) => id === payload.id).status = !payload.status;

            state.numberOfCompleted = calculateCount(state.list).completed;
            state.numbserOfUnCompleted = calculateCount(state.list).unCompleted;
        },
        setTodosStatus: (state) => {
            state.list = state.list.map(elm => {
                return {
                    ...elm,
                    status: state.allStatus
                }
            });
            state.allStatus = !state.allStatus;
        },
        showAll: (state) => {
            state.option = 'All';
        },
        showCompleted: (state) => {
            state.option = true;
        },
        showUnCompleted: (state) => {
            state.option = false;
        }
    }
})

export default todoSlice.reducer;

export const { updateInput, addTodo, deleteTodo, deleteCompleted, setTodoStatus, setTodosStatus, showAll, showCompleted, showUnCompleted } = todoSlice.actions;
