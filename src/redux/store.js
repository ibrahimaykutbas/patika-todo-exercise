import { configureStore } from "@reduxjs/toolkit";

import todosReduce from "./todos/todosSlice";
export const store = configureStore({
  reducer: {
    todos: todosReduce,
  },
});
