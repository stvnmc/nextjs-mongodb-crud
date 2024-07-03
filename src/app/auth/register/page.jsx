"use client";
import { useUser } from "@/context/userContext";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signup } = useUser();

  const router = useRouter();

  const loginFuntion = async (e) => {
    e.preventDefault();
    const res = await signup(email, password);
    if (res) router.push("/bet");
  };

  return (
    <form onSubmit={loginFuntion} className="df-c">
      <h1>register</h1>
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
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
