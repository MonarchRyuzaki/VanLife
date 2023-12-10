import React, { useState } from "react";
import {
  Form,
  redirect,
  useActionData,
  useLoaderData,
  useNavigate,
  useNavigation,
} from "react-router-dom";

export async function loginLoader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

export async function action({ request }) {
  // replacing the handle submit
  const formData = await request.formData();
  const email = formData.get("email"); // this is getting from the name attribute given to the input fields
  const password = formData.get("password");
  const url = new URL(request.url);
  const redirectTo = url.searchParams.get("redirectTo") || "/host";
  try {
    const data = await loginUser({ email, password });
    localStorage.setItem("loggedIn", true);
    return redirect(redirectTo);
  } catch (error) {
    return error.message;
  }
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
  const { status } = useNavigation();
  const msg = useLoaderData();
  const errorMsg = useActionData();

  return (
    <div className="bg-[#FFF7ED] flex justify-center items-start px-6 sm:px-16 min-h-[100vh]">
      <div className="w-full xl:max-w-[1280px] mt-[150px]">
        <div className="login-container">
          <h1 className="text-4xl mb-[20px] font-semibold">
            Sign in to your account
          </h1>
          {msg && <h2 className="mb-[20px] text-red-500 text-xl">{msg}</h2>}
          {errorMsg && (
            <h2 className="mb-14 text-red-500 text-xl">{errorMsg}</h2>
          )}
          <Form className="login-form" method="post" replace>
            <input name="email" type="email" placeholder="Email address" />
            <input name="password" type="password" placeholder="Password" />
            <button
              disabled={status === "submitting"}
              className="disabled:bg-gray-500"
            >
              {status === "submitting" ? "Logging in..." : "Log In"}
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
}
