"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

function FormPage() {
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const router = useRouter();

  const createTask = async () => {
    try {
      const res = await fetch("/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      });

      const data = await res.json();
      if (res.status === 200) {
        router.push("/");
      }
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await createTask();
    console.log(res);
  };

  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="bg-gray-800 border-2 w-full p-4 rounded-lg my-4"
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          className="bg-gray-800 border-2 w-full rounded-lg my-4"
          onChange={handleChange}
        ></textarea>
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white font-bold px-4 py-2 rounded-lg"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default FormPage;
