// import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import SignTemplete from "./SignTemplete";
import ToDoTemplete from "./ToDoTemplete";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

export default function App() {
  // const accessToken = localStorage.getItem("AccessToken");
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (accessToken === null) {
  //     navigate("/signin");
  //   } else {
  //     navigate("/todo");
  //   }
  // }, [accessToken]);

  return (
    <div className="w-full h-screen bg-gradient-to-r from-[#FED0B3] to-[#F7AE81]">
      <Routes>
        <Route path="/" element={<SignTemplete />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/todo" element={<ToDoTemplete />} />
      </Routes>
    </div>
  );
}
