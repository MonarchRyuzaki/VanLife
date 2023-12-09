import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

export async function loginLoader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

const loginUser = async (loginData) => {
  const res = await fetch("https://vanlife-backend.onrender.com/login", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
  });

  const data = await res.json();
  console.log(data);
  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  return data;
};

export default function Login() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const [loginFormData, setLoginFormData] = React.useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);
    try {
      const result = await loginUser(loginFormData);
      navigate("/host", {replace: true});
    } catch (error) {
      console.log(error);
      setError(error)
    } finally {
      setStatus("idle");
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  const msg = useLoaderData();

  return (
    <div className="bg-[#FFF7ED] flex justify-center items-start px-6 sm:px-16 min-h-[100vh]">
      <div className="w-full xl:max-w-[1280px] mt-[150px]">
        <div className="login-container">
          <h1 className="text-4xl mb-[20px] font-semibold">
            Sign in to your account
          </h1>
          {msg && <h2 className="mb-20 text-red-500 text-xl">{msg}</h2>}
          {error && <h2 className="mb-14 text-red-500 text-xl">{error.message}</h2>}
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
            <button disabled={status === "submitting"} className="disabled:bg-gray-500">{status === "submitting" ? "Logging in..." : "Log In"}</button>
          </form>
        </div>
      </div>
    </div>
  );
}
