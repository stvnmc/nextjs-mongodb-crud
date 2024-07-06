"use client";
import { userContext, useUser } from "@/context/userContext";
import { dbAuth } from "@/utils/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";

const Register = () => {
  const { signup } = useUser();

  const register = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const res = await signup(email, password);
    console.log(res);
  };

  return (
    <div className="p-5 m-5 bg-[#99856e]">
      <label>register</label>

      <form
        onSubmit={register}
        className="w-[313px] h-[200px] flex flex-col justify-around"
      >
        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder="Email"
            id="email"
            autoComplete="off"
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            autoComplete="off"
          />
        </div>
        <button>register</button>
      </form>
    </div>
  );
};

export default Register;
