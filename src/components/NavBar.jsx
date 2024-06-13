import Link from "next/link";

function NavBar() {
  return (
    <nav className="bg-gray-950 py-5 mb-2">
      <div className="container flex justify-between px-10 md:px-0 mx-auto">
        <Link href="/">
          <h1 className="text-2xl flex justify-between">Next Mongo</h1>
        </Link>
        <ul className="flex gap-x-4">
          <li>
            <Link href="/tasks/new">New Task</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default NavBar;
