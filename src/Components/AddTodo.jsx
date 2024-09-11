import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "../features/todo/todoSlice";

function AddTodo({ editMode, editTaskId, setEditMode, handleEditCancel }) {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    if (editMode && editTaskId !== null) {
      const taskToUpdate = todos.find((todo) => todo.id === editTaskId);
      console.log("updateTask", taskToUpdate);
      if (taskToUpdate) {
        setInput(taskToUpdate.text);
      }
    }
  }, [editMode, editTaskId, todos]);

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      console.log("input", input);
      if (editMode) {
        dispatch(updateTodo({ id: editTaskId, text: input }));
        setEditMode(false);
        handleEditCancel();
      } else {
        dispatch(addTodo(input));
      }
      setInput("");
    }
  };

  return (
    <>
      <h2 className="text-4xl font-semibold text-customGreen mb-4 text-center">
        {editMode ? "Edit To-Do List" : "Add To-Do List"}
      </h2>
      <form onSubmit={addTodoHandler} className="flex mb-4">
        <input
          type="text"
          placeholder="Add a new task"
          className="flex-grow p-1 border-b-2 border-customGreen focus:outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="bg-customGreen text-white m-2 p-3 rounded"
        >
          {editMode ? "Update" : "Add"}
        </button>
      </form>
    </>
  );
}

export default AddTodo;
