import React from "react";
import { RiDashboardFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { BsHouse } from "react-icons/bs";
import { RiLogoutBoxRLine } from "react-icons/ri";

export default function Layout() {
  return (
    <div className="min-h-screen grid grid-cols-8">
      <div className="col-span-1 p-8">
        <div className="text-center p-8">
          <h1 className="uppercase font-bold tracking-[4px]"> tu logo</h1>
        </div>
        {/* menu */}
        <div className=" h-[93%] flex flex-col justify-between">
        <nav>
          <ul>
            <li>
              <Link
                to={"/"}
                className="flex items-center gap-4 p-4 text-gray-500 hover:bg-purple-600 hover:text-white rounded-lg transition-colors font-semibold"
              >
                <BsHouse />
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to={"/"}
                className="flex items-center gap-2 p-4 text-gray-500 hover:bg-purple-600 hover:text-white rounded-lg transition-colors font-semibold"
              >
                <RiDashboardFill />
                Templates
              </Link>
            </li>
          </ul>
        </nav>
        {/* image and logout */}
        <div className="flex flex-col gap-4">
          <img src="img_menu.svg" alt="image" />
          <Link
            to={"/"}
            className="flex items-center  gap-2 p-4 text-gray-500 hover:bg-purple-600 hover:text-white rounded-lg transition-colors font-semibold"
          >
            <RiLogoutBoxRLine />
            Logout
          </Link>
        </div>
        </div>
        
      </div>
      <div className="col-span-5">hola2</div>
    </div>
  );
}
