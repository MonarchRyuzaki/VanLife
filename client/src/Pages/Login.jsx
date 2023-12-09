import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [loginFormData, setLoginFormData] = React.useState({
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(loginFormData);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="bg-[#FFF7ED] flex justify-center items-start px-6 sm:px-16 min-h-[100vh]">
      <div className="w-full xl:max-w-[1280px] mt-[150px]">
        <div className="login-container">
          <h1 className="text-4xl mb-[50px]">Sign in to your account</h1>
          <form onSubmit={handleSubmit} className="login-form">
            <input
              name="email"
              onChange={handleChange}
              type="email"
              placeholder="Email address"
              value={loginFormData.email}
            />
            <input
              name="password"
              onChange={handleChange}
              type="password"
              placeholder="Password"
              value={loginFormData.password}
            />
            <button>Log in</button>
          </form>
        </div>
      </div>
    </div>
  );
}
