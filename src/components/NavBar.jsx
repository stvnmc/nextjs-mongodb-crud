"use client";

import { useUser } from "@/context/userContext";
import { dbAuth } from "@/utils/config";
import { onAuthStateChanged } from "firebase/auth";
import Link from "next/link";
import { useEffect, useState } from "react";

function NavBar() {
  const { user, logout } = useUser();

  return (
    <nav className="bg-custom-gray py-5 mb-2">
      <div className="container flex justify-between px-10 md:px-0 mx-auto">
        <Link href="/">
          <h1 className="text-2xl flex justify-between">Next Mongo</h1>
        </Link>
        <ul className="flex gap-x-4">
          <li>{user}</li>

          <li>
            {user !== "welcome" ? (
              <h2 onClick={logout}>logout</h2>
            ) : (
              <>
                <h2>
                  <Link href="/auth/login">Login</Link>
                </h2>
                <h2>
                  <Link href="/auth/register">Resgister</Link>
                </h2>
              </>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default NavBar;
