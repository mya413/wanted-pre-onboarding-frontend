import { useState } from "react";
import axios from "axios";
import { AiOutlinePlusCircle } from "react-icons/ai";

export default function ToDoInsert({ setTodos }) {
  const [todo, setTodo] = useState("");
  const createTodo = (e) => {
    setTodo(e.target.value);
  };

  // const api = "https://www.pre-onboarding-selection-task.shop/todos";
  const api = "http://localhost:8000/todos";

  const accessToken = localStorage.getItem("AccessToken");

  const handleCreate = async () => {
    await axios
      .post(
        api,
        { todo },
        { headers: { Authorization: `Bearer ${accessToken}` } }
      )
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(api, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((res) => {
        setTodos(res.data);
      });
  };

  return (
    <div className="flex items-center justify-between">
      <input
        value={todo}
        placeholder="Add to your task..."
        type="text"
        data-testid="new-todo-input"
        className="w-full p-4 outline-none text-primary"
        onChange={createTodo}
      />
      <button
        type="submit"
        data-testid="new-todo-add-button"
        className="mx-4 text-2xl text-primary"
        onClick={() => {
          handleCreate();
          setTodo("");
        }}
      >
        <AiOutlinePlusCircle />
      </button>
    </div>
  );
}
