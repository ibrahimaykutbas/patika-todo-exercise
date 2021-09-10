import { createSlice } from "@reduxjs/toolkit";

import { nanoid } from "@reduxjs/toolkit";

import alertify from "alertifyjs";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [
      {
        id: "1",
        title: "Learn JavaScript",
        icon: "primary",
      },
      {
        id: "2",
        title: "Learn React",
        icon: "warning",
      },
      {
        id: "3",
        title: "Learn Redux",
        icon: "info",
      },
      {
        id: "4",
        title: "Learn Hooks",
        icon: "danger",
      },
      {
        id: "5",
        title: "Learn Thunk",
        icon: "danger",
      },
    ],
    currentIcon: "primary",
    searchText: "",
  },
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.items.push(action.payload);
        alertify.success("To-do added!", 2);
      },
      prepare: ({ title, icon }) => {
        return {
          payload: {
            id: nanoid(),
            icon,
            title,
          },
        };
      },
    },
    changeCurrentIcon: (state, action) => {
      state.currentIcon = action.payload;
    },
    deleteTodo: (state, action) => {
      const { id } = action.payload;
      const filtered = state.items.filter((item) => item.id !== id);
      state.items = filtered;
      alertify.error("To-do deleted!", 2);
    },
    searchTodo: (state, action) => {
      state.searchText = action.payload;
    },
  },
});

export const { addTodo, changeCurrentIcon, deleteTodo, searchTodo } =
  todosSlice.actions;
export default todosSlice.reducer;
