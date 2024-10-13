import React, { useRef, useState, useEffect } from "react";
import todo_icon from "../assets/todo_icon.png";
import Todoitems from "./Todoitems";

const Todo = () => {
  const inputRef = useRef();

  // Load the initial todo list from localStorage
  const [todoList, setTodoList] = useState(() => {
    const savedTodos = localStorage.getItem("todoList");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // Whenever the todoList changes, update localStorage
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const add = () => {
    const inputText = inputRef.current.value.trim();

    if (inputText === "") {
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };

    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const toggleComplete = (id) => {
    setTodoList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isComplete: !item.isComplete } : item
      )
    );
  };

  const deleteTodo = (id) => {
    setTodoList((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      {/* for the title */}
      <div className="flex items-center mt-7 gap-2">
        <img className="w-8" src={todo_icon} alt="todo icon" />
        <h1 className="text-3xl font-semibold">To Do List</h1>
      </div>

      {/* for the input box */}
      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input
          ref={inputRef}
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
          type="text"
          placeholder="Add your task"
        />
        <button
          onClick={add}
          className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer"
        >
          ➕
        </button>
      </div>

      {/* for the task list */}
      <div>
        {todoList.map((item) => (
          <Todoitems
            key={item.id}
            Text={item.text}
            isComplete={item.isComplete}
            onToggle={() => toggleComplete(item.id)}
            onDelete={() => deleteTodo(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;
