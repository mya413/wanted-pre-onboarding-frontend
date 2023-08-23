import { useState, useEffect } from "react";
import axios from "axios";
import ToDoList from "./ToDoList";
import ToDoInsert from "./ToDoInsert";

export default function ToDoTemplete() {
  const [todos, setTodos] = useState([]);
  // const api = "https://www.pre-onboarding-selection-task.shop/todos";
  const api = "http://localhost:8000/todos";
  const accessToken = localStorage.getItem("AccessToken");

  useEffect(() => {
    axios
      .get(api, { headers: { Authorization: `Bearer ${accessToken}` } })
      .then((res) => {
        setTodos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [accessToken]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full mx-40 bg-white drop-shadow-2xl">
        <h2 className="py-4 text-xl font-bold text-center text-primary">
          오늘의 일정
        </h2>
        <ToDoList setTodos={setTodos} todos={todos} />
        <ToDoInsert setTodos={setTodos} />
      </div>
    </div>
  );
}
