import { useState } from "react";
import axios from "axios";
import { BsPencilSquare, BsTrash3 } from "react-icons/bs";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

export default function ToDoListItem({ todoText, isCompleted, id, setTodos }) {
  const [edit, setEdit] = useState(false);
  const handleEdit = () => {
    setEdit(!edit);
    setText(todoText);
  };

  const [completed, setCompleted] = useState(false);
  const handleComplete = () => {
    setCompleted(!completed);
  };

  const [text, setText] = useState(todoText);
  const handleText = (e) => {
    setText(e.target.value);
  };

  // const api = `https://www.pre-onboarding-selection-task.shop/todos/${id}`;
  // const apiGet = "https://www.pre-onboarding-selection-task.shop/todos";
  const api = `http://localhost:8000/${id}`;
  const apiGet = "http://localhost:8000/todos";

  const accessToken = localStorage.getItem("AccessToken");

  const handleUpdate = async (e) => {
    e.preventDefault();
    await axios
      .put(
        api,
        { todo: text, isCompleted: completed },
        { headers: { Authorization: `Bearer ${accessToken}` } }
      )
      .then((res) => {
        setText(text);
        setCompleted(!completed);
        setEdit(!edit);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(apiGet, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((res) => {
        setTodos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = async () => {
    await axios.delete(api, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    axios
      .get(apiGet, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((res) => {
        setTodos(res.data);
      });
  };

  return (
    <li className="flex items-center justify-between py-3 mx-3">
      <label>
        <input
          defaultChecked={isCompleted}
          value={isCompleted}
          type="checkbox"
          onClick={handleComplete}
        />
        {edit ? (
          <input
            value={text}
            type="text"
            data-testid="modify-input"
            className="px-2 ml-2 border rounded-md w-60 text-primary outline-gray"
            onChange={handleText}
          />
        ) : (
          <span className="ml-4 text-primary">{todoText}</span>
        )}
      </label>
      {edit ? (
        <div>
          <button
            type="button"
            data-testid="submit-button"
            className="mr-2 text-[#6375fe59]"
            onClick={handleUpdate}
          >
            <AiOutlineCheck />
          </button>
          <button
            type="button"
            data-testid="cancel-button"
            className="text-[#6375fe59]"
            onClick={handleEdit}
          >
            <AiOutlineClose />
          </button>
        </div>
      ) : (
        <div>
          <button
            type="button"
            data-testid="modify-button"
            className="mr-2 text-[#6375fe59]"
            onClick={handleEdit}
          >
            <BsPencilSquare />
          </button>
          <button
            type="submit"
            data-testid="delete-button"
            className="text-[#6375fe59]"
            onClick={handleDelete}
          >
            <BsTrash3 />
          </button>
        </div>
      )}
    </li>
  );
}
