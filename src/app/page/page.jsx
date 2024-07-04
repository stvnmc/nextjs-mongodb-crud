"use client";

import { useState, useEffect } from "react";

const Bet = () => {
  useEffect(() => {}, []);

  const login = async (e) => {
    e.preventDefault();
    console.log(e.target.email.value, e.target.password.value);
  };
  const register = async (e) => {
    e.preventDefault();
    console.log(e.target.email.value, e.target.password.value);
  };


  

  return (
    <div className="flex flex-wrap">
      <div className="p-5 m-5 bg-[#99856e]">
        <label>login</label>

        <form
          onSubmit={login}
          className="w-[313px] h-[200px] flex flex-col justify-around"
        >
          <div>
            <label>Email</label>
            <input type="email" placeholder="Email" autoComplete="off" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" placeholder="Password" autoComplete="off" />
          </div>
          <button>Login</button>
        </form>
      </div>

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
      <div>logout</div>
      <h1>Bets</h1>
    </div>
  );
};

export default Bet;
