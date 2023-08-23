import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BiLeftArrowAlt } from "react-icons/bi";

export default function SignIn({ login }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);

  const changeEmail = (e) => {
    const emailRegex = /^[A-Za-z0-9.\-_]+@([A-Za-z0-9-]+\.)+[A-Za-z]{2,}$/i;
    setEmail(e.target.value);

    if (!emailRegex.test(e.target.value)) {
      setEmailMessage("아이디는 이메일 형식으로 입력해야해요!");
      setIsEmail(false);
    } else {
      setEmailMessage("이메일 형식의 아이디에요 :)");
      setIsEmail(true);
    }
  };
  const changePassword = (e) => {
    const passwordRegex = /^[a-zA-Zㄱ-힣0-9]{8,}$/i;
    setPassword(e.target.value);

    if (!passwordRegex.test(e.target.value)) {
      setPasswordMessage("비밀번호는 8자리 이상으로 입력해야해요!");
      setIsPassword(false);
    } else {
      setPasswordMessage("8자리 이상의 비밀번호에요 :)");
      setIsPassword(true);
    }
  };

  const navigate = useNavigate();
  // const api = "https://www.pre-onboarding-selection-task.shop/auth/signin";
  const api = "http://localhost:8000/auth/signin";
  const handleLoggedIn = async (e) => {
    e.preventDefault();
    await axios
      .post(api, { email, password })
      .then((res) => {
        alert("로그인 성공! 🥳");
        navigate("/todo");
        localStorage.setItem("AccessToken", res.data.access_token);
      })
      .catch((err) => {
        console.log(err);
        alert("로그인에 실패했어요..😭");
      });
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative flex flex-col items-center justify-center w-full mx-40 bg-white h-80 drop-shadow-2xl">
        <h2 className="mb-6 text-2xl font-bold text-primary">LOGIN</h2>
        <form className="flex flex-col mx-8">
          <input
            type="email"
            placeholder="아이디(이메일)를 입력해주세요"
            data-testid="email-input"
            required
            className="px-3 py-1 mb-2 border border-gray w-80 text-primary outline-primary"
            onChange={changeEmail}
          />
          {email.length > 0 && (
            <span
              className={`${
                isEmail
                  ? "text-xs mb-2 text-[#3AB0FF]"
                  : "text-xs mb-2 text-[#F44F50]"
              } `}
            >
              {emailMessage}
            </span>
          )}
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            data-testid="password-input"
            required
            className="px-3 py-1 border border-gray w-80 text-primary outline-primary"
            onChange={changePassword}
          />
          {password.length > 0 && (
            <span
              className={`${
                isPassword
                  ? "text-xs mt-2 text-[#3AB0FF]"
                  : "text-xs mt-2 text-[#F44F50]"
              }`}
            >
              {passwordMessage}
            </span>
          )}
          <button
            type="submit"
            data-testid="signin-button"
            className="px-3 py-1 mt-8 text-lg font-semibold text-white border border-gray bg-primary w-80 hover:text-primary hover:bg-white hover:border hover:border-primary hover:transition-all"
            onClick={handleLoggedIn}
            disabled={!(isEmail && isPassword)}
          >
            로그인
          </button>
        </form>
        <button
          className="absolute top-0 left-0 p-3 text-3xl font-bold text-primary"
          onClick={handleBack}
        >
          <BiLeftArrowAlt />
        </button>
      </div>
    </div>
  );
}
