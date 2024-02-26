import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const todoReducer = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, action) => {
      state.tasks.push(action.payload);
    },
    deleteItem: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    editItem: (state, action) => {
      const { id, updatedTask } = action.payload;
      const taskIndex = state.tasks.findIndex(task => task.id === id);
      if (taskIndex !== -1) {
        state.tasks[taskIndex] = updatedTask;
      }
    },
  },
});

export const { add, deleteItem, editItem } = todoReducer.actions;
export default todoReducer.reducer;
