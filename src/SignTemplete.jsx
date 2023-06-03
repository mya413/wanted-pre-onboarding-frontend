import { useNavigate } from "react-router-dom";

export default function SignTemplete() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col justify-center items-center w-full h-80 mx-40 bg-white drop-shadow-2xl bg-cover bg-[url('https://images.unsplash.com/photo-1615800098779-1be32e60cca3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1610&q=80')] px-8">
        <h1 className="text-4xl font-black text-primary">ONEUL</h1>
        <p className="mt-2 mb-8 text-sm text-center text-primary">
          작심삼일인 당신의 계획을 관리해보세요!
        </p>
        <button
          data-testid="signin-button"
          className="w-full py-1 mb-4 font-semibold bg-white rounded text-primary hover:bg-primary hover:text-white hover:transition-all"
          onClick={() => navigate("/signin")}
        >
          로그인 하러가기
        </button>
        <button
          data-testid="signup-button"
          className="w-full py-1 font-semibold bg-white rounded-md text-primary hover:bg-primary hover:text-white hover:transition-all"
          onClick={() => navigate("/signup")}
        >
          회원가입 하러가기
        </button>
      </div>
    </div>
  );
}
