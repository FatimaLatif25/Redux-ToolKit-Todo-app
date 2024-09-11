import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";
import { TrashIcon, PencilIcon } from "@heroicons/react/solid";

const Todo = ({ handleEditClick }) => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex item-center justify-between shadow-md bg-zinc-100 p-2 rounded-md shadow-sm"
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                className="mr-2 h-4 w-4 text-blue-500 rounded focus:ring-blue-400"
              />
              <span className="text-gray-700">{todo.text}</span>
            </div>
            <div className="flex items-center">
              <PencilIcon
                className="h-6 w-6 text-blue-500 hover:text-blue-600 cursor-pointer m-1"
                onClick={() => handleEditClick(todo.id)}
              />
              <TrashIcon
                className="h-6 w-6 text-red-500 hover:text-red-600 cursor-pointer m-1"
                onClick={() => dispatch(removeTodo(todo.id))}
              />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todo;
