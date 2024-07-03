"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/userContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const { signin } = useUser();

  const loginFuntion = async (e) => {
    e.preventDefault();

    const res = await signin(email, password);

    router.push("/bet");
    if (res) router.push("/bet");
  };

  return (
    <form onSubmit={loginFuntion} className="df-c">
      <h1>Login</h1>
      <div>
        <label>Email</label>
        <input
          type="email"
          placeholder="Email"
          id="email"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          autoComplete="off"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
