import { createSlice, nanoid } from "@reduxjs/toolkit";

//To initialize the values
const initialState = {
  todos: [{ id: 1, text: "Task 1" }],
};

//Make Slice that is the enhance version of Reducer and export it
const todoSlice = createSlice({
  name: "todo",
  initialState, //each slice has initial state
  reducers: {
    //takes property and functins
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(), //always take unique id
        text: action.payload, //we use payload(also user property)
      };
      state.todos.push(todo);
      console.log("tdos", todo);
    }, //takes state and action
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      console.log("id", id);
      console.log("text", text);
      const todoToUptodate = state.todos.find((todo) => todo.id === id);
      console.log("updateTaks", todoToUptodate.text);
      if (todoToUptodate) {
        todoToUptodate.text = text;
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
