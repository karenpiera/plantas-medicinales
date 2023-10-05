/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { global } from "styled-jsx/css";

function Navbar() {
  return (
    <nav className="bg-black border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/products">
          <h3 class="inline-block text-xl font-medium text-center rounded-full bg-danger px-8 pb-4 pt-2.5 text-medium  uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-900 hover:shadow-[0_8px_9px_-4px_rgba(420,96,200,0.3),0_4px_28px_0_rgba(420,76,100,0.2)] focus:bg-danger-800 focus:shadow-[0_8px_9px_-4px_rgba(420,76,200,0.3),0_4px_18px_0_rgba(420,76,200,0.2)]  focus:ring-0 active:bg-danger-900 active:shadow-[0_8px_9px_-4px_rgba(420,76,200,1.3),0_4px_18px_0_rgba(220,76,100,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(220,76,100,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)]">
            Plantas Medicinales
          </h3>
        </Link>

        <ul className="flex space-x-4">
          <li>
            <Link
              href="/about"
              class="inline-block rounded-full bg-primary px-6 pb-2 pt-2.5 text-sm font-medium uppercase leading-normal text-white  shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(159,313,202,1.2),0_4px_18px_0_rgba(159,313,202,1.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(159,313,202,1.2),0_4px_18px_0_rgba(159,313,202,1.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(159,313,202,1.2),0_4px_18px_0_rgba(159,313,202,1.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(159,313,202,1.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(159,313,202,1.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(159,313,202,1.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
              Nosotros
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              class="inline-block rounded-full bg-warning px-6 pb-2 pt-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#e4a11b] transition duration-150 ease-in-out hover:bg-warning-600 hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(328,261,47,1.2)] focus:bg-warning-600 focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(328,261,47,1.2)] focus:outline-none focus:ring-0 active:bg-warning-700 active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(328,261,47,1.2)] dark:shadow-[0_4px_9px_-4px_rgba(228,161,27,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(328,261,47,1.2),0_4px_18px_0_rgba(228,161,27,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(328,261,47,1.2),0_4px_18px_0_rgba(228,161,27,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(328,261,47,1.2),0_4px_18px_0_rgba(228,161,27,0.1)]">
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
          <button className="bg-blue-500 hover:bg-blue-800 text-white px-3 py-1 rounded-md">
            Buscar
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
