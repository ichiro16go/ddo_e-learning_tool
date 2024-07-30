import { Link } from "@remix-run/react";

export default function User() {
  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl">UserPage</h1>
      <ul className="list-disc mt-4 pl-6 space-y-2">
        <li>
          <Link
            to="/"
            className="text-blue-700 underline visited:text-purple-900"
          >
            home page
          </Link>
        </li>
        <li>
          <Link
            to="/columnPage"
            className="text-blue-700 underline visited:text-purple-900"
          >
            column page
          </Link>
        </li>
      </ul>
    </div>
  );
}
