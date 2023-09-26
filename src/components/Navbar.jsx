/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/">
          <h3 className="text-3xl text-black font-semibold">
            Plantas Medicinales
          </h3>
        </Link>

        <ul className="flex space-x-4">
          <li>
            <Link
              href="/about"
              className="text-black hover:text-blue-300 transition duration-300">
              Nosotros
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="text-black hover:text-blue-300 transition duration-300">
              Inicio
            </Link>
          </li>
        </ul>

        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Buscar..."
            className="px-2 py-1 rounded-md border border-gray-300 focus:outline-none"
          />
          <button className="bg-blue-300 hover:bg-blue-400 text-white px-3 py-1 rounded-md">
            Buscar
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
