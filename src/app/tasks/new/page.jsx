"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function FormPage() {
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const router = useRouter();
  const params = useParams();

  const getTask = async () => {
    if (!params.id) return;
    try {
      console.log(params.id);
      const res = await fetch(`/api/tasks/${params.id}`);
      const data = await res.json();
      setNewTask({
        title: data.title,
        description: data.description,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const createTask = async () => {
    try {
      const res = await fetch("/api/tasks", {
        method: "POST",
        body: JSON.stringify(newTask),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      if (res.status === 200) {
        router.push("/");
        router.refresh();
      }
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!params.id) {
      await createTask();
    } else {
      await updateTask();
    }
  };

  const updateTask = async () => {
    try {
      const res = await fetch(`/api/tasks/${params.id}`, {
        method: "PUT",
        body: JSON.stringify(newTask),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      console.log(data);
      router.push("/");
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      const res = await fetch(`/api/tasks/${params.id}`, { method: "DELETE" });
      console.log(res);
      router.push("/");
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTask();
  }, [params]);

  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
      <form onSubmit={handleSubmit}>
        <header className="flex justify-between">
          <h1 className="font-bold text-3xl">
            {!params.id ? "Create Task" : "Update task"}
          </h1>
          {params.id && (
            <button
              type="button"
              className="bg-red-500 px-3 py-1 rounded-md"
              onClick={handleDelete}
            >
              Delete
            </button>
          )}
        </header>
        <input
          type="text"
          value={newTask.title}
          name="title"
          placeholder="Title"
          className="bg-gray-800 border-2 w-full p-4 rounded-lg my-4"
          onChange={handleChange}
        />
        <textarea
          name="description"
          value={newTask.description}
          placeholder="Description"
          className="bg-gray-800 border-2 w-full rounded-lg my-4"
          onChange={handleChange}
        ></textarea>
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white font-bold px-4 py-2 rounded-lg"
        >
          {!params.id ? "Create" : "Update"}
        </button>
      </form>
    </div>
  );
}

export default FormPage;
