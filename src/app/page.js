import TaskCard from "@/components/TaskCard";
import Task from "@/models/Task";
import { connectDB } from "@/utils/mongoose";

async function loadTask() {
  connectDB();
  const tasks = await Task.find();
  return tasks;
}

async function Home() {
  const tasks = await loadTask();
  return (
    <div className="grid grid-cols-3 gap-2">
      {tasks.map((task) => (
        <TaskCard task={task} key={task._id} />
      ))}
    </div>
  );
}
export default Home;
