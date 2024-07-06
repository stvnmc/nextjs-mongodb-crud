"use client";
import { dbAuth } from "@/utils/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  
  const login = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const res = await signInWithEmailAndPassword(dbAuth, email, password);
    console.log(res);
  };

  return (
    <div className="p-5 m-5 bg-[#99856e]">
      <label>login</label>

      <form
        onSubmit={login}
        className="w-[313px] h-[200px] flex flex-col justify-around"
      >
        <div>
          <label>Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            autoComplete="off"
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            autoComplete="off"
          />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
