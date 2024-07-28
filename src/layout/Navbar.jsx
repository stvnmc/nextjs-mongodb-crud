"use client";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between p-2.5 px-5">
      <h1>logo</h1>
      <ul>
        <li>name</li>
        <li>config</li>
        <li>
          <Link href="/admin">
            <button>admint</button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
