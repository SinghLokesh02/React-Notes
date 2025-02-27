import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todoItems: [
      {
        id: nanoid(),
        title: "First Todo",
      },
      {
        id: nanoid(),
        title: "Second Todo",
      },
      {
        id: nanoid(),
        title: "Third Todo",
      },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      const data = {
        id: nanoid(),
        title: action.payload,
      };
      state.todoItems.push(data);
    },
    removeTodo: (state, action) => {
      state.todoItems = state.todoItems.filter(
        (todo) => todo.id !== action.payload
      );
    },
  },
});

// Exports
export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
