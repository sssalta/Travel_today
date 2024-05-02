import { useState } from "react";
import { axiosInstance } from "../../services/axios";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import { LOGIN, REGISTER, TOURS } from "../../utils/variables";
import { useAuth } from "../../hocs/AuthProvider";

const LoginPage = ({ isLogin }) => {
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");
  const [msg, setMsg] = useState("");
  const [showPsw, setShowPsw] = useState(false);

  const nav = useNavigate();
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleRegister = async () => {
    try {
      setIsLoading(true);
      if (isLogin) {
        const res = await axiosInstance.post(
          "auth/login",
          {
            email: userInfo?.email,
            password: userInfo?.password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        login(res.data.token, res.data.userId);
        nav(TOURS);
      } else {
        const res = await axiosInstance.post("auth/register", {
          username: userInfo?.username,
          email: userInfo?.email,
          password: userInfo?.password,
          isAdmin: false,
        });
        setMsg(res.data.username);
        setIsLoading(false);
        nav(LOGIN);
        setMsg("");
      }
    } catch (e) {
      if (e?.response?.data[0]?.message) setErr(e?.response?.data[0].message);
      else console.log(e);
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="sign-up-container">
        <h2>{isLogin ? "Sign In" : "Sign Up"}</h2>
        <div className="form">
          {!isLogin && (
            <>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={userInfo?.username}
                onChange={(e) => {
                  e.preventDefault();
                  setUserInfo((prev) => ({
                    ...prev,
                    username: e?.target?.value,
                  }));
                }}
                required
              />
            </>
          )}
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userInfo?.email}
            required
            onChange={(e) => {
              e.preventDefault();
              setUserInfo((prev) => ({ ...prev, email: e?.target?.value }));
            }}
          />
          <label htmlFor="password">Password:</label>
          <input
            type={showPsw ? "text" : "password"}
            id="password"
            name="password"
            value={userInfo?.password}
            onChange={(e) => {
              e.preventDefault();
              setUserInfo((prev) => ({
                ...prev,
                password: e?.target?.value,
              }));
            }}
            required
          />
          <span onClick={() => setShowPsw((v) => !v)}>
            {showPsw ? "hide" : "show"} password
          </span>
          {err && <span>{err}</span>}
          {msg && <span>Welcome, {msg}!</span>}

          <div className="btns">
            <button onClick={handleRegister}>
              {isLoading ? "Loading..." : !isLogin ? "Sign Up" : "Sign In"}
            </button>
            <button onClick={() => nav(isLogin ? REGISTER : LOGIN)}>
              {isLogin ? "Sign Up" : "Sign In"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
